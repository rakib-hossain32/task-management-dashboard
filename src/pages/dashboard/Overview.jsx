import React, { useState, useEffect } from 'react';
import { Plus, ArrowUpRight, TrendingUp } from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ProjectAnalytics from '../../components/dashboard/ProjectAnalytics';
import Reminders from '../../components/dashboard/Reminders';
import TeamCollaboration from '../../components/dashboard/TeamCollaboration';
import ProjectProgress from '../../components/dashboard/ProjectProgress';
import ProjectList from '../../components/dashboard/ProjectList';
import TimeTracker from '../../components/dashboard/TimeTracker';

// Design-matching stats (per Dribbble reference)
const designStats = [
    { label: 'Total Projects', value: '24', note: 'Increased from last month', highlight: true },
    { label: 'Ended Projects', value: '10', note: 'Increased from last month', highlight: false },
    { label: 'Running Projects', value: '12', note: 'Increased from last month', highlight: false },
    { label: 'Pending Project', value: '2', note: 'On Discuss', highlight: false },
];

const DashboardOverview = () => {
    const axiosSecure = useAxiosSecure();

    // Separate state for each API endpoint
    const [overview, setOverview] = useState(null);
    const [analytics, setAnalytics] = useState(null);
    const [users, setUsers] = useState(null);
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Call all 4 APIs in parallel using Promise.all
        const fetchAll = async () => {
            try {
                const [overviewRes, analyticsRes, usersRes, productsRes] = await Promise.all([
                    axiosSecure.get('/api/overview'),
                    axiosSecure.get('/api/analytics'),
                    axiosSecure.get('/api/users'),
                    axiosSecure.get('/api/products'),
                ]);
                setOverview(overviewRes.data);
                setAnalytics(analyticsRes.data);
                setUsers(usersRes.data);
                setProducts(productsRes.data);
            } catch (err) {
                console.error('Dashboard API error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, []);

    return (
        <>
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-black text-[#0D1611] leading-tight mb-2 tracking-tight">
                        Dashboard
                    </h1>
                    <p className="text-[15px] text-secondary font-medium">
                        Plan, prioritize, and accomplish your tasks with ease.
                    </p>
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

            {/* Stats Cards — design-accurate layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {designStats.map(({ label, value, note, highlight }) => (
                    <div
                        key={label}
                        className={`rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 ${highlight
                            ? 'bg-[#064E3B] text-white'
                            : 'bg-white border border-gray-100 text-[#0D1611]'
                            }`}
                        style={{ minHeight: '140px' }}
                    >
                        {highlight && (
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
                                <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                            </div>
                        )}
                        <div className="flex items-start justify-between relative z-10">
                            <p className={`text-sm font-semibold ${highlight ? 'text-white/80' : 'text-secondary'}`}>
                                {label}
                            </p>
                            <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${highlight
                                ? 'bg-white/15 hover:bg-white/25 text-white'
                                : 'border border-gray-200 hover:border-primary hover:text-primary text-secondary'
                                }`}>
                                <ArrowUpRight size={15} />
                            </button>
                        </div>
                        <div className="relative z-10 mt-2">
                            <p className={`text-4xl font-extrabold leading-none mb-3 ${highlight ? 'text-white' : 'text-[#0D1611]'}`}>
                                {value}
                            </p>
                            <div className={`flex items-center gap-1.5 text-[11px] font-medium ${highlight ? 'text-green-300' : 'text-secondary'}`}>
                                <TrendingUp size={13} />
                                {note}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* API Overview Info Bar — shows live data from /api/overview */}
            {overview && (
                <div className="mb-8 bg-white border border-gray-100 rounded-2xl px-6 py-4 flex flex-wrap items-center gap-6">
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">Live Stats from API</p>
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#064E3B]" />
                            <span className="text-sm font-bold text-[#0D1611]">{overview.totalUsers?.toLocaleString()}</span>
                            <span className="text-xs text-secondary">Total Users</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-sm font-bold text-[#0D1611]">{overview.activeUsers?.toLocaleString()}</span>
                            <span className="text-xs text-secondary">Active</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#F4B400]" />
                            <span className="text-sm font-bold text-[#0D1611]">${overview.revenue?.toLocaleString()}</span>
                            <span className="text-xs text-secondary">Revenue</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp size={14} className="text-green-500" />
                            <span className="text-sm font-bold text-green-600">+{overview.growth}%</span>
                            <span className="text-xs text-secondary">Growth</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Middle Row: Analytics + Reminders */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
                <div className="xl:col-span-2">
                    {/* /api/analytics data */}
                    <ProjectAnalytics analyticsData={analytics} />
                </div>
                <div className="h-full">
                    <Reminders />
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* /api/users data */}
                <div className="h-full">
                    <TeamCollaboration users={users} />
                </div>
                <div className="h-full">
                    <ProjectProgress />
                </div>
                {/* /api/products data */}
                <div className="flex flex-col gap-8 md:col-span-2 xl:col-span-1">
                    <ProjectList products={products} />
                    <TimeTracker />
                </div>
            </div>
        </>
    );
};

export default DashboardOverview;
