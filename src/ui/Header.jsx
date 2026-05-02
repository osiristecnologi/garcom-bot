export default function Header() {
  return (
    <header style={styles.header}>
      
      <div style={styles.left}>
        <span style={styles.logo}>
          🧠
        </span>

        <div>
          <div style={styles.title}>
            AGENT STUDIO
          </div>

          <div style={styles.sub}>
            Multi-Agent Intelligence
          </div>
        </div>
      </div>


      <div style={styles.right}>
        <button style={styles.button}>
          Dashboard
        </button>

        <button style={styles.button}>
          Pipeline
        </button>

        <button style={styles.button}>
          Tools
        </button>

        <button style={styles.button}>
          Output
        </button>

        <span style={styles.version}>
          v2.0
        </span>
      </div>

    </header>
  );
}

const styles = {
  header: {
    background: "#0a0a16",
    borderBottom: "1px solid #1a1a2e",
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px"
  },

  logo: {
    fontSize: "28px"
  },

  title: {
    color: "#E2E8F0",
    fontWeight: "bold",
    fontSize: "14px",
    letterSpacing: "0.1em"
  },

  sub: {
    color: "#64748B",
    fontSize: "11px"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  button: {
    background: "transparent",
    border: "none",
    color: "#94A3B8",
    cursor: "pointer",
    fontSize: "12px"
  },

  version: {
    color: "#6366F1",
    fontWeight: "bold",
    marginLeft: "8px"
  }
};
