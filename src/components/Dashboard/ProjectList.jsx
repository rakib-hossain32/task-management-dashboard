import React from 'react';
import { Plus, ArrowUpRight, Tag } from 'lucide-react';

const COLORS = ['#5B73F5', '#F4B400', '#2E8B57', '#E53935', '#9C27B0', '#1E6F4C'];

const fallbackProducts = [
    { id: 1, name: 'Premium Plan', price: 99.99, sales: 234, category: 'subscription' },
    { id: 2, name: 'Basic Plan', price: 29.99, sales: 567, category: 'subscription' },
    { id: 3, name: 'Enterprise Plan', price: 299.99, sales: 89, category: 'subscription' },
    { id: 4, name: 'Add-on Feature', price: 19.99, sales: 345, category: 'addon' },
];

const ProjectList = ({ products }) => {
    const items = products || fallbackProducts;

    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-[#0D1611]">Products & Plans</h2>
                <button className="flex items-center gap-1 text-xs font-semibold text-secondary border border-gray-200 rounded-full px-3.5 py-1.5 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    <Plus size={13} />
                    New
                </button>
            </div>

            <div className="space-y-2.5">
                {items.map(({ id, name, price, sales, category }, idx) => (
                    <div
                        key={id}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                    >
                        {/* Color dot icon */}
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: COLORS[idx % COLORS.length] + '22' }}
                        >
                            <div className="w-3 h-3 rounded-sm" style={{ background: COLORS[idx % COLORS.length] }} />
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-[#0D1611] truncate group-hover:text-primary transition-colors">
                                {name}
                            </p>
                            <p className="text-[11px] text-secondary flex items-center gap-1">
                                <Tag size={9} />
                                {category} · {sales} sales
                            </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="text-sm font-bold text-primary">${price}</span>
                            <ArrowUpRight size={14} className="text-gray-300 group-hover:text-primary transition-colors" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
