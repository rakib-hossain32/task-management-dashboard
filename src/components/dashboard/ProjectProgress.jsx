import React from 'react';

/**
 * ProjectProgress Component
 * Visualizes overall progress using a semi-circular gauge model and custom legend.
 */
const ProjectProgress = () => {
    // Current Progress percentage configuration
    const completionRate = 41;
    const progressR = 75;
    const progressCX = 100;
    const progressCY = 100;

    // SVG geometry helpers
    const getCartesian = (cx, cy, r, degrees) => {
        const radians = ((degrees - 180) * Math.PI) / 180;
        return {
            x: cx + r * Math.cos(radians),
            y: cy + r * Math.sin(radians),
        };
    };

    const getArcPath = (cx, cy, r, startDeg, endDeg) => {
        const start = getCartesian(cx, cy, r, endDeg);
        const end = getCartesian(cx, cy, r, startDeg);
        const largeArc = endDeg - startDeg > 180 ? 1 : 0;
        return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
    };

    // Calculate arc endings based on percentages
    const completedEnd = 180 * (completionRate / 100);
    const inProgressEnd = completedEnd + 180 * 0.35; // Example: next 35% in progress

    return (
        <div className="bg-white rounded-[32px] p-6 border border-gray-100/50 hover:shadow-md transition-shadow flex flex-col items-center w-full h-full">
            <h2 className="text-[18px] font-bold text-[#0D1611] w-full text-left mb-4">Project Progress</h2>

            <div className="flex-1 flex flex-col items-center justify-center -mt-6">
                {/* GAUGE: Semicircular progress visual with layered paths */}
                <div className="relative w-[240px] h-[130px] flex justify-center">
                    <svg width="200" height="110" viewBox="0 0 200 110" className="overflow-visible">
                        <defs>
                            {/* Texture pattern for 'Pending' tasks */}
                            <pattern id="pendingTexture" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                                <line x1="0" y1="0" x2="0" y2="10" stroke="#D1D5DB" strokeWidth="6" />
                            </pattern>
                        </defs>

                        {/* Background Path (Full pending state) */}
                        <path d={getArcPath(progressCX, progressCY, progressR, 0, 180)} fill="none" stroke="url(#pendingTexture)" strokeWidth="24" />
                        <path d={getArcPath(progressCX, progressCY, progressR, 0, 180)} fill="none" stroke="#E5E7EB" strokeWidth="24" opacity="0.4" />

                        {/* In Progress Arc (Light Green Variant) */}
                        <path d={getArcPath(progressCX, progressCY, progressR, completedEnd, Math.min(inProgressEnd, 180))} fill="none" stroke="#66C692" strokeWidth="24" />

                        {/* Completed Arc (Deep Green Variant) */}
                        <path d={getArcPath(progressCX, progressCY, progressR, 0, completedEnd)} fill="none" stroke="#2D845B" strokeWidth="24" />
                    </svg>

                    {/* Progress Metric: Center overlapping text */}
                    <div className="absolute bottom-2 text-center group">
                        <h3 className="text-[48px] font-black text-[#0D1611] leading-none mb-1 tabular-nums group-hover:scale-105 transition-transform">
                            {completionRate}%
                        </h3>
                        <p className="text-[13px] font-bold text-gray-500">Project Ended</p>
                    </div>
                </div>

                {/* VISUAL LEGEND: Simple dot indicators for chart interpretation */}
                <div className="flex items-center gap-6 mt-8">
                    <LegendItem color="#2D845B" label="Completed" />
                    <LegendItem color="#66C692" label="In Progress" />
                    <LegendItem type="pattern" label="Pending" />
                </div>
            </div>
        </div>
    );
};

// --- Sub-component for Legend Items to reduce duplication ---
const LegendItem = ({ color, label, type }) => (
    <div className="flex items-center gap-2">
        {type === 'pattern' ? (
            <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-gray-200 overflow-hidden relative">
                {/* SVG for patterned dot */}
                <svg className="w-full h-full" viewBox="0 0 10 10">
                    <line x1="0" y1="10" x2="10" y2="0" stroke="#9CA3AF" strokeWidth="2" />
                    <line x1="0" y1="5" x2="5" y2="0" stroke="#9CA3AF" strokeWidth="2" />
                    <line x1="5" y1="10" x2="10" y2="5" stroke="#9CA3AF" strokeWidth="2" />
                </svg>
            </div>
        ) : (
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
        )}
        <span className="text-[12px] font-bold text-gray-400">{label}</span>
    </div>
);

export default ProjectProgress;
