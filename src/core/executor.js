async function request(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("API Error");
    }

    return await response.json();

  } catch (error) {
    console.error("Executor Error:", error);
    return null;
  }
}


// ===================================
// CRYPTO
// ===================================
async function fetchCrypto() {
  return request(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd,brl&include_24hr_change=true"
  );
}


// ===================================
// WEATHER
// ===================================
async function fetchWeather() {
  return request(
    "https://api.open-meteo.com/v1/forecast?latitude=-16.68&longitude=-49.25&current_weather=true"
  );
}


// ===================================
// GITHUB
// ===================================
async function fetchGitHub() {
  return request(
    "https://api.github.com/search/repositories?q=react&sort=stars&order=desc&per_page=5"
  );
}


// ===================================
// NEWS
// ===================================
async function fetchNews() {
  return request(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
}


// ===================================
// EXECUTOR
// ===================================
export async function executeTools(tools = []) {

  const results = {};

  if (tools.includes("crypto")) {
    results.crypto = await fetchCrypto();
  }

  if (tools.includes("weather")) {
    results.weather = await fetchWeather();
  }

  if (tools.includes("github")) {
    results.github = await fetchGitHub();
  }

  if (tools.includes("news")) {
    results.news = await fetchNews();
  }

  return results;
}
