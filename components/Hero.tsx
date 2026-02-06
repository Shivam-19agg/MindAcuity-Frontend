export default function Hero() {
    return (
        <div className="space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0 relative z-10 selection:bg-emerald-100">
            {/* Brand */}
            <h1 className="tracking-tighter"
                style={{
                    fontSize: 'clamp(2.75rem, 5vw, 4.25rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    background: 'linear-gradient(135deg, #2F9E7D 0%, #7ED6A6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                }}>
                MindAcuity
            </h1>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
                Your safe space to breathe, reflect, and feel better.
            </h2>

            {/* Subtext */}
            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                AI-powered mental wellness built for real humans.
            </p>
        </div>
    );
}
