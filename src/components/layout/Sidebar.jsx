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
    Plus,
    X,
    ChevronLeft,
    Menu
} from 'lucide-react';

const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/', badge: null },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks', path: '/tasks', badge: '12' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/calendar', badge: null },
    { id: 'analytics', icon: BarChart2, label: 'Analytics', path: '/analytics', badge: null },
    { id: 'team', icon: Users, label: 'Team', path: '/team', badge: null },
];

const generalItems = [
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
    { id: 'help', icon: HelpCircle, label: 'Help Center', path: '/help' },
];

const Sidebar = ({ isOpen, onClose, isMinimized, onToggleMinimize }) => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/auth/login');
    };
    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Content */}
            <aside className={`
                fixed lg:sticky top-0 left-0 z-50 h-screen bg-white flex flex-col border-r border-accent/20 shadow-xl lg:shadow-none transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                ${isMinimized ? 'w-20' : 'w-72'}
            `}>
                {/* Logo Section */}
                <div className={`flex items-center pt-8 pb-10 transition-all duration-300 ${isMinimized ? 'px-4 justify-center' : 'px-9 justify-start'}`}>
                    <NavLink to="/" className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative shrink-0">
                            <div className="w-11 h-11 bg-white border border-accent/10 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                                    <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
                                </svg>
                            </div>
                        </div>
                        {!isMinimized && (
                            <span className="text-2xl font-black text-[#0D1611] tracking-tight">
                                Donezo
                            </span>
                        )}
                    </NavLink>

                    {/* Mobile Close Button */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 ml-auto text-secondary hover:text-primary hover:bg-accent/10 rounded-xl transition-colors shrink-0"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Minimize Toggle Button - Dedicated Section */}
                <div className={`px-4 mb-4 hidden lg:flex ${isMinimized ? 'justify-center' : 'justify-end'}`}>
                    <button
                        onClick={onToggleMinimize}
                        className="p-2 text-secondary hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 cursor-pointer group"
                        title={isMinimized ? "Expand Sidebar" : "Minimize Sidebar"}
                    >
                        {isMinimized ? (
                            <Menu size={20} className="group-hover:scale-110" />
                        ) : (
                            <ChevronLeft size={20} className="group-hover:-translate-x-0.5" />
                        )}
                    </button>
                </div>

                {/* Main Navigation */}
                <div className="flex-1 overflow-x-hidden overflow-y-auto px-1 custom-scrollbar">
                    <div className="mb-6">
                        {!isMinimized && (
                            <div className="flex items-center justify-between px-6 mb-3">
                                <p className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em]">General Menu</p>
                                <button className="p-1 hover:bg-primary/10 rounded-md transition-colors text-primary cursor-pointer opacity-40 hover:opacity-100">
                                    <Plus size={14} />
                                </button>
                            </div>
                        )}
                        <ul className="space-y-1">
                            {menuItems.map(({ id, icon: Icon, label, path, badge }) => (
                                <li key={id}>
                                    <NavLink
                                        to={path}
                                        onClick={() => window.innerWidth < 1024 && onClose()}
                                        className={({ isActive }) => `
                                            w-full flex items-center px-6 py-3.5 transition-all duration-300 group relative overflow-hidden
                                            ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}
                                            ${isMinimized ? 'justify-center px-0' : 'justify-between'}
                                        `}
                                        title={isMinimized ? label : ""}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {/* Active Indicator Bar */}
                                                {isActive && (
                                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-r-full shadow-[2px_0_10px_rgba(30,111,76,0.2)]" />
                                                )}

                                                <div className={`flex items-center gap-4 relative z-10 ${isMinimized ? '' : 'flex-1 ml-2'}`}>
                                                    <Icon
                                                        size={22}
                                                        strokeWidth={isActive ? 2.5 : 2}
                                                        className={`transition-transform duration-300 shrink-0 ${isActive ? 'scale-105' : 'group-hover:scale-105'}`}
                                                    />
                                                    {!isMinimized && <span className="text-[15px] font-bold whitespace-nowrap">{label}</span>}
                                                </div>

                                                {!isMinimized && badge && (
                                                    <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black transition-colors z-10 ${isActive ? 'bg-primary/10 text-primary' : 'bg-primary/5 text-primary'}`}>
                                                        {badge}
                                                    </span>
                                                )}

                                                {/* Hover Overlay */}
                                                <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 z-0 ${!isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`} />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        {!isMinimized && (
                            <p className="px-6 text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-3">Preferences</p>
                        )}
                        <ul className="space-y-1">
                            {generalItems.map(({ id, icon: Icon, label, path }) => (
                                <li key={id}>
                                    <NavLink
                                        to={path}
                                        onClick={() => window.innerWidth < 1024 && onClose()}
                                        className={({ isActive }) => `
                                            w-full flex items-center px-6 py-3.5 transition-all duration-300 group relative overflow-hidden
                                            ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}
                                            ${isMinimized ? 'justify-center px-0' : 'justify-between'}
                                        `}
                                        title={isMinimized ? label : ""}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {/* Active Indicator Bar */}
                                                {isActive && (
                                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-r-full" />
                                                )}

                                                <div className={`flex items-center gap-4 relative z-10 transition-transform duration-300 ${isMinimized ? '' : 'flex-1 ml-2'}`}>
                                                    <Icon
                                                        size={22}
                                                        strokeWidth={isActive ? 2.5 : 2}
                                                        className="transition-transform duration-300 shrink-0"
                                                    />
                                                    {!isMinimized && <span className="text-[15px] font-bold whitespace-nowrap">{label}</span>}
                                                </div>

                                                {/* Hover Indicator */}
                                                <div className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 z-0 ${!isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`} />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Profile Section */}
                <div className={`py-6 border-t border-accent/20 bg-accent/5 transition-all duration-300 ${isMinimized ? 'px-0' : 'px-4'}`}>
                    <div className={`flex items-center gap-3 ${isMinimized ? 'flex-col px-0' : 'px-2'}`}>
                        <div className="relative cursor-pointer group">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Avatar"
                                className="w-10 h-10 rounded-xl object-cover ring-2 ring-transparent group-hover:ring-primary/30 transition-all duration-300 shadow-sm"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary border-2 border-white rounded-full shadow-sm" />
                        </div>
                        {!isMinimized && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-primary truncate">{user?.email?.split('@')[0] || 'User'}</p>
                                <p className="text-[11px] text-secondary truncate">{user?.email || 'user@donezo.com'}</p>
                            </div>
                        )}
                        <button
                            onClick={handleLogout}
                            className={`text-secondary hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 cursor-pointer active:scale-90 ${isMinimized ? 'p-1.5 mt-2' : 'p-2'}`}
                            title="Logout"
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>

                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #c8e6c9;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: var(--color-secondary);
                    }
                `}</style>
            </aside>
        </>
    );
};

export default Sidebar;
