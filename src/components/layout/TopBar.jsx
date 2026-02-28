import React from 'react';
import { Search, Mail, Bell, Command, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

/**
 * TopBar Component
 * Designed to match the premium dashboard aesthetic with a floating rounded layout.
 */
const TopBar = ({ onMenuClick }) => {
    const { user } = useAuth();

    return (
        <header className="w-full px-4 sm:px-8 pt-6 pb-2">
            {/* Main Container - Floating white bar style */}
            <div className="bg-white rounded-[24px] px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm border border-gray-100/50">

                {/* LEFT: Mobile Menu & Search Bar */}
                <div className="flex items-center gap-4 flex-1">
                    {/* Mobile Hamburger - Only visible on small screens */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Search Input Group */}
                    <div className="hidden md:flex items-center flex-1 max-w-[400px] relative group">
                        <div className="absolute left-4 text-gray-400 group-focus-within:text-primary transition-colors">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search task"
                            className="w-full bg-[#F9FAFB] border border-transparent focus:border-primary/20 focus:bg-white text-[14px] text-gray-700 placeholder-gray-400 pl-11 pr-16 py-2.5 rounded-full outline-none transition-all"
                        />
                        {/* Keyboard Shortcut Hint */}
                        <div className="absolute right-3 flex items-center gap-1 bg-white border border-gray-200 rounded-md px-1.5 py-0.5 shadow-sm">
                            <Command size={11} className="text-gray-400" />
                            <span className="text-[10px] text-gray-500 font-bold uppercase">F</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Actions and User Profile */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Action Buttons Group */}
                    <div className="flex items-center gap-2 mr-2 border-r border-gray-100 pr-2 sm:pr-4">
                        <IconButton icon={Mail} count={0} aria-label="Messages" />
                        <IconButton icon={Bell} count={2} aria-label="Notifications" />
                    </div>

                    {/* User Profile Section */}
                    <UserProfile
                        name={user?.name || 'Guest User'}
                        email={user?.email || 'guest@mail.com'}
                        avatar={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'Guest'}`}
                    />
                </div>
            </div>
        </header>
    );
};

/**
 * Reusable Icon Button for TopBar actions
 */
const IconButton = ({ icon: Icon, count, ...props }) => (
    <button
        className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-500 hover:text-primary hover:border-primary/20 hover:shadow-sm transition-all active:scale-95"
        {...props}
    >
        <Icon size={20} strokeWidth={2} />
        {count > 0 && (
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
        )}
    </button>
);

/**
 * User Profile Component with Avatar and Info
 */
const UserProfile = ({ name, email, avatar }) => (
    <div className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
            <img
                src={avatar}
                alt={name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary/10 transition-all shadow-sm"
            />
            {/* Active Status Indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-sm" />
        </div>
        <div className="hidden sm:block leading-tight">
            <p className="text-[14px] font-bold text-gray-800 leading-none mb-0.5">{name}</p>
            <p className="text-[11px] text-gray-400 font-medium">{email}</p>
        </div>
    </div>
);

export default TopBar;
