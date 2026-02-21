import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

import InfoModal from "./components/InfoModal";
import MuscleInfoPanel from "./components/MuscleInfoPanel";
import CirculatoryInfoPanel from "./components/CirculatoryInfoPanel";
import NervousInfoPanel from "./components/NervousInfoPanel";

import { anatomySystems } from "./data/anatomySystems";
import { navText } from "./data/navText";

export default function App() {
  const [view, setView] = useState("skeleton");
  const [selectedPart, setSelectedPart] = useState(null);
  const [lang, setLang] = useState("en");

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
          height: 70,
          background: "#0b1220",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          flexShrink: 0,
        }}
      >
        {/* LEFT — NAV TABS */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <TabButton
            active={view === "skeleton"}
            onClick={() => {
              setView("skeleton");
              setSelectedPart(null);
            }}
          >
            {t.skeleton}
          </TabButton>

          <TabButton
            active={view === "muscles"}
            onClick={() => {
              setView("muscles");
              setSelectedPart(null);
            }}
          >
            {t.muscles}
          </TabButton>

          <TabButton
            active={view === "organs"}
            onClick={() => {
              setView("organs");
              setSelectedPart(null);
            }}
          >
            {t.organs}
          </TabButton>

          <TabButton
            active={view === "circulatory"}
            onClick={() => {
              setView("circulatory");
              setSelectedPart(null);
            }}
          >
            {t.circulatory}
          </TabButton>

          <TabButton
            active={view === "nervous"}
            onClick={() => {
              setView("nervous");
              setSelectedPart(null);
            }}
          >
            {t.nervous}
          </TabButton>
        </div>

        {/* RIGHT — LANGUAGE */}
        <div style={{ display: "flex", gap: 8 }}>
          <LangButton active={lang === "en"} onClick={() => setLang("en")}>
            EN
          </LangButton>
          <LangButton active={lang === "sq"} onClick={() => setLang("sq")}>
            SQ
          </LangButton>
        </div>
      </div>

      {/* ===== UNDER CONSTRUCTION BANNER ===== */}
      <div
        style={{
          background: "#fbbf24",
          color: "#92400e",
          textAlign: "center",
          padding: "10px",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        🚧 Kjo faqe është në ndërtim. Disa funksionalitete mund të jenë të
        paplota ose të ndryshojnë gjatë përditësimeve të ardhshme.
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div style={{ flex: 1 }}>
        {isSplit ? (
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

function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: "8px 14px",
        borderRadius: 8,
        border: "none",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        background: active ? "#2563eb" : "#e5e7eb",
        color: active ? "white" : "#1f2937",
        boxShadow: active ? "0 4px 10px rgba(37,99,235,0.25)" : "none",
      }}
    >
      {children}
    </button>
  );
}

function LangButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        border: "none",
        fontWeight: 700,
        cursor: "pointer",
        background: active ? "#111827" : "#e5e7eb",
        color: active ? "white" : "#111827",
      }}
    >
      {children}
    </button>
  );
}
