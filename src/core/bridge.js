export default {

  state: {
    logs: [],
    result: null,
    running: false
  },

  getState() {
    return this.state;
  },

  init(setState) {
    this.setState = setState;
  },

  run(input) {

    this.state.running = true;

    this.state.logs.push({
      agent: "Bridge",
      msg: "Rodando: " + input
    });

    this.state.result = {
      input,
      status: "ok"
    };

    this.state.running = false;

    this.setState?.({ ...this.state });
  }
};
