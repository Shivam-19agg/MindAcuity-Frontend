export default function Hero() {
    return (
        <div className="space-y-8 text-left max-w-xl relative z-10 selection:bg-emerald-100">
            {/* Brand */}
            <h1 className="tracking-tighter"
                style={{
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                }}>
                MindAcuity
            </h1>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 leading-tight">
                Your safe space to breathe, reflect, and feel better.
            </h2>

            {/* Subtext */}
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
                AI-powered mental wellness built for real humans. Manage emotional overload — privately, safely, and without judgment.
            </p>
        </div>
    );
}
