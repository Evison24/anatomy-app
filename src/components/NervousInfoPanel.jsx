import { nervousOverview } from "../data/nervous/nervousOverview";
import { uiText } from "../data/i18n";

export default function NervousInfoPanel({ lang }) {
  const ui = uiText[lang];
  const t = nervousOverview[lang];

  return (
    <div
      style={{
        padding: "20px 24px",
        background: "#020617",
        color: "#e5e7eb",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <h2 style={{ marginBottom: 8 }}>{t.title}</h2>
      <p style={{ opacity: 0.9, marginBottom: 16 }}>{t.description}</p>

      {t.sections.map((section) => (
        <div key={section.title} style={{ marginBottom: 20 }}>
          <h3 style={{ marginBottom: 6 }}>{section.title}</h3>
          <p style={{ marginBottom: 6 }}>{section.info}</p>

          {section.points && (
            <ul style={{ paddingLeft: 18, marginBottom: 6 }}>
              {section.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}

          {section.diseases && (
            <p style={{ fontSize: 13, opacity: 0.85 }}>
              <b>{ui.commonIssues}:</b> {section.diseases.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
