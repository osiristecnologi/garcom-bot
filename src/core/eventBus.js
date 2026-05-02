class EventBus {

  constructor() {

    this.events = {};
  }


  on(
    event,
    callback
  ) {

    if (
      !this.events[event]
    ) {

      this.events[event] =
        [];
    }


    this.events[event].push(
      callback
    );
  }


  emit(
    event,
    data
  ) {

    const handlers =
      this.events[event];


    if (!handlers) return;


    handlers.forEach(
      cb => cb(data)
    );
  }


  off(
    event,
    callback
  ) {

    if (
      !this.events[event]
    ) return;


    this.events[event] =
      this.events[event]
        .filter(
          cb =>
            cb !== callback
        );
  }

}


const eventBus =
  new EventBus();


export default
  eventBus;
