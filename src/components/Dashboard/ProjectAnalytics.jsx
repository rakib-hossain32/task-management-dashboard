import React from 'react';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const barData = [
    { height: 45, active: false },
    { height: 68, active: false },
    { height: 78, active: true, label: '74%' },
    { height: 55, active: false },
    { height: 85, active: false },
    { height: 50, active: false },
    { height: 38, active: false },
];

const Bar = ({ height, active, label, day }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="relative flex items-end" style={{ height: '120px' }}>
            {active && label && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-text-primary bg-white border border-border px-1.5 py-0.5 rounded-md shadow-sm whitespace-nowrap">
                    {label}
                </span>
            )}
            <div
                className={`w-full max-w-[32px] min-w-[12px] rounded-full transition-all duration-500 ${active ? 'bg-brand' : 'bg-border'
                    }`}
                style={{ height: `${height}%` }}
            />
        </div>
        <span className="text-[11px] text-text-muted font-medium">{day}</span>
    </div>
);

const ProjectAnalytics = () => {
    return (
        <div className="bg-white rounded-2xl p-5 border border-border hover:shadow-md transition-shadow">
            <h2 className="text-base font-bold text-text-primary mb-6">Project Analytics</h2>
            <div className="flex items-end justify-between gap-2 px-2">
                {barData.map((bar, i) => (
                    <Bar key={i} {...bar} day={days[i]} />
                ))}
            </div>
        </div>
    );
};

export default ProjectAnalytics;
