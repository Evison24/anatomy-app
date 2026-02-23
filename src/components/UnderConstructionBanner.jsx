import { useState } from "react";

export function UnderConstructionBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        background: "#fbbf24",
        color: "#92400e",
        textAlign: "center",
        padding: "10px",
        fontWeight: "bold",
        fontSize: "16px",
        position: "relative",
      }}
    >
      🚧 Kjo faqe është në ndërtim. Disa funksionalitete mund të jenë të paplota
      ose të ndryshojnë gjatë përditësimeve të ardhshme.
      <button
        onClick={() => setVisible(false)}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          color: "#92400e",
        }}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
