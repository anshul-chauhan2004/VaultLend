import { Link, Navigate, useParams } from "react-router-dom";

type InfoSection = {
  heading: string;
  body: string;
};

type InfoPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: InfoSection[];
};

const INFO_PAGES: Record<string, InfoPageContent> = {
  markets: {
    eyebrow: "PROTOCOL",
    title: "Markets",
    intro:
      "VaultLend runs a focused lending market designed to demonstrate collateral, borrowing, supply, and repayment flows with live wallet interactions.",
    sections: [
      {
        heading: "Current setup",
        body:
          "The demo market is configured around a single collateral path and a single borrow or supply asset so the user journey stays clear during testing and presentations.",
      },
      {
        heading: "What to monitor",
        body:
          "Watch available liquidity, total borrows, utilization, health factor, and projected repayment so you can explain both account-level and pool-level state in real time.",
      },
    ],
  },
  borrow: {
    eyebrow: "PROTOCOL",
    title: "Borrow",
    intro:
      "Borrowing lets you lock collateral, open a debt position, and draw the market asset directly into your wallet through MetaMask confirmation flows.",
    sections: [
      {
        heading: "Borrow flow",
        body:
          "Deposit collateral first, confirm the transaction, then select a borrow amount within your available borrow limit and sign the borrow transaction from MetaMask.",
      },
      {
        heading: "Risk awareness",
        body:
          "As debt rises, the health factor falls. Keep positions above the liquidation threshold by repaying, adding collateral, or reducing borrowed exposure.",
      },
    ],
  },
  earn: {
    eyebrow: "PROTOCOL",
    title: "Earn",
    intro:
      "Supplying liquidity to the pool lets users earn the live supply yield generated from active borrows in the market.",
    sections: [
      {
        heading: "Supply liquidity",
        body:
          "Approve the market asset, deposit it into the pool, and track how utilization and borrow demand affect the displayed supplier yield.",
      },
      {
        heading: "Liquidity constraints",
        body:
          "Withdrawals depend on available pool liquidity. If too much capital is borrowed, some supplied funds can remain temporarily locked until liquidity returns.",
      },
    ],
  },
  liquidations: {
    eyebrow: "PROTOCOL",
    title: "Liquidations",
    intro:
      "Liquidations protect the pool when a borrower’s health factor falls below the allowed threshold.",
    sections: [
      {
        heading: "How it works",
        body:
          "A liquidator repays part of an unhealthy position and receives collateral at a bonus, reducing protocol risk while restoring solvency.",
      },
      {
        heading: "Demo purpose",
        body:
          "The liquidation interface is included to show the full lifecycle of lending positions, even in a faucet-minted test environment.",
      },
    ],
  },
  governance: {
    eyebrow: "PROTOCOL",
    title: "Governance",
    intro:
      "VaultLend does not ship with token-based governance in this demo, but the interface reserves space for protocol-level settings, parameter decisions, and upgrade discussions.",
    sections: [
      {
        heading: "Future direction",
        body:
          "In a production protocol, governance would typically control market onboarding, risk parameters, reserve settings, oracle policies, and treasury decisions.",
      },
    ],
  },
  documentation: {
    eyebrow: "DEVELOPERS",
    title: "Documentation",
    intro:
      "This project documents a Sepolia lending demo focused on wallet connectivity, faucet minting, collateral management, borrowing, repayment, and live onchain reads.",
    sections: [
      {
        heading: "Core surfaces",
        body:
          "The main documented areas are smart contract deployment, frontend contract wiring, wallet flows, and transaction-state feedback inside the app.",
      },
      {
        heading: "Suggested additions",
        body:
          "A fuller documentation set could include architecture diagrams, contract interfaces, deployment steps, and user-operation walkthroughs with screenshots.",
      },
    ],
  },
  "bug-bounty": {
    eyebrow: "DEVELOPERS",
    title: "Bug Bounty",
    intro:
      "No formal bug bounty program is active for this demo deployment, but the page is included as a placeholder for future security reporting processes.",
    sections: [
      {
        heading: "Security reports",
        body:
          "If this evolves into a public beta or production protocol, a bug bounty page should define scope, reporting channels, severity tiers, exclusions, and disclosure rules.",
      },
    ],
  },
  audits: {
    eyebrow: "DEVELOPERS",
    title: "Audits",
    intro:
      "This demo is intended for learning, testing, and portfolio presentation. It should not be represented as production-audited financial infrastructure.",
    sections: [
      {
        heading: "Audit posture",
        body:
          "Before production use, contracts would need a formal security review, stronger oracle controls, stricter token permissions, supply-share accounting, and full integration testing.",
      },
    ],
  },
  "brand-kit": {
    eyebrow: "DEVELOPERS",
    title: "Brand Kit",
    intro:
      "The VaultLend identity in this demo centers on a dark trading-terminal aesthetic, neon green accents, and simple protocol-first typography.",
    sections: [
      {
        heading: "Visual direction",
        body:
          "If you package this for public presentation, the brand kit page can later hold logos, icons, usage rules, colors, screenshots, and demo presentation assets.",
      },
    ],
  },
  discord: {
    eyebrow: "COMMUNITY",
    title: "Discord",
    intro:
      "A Discord server is not currently configured for this demo, but the page is reserved so community support and feedback can be added later.",
    sections: [
      {
        heading: "Use case",
        body:
          "For a live project, Discord can host user onboarding, issue triage, announcements, governance discussion, and demo walkthrough support.",
      },
    ],
  },
  twitter: {
    eyebrow: "COMMUNITY",
    title: "Twitter / X",
    intro:
      "A public social account is not currently linked for this project. This placeholder page keeps the footer structure complete and ready for later branding.",
    sections: [
      {
        heading: "Recommended use",
        body:
          "A project feed can share releases, deployment updates, demo clips, milestone posts, and risk or maintenance notices.",
      },
    ],
  },
  telegram: {
    eyebrow: "COMMUNITY",
    title: "Telegram",
    intro:
      "Telegram is not yet configured for VaultLend, but this page can later support lightweight community updates and support routing.",
    sections: [
      {
        heading: "Operational fit",
        body:
          "Telegram usually works best for quick announcements, community alerts, and high-level support, while deeper documentation should stay elsewhere.",
      },
    ],
  },
  blog: {
    eyebrow: "COMMUNITY",
    title: "Blog",
    intro:
      "The blog page is a placeholder for future writeups on architecture, product direction, deployment notes, and demo milestones.",
    sections: [
      {
        heading: "Potential content",
        body:
          "You can use a blog to explain lending concepts, share implementation decisions, publish changelogs, and document how the protocol evolved over time.",
      },
    ],
  },
  newsletter: {
    eyebrow: "COMMUNITY",
    title: "Newsletter",
    intro:
      "No newsletter is currently configured, but the route is in place so the project can support release summaries and deployment updates later.",
    sections: [
      {
        heading: "Best use",
        body:
          "A newsletter is useful for low-frequency updates aimed at reviewers, collaborators, and demo viewers who want periodic progress without joining chat channels.",
      },
    ],
  },
  terms: {
    eyebrow: "LEGAL",
    title: "Terms of Service",
    intro:
      "VaultLend is presented as a testnet demo. It is for educational, development, and demonstration use only and does not represent a production financial service.",
    sections: [
      {
        heading: "Use restrictions",
        body:
          "Users should not treat the application as audited investment infrastructure, should not rely on it for custody of real-value assets, and should not expect uptime or support guarantees.",
      },
      {
        heading: "No warranty",
        body:
          "The software is provided as-is, without guarantees of correctness, availability, fitness for a particular purpose, or protection from loss caused by misuse or software defects.",
      },
    ],
  },
  privacy: {
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    intro:
      "This demo does not intentionally collect personal profile data through an application backend, but wallet addresses and public blockchain activity are visible onchain by design.",
    sections: [
      {
        heading: "Public blockchain data",
        body:
          "Transactions, wallet addresses, approvals, borrows, repayments, and collateral movements on Sepolia are publicly inspectable through standard blockchain explorers.",
      },
      {
        heading: "Third-party tools",
        body:
          "Wallet software, RPC providers, hosting services, and analytics tooling may process technical information independently under their own policies.",
      },
    ],
  },
  risk: {
    eyebrow: "LEGAL",
    title: "Risk Disclosure",
    intro:
      "VaultLend is a smart contract demo and carries software risk, dependency risk, oracle risk, UI risk, and network risk, even when used only with faucet-minted assets.",
    sections: [
      {
        heading: "Demo-specific risk",
        body:
          "Balances may be reset after redeployment, mock tokens can behave differently from production assets, and protocol assumptions can change while features are under active development.",
      },
      {
        heading: "Smart contract risk",
        body:
          "Bugs, arithmetic edge cases, permission errors, and integration mismatches can cause unexpected outcomes. No user should assume perfect financial accuracy in an evolving demo system.",
      },
    ],
  },
  cookies: {
    eyebrow: "LEGAL",
    title: "Cookie Policy",
    intro:
      "VaultLend itself does not depend on a full account-based cookie system, but browsers, wallets, and hosting environments may store local data or session information.",
    sections: [
      {
        heading: "Local storage and sessions",
        body:
          "Wallet connectors, UI preferences, and session-related state may rely on browser-managed storage even if no dedicated backend account system is present.",
      },
    ],
  },
};

export function InfoPage() {
  const { slug } = useParams<{ slug: string }>();

  const page = slug ? INFO_PAGES[slug] : undefined;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#040d08",
        padding: "120px 32px 56px",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          style={{
            padding: 28,
            borderRadius: 24,
            border: "1px solid rgba(0,232,150,0.12)",
            background: "linear-gradient(135deg, rgba(7,24,16,0.92) 0%, rgba(4,14,9,0.96) 100%)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
            marginBottom: 24,
          }}
        >
          <p style={{ color: "#00e896", fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
            {page.eyebrow}
          </p>
          <h1
            style={{
              color: "#fff",
              fontSize: 48,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 800,
              marginBottom: 18,
            }}
          >
            {page.title}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 16, lineHeight: 1.8 }}>
            {page.intro}
          </p>
        </div>

        <div style={{ display: "grid", gap: 18 }}>
          {page.sections.map((section) => (
            <section
              key={section.heading}
              style={{
                padding: 22,
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                {section.heading}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.64)", fontSize: 15, lineHeight: 1.75 }}>
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div style={{ marginTop: 28 }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 18px",
              borderRadius: 999,
              border: "1px solid rgba(0,232,150,0.18)",
              background: "rgba(0,232,150,0.08)",
              color: "#00e896",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
