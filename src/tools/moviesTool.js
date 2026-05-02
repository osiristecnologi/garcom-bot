const moviesTool = {

  name:
    "Movies Tool",

  provider:
    "TMDb",


  apiKey:
    import.meta.env
      .VITE_TMDB_KEY,


  async execute(
    query =
      "action"
  ) {

    const url =
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}&language=pt-BR`;


    const response =
      await fetch(
        url
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "TMDb API error"
      );
    }


    const data =
      await response.json();


    return {

      success:
        true,

      provider:
        this.provider,

      total:
        data.results?.length || 0,

      data:
        data.results || []
    };
  },


  async trending() {

    const url =
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}&language=pt-BR`;


    const response =
      await fetch(
        url
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "TMDb API error"
      );
    }


    const data =
      await response.json();


    return {

      success:
        true,

      provider:
        this.provider,

      total:
        data.results?.length || 0,

      data:
        data.results || []
    };
  },


  async search(
    title
  ) {

    return this.execute(
      title
    );
  }

};


export default
  moviesTool;
