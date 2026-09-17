export default async function handler(req, res) {
  try {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets" +
      "?vs_currency=usd" +
      "&order=market_cap_desc" +
      "&per_page=100" +
      "&page=1" +
      "&sparkline=false" +
      "&price_change_percentage=24h";

    const response = await fetch(url, {
      headers: {
        "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
        "Accept": "application/json"
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error:
          data?.error ||
          data?.status?.error_message ||
          "CoinGecko request failed"
      });
    }

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
}
