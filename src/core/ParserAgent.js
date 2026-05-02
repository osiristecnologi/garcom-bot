import bus from "./EventBus";

import {
  detectIntent
} from "./IntentEngine";


class ParserAgent {

  constructor() {

    this.name =
      "Parser Agent";

    this.status =
      "online";
  }


  // =====================
  // PARSE
  // =====================
  parse(
    userInput = ""
  ) {

    bus.emit(
      "parser:start",
      {
        agent: this.name,
        query: userInput
      }
    );


    const intents =
      detectIntent(
        userInput
      );


    bus.emit(
      "parser:finished",
      {
        agent: this.name,
        intents
      }
    );


    return intents;
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


const parserAgent =
  new ParserAgent();


export default
  parserAgent;
