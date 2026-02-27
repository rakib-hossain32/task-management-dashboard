import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const stats = [
    {
        label: 'Total Projects',
        value: '24',
        note: 'Increased from last month',
        highlight: true,
    },
    {
        label: 'Ended Projects',
        value: '10',
        note: 'Increased from last month',
        highlight: false,
    },
    {
        label: 'Running Projects',
        value: '12',
        note: 'Increased from last month',
        highlight: false,
    },
    {
        label: 'Pending Project',
        value: '2',
        note: 'On Discuss',
        highlight: false,
    },
];

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map(({ label, value, note, highlight }) => (
                <div
                    key={label}
                    className={`rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 ${highlight
                        ? 'bg-brand-dark text-white'
                        : 'bg-white border border-border text-text-primary'
                        }`}
                    style={{ minHeight: '140px' }}
                >
                    {/* Decorative radial for highlighted card */}
                    {highlight && (
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                        </div>
                    )}

                    <div className="flex items-start justify-between relative z-10">
                        <p className={`text-sm font-semibold ${highlight ? 'text-white/80' : 'text-text-secondary'}`}>
                            {label}
                        </p>
                        <button
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${highlight
                                ? 'bg-white/15 hover:bg-white/25 text-white'
                                : 'border border-border hover:border-brand hover:text-brand text-text-muted'
                                }`}
                        >
                            <ArrowUpRight size={15} />
                        </button>
                    </div>

                    <div className="relative z-10 mt-2">
                        <p className={`text-4xl font-extrabold leading-none mb-3 ${highlight ? 'text-white' : 'text-text-primary'}`}>
                            {value}
                        </p>
                        <div className={`flex items-center gap-1.5 text-[11px] font-medium ${highlight ? 'text-brand-light' : 'text-text-secondary'}`}>
                            <TrendingUp size={13} />
                            {note}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
