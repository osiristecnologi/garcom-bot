import { useState, useEffect } from "react";
import bridge from "./core/bridge";

export default function App() {

  const [state, setState] =
    useState(
      bridge.getState()
    );

  const [input, setInput] =
    useState(
      "bitcoin e clima em goiânia"
    );


  useEffect(() => {

    bridge.init(setState);

  }, []);


  async function run() {

    await bridge.run(
      input,
      setState
    );
  }


  return (

    <div style={styles.app}>

      <h1 style={styles.title}>
        🧠 Agent Studio
      </h1>


      <p style={styles.subtitle}>
        Multi-Agent Intelligence System
      </p>


      {/* INPUT */}
      <div style={styles.card}>

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          style={styles.input}
        />


        <button
          onClick={run}
          style={styles.button}
        >
          RUN
        </button>

      </div>


      {/* STATUS */}
      <div style={styles.card}>
        <span>Status:</span>

        <span style={styles.online}>
          ● {state.running ? "RUNNING" : "ONLINE"}
        </span>
      </div>


      {/* LOGS */}
      <div style={styles.logBox}>

        <h3>Logs</h3>

        {state.logs.map((l, i) => (
          <div key={i}>
            [{l.agent}] {l.msg}
          </div>
        ))}

      </div>


      {/* RESULT */}
      {state.result && (

        <div style={styles.result}>

          <h3>Result</h3>

          <pre>
            {JSON.stringify(
              state.result,
              null,
              2
            )}
          </pre>

        </div>

      )}

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
    padding: "40px",
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
    padding: "16px",
    display: "flex",
    gap: "12px",
    marginBottom: "16px",
    width: "400px"
  },


  input: {
    flex: 1,
    background: "#0a0a14",
    border: "1px solid #2a2a44",
    color: "#fff",
    padding: "8px",
    borderRadius: "8px"
  },


  button: {
    background: "#6366F1",
    border: "none",
    padding: "8px 16px",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer"
  },


  online: {
    color: "#34D399",
    fontWeight: "bold"
  },


  logBox: {
    width: "400px",
    background: "#0a0a14",
    border: "1px solid #222244",
    borderRadius: "12px",
    padding: "12px",
    marginBottom: "16px",
    maxHeight: "200px",
    overflow: "auto"
  },


  result: {
    width: "400px",
    background: "#0a0a14",
    border: "1px solid #222244",
    borderRadius: "12px",
    padding: "12px"
  }

};
