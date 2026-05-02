export default function Pipeline() {
  const agents = [
    "🧠 Master",
    "🧩 Parser",
    "🔀 Router",
    "⚙️ Executor",
    "📦 Builder"
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        🔄 Agent Pipeline
      </h2>

      <div style={styles.row}>
        {agents.map((agent, index) => (
          <div key={index} style={styles.agentBox}>
            {agent}

            {index < agents.length - 1 && (
              <span style={styles.arrow}>
                →
              </span>
            )}
          </div>
        ))}
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
    marginBottom: "20px",
    color: "#E2E8F0"
  },

  row: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap"
  },

  agentBox: {
    background: "#111122",
    border: "1px solid #222244",
    borderRadius: "12px",
    padding: "14px 18px",
    color: "#E2E8F0",
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  arrow: {
    color: "#6366F1",
    fontWeight: "bold"
  }
};
