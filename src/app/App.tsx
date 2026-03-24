import { useEffect } from "react";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { wagmiConfig } from "@/config/wagmi";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AppDashboard } from "./pages/AppDashboard";
import { InfoPage } from "./pages/InfoPage";

const queryClient = new QueryClient();
const pathname =
  typeof window !== "undefined"
    ? window.location.pathname.replace(/\/+$/, "") || "/"
    : "/";
const isSubpathStaticDeployment = !["/", "/app", "/dashboard"].includes(pathname);
const Router = isSubpathStaticDeployment ? HashRouter : BrowserRouter;

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Router>
            <div style={{ background: "#040d08", overflowX: "hidden", color: "#fff" }}>
              <ScrollToTop />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<AppDashboard />} />
                <Route path="/dashboard" element={<AppDashboard />} />
                <Route path="/pages/:slug" element={<InfoPage />} />
              </Routes>
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
