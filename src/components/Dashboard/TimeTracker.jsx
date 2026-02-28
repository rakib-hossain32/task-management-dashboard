import React, { useState, useEffect, useRef } from 'react';
import { Pause, Square } from 'lucide-react';

/**
 * TimeTracker Component
 * Provides real-time event tracking with a premium wavy background theme.
 */
const TimeTracker = () => {
    // Timer state management (seconds since session start)
    const [running, setRunning] = useState(true);
    const [elapsed, setElapsed] = useState(5048); // Initialized to 01:24:08
    const intervalHandle = useRef(null);

    // Dynamic timer effect logic
    useEffect(() => {
        if (running) {
            intervalHandle.current = setInterval(() => {
                setElapsed(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalHandle.current);
        }
        return () => clearInterval(intervalHandle.current);
    }, [running]);

    // Time Formatting Utility: Converts total seconds into HH:MM:SS format
    const formatTime = (totalSecs) => {
        const h = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
        const m = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
        const s = String(totalSecs % 60).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <div className="bg-[#0D3D29] rounded-[32px] p-8 relative overflow-hidden shadow-2xl h-full">
            {/* BACKGROUND PATTERN: Premium ellipses effect matching the design reference */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                    <ellipse cx="220" cy="220" rx="180" ry="140" stroke="white" strokeWidth="1" fill="none" opacity="0.8" />
                    <ellipse cx="220" cy="220" rx="160" ry="120" stroke="white" strokeWidth="1" fill="none" opacity="0.7" />
                    <ellipse cx="220" cy="220" rx="140" ry="100" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
                    <ellipse cx="220" cy="220" rx="120" ry="80" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
                    <ellipse cx="220" cy="220" rx="100" ry="60" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
                </svg>
            </div>

            {/* Subtle radial glow to give depth to the dark green background */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

            {/* INTERACTIVE UI: Timer display and localized control buttons */}
            <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-[15px] font-bold text-white/70 w-full text-left mb-6">Time Tracker</h3>

                {/* Big, bold digital display showing current tracking state */}
                <p className="text-[52px] font-black text-white tracking-widest leading-none mb-8 tabular-nums">
                    {formatTime(elapsed)}
                </p>

                {/* CONTROL ACTION BAR */}
                <div className="flex gap-4">
                    {/* Primary Toggle: Pause/Play Action */}
                    <button
                        onClick={() => setRunning(!running)}
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#0D3D29] hover:bg-white/90 transition-all active:scale-90 shadow-lg shadow-black/20"
                        title={running ? 'Pause Tracking' : 'Resume Tracking'}
                    >
                        {running ? <Pause size={24} fill="currentColor" strokeWidth={0} /> : <div className="ml-1 w-0 h-0 border-y-8 border-y-transparent border-l-14 border-l-currentColor" />}
                    </button>

                    {/* Secondary Stop: Red Alert Style */}
                    <button
                        onClick={() => { setRunning(false); setElapsed(0); }}
                        className="w-14 h-14 rounded-full bg-[#E53935] flex items-center justify-center text-white hover:bg-[#D32F2F] transition-all active:scale-90 shadow-lg shadow-black/20"
                        title="Reset/Stop Timer"
                    >
                        <Square size={20} fill="currentColor" strokeWidth={0} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimeTracker;
