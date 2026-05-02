export default function OutputPanel() {
  const results = [
    {
      title: "Bitcoin",
      value: "$94,200",
      icon: "₿"
    },

    {
      title: "São Paulo",
      value: "24°C",
      icon: "🌤"
    },

    {
      title: "GitHub",
      value: "React Trending",
      icon: "🧑‍💻"
    },

    {
      title: "News",
      value: "Top Stories",
      icon: "📰"
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        📦 Agent Output
      </h2>

      <div style={styles.grid}>
        {results.map((item, index) => (
          <div key={index} style={styles.card}>
            <span style={styles.icon}>
              {item.icon}
            </span>

            <div>
              <div style={styles.name}>
                {item.title}
              </div>

              <div style={styles.value}>
                {item.value}
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
    color: "#64748B",
    fontSize: "12px"
  },

  value: {
    color: "#E2E8F0",
    fontWeight: "bold"
  }
};
