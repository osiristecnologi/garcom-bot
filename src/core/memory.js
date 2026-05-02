const memory = {

  store:
    [],


  maxSize:
    50,


  add(
    entry
  ) {

    this.store.push(
      {
        ...entry,

        timestamp:
          Date.now()
      }
    );


    if (
      this.store.length >
      this.maxSize
    ) {

      this.store.shift();
    }
  },


  getAll() {

    return [
      ...this.store
    ];
  },


  findByAgent(
    agent
  ) {

    return this.store.filter(
      item =>
        item.agent === agent
    );
  },


  findByKeyword(
    keyword
  ) {

    const k =
      keyword.toLowerCase();


    return this.store.filter(
      item =>
        JSON.stringify(
          item
        )
          .toLowerCase()
          .includes(k)
    );
  },


  last() {

    return this.store[
      this.store.length - 1
    ];
  },


  clear() {

    this.store = [];
  }

};


export default
  memory;
