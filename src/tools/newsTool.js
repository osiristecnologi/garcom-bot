const newsTool = {

  name:
    "News Tool",

  provider:
    "Hacker News",


  async execute(
    limit = 5
  ) {

    const response =
      await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "News API error"
      );
    }


    const ids =
      await response.json();


    const topIds =
      ids.slice(
        0,
        limit
      );


    const stories =
      await Promise.all(

        topIds.map(

          async (
            id
          ) => {

            const item =
              await fetch(

                `https://hacker-news.firebaseio.com/v0/item/${id}.json`

              );


            return item.json();
          }
        )
      );


    return {

      success:
        true,

      provider:
        this.provider,

      total:
        stories.length,

      data:
        stories
    };
  },


  async top() {

    return this.execute(
      5
    );
  },


  async top10() {

    return this.execute(
      10
    );
  }

};


export default
  newsTool;
