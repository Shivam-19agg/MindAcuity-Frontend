"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function WaitlistForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("not_on_waitlist") === "true") {
            setStatus("error");
            setMessage("You are not registered yet. Please join the waitlist.");
            const emailParam = searchParams.get("email");
            if (emailParam) setEmail(emailParam);
        }
        if (searchParams.get("error") === "oauth_failed") {
            setStatus("error");
            setMessage("Google Login failed. Please try again.");
        }
    }, [searchParams]);

    const handleJoinWaitlist = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch("http://localhost:8000/waitlist/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Something went wrong");
            }

            setStatus("success");
            setMessage("You're on the waitlist. Continue with Google to enter.");
            setName("");
            setEmail("");
        } catch (error: any) {
            setStatus("error");
            setMessage(error.message);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/auth/google";
    };

    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto transition-all duration-500 ease-out"
            style={{
                background: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(40px)', // High-end glass
                WebkitBackdropFilter: 'blur(40px)',
                borderRadius: '32px',
                boxShadow: '0 25px 80px -20px rgba(5, 150, 105, 0.15), 0 0 0 1px rgba(255,255,255,0.6) inset', // Soft emerald shadow + shine border
                padding: '3rem 2.5rem', // Refined padding
            }}>

            {/* Header */}
            <div className="text-center mb-8">
                <h3 className="text-4xl font-extrabold text-slate-800 tracking-tight font-[family-name:var(--font-varela)] mb-3">
                    Reserve Your Sanctuary
                </h3>
                <p className="text-slate-500 text-lg font-medium font-[family-name:var(--font-nunito)]">
                    Join early access to MindAcuity.
                </p>
            </div>

            <form onSubmit={handleJoinWaitlist} className="space-y-6 flex flex-col">
                {/* Full Name Input */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Legal Name</label>
                    <div className="flex items-center gap-4 bg-white/80 border-2 border-slate-100 rounded-2xl focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-400/10 transition-all px-6 py-1 shadow-sm hover:border-emerald-200 group">
                        <div className="text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            required
                            className="w-full py-4 bg-transparent text-slate-800 placeholder:text-slate-400 outline-none font-medium text-lg font-sans"
                            disabled={status === "loading" || status === "success"}
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Primary Endpoint</label>
                    <div className="flex items-center gap-4 bg-white/80 border-2 border-slate-100 rounded-2xl focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-400/10 transition-all px-6 py-1 shadow-sm hover:border-emerald-200 group">
                        <div className="text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                            <svg className="h-6 w-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required
                            className="w-full py-4 bg-transparent text-slate-800 placeholder:text-slate-400 outline-none font-medium text-lg font-sans"
                            disabled={status === "loading" || status === "success"}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full py-5 rounded-2xl text-white font-bold text-xl transition-all shadow-[0_10px_30px_-10px_rgba(5,150,105,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(5,150,105,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] relative overflow-hidden group cursor-pointer"
                    style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    }}
                >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        {status === "loading" ? "Securing..." : "Secure My Spot"}
                        {!status.includes("loading") && (
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        )}
                    </span>
                </button>

                {status === "success" && (
                    <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl text-base text-center border border-emerald-100 font-bold animate-fade-in-up flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {message}
                    </div>
                )}

                {status === "error" && (
                    <div className="p-4 bg-rose-50 text-rose-700 rounded-xl text-base text-center border border-rose-100 font-bold animate-fade-in-up flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {message}
                    </div>
                )}
            </form>

            {/* Divider */}
            <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold tracking-widest uppercase bg-transparent px-2">Or continue with</span>
                <div className="flex-grow border-t border-slate-200"></div>
            </div>

            {/* Google Button */}
            <button
                onClick={handleGoogleLogin}
                className="w-full py-5 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-4 cursor-pointer group shadow-sm active:scale-[0.98]"
            >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="group-hover:text-slate-900 transition-colors">Google</span>
            </button>
        </div >
    );
}
