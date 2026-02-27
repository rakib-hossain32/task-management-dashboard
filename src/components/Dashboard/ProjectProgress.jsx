import React from 'react';

const percentage = 41;
const radius = 52;
const circumference = 2 * Math.PI * radius;
const offset = circumference - (percentage / 100) * circumference;

const ProjectProgress = () => {
    return (
        <div className="bg-white rounded-2xl p-5 border border-border hover:shadow-md transition-shadow">
            <h2 className="text-base font-bold text-text-primary mb-4">Project Progress</h2>

            <div className="flex flex-col items-center gap-4">
                {/* Donut Chart */}
                <div className="relative w-36 h-36">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                        {/* Track */}
                        <circle
                            cx="60" cy="60" r={radius}
                            fill="none"
                            stroke="var(--color-border)"
                            strokeWidth="14"
                            strokeDasharray={`${circumference * 0.6} ${circumference * 0.4}`}
                            strokeDashoffset="0"
                            strokeLinecap="round"
                        />
                        {/* Progress */}
                        <circle
                            cx="60" cy="60" r={radius}
                            fill="none"
                            stroke="var(--color-brand-dark)"
                            strokeWidth="14"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            className="transition-all duration-1000"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-extrabold text-text-primary">{percentage}%</span>
                        <span className="text-[10px] font-medium text-text-muted">Project Ended</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-5 text-[11px] font-medium text-text-secondary">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-dark" />
                        Completed
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-light" />
                        In Progress
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-2.5 rounded-sm border-2 border-text-muted border-dashed" />
                        Pending
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;
