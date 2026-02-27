import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleMinimize = () => setIsMinimized(!isMinimized);

    return (
        <div className="flex h-screen bg-[#f5f5f5] overflow-hidden font-sans relative text-primary selection:bg-primary selection:text-white">
            {/* Sidebar - Fixed/Sticky on large screens */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                isMinimized={isMinimized}
                onToggleMinimize={toggleMinimize}
            />

            {/* Main Wrapper */}
            <div className="flex-1 flex flex-col overflow-hidden w-full relative">
                {/* TopBar - Fixed at top of main area */}
                <TopBar onMenuClick={toggleSidebar} />

                {/* Content Area - Scrollable */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8 md:p-10 scroll-smooth">
                    {/* Centered container for better readability on large screens */}
                    <div className="max-w-[1600px] mx-auto">
                        <Outlet />
                    </div>

                    {/* Add a subtle footer or padding at the bottom for aesthetic */}
                    <div className="h-10 shrink-0" />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;