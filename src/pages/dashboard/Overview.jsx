import React, { useState, useEffect } from 'react';
import { Plus, ArrowUpRight, TrendingUp } from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ProjectAnalytics from '../../components/dashboard/ProjectAnalytics';
import Reminders from '../../components/dashboard/Reminders';
import TeamCollaboration from '../../components/dashboard/TeamCollaboration';
import ProjectProgress from '../../components/dashboard/ProjectProgress';
import ProjectList from '../../components/dashboard/ProjectList';
import TimeTracker from '../../components/dashboard/TimeTracker';

/**
 * Page-specific configuration for Dashboard Overview.
 * Matches the visual data from the requested design image.
 */
const DASHBOARD_STATISTICS = [
    { id: 'total', label: 'Total Projects', value: '24', growth: '+5', note: 'Increased from last month', variant: 'primary' },
    { id: 'ended', label: 'Ended Projects', value: '10', growth: '+6', note: 'Increased from last month', variant: 'secondary' },
    { id: 'running', label: 'Running Projects', value: '12', growth: '+2', note: 'Increased from last month', variant: 'secondary' },
    { id: 'pending', label: 'Pending Project', value: '2', growth: null, note: 'On Discuss', variant: 'secondary' },
];

const DashboardOverview = () => {
    const axiosSecure = useAxiosSecure();
    const [apiData, setApiData] = useState({ overview: null, analytics: null, users: null, products: null });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch all required data in parallel to optimize initial load time.
        const fetchDashboardData = async () => {
            try {
                const endpoints = ['/api/overview', '/api/analytics', '/api/users', '/api/products'];
                const [overview, analytics, users, products] = await Promise.all(
                    endpoints.map(endpoint => axiosSecure.get(endpoint))
                );

                setApiData({
                    overview: overview.data,
                    analytics: analytics.data,
                    users: users.data,
                    products: products.data
                });
            } catch (error) {
                console.error('Failed to sync dashboard metadata:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, [axiosSecure]);

    return (
        <div className="pb-10">
            {/* --- DASHBOARD HEADER SECTION --- */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
                <header>
                    <h1 className="text-4xl font-black text-[#0D1611] tracking-tight mb-2">
                        Dashboard
                    </h1>
                    <p className="text-[16px] text-gray-400 font-medium">
                        Plan, prioritize, and accomplish your tasks with ease.
                    </p>
                </header>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#0D3D29] hover:bg-[#0A2F1F] text-white px-6 py-3.5 rounded-full font-bold text-[15px] transition-all active:scale-95 shadow-lg shadow-black/5">
                        <Plus size={20} strokeWidth={3} />
                        <span>Add Project</span>
                    </button>
                    <button className="flex-1 sm:flex-none border border-gray-300 bg-white hover:bg-gray-50 text-[#0D1611] px-6 py-3.5 rounded-full font-bold text-[15px] transition-all active:scale-95 shadow-sm">
                        Import Data
                    </button>
                </div>
            </div>

            {/* --- PERFORMANCE STATS CARDS --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {DASHBOARD_STATISTICS.map((stat) => (
                    <StatsCard key={stat.id} data={stat} />
                ))}
            </div>

            {/* --- CORE DASHBOARD GRID --- */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10 items-start">

                {/* Left & Middle Column Group: Ensures Row Alignment */}
                <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Row 1: Analytics & Reminders */}
                    <ProjectAnalytics />
                    <Reminders />

                    {/* Row 2: Team & Progress (Starts at the same level) */}
                    <TeamCollaboration />
                    <ProjectProgress />
                </div>

                {/* Right Column: Independent Stack */}
                <div className="flex flex-col gap-8">
                    <ProjectList />
                    <TimeTracker />
                </div>
            </div>
        </div>
    );
};

/**
 * Sub-component for individual statistics visualization.
 * Designed to strictly follow the visual reference for primary and secondary card variants.
 */
const StatsCard = ({ data }) => {
    const isPrimary = data.variant === 'primary';

    return (
        <div className={`
            relative p-6 rounded-[28px] overflow-hidden transition-all duration-300 hover:-translate-y-1
            ${isPrimary ? 'bg-linear-to-br from-[#125B3E] to-[#0A3D2C] text-white shadow-xl shadow-green-900/10' : 'bg-white border border-gray-100/50 shadow-sm'}
        `}>
            {/* Flex container for label and action button */}
            <div className="flex justify-between items-start mb-4">
                <span className={`text-[16px] font-semibold ${isPrimary ? 'text-white/80' : 'text-gray-900'}`}>
                    {data.label}
                </span>
                <button className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110
                    ${isPrimary ? 'bg-white text-[#0D1611]' : 'border border-gray-100 text-gray-400'}
                `}>
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
            </div>

            {/* Large metric value */}
            <div className="mb-4">
                <h2 className={`text-5xl font-extrabold tracking-tighter ${isPrimary ? 'text-white' : 'text-[#0D1611]'}`}>
                    {data.value}
                </h2>
            </div>

            {/* Growth indicator and context note */}
            <div className="flex items-center gap-2">
                {data.growth && (
                    <div className={`
                        flex items-center gap-1 px-1.5 py-0.5 rounded-md border text-[10px] font-black
                        ${isPrimary ? 'bg-white/10 border-white/20 text-white' : 'bg-gray-50 border-gray-200 text-gray-500'}
                    `}>
                        <TrendingUp size={10} strokeWidth={4} />
                        {data.growth}
                    </div>
                )}
                <span className={`text-[12px] font-medium ${isPrimary ? 'text-white/60' : 'text-green-700/80'}`}>
                    {data.note}
                </span>
            </div>

            {/* Visual aesthetic elements for primary card */}
            {isPrimary && (
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
            )}
        </div>
    );
};

export default DashboardOverview;
