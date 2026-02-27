import React from 'react';

const percentage = 41;
// Half-donut: we use a semicircle approach
const r = 68;
const cx = 90;
const cy = 90;
const circumference = Math.PI * r; // half circle = π*r

// Diagonal stripe pattern for "pending" arc section
const arcOffset = circumference - (percentage / 100) * circumference;

// Helper: polar to cartesian
const polarToCartesian = (cx, cy, r, angleDeg) => {
    const rad = ((angleDeg - 180) * Math.PI) / 180;
    return {
        x: cx + r * Math.cos(rad),
        y: cy + r * Math.sin(rad),
    };
};

// Describe an arc from startAngle to endAngle (degrees 0=left, 180=right)
const describeArc = (cx, cy, r, startAngle, endAngle) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
};

const ProjectProgress = () => {
    const completedEnd = 180 * (percentage / 100); // 0 to 180 degrees
    const inProgressEnd = completedEnd + 180 * 0.30; // next ~30%
    // rest is pending

    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
            <h2 className="text-base font-bold text-[#0D1611] mb-4">Project Progress</h2>

            <div className="flex flex-col items-center gap-4 flex-1 justify-center">
                {/* Half-Donut Gauge */}
                <div className="relative" style={{ width: 180, height: 100 }}>
                    <svg width="180" height="100" viewBox="0 0 180 100" overflow="visible">
                        <defs>
                            {/* Diagonal stripe for pending */}
                            <pattern id="pendingStripe" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                                <line x1="0" y1="0" x2="0" y2="8" stroke="#d1d5db" strokeWidth="4" />
                            </pattern>
                            <clipPath id="gaugeClip">
                                {/* Only show upper half (semicircle) */}
                                <rect x="0" y="0" width="180" height="100" />
                            </clipPath>
                        </defs>

                        {/* BG track (full half arc — pending stripe) */}
                        <path
                            d={describeArc(90, 90, r, 0, 180)}
                            fill="none"
                            stroke="url(#pendingStripe)"
                            strokeWidth={18}
                            strokeLinecap="butt"
                            clipPath="url(#gaugeClip)"
                        />
                        {/* Pending outline */}
                        <path
                            d={describeArc(90, 90, r, 0, 180)}
                            fill="none"
                            stroke="#d1d5db"
                            strokeWidth={18}
                            strokeLinecap="butt"
                            strokeDasharray="4 4"
                            clipPath="url(#gaugeClip)"
                            opacity={0.5}
                        />

                        {/* In Progress arc (lighter green) */}
                        <path
                            d={describeArc(90, 90, r, completedEnd, Math.min(inProgressEnd, 180))}
                            fill="none"
                            stroke="#4CAF7D"
                            strokeWidth={18}
                            strokeLinecap="butt"
                            clipPath="url(#gaugeClip)"
                        />

                        {/* Completed arc (dark green) */}
                        <path
                            d={describeArc(90, 90, r, 0, completedEnd)}
                            fill="none"
                            stroke="#064E3B"
                            strokeWidth={18}
                            strokeLinecap="butt"
                            clipPath="url(#gaugeClip)"
                        />

                        {/* Round caps at start and end */}
                        <circle cx={polarToCartesian(90, 90, r, 0).x} cy={polarToCartesian(90, 90, r, 0).y} r={9} fill="#064E3B" />
                        <circle cx={polarToCartesian(90, 90, r, 180).x} cy={polarToCartesian(90, 90, r, 180).y} r={9} fill="#d1d5db" />
                    </svg>

                    {/* Center text */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-1">
                        <p className="text-3xl font-extrabold text-[#0D1611] leading-none">{percentage}%</p>
                        <p className="text-[10px] font-semibold text-secondary mt-0.5">Project Ended</p>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-4 text-[11px] font-semibold text-secondary flex-wrap">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#064E3B]" />
                        Completed
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                        In Progress
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-2.5 rounded-sm border-2 border-dashed border-gray-300 bg-gray-50" />
                        Pending
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;
