import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { uiText } from "../data/i18n";
import { useGLTF } from "@react-three/drei";
import { skeletonPartModels } from "../data/skeleton/skeletonPartModels";
import { organsPartModels } from "../data/organs/organsPartModels";

export default function InfoModal({ data, mesh, onClose, lang, partKey }) {
  const t = data?.[lang];
  const ui = uiText[lang];
  const isMobile = window.innerWidth < 768;

  function PartModel({ url, scale = 0.4 }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={scale} />;
  }

  if (!t) {
    return (
      <div style={overlayStyle} onClick={onClose}>
        <div style={modalStyle(isMobile)} onClick={(e) => e.stopPropagation()}>
          <h2>Information not available</h2>
          <p>This body part has not been documented yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle(isMobile)} onClick={(e) => e.stopPropagation()}>
        {/* ===== 3D MODEL (TOP ON MOBILE, LEFT ON DESKTOP) ===== */}
        <div style={threeContainerStyle(isMobile)}>
          <Canvas camera={{ position: [3, 0, 3] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            {skeletonPartModels[partKey] ? (
              <PartModel url={skeletonPartModels[partKey]} />
            ) : organsPartModels[partKey] ? (
              <PartModel url={organsPartModels[partKey]} scale={1.9} />
            ) : (
              <primitive object={mesh.clone()} scale={1.4} />
            )}

            <OrbitControls enablePan={false} />
          </Canvas>
        </div>

        {/* ===== INFO (SCROLLABLE ALWAYS) ===== */}
        <div style={contentStyle}>
          <h2 style={titleStyle}>{t.name}</h2>
          <p style={paragraphStyle}>{t.overview}</p>

          {t.structure && (
            <Section title={ui.structure}>
              <ul>
                {t.structure.map((s) => (
                  <li key={s.name}>
                    <b>{s.name}:</b> {s.description}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section title={ui.function}>
            <ul>
              {t.function.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Section>

          <Section title={ui.location}>
            <p>{t.location}</p>
          </Section>

          <Section title={ui.importance}>
            <p>{t.importance}</p>
          </Section>

          <Section title={ui.diseases}>
            {t.diseases.map((d) => (
              <div key={d.name} style={diseaseBlockStyle}>
                <strong>{d.name}</strong>
                <p>{d.description}</p>
                <p>
                  <b>{ui.causes}:</b> {d.causes.join(", ")}
                </p>
                <p>
                  <b>{ui.symptoms}:</b> {d.symptoms.join(", ")}
                </p>
                <p>
                  <b>{ui.treatment}:</b> {d.treatment}
                </p>
                {d.interesting_fact && (
                  <p>
                    <b>{ui.interesting_fact}:</b> {d.interesting_fact}
                  </p>
                )}
              </div>
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
}

/* ===== SMALL HELPERS ===== */

function Section({ title, children }) {
  return (
    <div style={{ marginTop: 16 }}>
      <h3 style={{ marginBottom: 6 }}>{title}</h3>
      {children}
    </div>
  );
}

/* ===== STYLES ===== */

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(2,6,23,0.75)",
  zIndex: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = (isMobile) => ({
  width: "92vw",
  maxWidth: 1100,
  height: "90vh", // 🔑 ALWAYS SCROLLABLE
  background: "#0b1220",
  color: "#e5e7eb",
  borderRadius: 16,
  padding: 16,
  display: "flex", // 🔑 FLEX instead of GRID
  flexDirection: isMobile ? "column" : "row", // 🔑 STACK ON MOBILE
  gap: 16,
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
});

const threeContainerStyle = (isMobile) => ({
  height: isMobile ? 220 : "100%",
  width: isMobile ? "100%" : "40%",
  background: "#020617",
  borderRadius: 12,
  overflow: "hidden",
  flexShrink: 0,
});

const contentStyle = {
  flex: 1,
  overflowY: "auto", // 🔑 ALWAYS SCROLLABLE
  paddingRight: 6,
};

const titleStyle = {
  marginBottom: 8,
  fontSize: 22,
};

const paragraphStyle = {
  opacity: 0.9,
  lineHeight: 1.6,
};

const diseaseBlockStyle = {
  marginTop: 10,
  paddingBottom: 10,
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};
