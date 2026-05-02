class CommandHistory {

  constructor() {

    this.history = [];

    this.position = -1;
  }


  add(
    command
  ) {

    if (
      !command ||
      !command.trim()
    ) {
      return;
    }


    this.history.push(
      command.trim()
    );


    this.position =
      this.history.length;
  }


  previous() {

    if (
      this.history.length === 0
    ) {
      return "";
    }


    if (
      this.position > 0
    ) {

      this.position--;
    }


    return this.history[
      this.position
    ] || "";
  }


  next() {

    if (
      this.history.length === 0
    ) {
      return "";
    }


    if (
      this.position <
      this.history.length - 1
    ) {

      this.position++;

      return this.history[
        this.position
      ];
    }


    this.position =
      this.history.length;


    return "";
  }


  all() {

    return [
      ...this.history
    ];
  }


  clear() {

    this.history = [];

    this.position = -1;
  }

}


const commandHistory =
  new CommandHistory();


export default
  commandHistory;
