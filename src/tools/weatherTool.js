const weatherTool = {

  name:
    "Weather Tool",

  provider:
    "Open-Meteo",


  cities: {

    anapolis:
      [-16.32, -48.95],

    goiania:
      [-16.68, -49.25],

    brasilia:
      [-15.79, -47.88],

    saopaulo:
      [-23.55, -46.63]
  },


  async execute(
    city =
      "anapolis"
  ) {

    const coords =
      this.cities[
        city.toLowerCase()
      ] ||
      this.cities.anapolis;


    const [
      latitude,
      longitude
    ] = coords;


    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;


    const response =
      await fetch(
        url
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "Weather API error"
      );
    }


    const data =
      await response.json();


    return {

      success:
        true,

      provider:
        this.provider,

      city,

      data
    };
  },


  async now(
    city =
      "anapolis"
  ) {

    return this.execute(
      city
    );
  }

};


export default
  weatherTool;
