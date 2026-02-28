import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    CheckSquare,
    Calendar,
    BarChart2,
    Users,
    Settings,
    HelpCircle,
    LogOut,
    X,
    ChevronLeft,
    Menu
} from 'lucide-react';

/**
 * Navigation Configuration
 * Grouped by sections for easier maintenance and human readability.
 */
const NAVIGATION_SECTIONS = {
    main: [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/', badge: null },
        { id: 'tasks', icon: CheckSquare, label: 'Tasks', path: '/tasks', badge: '12+' },
        { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/calendar', badge: null },
        { id: 'analytics', icon: BarChart2, label: 'Analytics', path: '/analytics', badge: null },
        { id: 'team', icon: Users, label: 'Team', path: '/team', badge: null },
    ],
    general: [
        { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
        { id: 'help', icon: HelpCircle, label: 'Help Center', path: '/help' },
    ]
};

/**
 * Sidebar Component
 * Provides primary navigation for the dashboard application.
 * Supports both full-width and minimized states.
 */
const Sidebar = ({ isOpen, onClose, isMinimized, onToggleMinimize }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    // Trigger logout flow and redirect user to login page
    const handleLogoutAction = () => {
        logout();
        navigate('/auth/login');
    };

    /**
     * Internal styling helper for Navigation Links
     * Ensures consistent look for active vs inactive states
     */
    const getNavLinkClasses = (isActive) => {
        const baseClasses = "flex items-center px-4 py-2.5 rounded-2xl transition-all duration-200 group relative";
        const stateClasses = isActive ? "text-[#111827]" : "text-gray-400 hover:text-gray-600";
        const layoutClasses = isMinimized ? "justify-center" : "justify-between";

        return `${baseClasses} ${stateClasses} ${layoutClasses}`;
    };

    return (
        <>
            {/* Overlay for mobile devices when sidebar is active */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Main Container: Controls width and visibility transitions */}
            <aside className={`
                fixed lg:sticky top-0 left-0 z-50 h-screen bg-white flex flex-col border-r border-gray-100 
                transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                ${isMinimized ? 'w-20' : 'w-72'}
            `}>

                {/* BRAND SECTON: Contains Logo and Minimize Toggle */}
                <div className={`flex items-center pt-6 pb-6 transition-all duration-300 ${isMinimized ? 'px-4 justify-center' : 'px-8 justify-between'}`}>
                    <NavLink to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary border-2 border-primary rounded-full flex items-center justify-center p-0.5 shadow-sm shrink-0">
                            <LogoIcon />
                        </div>
                        {!isMinimized && (
                            <span className="text-2xl font-bold text-[#111827] tracking-tighter">Donezo</span>
                        )}
                    </NavLink>

                    {/* Minimize toggle for desktop view */}
                    {!isMinimized && (
                        <button
                            onClick={onToggleMinimize}
                            className="hidden lg:flex p-1.5 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                            aria-label="Minimize sidebar"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}

                    {/* Close button for mobile view */}
                    <button onClick={onClose} className="lg:hidden ml-auto p-2 text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                {/* Minimized view menu expansion trigger */}
                {isMinimized && (
                    <div className="px-4 mb-4 flex justify-center">
                        <button
                            onClick={onToggleMinimize}
                            className="p-3 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                )}

                {/* NAVIGATION LIST: Wraps all menu blocks */}
                <div className="flex-1 overflow-x-hidden px-4">

                    {/* Primary Menu Block */}
                    <nav className="mb-4">
                        {!isMinimized && <SectionTitle title="Menu" />}
                        <ul className="space-y-0.5">
                            {NAVIGATION_SECTIONS.main.map((item) => (
                                <li key={item.id}>
                                    <SidebarLink item={item} isMinimized={isMinimized} getNavLinkClasses={getNavLinkClasses} onClose={onClose} />
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* System/General Block */}
                    <nav className="mb-4">
                        {!isMinimized && <SectionTitle title="General" />}
                        <ul className="space-y-0.5">
                            {NAVIGATION_SECTIONS.general.map((item) => (
                                <li key={item.id}>
                                    <SidebarLink item={item} isMinimized={isMinimized} getNavLinkClasses={getNavLinkClasses} onClose={onClose} />
                                </li>
                            ))}
                            {/* Special Logout Action */}
                            <li>
                                <button
                                    onClick={handleLogoutAction}
                                    className={`w-full flex items-center px-4 py-2.5 rounded-2xl text-gray-400 hover:text-red-500 transition-all duration-200 group ${isMinimized ? 'justify-center' : ''}`}
                                    title={isMinimized ? "Logout" : ""}
                                >
                                    <div className="flex items-center gap-4">
                                        <LogOut size={22} className="text-gray-300 group-hover:text-red-400" strokeWidth={2} />
                                        {!isMinimized && <span className="text-[16px] font-medium">Logout</span>}
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* PROMOTION: Only visible in full-width mode */}
                {!isMinimized && <MobileAppPromo />}

                <style>{`
                    .custom-scrollbar::-webkit-scrollbar { width: 0px; }
                `}</style>
            </aside>
        </>
    );
};

// --- Sub-components to keep the main Sidebar logic clean and readable ---

// Renders the section headings (e.g., MENU, GENERAL)
const SectionTitle = ({ title }) => (
    <p className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
        {title}
    </p>
);

// Renders individual navigation links with badge logic
const SidebarLink = ({ item, isMinimized, getNavLinkClasses, onClose }) => {
    const { icon: Icon, label, path, badge } = item;

    return (
        <NavLink
            to={path}
            onClick={() => window.innerWidth < 1024 && onClose()}
            className={({ isActive }) => getNavLinkClasses(isActive)}
            title={isMinimized ? label : ""}
        >
            {({ isActive }) => (
                <>
                    {/* Visual indicator for active route */}
                    {isActive && (
                        <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-2 h-9 bg-primary rounded-r-full shadow-sm" />
                    )}

                    <div className="flex items-center gap-4">
                        <Icon
                            size={22}
                            className={isActive ? 'text-primary' : 'text-gray-300 group-hover:text-gray-400'}
                            strokeWidth={isActive ? 2.5 : 2}
                        />
                        {!isMinimized && (
                            <span className={`text-[16px] ${isActive ? 'font-semibold' : 'font-medium'}`}>
                                {label}
                            </span>
                        )}
                    </div>

                    {!isMinimized && badge && (
                        <span className="bg-[#0D3D29] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                            {badge}
                        </span>
                    )}
                </>
            )}
        </NavLink>
    );
};

// The 'Donezo' Logo Icon Component
const LogoIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        <path d="M12 2C14 2 16.5 3.5 17.5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

// Promotional Card Component for Mobile App
const MobileAppPromo = () => (
    <div className="px-6 pb-6 mt-auto">
        <div className="relative bg-[#05110B] rounded-[32px] p-6 overflow-hidden shadow-2xl">
            {/* Background pattern logic */}
            <div className="absolute inset-0 opacity-40">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="130" cy="130" r="100" stroke="#1E6F4C" strokeWidth="1" fill="none" opacity="0.6" />
                    <circle cx="130" cy="130" r="85" stroke="#1E6F4C" strokeWidth="1" fill="none" opacity="0.5" />
                    <circle cx="130" cy="130" r="70" stroke="#1E6F4C" strokeWidth="1" fill="none" opacity="0.4" />
                    <circle cx="130" cy="130" r="55" stroke="#1E6F4C" strokeWidth="1" fill="none" opacity="0.3" />
                </svg>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 blur-[50px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Secondary brand icon for promo card */}
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center mb-4">
                    <div className="w-5 h-5 text-primary">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
                            <circle cx="12" cy="12" r="4" fill="currentColor" />
                        </svg>
                    </div>
                </div>
                <h4 className="text-white font-bold text-[17px] leading-tight mb-1">Download our<br />Mobile App</h4>
                <p className="text-gray-500 text-[11px] mb-6 font-medium">Get easy in another way</p>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-2xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-black/20">
                    Download
                </button>
            </div>
        </div>
    </div>
);

export default Sidebar;
