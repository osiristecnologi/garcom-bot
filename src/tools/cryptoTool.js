const cryptoTool = {

  name:
    "Crypto Tool",

  provider:
    "CoinGecko",


  async execute(
    coins =
      "bitcoin,ethereum,solana"
  ) {

    const url =
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=usd,brl&include_24hr_change=true`;


    const response =
      await fetch(
        url
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "CoinGecko API error"
      );
    }


    const data =
      await response.json();


    return {

      success:
        true,

      provider:
        this.provider,

      data
    };
  },


  async bitcoin() {

    return this.execute(
      "bitcoin"
    );
  },


  async top3() {

    return this.execute(
      "bitcoin,ethereum,solana"
    );
  }

};


export default
  cryptoTool;
