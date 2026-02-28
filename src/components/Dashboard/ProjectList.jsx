import React from 'react';
import { Plus } from 'lucide-react';

/**
 * Project Configuration
 * Contains real-time project items and their unique icons.
 */
const PROJECT_LIST = [
    {
        id: 1,
        name: 'Develop API Endpoints',
        date: 'Nov 26, 2024',
        icon: (color) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-600">
                <path d="M16 4L8 12L16 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 2,
        name: 'Onboarding Flow',
        date: 'Nov 28, 2024',
        icon: (color) => (
            <div className="w-4 h-4 rounded-full border-[3px] border-teal-500 bg-teal-50" />
        )
    },
    {
        id: 3,
        name: 'Build Dashboard',
        date: 'Nov 30, 2024',
        icon: (color) => (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12 4L6 14H18L12 4Z" fill="#F4B400" />
                <path d="M12 20L6 10H18L12 20Z" fill="#2E8B57" />
            </svg>
        )
    },
    {
        id: 4,
        name: 'Optimize Page Load',
        date: 'Dec 5, 2024',
        icon: (color) => (
            <div className="w-4 h-4 rounded-[4px] rotate-45 border-[3px] border-orange-400 bg-orange-50" />
        )
    },
    {
        id: 5,
        name: 'Cross-Browser Testing',
        date: 'Dec 6, 2024',
        icon: (color) => (
            <div className="flex gap-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-orange-600" />
            </div>
        )
    }
];

const ProjectList = () => {
    return (
        <div className="bg-white rounded-[32px] p-8 border border-gray-100/50 hover:shadow-md transition-shadow h-full">
            <header className="flex items-center justify-between mb-8">
                <h2 className="text-[18px] font-bold text-[#0D1611]">Project</h2>
                <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 border border-gray-300 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-all cursor-pointer active:scale-95 group">
                    <Plus size={14} strokeWidth={3} className="text-gray-400 group-hover:text-primary transition-colors" />
                    New
                </button>
            </header>

            {/* VERTICAL LIST: Individual Project Items */}
            <div className="space-y-6">
                {PROJECT_LIST.map((project) => (
                    <div key={project.id} className="flex items-center gap-4 group cursor-pointer">
                        {/* Custom Graphic/Icon based on project type */}
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all border border-gray-50/50">
                            <div className="w-6 h-6 flex items-center justify-center">
                                {project.icon()}
                            </div>
                        </div>

                        {/* Project Name and Meta Metadata */}
                        <div className="flex-1 min-w-0">
                            <h4 className="text-[15px] font-bold text-[#0D1611] leading-none mb-1.5 group-hover:text-primary transition-colors">
                                {project.name}
                            </h4>
                            <p className="text-[12px] text-gray-400 font-medium">
                                Due date: {project.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
