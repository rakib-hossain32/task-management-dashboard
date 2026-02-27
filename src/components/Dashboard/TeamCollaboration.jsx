import React from 'react';
import { Plus } from 'lucide-react';

const members = [
    {
        name: 'Alexandra Deff',
        task: 'Github Project Repository',
        status: 'Completed',
        initials: 'AD',
        color: '#E53935', // Keep specific user colors or use status colors
    },
    {
        name: 'Edwin Adenike',
        task: 'Integrate User Authentication System',
        status: 'In Progress',
        initials: 'EA',
        color: '#2E8B57',
    },
    {
        name: 'Isaac Oluwatemilorun',
        task: 'Develop Search and Filter Functionality',
        status: 'Pending',
        initials: 'IO',
        color: '#667085',
    },
    {
        name: 'David Oshodi',
        task: 'Responsive Layout for Homepage',
        status: 'In Progress',
        initials: 'DO',
        color: '#F4B400',
    },
];

const statusStyle = {
    'Completed': 'bg-brand-soft text-brand-dark',
    'In Progress': 'bg-[#FFF3E0] text-[#E65100]',
    'Pending': 'bg-bg-main text-text-secondary',
};

const TeamCollaboration = () => {
    return (
        <div className="bg-white rounded-2xl p-5 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-text-primary">Team Collaboration</h2>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary border border-border rounded-full px-3.5 py-1.5 hover:border-brand hover:text-brand transition-colors cursor-pointer">
                    <Plus size={13} />
                    Add Member
                </button>
            </div>

            <div className="space-y-4">
                {members.map(({ name, task, status, initials, color }) => (
                    <div key={name} className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ring-2 ring-white shadow-sm"
                            style={{ background: color }}
                        >
                            {initials}
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-text-primary truncate">{name}</p>
                            <p className="text-[11px] text-text-muted truncate">
                                Working on <span className="text-text-secondary font-medium">{task}</span>
                            </p>
                        </div>
                        {/* Badge */}
                        <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full ${statusStyle[status]}`}>
                            {status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCollaboration;
