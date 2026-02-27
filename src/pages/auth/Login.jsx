import React from 'react';
import { Mail, Lock, ArrowRight, Github, Chrome, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0A1612]">
            {/* Background Decorative Elements with Pure CSS Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1100px] flex flex-col md:flex-row items-stretch justify-center p-4 sm:p-6 fade-in-up">
                {/* Left Side: Brand Info */}
                <div className="hidden lg:flex flex-col justify-center flex-1 pr-16 text-white slide-in-left">
                    <div>
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-white/10 ring-1 ring-white/20">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                                <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
                            </svg>
                        </div>
                        <h1 className="text-7xl font-black tracking-tighter mb-8 leading-[1.1] drop-shadow-2xl">
                            Master your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-secondary to-primary">workflow</span> pronto.
                        </h1>
                        <p className="text-white/60 text-xl max-w-md leading-relaxed font-medium">
                            The next generation of task management. Simple, fast, and engineered for high-performance teams.
                        </p>
                    </div>

                    <div className="mt-20 flex items-center gap-6 opacity-80 scale-in">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 40}`} className="w-12 h-12 rounded-full border-2 border-[#0A1612] shadow-lg" alt="user" />
                            ))}
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg leading-none">10k+ Users</p>
                            <p className="text-white/40 text-sm mt-1">Trusting Donezo daily</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full max-w-[480px] mx-auto slide-in-right">
                    <div className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[48px] p-8 md:p-14 shadow-[0_32px_80px_rgba(0,0,0,0.5)] relative overflow-hidden group border-t-white/20">
                        {/* Glow Effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />

                        <div className="mb-12 text-center lg:text-left">
                            <h2 className="text-4xl font-black text-white mb-3 tracking-tight">Login Account</h2>
                            <p className="text-white/50 font-medium">Elevate your productivity today.</p>
                        </div>

                        <form className="space-y-7">
                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] ml-1">Work Email</label>
                                <div className="relative group/input">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-accent transition-all duration-300" size={22} />
                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-white/5 border border-white/10 text-white font-medium rounded-3xl py-5 pl-14 pr-5 outline-none focus:border-accent/40 focus:bg-white/10 focus:ring-4 focus:ring-accent/5 transition-all duration-300 placeholder:text-white/10"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] ml-1">Secure Password</label>
                                <div className="relative group/input">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-accent transition-all duration-300" size={22} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full bg-white/5 border border-white/10 text-white font-medium rounded-3xl py-5 pl-14 pr-14 outline-none focus:border-accent/40 focus:bg-white/10 focus:ring-4 focus:ring-accent/5 transition-all duration-300 placeholder:text-white/10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all cursor-pointer p-1"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                <div className="flex justify-end pt-1">
                                    <Link to="#" className="text-sm font-bold text-accent hover:text-secondary hover:underline transition-all decoration-2">Lost Password?</Link>
                                </div>
                            </div>

                            <button className="w-full bg-linear-to-r from-primary to-secondary hover:from-primary hover:to-accent text-white font-black text-lg py-5 rounded-3xl flex items-center justify-center gap-3 transition-all active:scale-[0.97] cursor-pointer shadow-2xl shadow-primary/20 hover:shadow-primary/40 mt-4 group/btn">
                                Access Dashboard
                                <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" size={22} strokeWidth={3} />
                            </button>
                        </form>

                        <div className="my-12 flex items-center gap-5">
                            <div className="h-[1px] flex-1 bg-white/5" />
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] whitespace-nowrap">Unified Login</span>
                            <div className="h-[1px] flex-1 bg-white/5" />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white py-4 rounded-3xl transition-all cursor-pointer group/social">
                                <Chrome size={22} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-black tracking-tight">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white py-4 rounded-3xl transition-all cursor-pointer group/social">
                                <Github size={22} className="group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-black tracking-tight">Github</span>
                            </button>
                        </div>

                        <p className="mt-14 text-center text-white/40 text-[15px] font-medium">
                            New to Donezo? <Link to="#" className="text-white font-black hover:text-accent transition-all border-b-2 border-accent/30 hover:border-accent">Create Studio</Link>
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .slide-in-left { animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .slide-in-right { animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .scale-in { animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) delay 0.4s forwards; }
            `}</style>
        </div>
    );
};

export default Login;
