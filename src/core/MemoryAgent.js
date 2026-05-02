import bus from "./EventBus";


class MemoryAgent {

  constructor() {

    this.name =
      "Memory Agent";

    this.status =
      "online";

    this.memory = {
      history: [],
      lastQuery: null,
      lastIntent: null,
      lastTools: [],
      lastOutput: null
    };
  }


  // =====================
  // SAVE
  // =====================
  save(
    data = {}
  ) {

    this.memory = {
      ...this.memory,
      ...data
    };


    this.memory
      .history
      .push({
        timestamp:
          Date.now(),

        ...data
      });


    bus.emit(
      "memory:saved",
      {
        agent: this.name,
        memory: this.memory
      }
    );
  }


  // =====================
  // LOAD
  // =====================
  load() {

    bus.emit(
      "memory:loaded",
      {
        agent: this.name
      }
    );

    return this.memory;
  }


  // =====================
  // CLEAR
  // =====================
  clear() {

    this.memory = {
      history: [],
      lastQuery: null,
      lastIntent: null,
      lastTools: [],
      lastOutput: null
    };


    bus.emit(
      "memory:cleared",
      {
        agent: this.name
      }
    );
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


const memoryAgent =
  new MemoryAgent();


export default
  memoryAgent;
