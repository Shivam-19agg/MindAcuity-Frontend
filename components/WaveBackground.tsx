"use client";

export default function WaveBackground() {
    return (
        <div className="wave-container"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0, // Changed from -1 to 0 (since main is transparent now, this acts as bg)
                pointerEvents: 'none',
                background: 'radial-gradient(circle at 50% 30%, #F7FCFA 0%, #E9F7F1 70%, #F7FCFA 100%)',
                overflow: 'hidden'
            }}>

            {/* Deep Layer */}
            <div style={{
                position: 'absolute',
                bottom: '-10vh',
                left: 0,
                width: '100%',
                height: '65vh',
                opacity: 0.8, // Boosted opacity
                animation: 'fluid-wave 25s ease-in-out infinite'
            }}>
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: '#E9F7F1' }}>
                    <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Middle Layer */}
            <div style={{
                position: 'absolute',
                bottom: '-5vh',
                left: 0,
                width: '100%',
                height: '55vh',
                opacity: 0.6,
                animation: 'fluid-wave 18s ease-in-out infinite reverse'
            }}>
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: '#7ED6A6' }}>
                    <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Front Layer */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '45vh',
                opacity: 0.4,
                animation: 'fluid-wave 12s ease-in-out infinite'
            }}>
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: '#2F9E7D' }}>
                    <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,149.3C1248,117,1344,117,1392,117.3L1440,117L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
}
