const STATUS_CARDS = [
  { label: "Borrow / Supply", value: "Mock USDC", tone: "#7dffcf", top: 74, right: 12 },
  { label: "Collateral", value: "WETH", tone: "#00e896", top: 188, left: 12 },
  { label: "State", value: "Mock Asset Demo", tone: "#9effdd", bottom: 110, left: 28 },
  { label: "Network", value: "Sepolia", tone: "#00d084", bottom: 86, right: 36 },
] as const;

export function HeroVisual() {
  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
      style={{ minHeight: 480, maxWidth: 560, margin: "0 auto" }}
    >
      <div
        style={{
          position: "relative",
          width: 520,
          height: 520,
          maxWidth: "100%",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,232,150,0.08) 0%, transparent 68%)",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 30,
            borderRadius: "50%",
            border: "1px solid rgba(0, 232, 150, 0.12)",
            animation: "spinSlow 30s linear infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#00e896",
              boxShadow: "0 0 14px rgba(0,232,150,0.9)",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 75,
            left: 75,
            width: 370,
            height: 370,
            borderRadius: "50%",
            border: "1px solid rgba(0, 232, 150, 0.18)",
            animation: "spinSlow 24s linear infinite reverse",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "18%",
              right: -6,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#00e896",
              boxShadow: "0 0 12px rgba(0,232,150,0.85)",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 117,
            left: 117,
            width: 286,
            height: 286,
            borderRadius: "50%",
            border: "1px dashed rgba(0, 232, 150, 0.15)",
            animation: "spinSlow 18s linear infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 156,
            left: 156,
            width: 208,
            height: 208,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,180,100,0.24) 0%, rgba(0,100,50,0.14) 50%, transparent 80%)",
            border: "1px solid rgba(0,232,150,0.28)",
            boxShadow: "0 0 60px rgba(0,232,150,0.18), inset 0 0 40px rgba(0,232,150,0.08)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 197,
            left: 197,
            width: 126,
            height: 126,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="126" height="126" viewBox="0 0 126 126" fill="none">
            <defs>
              <radialGradient id="hexGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00e896" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#00e896" stopOpacity="0.08" />
              </radialGradient>
            </defs>
            <path
              d="M63 10L108 36V90L63 116L18 90V36L63 10Z"
              fill="url(#hexGrad)"
              stroke="#00e896"
              strokeWidth="2.4"
            />
            <path
              d="M63 28L92 45V81L63 98L34 81V45L63 28Z"
              fill="rgba(0,232,150,0.08)"
              stroke="rgba(0,232,150,0.26)"
              strokeWidth="1.4"
            />
          </svg>

          <div
            style={{
              position: "absolute",
              color: "#00e896",
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: "drop-shadow(0 0 20px rgba(0,232,150,0.35))",
            }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle
                cx="32"
                cy="32"
                r="24"
                fill="rgba(0,232,150,0.12)"
                stroke="rgba(0,232,150,0.92)"
                strokeWidth="2.4"
              />
              <circle
                cx="32"
                cy="32"
                r="17"
                fill="rgba(0,232,150,0.08)"
                stroke="rgba(0,232,150,0.28)"
                strokeWidth="1.4"
              />
              <path
                d="M32 16L24 31L32 27L40 31L32 16Z"
                fill="#8dffca"
              />
              <path
                d="M32 49L24 34L32 38L40 34L32 49Z"
                fill="#00e896"
              />
            </svg>
          </div>
        </div>

        {STATUS_CARDS.map((card) => (
          <div
            key={card.label}
            style={{
              position: "absolute",
              zIndex: 2,
              ...(card.left !== undefined ? { left: card.left } : {}),
              ...(card.right !== undefined ? { right: card.right } : {}),
              ...(card.top !== undefined ? { top: card.top } : {}),
              ...(card.bottom !== undefined ? { bottom: card.bottom } : {}),
              minWidth: 128,
              padding: "12px 16px",
              borderRadius: 18,
              background: "rgba(5, 25, 16, 0.9)",
              border: "1px solid rgba(0,232,150,0.18)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.28)",
              backdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 11,
                marginBottom: 6,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {card.label}
            </p>
            <p style={{ color: card.tone, fontSize: 15, fontWeight: 700 }}>{card.value}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
