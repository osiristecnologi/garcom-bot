import { useState } from "react";

export default function App() {
  const [status] = useState("ONLINE");

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>
        🧠 Agent Studio
      </h1>

      <p style={styles.subtitle}>
        Multi-Agent Intelligence System
      </p>

      <div style={styles.card}>
        <span>Status:</span>

        <span style={styles.online}>
          ● {status}
        </span>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#080810",
    color: "#E2E8F0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace"
  },

  title: {
    fontSize: "32px",
    marginBottom: "8px"
  },

  subtitle: {
    color: "#64748B",
    marginBottom: "24px"
  },

  card: {
    background: "#111122",
    border: "1px solid #222244",
    borderRadius: "12px",
    padding: "16px 24px",
    display: "flex",
    gap: "12px"
  },

  online: {
    color: "#34D399",
    fontWeight: "bold"
  }
};
