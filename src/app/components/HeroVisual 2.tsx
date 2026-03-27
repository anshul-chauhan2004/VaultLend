export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full" style={{ minHeight: 480 }}>
      {/* Outer ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,232,150,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Rotating outer ring */}
      <div
        style={{
          position: "absolute",
          width: 440,
          height: 440,
          borderRadius: "50%",
          border: "1px solid rgba(0, 232, 150, 0.12)",
          animation: "spinSlow 30s linear infinite",
        }}
      >
        {/* Orbital dot */}
        <div
          style={{
            position: "absolute",
            top: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#00e896",
            boxShadow: "0 0 12px rgba(0,232,150,0.9)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -5,
            left: "40%",
            transform: "translateX(-50%)",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(0,232,150,0.5)",
            boxShadow: "0 0 8px rgba(0,232,150,0.6)",
          }}
        />
      </div>

      {/* Second rotating ring */}
      <div
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          border: "1px solid rgba(0, 232, 150, 0.18)",
          animation: "spinSlow 22s linear infinite reverse",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: -5,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#00e896",
            boxShadow: "0 0 10px rgba(0,232,150,0.8)",
          }}
        />
      </div>

      {/* Third ring */}
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          border: "1px dashed rgba(0, 232, 150, 0.15)",
          animation: "spinSlow 18s linear infinite",
        }}
      />

      {/* Inner glowing core */}
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,100,0.25) 0%, rgba(0,100,50,0.15) 50%, transparent 80%)",
          border: "1px solid rgba(0,232,150,0.3)",
          boxShadow: "0 0 60px rgba(0,232,150,0.2), inset 0 0 40px rgba(0,232,150,0.1)",
        }}
      />

      {/* Center hexagon shape */}
      <div
        style={{
          position: "relative",
          width: 120,
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <defs>
            <radialGradient id="hexGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00e896" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#004d30" stopOpacity="0.8" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="60,8 104,32 104,80 60,104 16,80 16,32"
            fill="url(#hexGrad)"
            stroke="#00e896"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          <polygon
            points="60,24 88,40 88,72 60,88 32,72 32,40"
            fill="rgba(0,232,150,0.1)"
            stroke="rgba(0,232,150,0.5)"
            strokeWidth="1"
          />
          {/* Dollar / currency lines */}
          <line x1="60" y1="40" x2="60" y2="80" stroke="#00e896" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
          <path d="M48 50 Q60 44 72 50 Q60 56 48 62 Q60 68 72 74" stroke="#00e896" strokeWidth="2" fill="none" strokeLinecap="round" filter="url(#glow)" />
        </svg>
      </div>

      {/* Floating token badges */}
      <TokenBadge label="ETH" value="$3,210" top={60} left={30} delay="0s" />
      <TokenBadge label="USDC" value="1.000" top={120} right={20} delay="0.4s" />
      <TokenBadge label="WBTC" value="$67,400" bottom={100} left={20} delay="0.8s" />
      <TokenBadge label="APY" value="8.4%" bottom={60} right={40} delay="1.2s" />

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}

function TokenBadge({
  label,
  value,
  top,
  bottom,
  left,
  right,
  delay,
}: {
  label: string;
  value: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  delay: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: top !== undefined ? top : undefined,
        bottom: bottom !== undefined ? bottom : undefined,
        left: left !== undefined ? left : undefined,
        right: right !== undefined ? right : undefined,
        background: "rgba(0, 30, 18, 0.85)",
        border: "1px solid rgba(0, 232, 150, 0.25)",
        backdropFilter: "blur(12px)",
        borderRadius: 12,
        padding: "8px 14px",
        animation: `floatBadge 4s ease-in-out infinite`,
        animationDelay: delay,
        boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 10px rgba(0,232,150,0.08)",
      }}
    >
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: "0.08em" }}>{label}</div>
      <div style={{ color: "#00e896", fontSize: 13, fontWeight: 600, marginTop: 1 }}>{value}</div>
    </div>
  );
}
