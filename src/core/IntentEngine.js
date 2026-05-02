export function detectIntent(input = "") {

  const query = input.toLowerCase();

  return {

    crypto:
      /bitcoin|btc|ethereum|eth|solana|crypto|token|coin/.test(query),

    weather:
      /clima|tempo|chuva|temperatura|weather/.test(query),

    news:
      /news|noticias|notícias|manchetes|jornal/.test(query),

    maps:
      /rota|mapa|distancia|distância|cidade|km|trajeto/.test(query),

    dev:
      /github|gitlab|react|javascript|typescript|codigo|código|npm/.test(query),

    movies:
      /filme|filmes|cinema|serie|série|tmdb/.test(query),

    ai:
      /ia|ai|openai|modelo|llm|agent/.test(query)

  };
}


// ============================
// OPTIONAL SCORE SYSTEM
// ============================
export function detectMainIntent(input = "") {

  const intents = detectIntent(input);

  const active = Object
    .entries(intents)
    .filter(([_, value]) => value);

  if (active.length === 0) {
    return "unknown";
  }

  return active[0][0];
}
