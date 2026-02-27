import { Search, Mail, Bell, Command, Menu } from 'lucide-react';

const TopBar = ({ onMenuClick }) => {
    return (
        <header className="px-4 sm:px-8 py-5 flex items-center justify-between sticky top-0 z-20 bg-[#f5f5f5]">
            {/* Mobile Menu Toggle */}
            <button
                onClick={onMenuClick}
                className="lg:hidden p-2 -ml-2 text-secondary hover:bg-accent/10 rounded-lg transition-colors cursor-pointer mr-2"
            >
                <Menu size={20} />
            </button>

            {/* Search */}
            <div className="flex-1 max-w-lg hidden md:block">
                <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm border border-accent/5">
                    <Search size={18} className="text-secondary/70 shrink-0" />
                    <input
                        type="text"
                        placeholder="Search task"
                        className="bg-transparent text-[15px] text-primary placeholder-secondary/50 outline-none flex-1 min-w-0 font-medium"
                    />
                    <div className="flex items-center gap-1 bg-[#f0f2f5] rounded-lg px-2 py-1 border border-accent/10">
                        <Command size={12} className="text-secondary" />
                        <span className="text-[11px] text-secondary font-bold">F</span>
                    </div>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Mail */}
                <button className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-accent/5 hover:border-primary/20 transition-all cursor-pointer">
                    <Mail size={19} />
                </button>
                {/* Bell */}
                <button className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-accent/5 hover:border-primary/20 transition-all cursor-pointer">
                    <Bell size={19} />
                </button>

                {/* User */}
                <div className="flex items-center gap-3 bg-white/50 pl-1 pr-3 py-1 rounded-full cursor-pointer hover:bg-white transition-all group">
                    <div className="relative group">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            alt="Avatar"
                            className="w-11 h-11 rounded-2xl ring-2 ring-white shadow-md object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary border-2 border-white rounded-full shadow-sm" />
                    </div>
                    <div className="hidden lg:block leading-tight">
                        <p className="text-[14px] font-bold text-primary group-hover:text-primary transition-colors">Totok Michael</p>
                        <p className="text-[11px] text-secondary font-medium">tmichael20@mail.com</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
