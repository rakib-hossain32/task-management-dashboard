import React from 'react';
import { Plus } from 'lucide-react';

/**
 * Team Integration Configuration
 * Maps team members to their active tasks and status indicators.
 */
const TEAM_USERS = [
    {
        id: 1,
        name: 'Alexandra Deff',
        task: 'Working on Github Project Repository',
        status: 'Completed',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Annie'
    },
    {
        id: 2,
        name: 'Edwin Adenike',
        task: 'Working on Integrate User Authentication System',
        status: 'In Progress',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eden'
    },
    {
        id: 3,
        name: 'Isaac Oluwatemilorun',
        task: 'Working on Develop Search and Filter Functionality',
        status: 'Pending',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Idan'
    },
    {
        id: 4,
        name: 'David Oshodi',
        task: 'Working on Responsive Layout for Homepage',
        status: 'In Progress',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dave'
    },
];

const TeamCollaboration = () => {
    return (
        <div className="bg-white rounded-[32px] p-6 border border-gray-100/50 hover:shadow-md transition-shadow h-full">
            <header className="flex items-center justify-between mb-6">
                <h2 className="text-[18px] font-bold text-[#0D1611]">Team Collaboration</h2>
                <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 border border-gray-300 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-all cursor-pointer active:scale-95 group">
                    <Plus size={14} strokeWidth={3} className="text-gray-400 group-hover:text-primary transition-colors" />
                    Add Member
                </button>
            </header>

            {/* TEAM FEED: List of collaborative team members */}
            <div className="space-y-6">
                {TEAM_USERS.map((member) => (
                    <div key={member.id} className="flex items-center justify-between group">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                            {/* Visual Avatar with seed-based artwork */}
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 border-2 border-white shadow-sm shrink-0">
                                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Member Details: Name and Active Task */}
                            <div className="min-w-0 pr-4">
                                <h4 className="text-[15px] font-bold text-[#0D1611] leading-none mb-1.5 group-hover:text-primary">
                                    {member.name}
                                </h4>
                                <p className="text-[12px] text-gray-400 font-medium truncate">
                                    {member.task}
                                </p>
                            </div>
                        </div>

                        {/* STATUS LABEL: Modern badges with variant-based styling */}
                        <div className="shrink-0 flex justify-end">
                            <StatusBadge status={member.status} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Helper for rendering status badges ---
const StatusBadge = ({ status }) => {
    // Config for status colors with human names
    const statusMap = {
        'Completed': 'bg-[#F0FDF4] text-green-700 border-green-100',
        'In Progress': 'bg-[#FFFBEB] text-yellow-600 border-yellow-100',
        'Pending': 'bg-[#FFF1F2] text-red-500 border-red-100'
    };

    return (
        <span className={`px-2.5 py-1 text-[11px] font-bold rounded-md border text-center min-w-[85px] transition-all capitalize ${statusMap[status] || 'bg-gray-50 text-gray-500'}`}>
            {status}
        </span>
    );
};

export default TeamCollaboration;
