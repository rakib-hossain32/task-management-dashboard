import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, Tooltip
} from 'recharts';

// Map API analytics data to days of week, or use fallback
const fallbackData = [
    { day: 'S', value: 45, active: false },
    { day: 'M', value: 68, active: false },
    { day: 'T', value: 78, active: true, label: '74%' },
    { day: 'W', value: 55, active: false },
    { day: 'T', value: 85, active: false },
    { day: 'F', value: 50, active: false },
    { day: 'S', value: 38, active: false },
];

const mapApiToChart = (apiData) => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return apiData.slice(0, 7).map((d, i) => ({
        day: days[i] || days[i % 7],
        value: d.views ? Math.round(d.views / 20) : d.clicks || 50,
        active: i === 2,
        label: i === 2 ? '74%' : undefined,
    }));
};

// Custom pill-shaped bar with diagonal stripe for inactive
const PillBar = (props) => {
    const { x, y, width, height, active } = props;
    if (!height || height <= 0) return null;

    const rx = width / 2;
    const patternId = `stripe-${x}`;

    if (!active) {
        return (
            <g>
                <defs>
                    <pattern id={patternId} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="#C8D8C8" strokeWidth="4" />
                    </pattern>
                    <clipPath id={`clip-${x}`}>
                        <rect x={x} y={y} width={width} height={height} rx={rx} ry={rx} />
                    </clipPath>
                </defs>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={rx}
                    ry={rx}
                    fill={`url(#${patternId})`}
                    stroke="#C8D8C8"
                    strokeWidth="1.5"
                    clipPath={`url(#clip-${x})`}
                />
            </g>
        );
    }

    // Active bar — solid dark green (pill shape)
    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            rx={rx}
            ry={rx}
            fill="#064E3B"
        />
    );
};

// Custom label above active bar
const CustomLabel = (props) => {
    const { x, y, width, value, index, data } = props;
    const bar = data[index];
    if (!bar?.active || !bar?.label) return null;
    return (
        <g>
            <rect
                x={x + width / 2 - 20}
                y={y - 28}
                width={40}
                height={20}
                rx={6}
                fill="white"
                stroke="#e5e7eb"
                strokeWidth="1"
            />
            <text
                x={x + width / 2}
                y={y - 14}
                textAnchor="middle"
                fill="#0D1611"
                fontSize={11}
                fontWeight={700}
            >
                {bar.label}
            </text>
        </g>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-2 text-xs">
                <p className="text-secondary mb-1">{label}</p>
                <p className="font-bold text-primary">{payload[0].value}</p>
            </div>
        );
    }
    return null;
};

const ProjectAnalytics = ({ analyticsData }) => {
    const chartData = analyticsData ? mapApiToChart(analyticsData) : fallbackData;

    return (
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-base font-bold text-[#0D1611]">Project Analytics</h2>
            </div>

            {/* Recharts Bar Chart with custom pill bars */}
            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    data={chartData}
                    barSize={32}
                    margin={{ top: 36, right: 8, left: -30, bottom: 0 }}
                >
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 600 }}
                    />
                    <YAxis hide />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                    <Bar
                        dataKey="value"
                        shape={<PillBar />}
                        label={<CustomLabel data={chartData} />}
                        radius={[20, 20, 20, 20]}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.active ? '#064E3B' : '#E8F5E9'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProjectAnalytics;
