import eventBus from "./eventBus";
import pipeline from "./pipeline";


const bridge = {

  listeners:
    [],


  state: {

    logs:
      [],

    result:
      null,

    running:
      false
  },


  init(
    onUpdate
  ) {

    // conecta UI ao eventBus

    eventBus.on(
      "log",
      (
        data
      ) => {

        this.state.logs.push(
          data
        );


        if (
          onUpdate
        ) {

          onUpdate(
            this.state
          );
        }
      }
    );


    this.listeners.push(
      onUpdate
    );
  },


  async run(
    input,
    onUpdate
  ) {

    this.state.running =
      true;


    this.state.logs =
      [];


    this.state.result =
      null;


    if (
      onUpdate
    ) {

      onUpdate(
        this.state
      );
    }


    const result =
      await pipeline.run(
        input
      );


    this.state.result =
      result;


    this.state.running =
      false;


    if (
      onUpdate
    ) {

      onUpdate(
        this.state
      );
    }


    return result;
  },


  getState() {

    return this.state;
  },


  clear() {

    this.state.logs =
      [];

    this.state.result =
      null;

    this.state.running =
      false;
  }

};


export default
  bridge;
