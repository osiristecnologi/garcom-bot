export default function StatusBar() {
  const system = {
    status: "ONLINE",
    agents: 5,
    tools: 18
  };

  return (
    <div style={styles.bar}>
      <div style={styles.left}>
        <span style={styles.online}>
          ● {system.status}
        </span>
      </div>

      <div style={styles.right}>
        <span>
          Agents: {system.agents}
        </span>

        <span>
          Tools: {system.tools}
        </span>
      </div>
    </div>
  );
}

const styles = {
  bar: {
    background: "#0a0a16",
    borderTop: "1px solid #1a1a2e",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#64748B",
    fontSize: "12px"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  right: {
    display: "flex",
    gap: "20px"
  },

  online: {
    color: "#34D399",
    fontWeight: "bold"
  }
};
