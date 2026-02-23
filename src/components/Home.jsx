export default function Home() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px",
        background: "#020617",
        backgroundImage: "url(/images/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#e5e7eb",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: 42,
          fontWeight: "bold",
          marginBottom: 12,
          color: "#fbbf24",
          textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          margin: 0,
        }}
      >
        Pazëll “Homo Sapiens”
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.4,
          maxWidth: 600,
          color: "#d1d5db",
          margin: 0,
          backgroundColor: "rgba(2, 6, 23, 0.85)",
          padding: "16px",
          borderRadius: 12,
          maxHeight: "calc(100vh - 400px)",
          overflowY: "hidden",
        }}
      >
        Ky projekt na ndihmon të kuptojmë më thellë mënyrën se si funksionon
        trupi i njeriut dhe si bashkëpunojnë organet me njëra-tjetrën për të
        mbajtur jetën. Përmes këtij pazëlli interaktiv, mësimi nuk mbetet vetëm
        teori, por kthehet në praktikë dhe eksplorim. Gjithashtu, duke punuar në
        grup, kemi zhvilluar aftësitë tona në bashkëpunim, kërkim shkencor dhe
        përdorim të teknologjisë 3D. Ne besojmë se “Pazëll Homo Sapiens” mund të
        shërbejë si një mjet edukativ i dobishëm për nxënësit e tjerë, duke i
        ndihmuar ata të mësojnë anatominë në një mënyrë më të thjeshtë, më
        kreative dhe më tërheqëse.
      </p>
    </div>
  );
}
