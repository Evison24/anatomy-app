import { muscleOverview } from "../data/muscles/muscleOverview";
import { uiText } from "../data/i18n";

export default function MuscleInfoPanel({ lang }) {
  const ui = uiText[lang];
  const t = muscleOverview[lang];

  return (
    <div
      style={{
        padding: "20px 24px",
        background: "#020617",
        color: "#e5e7eb",
        height: "100%",
        overflowY: "auto",
        borderLeft:
          window.innerWidth >= 768
            ? "1px solid rgba(255,255,255,0.08)"
            : "none",
      }}
    >
      <h2 style={{ marginBottom: 8 }}>{t.title}</h2>
      <p style={{ opacity: 0.9, marginBottom: 16 }}>{t.description}</p>

      {t.groups.map((group) => (
        <div key={group.name} style={{ marginBottom: 14 }}>
          <strong>{group.name}</strong>
          <p style={{ margin: "4px 0" }}>{group.info}</p>
          <p style={{ fontSize: 13, opacity: 0.85 }}>
            <b>{ui.commonIssues}:</b> {group.issues.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
