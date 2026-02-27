import React, { useState } from 'react';
import {
    LayoutDashboard,
    CheckSquare,
    Calendar,
    BarChart2,
    Users,
    Settings,
    HelpCircle,
    LogOut,
    Smartphone,
    ChevronRight,
    Plus,
    X,
    ChevronLeft,
    Menu
} from 'lucide-react';

const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', badge: null },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks', badge: '12' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', badge: null },
    { id: 'analytics', icon: BarChart2, label: 'Analytics', badge: null },
    { id: 'team', icon: Users, label: 'Team', badge: null },
];

const generalItems = [
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'help', icon: HelpCircle, label: 'Help Center' },
];

const Sidebar = ({ isOpen, onClose, isMinimized, onToggleMinimize }) => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-text-primary/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Content */}
            <aside className={`
                fixed lg:sticky top-0 left-0 z-50 h-screen bg-white flex flex-col border-r border-border/50 shadow-xl lg:shadow-none transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                ${isMinimized ? 'w-20' : 'w-72'}
            `}>
                {/* Logo Section */}
                <div className={`flex items-center pt-8 pb-6 transition-all duration-300 ${isMinimized ? 'px-4 justify-center' : 'px-7 justify-between'}`}>
                    <div className="flex items-center gap-3 group cursor-pointer overflow-hidden">
                        <div className="relative shrink-0">
                            <div className="w-10 h-10 bg-brand rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:rotate-6 transition-transform duration-300">
                                <div className="w-4 h-4 bg-white rounded-md" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-light rounded-full border-2 border-white animate-pulse" />
                            </div>
                        </div>
                        {!isMinimized && (
                            <span className="text-2xl font-black text-text-primary tracking-tighter whitespace-nowrap">
                                Donezo<span className="text-brand">.</span>
                            </span>
                        )}
                    </div>

                    {/* Mobile Close Button */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 text-text-muted hover:text-text-primary hover:bg-bg-main rounded-xl transition-colors shrink-0"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Minimize Toggle Button - Dedicated Section */}
                <div className={`px-4 mb-4 hidden lg:flex ${isMinimized ? 'justify-center' : 'justify-end'}`}>
                    <button
                        onClick={onToggleMinimize}
                        className="p-2 text-text-muted hover:text-brand hover:bg-brand-soft rounded-xl transition-all duration-300 cursor-pointer group"
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
                <div className="flex-1 overflow-x-hidden overflow-y-auto px-4 custom-scrollbar">
                    <div className="mb-6">
                        {!isMinimized && (
                            <div className="flex items-center justify-between px-3 mb-3">
                                <p className="text-[11px] font-bold text-text-muted uppercase tracking-[0.15em]">General Menu</p>
                                <button className="p-1 hover:bg-brand-soft rounded-md transition-colors text-brand cursor-pointer">
                                    <Plus size={14} />
                                </button>
                            </div>
                        )}
                        <ul className="space-y-1">
                            {menuItems.map(({ id, icon: Icon, label, badge }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => {
                                            setActiveTab(id);
                                            if (window.innerWidth < 1024) onClose();
                                        }}
                                        className={`w-full flex items-center px-4 py-3 rounded-2xl font-semibold text-[14px] transition-all duration-300 group relative overflow-hidden ${activeTab === id
                                            ? 'text-white'
                                            : 'text-text-secondary hover:text-brand'
                                            } ${isMinimized ? 'justify-center' : 'justify-between'}`}
                                        title={isMinimized ? label : ""}
                                    >
                                        <div className={`flex items-center gap-3.5 relative z-10 ${isMinimized ? '' : 'flex-1'}`}>
                                            <Icon
                                                size={20}
                                                strokeWidth={activeTab === id ? 2.5 : 2}
                                                className={`transition-transform duration-300 shrink-0 ${activeTab === id ? 'scale-110' : 'group-hover:scale-110'}`}
                                            />
                                            {!isMinimized && <span className="whitespace-nowrap">{label}</span>}
                                        </div>

                                        {!isMinimized && (
                                            <div className="flex items-center gap-2 relative z-10">
                                                {badge && (
                                                    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-colors z-10 ${activeTab === id ? 'bg-white/20 text-white' : 'bg-brand-soft text-brand'
                                                        }`}>
                                                        {badge}
                                                    </span>
                                                )}
                                                <ChevronRight size={14} className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${activeTab === id ? 'hidden' : ''}`} />
                                            </div>
                                        )}

                                        {/* Active Background Animation */}
                                        <div className={`absolute inset-0 bg-linear-to-r from-brand to-brand-light transition-opacity duration-300 z-0 ${activeTab === id ? 'opacity-100' : 'opacity-0'}`} />

                                        {/* Hover Indicator */}
                                        <div className={`absolute inset-0 bg-brand-soft/50 transition-opacity duration-300 z-0 ${activeTab !== id ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        {!isMinimized && (
                            <p className="px-3 text-[11px] font-bold text-text-muted uppercase tracking-[0.15em] mb-3">Preferences</p>
                        )}
                        <ul className="space-y-1">
                            {generalItems.map(({ id, icon: Icon, label }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => {
                                            setActiveTab(id);
                                            if (window.innerWidth < 1024) onClose();
                                        }}
                                        className={`w-full flex items-center px-4 py-3 rounded-2xl font-semibold text-[14px] transition-all duration-300 group relative overflow-hidden ${activeTab === id
                                            ? 'text-white'
                                            : 'text-text-secondary hover:text-brand'
                                            } ${isMinimized ? 'justify-center' : 'justify-between'}`}
                                        title={isMinimized ? label : ""}
                                    >
                                        <div className={`flex items-center gap-3.5 relative z-10 transition-transform duration-300 ${isMinimized ? '' : 'group-hover:translate-x-1 flex-1'}`}>
                                            <Icon
                                                size={20}
                                                strokeWidth={activeTab === id ? 2.5 : 2}
                                                className="transition-transform duration-300 shrink-0"
                                            />
                                            {!isMinimized && <span className="whitespace-nowrap">{label}</span>}
                                        </div>

                                        {!isMinimized && (
                                            <ChevronRight size={14} className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${activeTab === id ? 'hidden' : ''}`} />
                                        )}

                                        {/* Active Highlight */}
                                        <div className={`absolute inset-0 bg-linear-to-r from-brand to-brand-light transition-opacity duration-300 z-0 ${activeTab === id ? 'opacity-100' : 'opacity-0'}`} />

                                        {/* Hover Indicator */}
                                        <div className={`absolute inset-0 bg-brand-soft/50 transition-opacity duration-300 z-0 ${activeTab !== id ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Profile Section */}
                <div className={`py-6 border-t border-border/50 bg-bg-main/20 transition-all duration-300 ${isMinimized ? 'px-0' : 'px-4'}`}>
                    <div className={`flex items-center gap-3 ${isMinimized ? 'flex-col px-0' : 'px-2'}`}>
                        <div className="relative cursor-pointer group">
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Avatar"
                                className="w-10 h-10 rounded-xl object-cover ring-2 ring-transparent group-hover:ring-brand/30 transition-all duration-300 shadow-sm"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-brand-light border-2 border-white rounded-full shadow-sm" />
                        </div>
                        {!isMinimized && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-text-primary truncate">Alex Morgan</p>
                                <p className="text-[11px] text-text-muted truncate">alex.m@donezo.com</p>
                            </div>
                        )}
                        <button
                            className={`text-text-muted hover:text-danger hover:bg-danger/5 rounded-xl transition-all duration-300 cursor-pointer active:scale-90 ${isMinimized ? 'p-1.5 mt-2' : 'p-2'}`}
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
                        background: #E4E7EC;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #2E8B57;
                    }
                `}</style>
            </aside>
        </>
    );
};

export default Sidebar;
