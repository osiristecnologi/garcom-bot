export default function Dashboard() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        🧠 Agent Dashboard
      </h2>

      <p style={styles.subtitle}>
        Sistema multi-agent inicializado.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <span>🧩 Parser Agent</span>
          <span style={styles.online}>● Online</span>
        </div>

        <div style={styles.card}>
          <span>🔀 Router Agent</span>
          <span style={styles.online}>● Online</span>
        </div>

        <div style={styles.card}>
          <span>⚙️ Executor Agent</span>
          <span style={styles.online}>● Online</span>
        </div>

        <div style={styles.card}>
          <span>📦 Builder Agent</span>
          <span style={styles.online}>● Online</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px"
  },

  title: {
    fontSize: "24px",
    marginBottom: "8px"
  },

  subtitle: {
    color: "#64748B",
    marginBottom: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "16px"
  },

  card: {
    background: "#111122",
    border: "1px solid #222244",
    borderRadius: "12px",
    padding: "16px",
    color: "#E2E8F0",
    display: "flex",
    justifyContent: "space-between"
  },

  online: {
    color: "#34D399",
    fontWeight: "bold"
  }
};
