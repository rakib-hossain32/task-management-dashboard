import React, { useState, useEffect, useRef } from 'react';
import { Pause, Square } from 'lucide-react';

const TimeTracker = () => {
    const [running, setRunning] = useState(true);
    const [seconds, setSeconds] = useState(5048); // 01:24:08
    const intervalRef = useRef(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setSeconds((s) => s + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [running]);

    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');

    return (
        <div className="bg-[#0D1F14] rounded-2xl p-5 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-36 h-36 bg-brand/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-brand-light/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
                <h2 className="text-sm font-bold text-white/80 mb-4">Time Tracker</h2>

                <p className="text-4xl font-extrabold text-white tracking-widest text-center mb-5 tabular-nums">
                    {hrs}:{mins}:{secs}
                </p>

                <div className="flex justify-center gap-3">
                    <button
                        onClick={() => setRunning((r) => !r)}
                        className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
                        title={running ? 'Pause' : 'Resume'}
                    >
                        <Pause size={17} />
                    </button>
                    <button
                        onClick={() => { setRunning(false); setSeconds(0); }}
                        className="w-10 h-10 rounded-full bg-danger/80 hover:bg-danger flex items-center justify-center text-white transition-colors cursor-pointer"
                        title="Stop"
                    >
                        <Square size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimeTracker;
