import React from 'react';
import { Plus } from 'lucide-react';
import StatsCards from '../../components/dashboard/StatsCards';
import ProjectAnalytics from '../../components/dashboard/ProjectAnalytics';
import Reminders from '../../components/dashboard/Reminders';
import TeamCollaboration from '../../components/dashboard/TeamCollaboration';
import ProjectProgress from '../../components/dashboard/ProjectProgress';
import ProjectList from '../../components/dashboard/ProjectList';
import TimeTracker from '../../components/dashboard/TimeTracker';

const DashboardOverview = () => {
    return (
        <>
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-black text-[#0D1611] leading-tight mb-2 tracking-tight">
                        Dashboard
                    </h1>
                    <p className="text-[15px] text-secondary font-medium">Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 bg-[#064E3B] hover:bg-primary text-white text-[15px] font-bold px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-xl shadow-primary/10 active:scale-95 group">
                        <Plus size={20} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
                        <span className="whitespace-nowrap">Add Project</span>
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 border-2 border-primary/20 bg-white hover:border-primary hover:text-primary text-[15px] font-bold text-primary px-7 py-3.5 rounded-full transition-all cursor-pointer active:scale-95 shadow-sm">
                        <span className="whitespace-nowrap">Import Data</span>
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="mb-8">
                <StatsCards />
            </div>

            {/* Middle Row: Analytics + Reminders */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
                <div className="xl:col-span-2">
                    <ProjectAnalytics />
                </div>
                <div className="h-full">
                    <Reminders />
                </div>
            </div>

            {/* Bottom Row: Team + Progress + Right Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Team Collaboration */}
                <div className="h-full">
                    <TeamCollaboration />
                </div>

                {/* Project Progress */}
                <div className="h-full">
                    <ProjectProgress />
                </div>

                {/* Right Column: Project List + Time Tracker */}
                <div className="flex flex-col gap-8 md:col-span-2 xl:col-span-1">
                    <ProjectList />
                    <TimeTracker />
                </div>
            </div>
        </>
    );
};

export default DashboardOverview;
