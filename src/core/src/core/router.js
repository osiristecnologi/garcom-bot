import cryptoTool from "../tools/cryptoTool";
import weatherTool from "../tools/weatherTool";
import newsTool from "../tools/newsTool";
import githubTool from "../tools/githubTool";
import mapsTool from "../tools/mapsTool";
import moviesTool from "../tools/moviesTool";
import aiTool from "../tools/aiTool";


const router = {

  resolve(
    intent
  ) {

    const tasks = [];


    if (
      intent.crypto
    ) {

      tasks.push({
        tool: cryptoTool,
        action: "execute"
      });
    }


    if (
      intent.weather
    ) {

      tasks.push({
        tool: weatherTool,
        action: "execute"
      });
    }


    if (
      intent.news
    ) {

      tasks.push({
        tool: newsTool,
        action: "execute"
      });
    }


    if (
      intent.github
    ) {

      tasks.push({
        tool: githubTool,
        action: "execute"
      });
    }


    if (
      intent.maps
    ) {

      tasks.push({
        tool: mapsTool,
        action: "execute"
      });
    }


    if (
      intent.movies
    ) {

      tasks.push({
        tool: moviesTool,
        action: "execute"
      });
    }


    if (
      intent.ai
    ) {

      tasks.push({
        tool: aiTool,
        action: "execute"
      });
    }


    return tasks;
  },


  async run(
    tasks,
    input
  ) {

    const results =
      await Promise.all(

        tasks.map(
          async (
            task
          ) => {

            try {

              const res =
                await task.tool[
                  task.action
                ](
                  input
                );


              return {

                tool:
                  task.tool.name,

                success:
                  true,

                data:
                  res
              };

            } catch (err) {

              return {

                tool:
                  task.tool.name,

                success:
                  false,

                error:
                  err.message
              };
            }
          }
        )
      );


    return results;
  }

};


export default
  router;
