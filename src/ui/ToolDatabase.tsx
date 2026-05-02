const tools = [
  {
    name: "CoinGecko API",
    category: "Crypto",
    icon: "₿"
  },

  {
    name: "Open-Meteo API",
    category: "Weather",
    icon: "🌤"
  },

  {
    name: "GitHub API",
    category: "Dev",
    icon: "🧑‍💻"
  },

  {
    name: "HackerNews API",
    category: "News",
    icon: "📰"
  },

  {
    name: "OpenStreetMap",
    category: "Maps",
    icon: "🗺"
  }
];

export default function ToolDatabase() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        ⚡ Tool Database
      </h2>

      <div style={styles.grid}>
        {tools.map((tool, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>
              {tool.icon}
            </div>

            <div>
              <div style={styles.name}>
                {tool.name}
              </div>

              <div style={styles.category}>
                {tool.category}
              </div>
            </div>
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
    display: "flex",
    gap: "14px",
    alignItems: "center"
  },

  icon: {
    fontSize: "24px"
  },

  name: {
    color: "#E2E8F0",
    fontWeight: "bold"
  },

  category: {
    color: "#64748B",
    fontSize: "12px"
  }
};
