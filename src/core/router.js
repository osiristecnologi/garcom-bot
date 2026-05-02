export function routeTools(intent) {
  const tools = [];

  if (intent.crypto) tools.push("crypto");
  if (intent.weather) tools.push("weather");
  if (intent.news) tools.push("news");
  if (intent.maps) tools.push("maps");
  if (intent.dev) tools.push("github");

  return tools;
}
