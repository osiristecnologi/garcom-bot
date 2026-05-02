const intentEngine = {

  analyze(
    text = ""
  ) {

    const t =
      text.toLowerCase();


    return {

      crypto:
        /bitcoin|ethereum|btc|crypto|solana/.test(
          t
        ),

      weather:
        /clima|tempo|temperatura|chuva/.test(
          t
        ),

      news:
        /notícia|news|atual|breaking/.test(
          t
        ),

      github:
        /github|repo|código|react|next|typescript/.test(
          t
        ),

      maps:
        /rota|mapa|distância|goiânia|anápolis/.test(
          t
        ),

      movies:
        /filme|movie|cinema|netflix|série/.test(
          t
        ),

      ai:
        /explica|o que é|como funciona|resuma|chat/.test(
          t
        )
    };
  },


  score(
    intent
  ) {

    return Object.values(
      intent
    ).filter(Boolean).length;
  }

};


export default
  intentEngine;
