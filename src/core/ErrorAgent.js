import bus from "./EventBus";


class ErrorAgent {

  constructor() {

    this.name =
      "Error Agent";

    this.status =
      "online";

    this.errors = [];
  }


  // =====================
  // CAPTURE
  // =====================
  capture(
    error = null,
    source = "unknown"
  ) {

    const entry = {

      id:
        Date.now(),

      source,

      message:
        error?.message ||
        "Unknown error",

      timestamp:
        new Date()
          .toISOString()
    };


    this.errors.push(
      entry
    );


    bus.emit(
      "error:captured",
      {
        agent: this.name,
        error: entry
      }
    );


    console.error(
      "[ERROR AGENT]",
      entry
    );


    return entry;
  }


  // =====================
  // GET ALL
  // =====================
  getErrors() {

    return this.errors;
  }


  // =====================
  // CLEAR
  // =====================
  clear() {

    this.errors = [];


    bus.emit(
      "error:cleared",
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


const errorAgent =
  new ErrorAgent();


export default
  errorAgent;
