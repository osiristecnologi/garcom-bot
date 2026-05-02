class EventBus {

  constructor() {
    this.events = {};
  }


  // =========================
  // SUBSCRIBE
  // =========================
  on(eventName, callback) {

    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }


  // =========================
  // EMIT
  // =========================
  emit(eventName, payload = null) {

    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach(callback => {
      callback(payload);
    });
  }


  // =========================
  // REMOVE
  // =========================
  off(eventName, callback) {

    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName] =
      this.events[eventName]
        .filter(listener => listener !== callback);
  }


  // =========================
  // CLEAR
  // =========================
  clear() {
    this.events = {};
  }

}


const bus = new EventBus();

export default bus;
