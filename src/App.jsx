import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

import InfoModal from "./components/InfoModal";
import MuscleInfoPanel from "./components/MuscleInfoPanel";
import CirculatoryInfoPanel from "./components/CirculatoryInfoPanel";
import NervousInfoPanel from "./components/NervousInfoPanel";

import { anatomySystems } from "./data/anatomySystems";
import { navText } from "./data/navText";
import { UnderConstructionBanner } from "./components/UnderConstructionBanner";

export default function App() {
  const [view, setView] = useState("home");
  const [selectedPart, setSelectedPart] = useState(null);
  const [lang, setLang] = useState("sq");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = navText[lang];

  const system = anatomySystems[view];
  const ActiveSystem = system.component;
  const camera = system.camera;
  const isSplit = system.layout === "split";
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "#020617",
      }}
    >
      {/* ===== TOP NAVBAR ===== */}
      <div
        style={{
          height: isMobile ? "auto" : 70,
          background: "#0b1220",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "10px 15px" : "0 20px",
          flexShrink: 0,
          flexWrap: isMobile ? "wrap" : "nowrap",
          gap: isMobile ? 10 : 20,
        }}
      >
        {/* LOGO */}
        <img
          src={"../src/assets/school_logo.jpg"}
          alt="Anatomy App Logo"
          style={{
            height: isMobile ? 40 : 50,
            cursor: "pointer",
            flexShrink: 0,
          }}
        />

        {/* HAMBURGER MENU FOR MOBILE */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#e5e7eb",
              fontSize: 24,
              cursor: "pointer",
              padding: 0,
              marginLeft: "auto",
            }}
          >
            ☰
          </button>
        )}

        {/* NAV TABS — HIDDEN ON MOBILE UNLESS MENU OPEN */}
        {(!isMobile || mobileMenuOpen) && (
          <div
            style={{
              display: "flex",
              gap: isMobile ? 8 : 10,
              flexWrap: "wrap",
              width: isMobile ? "100%" : "auto",
              order: isMobile ? 3 : 0,
            }}
          >
            <TabButton
              active={view === "home"}
              onClick={() => {
                setView("home");
                setSelectedPart(null);
                setMobileMenuOpen(false);
              }}
              isMobile={isMobile}
            >
              {t.home}
            </TabButton>

            <TabButton
              active={view === "skeleton"}
              onClick={() => {
                setView("skeleton");
                setSelectedPart(null);
                setMobileMenuOpen(false);
              }}
              isMobile={isMobile}
            >
              {t.skeleton}
            </TabButton>

            <TabButton
              active={view === "muscles"}
              onClick={() => {
                setView("muscles");
                setSelectedPart(null);
                setMobileMenuOpen(false);
              }}
              isMobile={isMobile}
            >
              {t.muscles}
            </TabButton>

            <TabButton
              active={view === "organs"}
              onClick={() => {
                setView("organs");
                setSelectedPart(null);
                setMobileMenuOpen(false);
              }}
              isMobile={isMobile}
            >
              {t.organs}
            </TabButton>

            <TabButton
              active={view === "circulatory"}
              onClick={() => {
                setView("circulatory");
                setSelectedPart(null);
                setMobileMenuOpen(false);
              }}
              isMobile={isMobile}
            >
              {t.circulatory}
            </TabButton>

            <TabButton
              active={view === "nervous"}
              onClick={() => {
                setView("nervous");
                setSelectedPart(null);
                setMobileMenuOpen(false);
              }}
              isMobile={isMobile}
            >
              {t.nervous}
            </TabButton>
          </div>
        )}

        {/* RIGHT — LANGUAGE */}
        <div
          style={{ display: "flex", gap: 8, marginLeft: isMobile ? "auto" : 0 }}
        >
          <LangButton active={lang === "en"} onClick={() => setLang("en")}>
            EN
          </LangButton>
          <LangButton active={lang === "sq"} onClick={() => setLang("sq")}>
            SQ
          </LangButton>
        </div>
      </div>

      {/* ===== UNDER CONSTRUCTION BANNER ===== */}
      <UnderConstructionBanner />

      {/* ===== MAIN CONTENT ===== */}
      <div style={{ flex: 1 }}>
        {view === "home" ? (
          <ActiveSystem />
        ) : isSplit ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            {/* CANVAS */}
            <div style={{ flex: 1 }}>
              <Canvas
                camera={{
                  position: camera.position,
                  fov: camera.fov,
                  near: 0.1,
                  far: 100,
                }}
              >
                <SceneLights />
                <ActiveSystem key={view} />
                <OrbitControls target={camera.target} />
              </Canvas>
            </div>

            {/* INFO PANEL */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                borderLeft: !isMobile
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "none",
              }}
            >
              {view === "muscles" && <MuscleInfoPanel lang={lang} />}
              {view === "circulatory" && <CirculatoryInfoPanel lang={lang} />}
              {view === "nervous" && <NervousInfoPanel lang={lang} />}
            </div>
          </div>
        ) : (
          <Canvas
            camera={{
              position: camera.position,
              fov: camera.fov,
              near: 0.1,
              far: 100,
            }}
          >
            <SceneLights />
            <ActiveSystem
              key={view}
              onSelect={(payload) => setSelectedPart(payload)}
            />
            <OrbitControls target={camera.target} />
          </Canvas>
        )}
      </div>

      {/* ===== MODAL ===== */}
      {selectedPart && system.map && (
        <InfoModal
          partKey={system.map[selectedPart.id]}
          data={system.data[system.map[selectedPart.id]]}
          mesh={selectedPart.mesh}
          onClose={() => setSelectedPart(null)}
          lang={lang}
        />
      )}
    </div>
  );
}

/* ===== LIGHTS ===== */
function SceneLights() {
  return (
    <>
      <color attach="background" args={["#0b1220"]} />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, 2, 5]} intensity={0.6} />
    </>
  );
}

/* ===== UI ===== */

function TabButton({ active, children, isMobile, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: isMobile ? "6px 10px" : "8px 14px",
        borderRadius: 8,
        border: "none",
        fontSize: isMobile ? 11 : 13,
        fontWeight: 600,
        cursor: "pointer",
        background: active ? "#2563eb" : "#e5e7eb",
        color: active ? "white" : "#1f2937",
        boxShadow: active ? "0 4px 10px rgba(37,99,235,0.25)" : "none",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function LangButton({ active, children, ...props }) {
  const isMobile = window.innerWidth < 768;
  return (
    <button
      {...props}
      style={{
        width: isMobile ? 32 : 38,
        height: isMobile ? 32 : 38,
        borderRadius: "50%",
        border: "none",
        fontWeight: 700,
        fontSize: isMobile ? 10 : 12,
        cursor: "pointer",
        background: active ? "#2563eb" : "#e5e7eb",
        color: active ? "white" : "#111827",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: active ? "0 4px 10px rgba(17,24,39,0.25)" : "none",
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}
