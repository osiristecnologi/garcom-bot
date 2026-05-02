const mapsTool = {

  name:
    "Maps Tool",

  provider:
    "OpenStreetMap",


  async execute(
    place =
      "Anapolis"
  ) {

    const url =
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json&limit=3`;


    const response =
      await fetch(
        url,
        {
          headers: {
            "Accept":
              "application/json"
          }
        }
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "Maps API error"
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
        data.length,

      data
    };
  },


  async city(
    cityName
  ) {

    return this.execute(
      cityName
    );
  },


  async routeExample() {

    return {

      success:
        true,

      provider:
        this.provider,

      route: {

        from:
          "Goiania",

        to:
          "Anapolis",

        highway:
          "BR-153",

        distance:
          "55 km"
      }
    };
  }

};


export default
  mapsTool;
