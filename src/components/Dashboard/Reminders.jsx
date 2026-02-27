import React from 'react';
import { Video } from 'lucide-react';

const Reminders = () => {
    return (
        <div className="bg-white rounded-2xl p-5 border border-border hover:shadow-md transition-shadow flex flex-col gap-4">
            <h2 className="text-base font-bold text-text-primary">Reminders</h2>

            <div className="flex-1">
                <h3 className="text-lg font-bold text-text-primary leading-snug mb-2">
                    Meeting with Arc<br />Company
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                    Time : 02.00 pm – 04.00 pm
                </p>
            </div>

            <button className="flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand text-white text-sm font-semibold px-5 py-3 rounded-xl w-full transition-colors cursor-pointer group">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video size={13} className="text-white" />
                </div>
                Start Meeting
            </button>
        </div>
    );
};

export default Reminders;
