import React from 'react';
import { Plus, Upload } from 'lucide-react';
import TopBar from '../../components/Dashboard/TopBar';
import Sidebar from '../../components/Dashboard/Sidebar';
import StatsCards from '../../components/Dashboard/StatsCards';
import ProjectAnalytics from '../../components/Dashboard/ProjectAnalytics';
import Reminders from '../../components/Dashboard/Reminders';
import TeamCollaboration from '../../components/Dashboard/TeamCollaboration';
import ProjectProgress from '../../components/Dashboard/ProjectProgress';
import ProjectList from '../../components/Dashboard/ProjectList';
import TimeTracker from '../../components/Dashboard/TimeTracker';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isMinimized, setIsMinimized] = React.useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleMinimize = () => setIsMinimized(!isMinimized);

    return (
        <div className="flex h-screen bg-bg-main overflow-hidden font-sans relative">
            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                isMinimized={isMinimized}
                onToggleMinimize={toggleMinimize}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden w-full">
                <TopBar onMenuClick={toggleSidebar} />

                {/* Scrollable content area */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6">
                    {/* Page Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight mb-1">
                                Dashboard
                            </h1>
                            <p className="text-sm text-text-secondary">Plan, prioritize, and accomplish your tasks with ease.</p>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand text-white text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm shadow-brand-dark/30 active:scale-95">
                                <Plus size={16} />
                                <span className="whitespace-nowrap">Add Project</span>
                            </button>
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-border bg-white hover:border-brand hover:text-brand text-sm font-semibold text-text-secondary px-4 sm:px-5 py-2.5 rounded-xl transition-all cursor-pointer active:scale-95">
                                <Upload size={15} />
                                <span className="whitespace-nowrap">Import Data</span>
                            </button>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mb-6">
                        <StatsCards />
                    </div>

                    {/* Middle Row: Analytics + Reminders */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
                        <div className="xl:col-span-2">
                            <ProjectAnalytics />
                        </div>
                        <div className="h-full">
                            <Reminders />
                        </div>
                    </div>

                    {/* Bottom Row: Team + Progress + Right Column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
                        {/* Team Collaboration */}
                        <div className="h-full">
                            <TeamCollaboration />
                        </div>

                        {/* Project Progress */}
                        <div className="h-full">
                            <ProjectProgress />
                        </div>

                        {/* Right Column: Project List + Time Tracker */}
                        <div className="flex flex-col gap-6 md:col-span-2 xl:col-span-1">
                            <ProjectList />
                            <TimeTracker />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;