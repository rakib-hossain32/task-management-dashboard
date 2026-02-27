import { Search, Mail, Bell, Command, Menu } from 'lucide-react';

const TopBar = ({ onMenuClick }) => {
    return (
        <header className="bg-white border-b border-border px-4 sm:px-6 py-3.5 flex items-center gap-4 sticky top-0 z-20">
            {/* Mobile Menu Toggle */}
            <button
                onClick={onMenuClick}
                className="lg:hidden p-2 -ml-2 text-text-secondary hover:bg-bg-main rounded-lg transition-colors cursor-pointer"
            >
                <Menu size={20} />
            </button>

            {/* Search */}
            <div className="flex-1 max-w-sm hidden md:block">
                <div className="flex items-center gap-2 bg-bg-main border border-border rounded-xl px-3.5 py-2.5 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/10 transition-all">
                    <Search size={16} className="text-text-muted shrink-0" />
                    <input
                        type="text"
                        placeholder="Search task"
                        className="bg-transparent text-sm text-text-primary placeholder-text-muted outline-none flex-1 min-w-0"
                    />
                    <div className="flex items-center gap-0.5 shrink-0">
                        <div className="flex items-center gap-0.5 bg-white border border-border rounded-md px-1.5 py-0.5">
                            <Command size={11} className="text-text-muted" />
                            <span className="text-[10px] text-text-muted font-medium">F</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Actions */}
            <div className="ml-auto flex items-center gap-3">
                {/* Mail */}
                <button className="w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center text-text-secondary hover:border-brand hover:text-brand transition-colors cursor-pointer">
                    <Mail size={17} />
                </button>
                {/* Bell */}
                <div className="relative">
                    <button className="w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center text-text-secondary hover:border-brand hover:text-brand transition-colors cursor-pointer">
                        <Bell size={17} />
                    </button>
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-danger rounded-full border-2 border-white" />
                </div>
                {/* Divider */}
                <div className="w-px h-8 bg-border" />
                {/* User */}
                <div className="flex items-center gap-2.5 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-brand/30 group-hover:ring-brand transition-all">
                        <div className="w-full h-full bg-linear-to-br from-brand to-brand-light flex items-center justify-center text-white font-bold text-sm">
                            TM
                        </div>
                    </div>
                    <div className="hidden sm:block leading-none">
                        <p className="text-sm font-semibold text-text-primary leading-none mb-0.5">Totok Michael</p>
                        <p className="text-[11px] text-text-muted">tmichael20@mail.com</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
