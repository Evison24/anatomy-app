export default function ViewSelector({ view, setView }) {
  const buttonStyle = (type) => ({
    padding: "8px 14px",
    marginRight: 8,
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    background: view === type ? "#2563eb" : "#e5e7eb",
    color: view === type ? "white" : "black",
    fontWeight: 500,
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 16,
        left: 16,
        zIndex: 10,
        background: "white",
        padding: 10,
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <button
        style={buttonStyle("skeleton")}
        onClick={() => setView("skeleton")}
      >
        Skeleton
      </button>
      <button style={buttonStyle("muscles")} onClick={() => setView("muscles")}>
        Muscles
      </button>
      <button style={buttonStyle("organs")} onClick={() => setView("organs")}>
        Organs
      </button>
      <button
        style={buttonStyle("circulatory")}
        onClick={() => setView("circulatory")}
      >
        Circulatory
      </button>

      <button style={buttonStyle("nervous")} onClick={() => setView("nervous")}>
        Nervous
      </button>
    </div>
  );
}
