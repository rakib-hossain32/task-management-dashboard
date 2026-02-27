import React from 'react';
import { Video } from 'lucide-react';

const Reminders = () => {
    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow flex flex-col gap-4 h-full">
            <h2 className="text-base font-bold text-[#0D1611]">Reminders</h2>

            <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0D1611] leading-snug mb-2">
                    Meeting with Arc<br />Company
                </h3>
                <p className="text-sm text-secondary mb-4">
                    Time : 02.00 pm – 04.00 pm
                </p>
            </div>

            <button className="flex items-center justify-center gap-2 bg-[#064E3B] hover:bg-primary text-white text-sm font-semibold px-5 py-3 rounded-xl w-full transition-colors cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video size={13} className="text-white" />
                </div>
                Start Meeting
            </button>
        </div>
    );
};

export default Reminders;
