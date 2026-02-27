import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';

const projects = [
    { name: 'Develop API Endpoints', due: 'Nov 26, 2024', color: '#5B73F5' },
    { name: 'Onboarding Flow', due: 'Nov 28, 2024', color: '#F4B400' },
    { name: 'Build Dashboard', due: 'Nov 30, 2024', color: '#2E8B57' },
    { name: 'Optimize Page Load', due: 'Dec 5, 2024', color: '#E53935' },
    { name: 'Cross-Browser Testing', due: 'Dec 6, 2024', color: '#9C27B0' },
];

const ProjectList = () => {
    return (
        <div className="bg-white rounded-2xl p-5 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-text-primary">Project</h2>
                <button className="flex items-center gap-1 text-xs font-semibold text-text-secondary border border-border rounded-full px-3.5 py-1.5 hover:border-brand hover:text-brand transition-colors cursor-pointer">
                    <Plus size={13} />
                    New
                </button>
            </div>

            <div className="space-y-3">
                {projects.map(({ name, due, color }) => (
                    <div
                        key={name}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-bg-main transition-colors group cursor-pointer"
                    >
                        {/* Color dot avatar */}
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: color + '22' }}
                        >
                            <div className="w-3 h-3 rounded-sm" style={{ background: color }} />
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-text-primary truncate group-hover:text-brand transition-colors">
                                {name}
                            </p>
                            <p className="text-[11px] text-text-muted">Due date: {due}</p>
                        </div>
                        <ArrowUpRight size={14} className="text-border group-hover:text-brand transition-colors shrink-0" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
