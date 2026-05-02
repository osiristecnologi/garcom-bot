export function parseIntent(query) {
  const q = query.toLowerCase();

  return {
    crypto: /bitcoin|btc|ethereum|crypto/.test(q),
    weather: /clima|tempo|chuva/.test(q),
    news: /news|noticias/.test(q),
    maps: /rota|mapa|distancia/.test(q),
    dev: /github|react|codigo/.test(q)
  };
}
