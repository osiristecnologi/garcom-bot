const aiTool = {

  name:
    "AI Tool",

  provider:
    import.meta.env
      .VITE_AI_PROVIDER ||

    "openai",


  apiKey:
    import.meta.env
      .VITE_OPENAI_KEY,


  async execute(
    prompt =
      "Hello"
  ) {

    if (
      this.provider !==
      "openai"
    ) {

      throw new Error(
        "Provider not supported yet"
      );
    }


    const response =
      await fetch(

        "https://api.openai.com/v1/chat/completions",

        {
          method:
            "POST",

          headers: {

            "Content-Type":
              "application/json",

            "Authorization":
              `Bearer ${this.apiKey}`
          },

          body:
            JSON.stringify({

              model:
                "gpt-4o-mini",

              messages: [

                {
                  role:
                    "user",

                  content:
                    prompt
                }
              ],

              temperature:
                0.7
            })
        }
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "AI API error"
      );
    }


    const data =
      await response.json();


    return {

      success:
        true,

      provider:
        this.provider,

      text:
        data.choices?.[0]
          ?.message
          ?.content ||

        "No response"
    };
  },


  async chat(
    prompt
  ) {

    return this.execute(
      prompt
    );
  }

};


export default
  aiTool;
