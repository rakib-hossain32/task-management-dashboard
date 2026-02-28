import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer, Tooltip
} from 'recharts';

/**
 * Chart Data Configuration
 * Strictly follows the visual pattern from the design reference.
 */
const CHART_DATA = [
    { day: 'S', value: 55, type: 'striped', color: '#E5E7EB' },
    { day: 'M', value: 85, type: 'solid', color: '#2D845B' }, // Medium Green
    { day: 'T', value: 70, type: 'solid', color: '#66C692', hasLabel: true, label: '74%' }, // Light Green
    { day: 'W', value: 95, type: 'solid', color: '#0D3D29' }, // Dark Green
    { day: 'T', value: 75, type: 'striped', color: '#E5E7EB' },
    { day: 'F', value: 65, type: 'striped', color: '#E5E7EB' },
    { day: 'S', value: 50, type: 'striped', color: '#E5E7EB' },
];

/**
 * Custom Bar Component
 * Handles solid colors and diagonal stripe patterns for the bars.
 */
const CustomRoundedBar = (props) => {
    const { x, y, width, height, payload } = props;
    if (!height || height <= 0) return null;

    const radius = width / 2;
    const patternId = `bar-pattern-${payload.day}-${x}`;

    return (
        <g>
            <defs>
                {/* Diagonal Stripes Pattern definition */}
                <pattern
                    id={patternId}
                    patternUnits="userSpaceOnUse"
                    width="10"
                    height="10"
                    patternTransform="rotate(45)"
                >
                    <line x1="0" y1="0" x2="0" y2="10" stroke="#D1D5DB" strokeWidth="5" />
                </pattern>
            </defs>

            {/* The main bar shape */}
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={radius}
                fill={payload.type === 'striped' ? `url(#${patternId})` : payload.color}
                className="transition-all duration-300"
            />

            {/* Outline for striped bars to give the "pill" definition */}
            {payload.type === 'striped' && (
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={radius}
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                />
            )}
        </g>
    );
};

/**
 * Floating Label for active data points
 */
const BarValueLabel = (props) => {
    const { x, y, width, index } = props;
    const item = CHART_DATA[index];

    if (!item?.hasLabel) return null;

    return (
        <g>
            {/* Label Background Box */}
            <rect
                x={x + width / 2 - 20}
                y={y - 32}
                width={40}
                height={22}
                rx={6}
                fill="white"
                className="shadow-sm"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
            />
            {/* Label Text */}
            <text
                x={x + width / 2}
                y={y - 17}
                textAnchor="middle"
                fill="#111827"
                fontSize={11}
                fontWeight={700}
            >
                {item.label}
            </text>
            {/* Small pointer at the bottom of label */}
            <path
                d={`M ${x + width / 2 - 4} ${y - 10} L ${x + width / 2} ${y - 6} L ${x + width / 2 + 4} ${y - 10} Z`}
                fill="white"
            />
        </g>
    );
};

const ProjectAnalytics = () => {
    return (
        <div className="bg-white rounded-[32px] p-8 border border-gray-100/50 h-full">
            <h2 className="text-[18px] font-bold text-[#0D1611] mb-8">Project Analytics</h2>

            <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={CHART_DATA}
                        barSize={38}
                        margin={{ top: 40, right: 0, left: 0, bottom: 0 }}
                    >
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 13, fontWeight: 500 }}
                            dy={15}
                        />
                        <YAxis hide />
                        <Tooltip cursor={{ fill: 'transparent' }} content={() => null} />
                        <Bar
                            dataKey="value"
                            shape={<CustomRoundedBar />}
                            label={<BarValueLabel />}
                            isAnimationActive={true}
                            animationDuration={1000}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ProjectAnalytics;
