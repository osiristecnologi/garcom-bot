import bus from "./EventBus";


class BuilderAgent {

  constructor() {

    this.name =
      "Builder Agent";

    this.status =
      "online";
  }


  // =====================
  // BUILD
  // =====================
  build(
    results = {}
  ) {

    bus.emit(
      "builder:start",
      {
        agent: this.name
      }
    );


    const output = [];


    // =====================
    // CRYPTO
    // =====================
    if (results.crypto) {

      Object
        .entries(results.crypto)
        .forEach(
          ([coin, data]) => {

            output.push({
              type: "crypto",
              title:
                coin.toUpperCase(),
              value:
                "$" + data.usd
            });

          }
        );
    }


    // =====================
    // WEATHER
    // =====================
    if (
      results.weather &&
      results.weather.current_weather
    ) {

      output.push({
        type: "weather",
        title: "Weather",
        value:
          results
            .weather
            .current_weather
            .temperature + "°C"
      });
    }


    // =====================
    // GITHUB
    // =====================
    if (
      results.github &&
      results.github.items
    ) {

      output.push({
        type: "github",
        title: "GitHub",
        value:
          results
            .github
            .items[0]
            ?.name || "N/A"
      });
    }


    // =====================
    // NEWS
    // =====================
    if (
      results.news
    ) {

      output.push({
        type: "news",
        title: "News",
        value:
          "Top Stories Loaded"
      });
    }


    bus.emit(
      "builder:finished",
      {
        agent: this.name,
        output
      }
    );


    return output;
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


const builderAgent =
  new BuilderAgent();


export default
  builderAgent;
