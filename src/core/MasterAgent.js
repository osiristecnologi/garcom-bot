import bus from "./EventBus";

import {
  runPipeline
} from "./Pipeline";


class MasterAgent {

  constructor() {

    this.name =
      "Master Agent";

    this.status =
      "online";
  }


  // =====================
  // START
  // =====================
  async execute(
    userInput = ""
  ) {

    if (!userInput) {
      return null;
    }


    bus.emit(
      "master:start",
      {
        agent: this.name,
        query: userInput
      }
    );


    const result =
      await runPipeline(
        userInput
      );


    bus.emit(
      "master:finished",
      {
        agent: this.name,
        result
      }
    );


    return result;
  }


  // =====================
  // STATUS
  // =====================
  getStatus() {

    return {
      name: this.name,
      status: this.status
    };
  }

}


const masterAgent =
  new MasterAgent();


export default
  masterAgent;
