import React from 'react';
import { Plus, UserCheck, Clock, AlertCircle } from 'lucide-react';

const COLORS = ['#E53935', '#2E8B57', '#667085', '#F4B400', '#1E6F4C', '#5B73F5'];

const statusStyle = {
    'active': 'bg-green-50 text-green-700',
    'inactive': 'bg-gray-100 text-gray-500',
};

const statusLabel = {
    'active': 'Active',
    'inactive': 'Inactive',
};

const getInitials = (name = '') =>
    name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

// Fallback static data if API data is not available
const fallbackMembers = [
    { id: 1, name: 'Alexandra Deff', email: 'alex@example.com', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Edwin Adenike', email: 'ed@example.com', status: 'active', joinDate: '2024-02-20' },
    { id: 3, name: 'Isaac Oluwatemilorun', email: 'isaac@example.com', status: 'inactive', joinDate: '2024-01-10' },
    { id: 4, name: 'David Oshodi', email: 'david@example.com', status: 'active', joinDate: '2024-03-05' },
];

const TeamCollaboration = ({ users }) => {
    const members = users || fallbackMembers;
    const displayMembers = members.slice(0, 5);

    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow h-full">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-[#0D1611]">Team Members</h2>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-secondary border border-gray-200 rounded-full px-3.5 py-1.5 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    <Plus size={13} />
                    Add Member
                </button>
            </div>

            <div className="space-y-3.5">
                {displayMembers.map(({ id, name, email, status, joinDate }, idx) => (
                    <div key={id} className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ring-2 ring-white shadow-sm"
                            style={{ background: COLORS[idx % COLORS.length] }}
                        >
                            {getInitials(name)}
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-[#0D1611] truncate">{name}</p>
                            <p className="text-[11px] text-secondary truncate flex items-center gap-1">
                                <Clock size={10} />
                                Joined {new Date(joinDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                        {/* Status Badge */}
                        <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${statusStyle[status] || 'bg-gray-100 text-gray-500'}`}>
                            <UserCheck size={10} />
                            {statusLabel[status] || status}
                        </span>
                    </div>
                ))}
            </div>

            {members.length > 5 && (
                <button className="mt-4 w-full text-center text-xs font-semibold text-secondary hover:text-primary transition-colors py-2 border-t border-gray-50">
                    +{members.length - 5} more members
                </button>
            )}
        </div>
    );
};

export default TeamCollaboration;
