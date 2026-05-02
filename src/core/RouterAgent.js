import bus from "./EventBus";

import {
  routeTools
} from "./router";


class RouterAgent {

  constructor() {

    this.name =
      "Router Agent";

    this.status =
      "online";
  }


  // =====================
  // ROUTE
  // =====================
  route(
    intents = {}
  ) {

    bus.emit(
      "router:start",
      {
        agent: this.name,
        intents
      }
    );


    const tools =
      routeTools(
        intents
      );


    bus.emit(
      "router:finished",
      {
        agent: this.name,
        tools
      }
    );


    return tools;
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


const routerAgent =
  new RouterAgent();


export default
  routerAgent;
