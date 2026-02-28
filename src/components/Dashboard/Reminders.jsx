import React from 'react';
import { Video } from 'lucide-react';

/**
 * Reminders Component
 * Features upcoming events with a primary action button.
 */
const Reminders = () => {
    return (
        <div className="bg-white rounded-[32px] p-8 border border-gray-100/50 hover:shadow-md transition-shadow flex flex-col gap-6 h-full">
            <h2 className="text-[18px] font-bold text-[#0D1611]">Reminders</h2>

            {/* Core Event Information Section */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#0D1611] leading-tight mb-3">
                    Meeting with Arc<br />Company
                </h3>
                <p className="text-[14px] text-gray-400 font-medium">
                    Time : 02.00 pm - 04.00 pm
                </p>
            </div>

            {/* CTA Button: Premium Deep Green style with Video Icon */}
            <button className="flex items-center justify-center gap-2.5 bg-[#0D3D29] hover:bg-[#0A2F1F] text-white text-[15px] font-bold px-7 py-4 rounded-[22px] w-full transition-all active:scale-95 shadow-xl shadow-green-900/10 group">
                <div className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <Video size={14} className="text-white" strokeWidth={3} />
                </div>
                <span>Start Meeting</span>
            </button>
        </div>
    );
};

export default Reminders;
