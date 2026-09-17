// ==========================================
// OINANCE MARKETS
// MARKET DATA STRUCTURE
// ==========================================


// ==========================================
// CRYPTOCURRENCY
// ==========================================

const cryptocurrencies = [

    ["Bitcoin", "BTC", "$108,450.00", "+2.41%", "$2.15T"],
    ["Ethereum", "ETH", "$4,210.32", "+1.87%", "$507.8B"],
    ["Tether", "USDT", "$1.00", "+0.01%", "$168.4B"],
    ["BNB", "BNB", "$965.40", "+0.91%", "$135.8B"],
    ["XRP", "XRP", "$2.94", "+3.21%", "$176.2B"],
    ["Solana", "SOL", "$241.65", "-0.74%", "$116.4B"],
    ["USD Coin", "USDC", "$1.00", "+0.02%", "$61.7B"],
    ["Cardano", "ADA", "$0.91", "+1.12%", "$32.8B"],
    ["Dogecoin", "DOGE", "$0.25", "-1.31%", "$37.4B"],
    ["TRON", "TRX", "$0.35", "+0.64%", "$33.9B"],
    ["Avalanche", "AVAX", "$35.42", "+2.08%", "$14.5B"],
    ["Chainlink", "LINK", "$24.18", "+1.72%", "$15.6B"],
    ["Toncoin", "TON", "$3.21", "-0.43%", "$8.1B"],
    ["Shiba Inu", "SHIB", "$0.000014", "+2.54%", "$8.2B"],
    ["Polkadot", "DOT", "$4.31", "+0.86%", "$6.8B"],
    ["Litecoin", "LTC", "$105.23", "+1.45%", "$7.9B"],
    ["Bitcoin Cash", "BCH", "$512.70", "-0.21%", "$10.2B"],
    ["Uniswap", "UNI", "$8.42", "+3.15%", "$5.0B"],
    ["Internet Computer", "ICP", "$5.91", "-1.04%", "$3.1B"],
    ["NEAR Protocol", "NEAR", "$3.88", "+2.12%", "$4.7B"],
    ["Aptos", "APT", "$4.91", "+1.26%", "$3.0B"],
    ["Stellar", "XLM", "$0.39", "+0.73%", "$11.9B"],
    ["Hedera", "HBAR", "$0.21", "+1.94%", "$8.0B"],
    ["Cosmos", "ATOM", "$4.12", "-0.62%", "$1.6B"],
    ["Filecoin", "FIL", "$2.91", "+0.83%", "$1.9B"],
    ["VeChain", "VET", "$0.025", "+1.21%", "$1.8B"],
    ["Arbitrum", "ARB", "$0.46", "-1.42%", "$2.0B"],
    ["Optimism", "OP", "$0.74", "+2.03%", "$1.5B"],
    ["Aave", "AAVE", "$291.40", "+4.11%", "$4.4B"],
    ["Maker", "MKR", "$1,842.20", "-0.83%", "$1.7B"],
    ["Injective", "INJ", "$14.12", "+1.71%", "$1.4B"],
    ["The Graph", "GRT", "$0.078", "+0.55%", "$0.7B"],
    ["Algorand", "ALGO", "$0.23", "+1.07%", "$1.9B"],
    ["The Sandbox", "SAND", "$0.29", "-0.92%", "$0.7B"],
    ["Decentraland", "MANA", "$0.31", "+1.33%", "$0.6B"],
    ["Axie Infinity", "AXS", "$3.41", "+2.18%", "$0.6B"],
    ["Flow", "FLOW", "$0.42", "-0.47%", "$0.7B"],
    ["Tezos", "XTZ", "$0.71", "+0.61%", "$0.7B"],
    ["EOS", "EOS", "$0.57", "+0.81%", "$0.9B"],
    ["Monero", "XMR", "$318.20", "+1.14%", "$5.8B"],
    ["Filecoin", "FIL", "$2.91", "+0.83%", "$1.9B"],
    ["THORChain", "RUNE", "$1.62", "-0.73%", "$0.6B"],
    ["PancakeSwap", "CAKE", "$2.71", "+2.61%", "$0.8B"],
    ["Synthetix", "SNX", "$0.51", "+0.42%", "$0.2B"],
    ["Curve DAO", "CRV", "$0.63", "+1.31%", "$0.8B"],
    ["Lido DAO", "LDO", "$1.02", "+0.84%", "$0.9B"],
    ["Immutable", "IMX", "$0.61", "-1.11%", "$1.1B"],
    ["Render", "RENDER", "$4.81", "+2.71%", "$2.5B"],
    ["Kaspa", "KAS", "$0.091", "+1.18%", "$2.2B"],
    ["Mantle", "MNT", "$1.02", "+0.74%", "$3.4B"],
    ["Cosmos Hub", "ATOM", "$4.12", "-0.62%", "$1.6B"],
    ["Fantom", "FTM", "$0.78", "+1.54%", "$2.2B"],
    ["Sui", "SUI", "$3.41", "+3.12%", "$10.2B"],
    ["Sei", "SEI", "$0.32", "-0.51%", "$1.2B"],
    ["Celestia", "TIA", "$1.71", "+1.08%", "$1.1B"],
    ["Jupiter", "JUP", "$0.82", "+2.32%", "$1.1B"],
    ["Ondo", "ONDO", "$0.93", "+1.17%", "$1.4B"],
    ["Bonk", "BONK", "$0.000021", "+3.42%", "$1.7B"],
    ["Floki", "FLOKI", "$0.000095", "+1.93%", "$0.9B"],
    ["Pepe", "PEPE", "$0.000010", "+2.87%", "$4.2B"],
    ["WIF", "WIF", "$0.72", "-1.25%", "$0.7B"],
    ["Quant", "QNT", "$112.40", "+0.64%", "$1.6B"],
    ["Zcash", "ZEC", "$51.30", "+1.72%", "$0.8B"],
    ["Dash", "DASH", "$27.20", "-0.38%", "$0.3B"],
    ["Neo", "NEO", "$6.91", "+0.92%", "$0.5B"],
    ["IOTA", "IOTA", "$0.19", "+1.44%", "$0.7B"],
    ["Kava", "KAVA", "$0.21", "-0.62%", "$0.2B"],
    ["Mina", "MINA", "$0.18", "+1.11%", "$0.2B"],
    ["Flow", "FLOW", "$0.42", "+0.31%", "$0.7B"],
    ["Chiliz", "CHZ", "$0.041", "+1.06%", "$0.4B"],
    ["Enjin Coin", "ENJ", "$0.075", "-0.82%", "$0.1B"],
    ["Basic Attention Token", "BAT", "$0.19", "+0.47%", "$0.3B"],
    ["Gala", "GALA", "$0.015", "+1.21%", "$0.6B"],
    ["The Graph", "GRT", "$0.078", "+0.55%", "$0.7B"],
    ["Curve DAO Token", "CRV", "$0.63", "+1.31%", "$0.8B"],
    ["dYdX", "DYDX", "$0.43", "-0.51%", "$0.3B"],
    ["1inch", "1INCH", "$0.19", "+0.91%", "$0.2B"],
    ["Loopring", "LRC", "$0.10", "+0.64%", "$0.1B"],
    ["Zilliqa", "ZIL", "$0.011", "+0.82%", "$0.2B"],
    ["Oasis", "ROSE", "$0.023", "+1.13%", "$0.1B"],
    ["Celo", "CELO", "$0.31", "-0.41%", "$0.2B"],
    ["Harmony", "ONE", "$0.012", "+0.72%", "$0.2B"],
    ["Qtum", "QTUM", "$1.82", "+0.55%", "$0.2B"],
    ["Waves", "WAVES", "$0.74", "-0.61%", "$0.1B"],
    ["Ontology", "ONT", "$0.18", "+0.42%", "$0.1B"],
    ["ICON", "ICX", "$0.14", "+0.71%", "$0.1B"],
    ["Siacoin", "SC", "$0.0028", "+1.18%", "$0.1B"],
    ["Basic Attention Token", "BAT", "$0.19", "+0.47%", "$0.3B"],
    ["Nervos Network", "CKB", "$0.004", "+1.03%", "$0.2B"],
    ["Audius", "AUDIO", "$0.045", "-0.32%", "$0.05B"],
    ["Mask Network", "MASK", "$1.61", "+1.44%", "$0.1B"],
    ["Ankr", "ANKR", "$0.021", "+0.84%", "$0.2B"],
    ["Storj", "STORJ", "$0.31", "+0.57%", "$0.1B"],
    ["Ocean Protocol", "OCEAN", "$0.34", "-0.43%", "$0.1B"],
    ["Convex Finance", "CVX", "$1.82", "+0.71%", "$0.2B"],
    ["Yearn Finance", "YFI", "$6,420", "+0.52%", "$0.2B"],
    ["Gnosis", "GNO", "$238", "+0.91%", "$0.6B"],
    ["SushiSwap", "SUSHI", "$0.74", "+1.22%", "$0.2B"],
    ["Loopring", "LRC", "$0.10", "+0.64%", "$0.1B"],
    ["Audius", "AUDIO", "$0.045", "-0.32%", "$0.05B"],
    ["Band Protocol", "BAND", "$0.71", "+0.63%", "$0.1B"],
    ["SKALE", "SKL", "$0.029", "+0.84%", "$0.1B"],
    ["Livepeer", "LPT", "$5.72", "+1.12%", "$0.3B"],
    ["API3", "API3", "$0.78", "+0.52%", "$0.1B"],
    ["Storj", "STORJ", "$0.31", "+0.57%", "$0.1B"],
    ["Moonbeam", "GLMR", "$0.081", "-0.24%", "$0.07B"],
    ["Illuvium", "ILV", "$18.20", "+1.32%", "$0.1B"]

];


// ==========================================
// STOCK MARKET
// ==========================================

const stocks = [

    ["Apple", "AAPL", "$245.18", "+1.24%", "$3.67T"],
    ["Microsoft", "MSFT", "$511.30", "-0.36%", "$3.80T"],
    ["NVIDIA", "NVDA", "$176.42", "+2.18%", "$4.30T"],
    ["Amazon", "AMZN", "$231.56", "+0.82%", "$2.47T"],
    ["Alphabet", "GOOGL", "$201.44", "+0.72%", "$2.45T"],
    ["Meta Platforms", "META", "$781.22", "+1.04%", "$1.96T"],
    ["Tesla", "TSLA", "$343.72", "+1.63%", "$1.11T"],
    ["Broadcom", "AVGO", "$321.14", "+1.31%", "$1.52T"],
    ["Berkshire Hathaway", "BRK.B", "$512.44", "+0.24%", "$1.17T"],
    ["Eli Lilly", "LLY", "$742.31", "-0.81%", "$704B"],
    ["JPMorgan Chase", "JPM", "$304.72", "+0.55%", "$856B"],
    ["Visa", "V", "$347.19", "+0.42%", "$690B"],
    ["Mastercard", "MA", "$587.24", "+0.37%", "$530B"],
    ["Walmart", "WMT", "$102.41", "+0.64%", "$824B"],
    ["Netflix", "NFLX", "$1,238.50", "+1.12%", "$526B"],
    ["AMD", "AMD", "$164.21", "+2.41%", "$267B"],
    ["Oracle", "ORCL", "$311.44", "-0.27%", "$878B"],
    ["Coca-Cola", "KO", "$71.21", "+0.31%", "$307B"],
    ["PepsiCo", "PEP", "$147.20", "-0.21%", "$202B"],
    ["McDonald's", "MCD", "$311.41", "+0.28%", "$221B"],
    ["Nike", "NKE", "$74.32", "+0.83%", "$110B"],
    ["Adobe", "ADBE", "$389.22", "+0.41%", "$166B"],
    ["Salesforce", "CRM", "$265.12", "+0.62%", "$256B"],
    ["Intel", "INTC", "$25.44", "-1.02%", "$110B"],
    ["Cisco", "CSCO", "$69.31", "+0.33%", "$276B"],
    ["IBM", "IBM", "$249.40", "+0.72%", "$231B"],
    ["Qualcomm", "QCOM", "$161.12", "+0.44%", "$178B"],
    ["Texas Instruments", "TXN", "$199.11", "+0.36%", "$181B"],
    ["Micron Technology", "MU", "$156.44", "+1.87%", "$174B"],
    ["Goldman Sachs", "GS", "$785.31", "+0.22%", "$246B"],
    ["Morgan Stanley", "MS", "$154.71", "+0.43%", "$245B"],
    ["Bank of America", "BAC", "$52.81", "+0.35%", "$403B"],
    ["Wells Fargo", "WFC", "$91.24", "+0.61%", "$316B"],
    ["Citigroup", "C", "$103.12", "-0.17%", "$190B"],
    ["American Express", "AXP", "$319.44", "+0.52%", "$225B"],
    ["Procter & Gamble", "PG", "$156.72", "+0.31%", "$368B"],
    ["Johnson & Johnson", "JNJ", "$176.20", "+0.21%", "$424B"],
    ["AbbVie", "ABBV", "$219.31", "+0.42%", "$387B"],
    ["Merck", "MRK", "$84.31", "-0.42%", "$210B"],
    ["Pfizer", "PFE", "$25.82", "+0.11%", "$146B"],
    ["Chevron", "CVX", "$156.21", "+0.47%", "$282B"],
    ["Exxon Mobil", "XOM", "$112.71", "+0.36%", "$492B"],
    ["Shell", "SHEL", "$69.21", "+0.51%", "$212B"],
    ["BP", "BP", "$34.42", "-0.18%", "$94B"],
    ["Costco", "COST", "$972.12", "+0.71%", "$431B"],
    ["Home Depot", "HD", "$402.41", "+0.28%", "$400B"],
    ["Lowe's", "LOW", "$247.31", "+0.42%", "$139B"],
    ["Starbucks", "SBUX", "$91.21", "+0.54%", "$104B"],
    ["Uber", "UBER", "$102.41", "+1.03%", "$214B"],
    ["Airbnb", "ABNB", "$131.42", "-0.31%", "$83B"],
    ["PayPal", "PYPL", "$74.81", "+0.72%", "$76B"],
    ["Shopify", "SHOP", "$152.42", "+1.22%", "$196B"],
    ["Palantir", "PLTR", "$165.21", "+2.61%", "$390B"],
    ["Snowflake", "SNOW", "$231.41", "+1.11%", "$78B"],
    ["CrowdStrike", "CRWD", "$475.21", "+0.91%", "$117B"],
    ["Palo Alto Networks", "PANW", "$198.21", "+0.73%", "$129B"],
    ["Datadog", "DDOG", "$152.31", "+0.61%", "$51B"],
    ["ServiceNow", "NOW", "$1,102.31", "+0.48%", "$226B"],
    ["Intuit", "INTU", "$744.12", "-0.24%", "$208B"],
    ["Uber", "UBER", "$102.41", "+1.03%", "$214B"],
    ["Airbnb", "ABNB", "$131.42", "-0.31%", "$83B"],
    ["Lockheed Martin", "LMT", "$526.21", "+0.34%", "$121B"],
    ["General Electric", "GE", "$286.42", "+0.61%", "$308B"],
    ["Caterpillar", "CAT", "$492.11", "+0.41%", "$235B"],
    ["Honeywell", "HON", "$225.32", "+0.29%", "$146B"],
    ["3M", "MMM", "$156.12", "+0.31%", "$85B"],
    ["Ford", "F", "$11.21", "+0.72%", "$44B"],
    ["General Motors", "GM", "$64.12", "+0.48%", "$70B"],
    ["Toyota", "TM", "$196.21", "+0.22%", "$305B"],
    ["Sony", "SONY", "$29.31", "+0.63%", "$175B"],
    ["Alibaba", "BABA", "$142.12", "+1.17%", "$342B"],
    ["Tencent", "TCEHY", "$72.31", "+0.52%", "$690B"],
    ["Taiwan Semiconductor", "TSM", "$244.21", "+1.83%", "$1.27T"],
    ["Alibaba", "BABA", "$142.12", "+1.17%", "$342B"],
    ["Shopify", "SHOP", "$152.42", "+1.22%", "$196B"],
    ["Arm Holdings", "ARM", "$156.21", "+1.31%", "$163B"],
    ["Applied Materials", "AMAT", "$203.11", "+0.92%", "$168B"],
    ["Lam Research", "LRCX", "$118.21", "+1.04%", "$151B"],
    ["Marvell Technology", "MRVL", "$76.31", "+1.11%", "$65B"],
    ["Dell Technologies", "DELL", "$126.42", "+0.61%", "$89B"],
    ["Super Micro Computer", "SMCI", "$46.21", "+1.43%", "$27B"],
    ["Robinhood", "HOOD", "$139.12", "+1.91%", "$124B"],
    ["Coinbase", "COIN", "$372.41", "+2.11%", "$96B"],
    ["Block", "XYZ", "$74.21", "+0.73%", "$45B"],
    ["MercadoLibre", "MELI", "$2,184.21", "+0.52%", "$110B"],
    ["Shopify", "SHOP", "$152.42", "+1.22%", "$196B"],
    ["Spotify", "SPOT", "$712.41", "+0.91%", "$140B"],
    ["Palantir", "PLTR", "$165.21", "+2.61%", "$390B"],
    ["Reddit", "RDDT", "$182.41", "+1.42%", "$34B"],
    ["Pinterest", "PINS", "$41.21", "+0.38%", "$27B"],
    ["Snap", "SNAP", "$8.21", "+0.61%", "$14B"],
    ["Electronic Arts", "EA", "$204.21", "+0.27%", "$54B"],
    ["Take-Two Interactive", "TTWO", "$241.31", "+0.42%", "$44B"],
    ["Walt Disney", "DIS", "$118.21", "+0.32%", "$213B"],
    ["Comcast", "CMCSA", "$28.31", "-0.12%", "$108B"],
    ["Verizon", "VZ", "$44.21", "+0.24%", "$186B"],
    ["AT&T", "T", "$28.41", "+0.31%", "$202B"],
    ["T-Mobile", "TMUS", "$246.31", "+0.41%", "$284B"],
    ["American Airlines", "AAL", "$11.42", "+0.72%", "$7B"],
    ["Delta Air Lines", "DAL", "$54.21", "+0.51%", "$35B"],
    ["United Airlines", "UAL", "$92.41", "+0.81%", "$30B"],
    ["Marriott", "MAR", "$311.21", "+0.32%", "$88B"],
    ["Hilton", "HLT", "$296.41", "+0.41%", "$74B"],
    ["Nike", "NKE", "$74.32", "+0.83%", "$110B"],
    ["Lululemon", "LULU", "$358.21", "+0.61%", "$44B"]

];


// ==========================================
// CREATE MARKET ROW
// ==========================================

function createMarketRow(asset, index) {

    const [name, symbol, price, change, marketCap] = asset;

    const movementClass =
        change.startsWith("-")
            ? "negative"
            : "positive";

    return `
        <div class="market-row generated-row">

            <span>${String(index + 1).padStart(2, "0")}</span>

            <div class="asset">

                <div class="asset-icon">
                    ${symbol.charAt(0)}
                </div>

                <div>
                    <strong>${name}</strong>
                    <small>${symbol}</small>
                </div>

            </div>

            <strong>${price}</strong>

            <span class="${movementClass}">
                ${change}
            </span>

            <span>${marketCap}</span>

        </div>
    `;
}


// ==========================================
// ADD MARKET DATA TO PAGE
// ==========================================

function loadMarkets() {

    const boxes = document.querySelectorAll(".market-box");

    if (boxes.length < 2) return;

    const cryptoBox = boxes[0];
    const stockBox = boxes[1];

    // Keep table headers
    const cryptoHeader = cryptoBox.querySelector(".table-header");
    const stockHeader = stockBox.querySelector(".table-header");

    cryptoBox.innerHTML = "";
    stockBox.innerHTML = "";

    cryptoBox.appendChild(cryptoHeader);
    stockBox.appendChild(stockHeader);


    // CRYPTO

    cryptocurrencies.forEach(function (coin, index) {

        cryptoBox.insertAdjacentHTML(
            "beforeend",
            createMarketRow(coin, index)
        );

    });


    // STOCKS

    stocks.forEach(function (stock, index) {

        stockBox.insertAdjacentHTML(
            "beforeend",
            createMarketRow(stock, index)
        );

    });

}


// ==========================================
// SEARCH
// ==========================================

function setupSearch() {

    const searchInput =
        document.querySelector(".search-box input");

    if (!searchInput) return;

    searchInput.addEventListener("input", function () {

        const searchTerm =
            this.value.toLowerCase().trim();

        const rows =
            document.querySelectorAll(".generated-row");

        rows.forEach(function (row) {

            const text =
                row.textContent.toLowerCase();

            row.style.display =
                text.includes(searchTerm)
                    ? "grid"
                    : "none";

        });

    });

}


// ==========================================
// MOBILE MENU
// ==========================================

function setupMobileMenu() {

    const menuButton =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".navigation");

    if (!menuButton || !navigation) return;

    menuButton.addEventListener("click", function () {

        if (navigation.style.display === "flex") {

            navigation.style.display = "";

        } else {

            navigation.style.display = "flex";

            navigation.style.flexDirection = "column";
            navigation.style.position = "absolute";
            navigation.style.top = "78px";
            navigation.style.right = "5%";
            navigation.style.background = "#fff";
            navigation.style.padding = "20px";
            navigation.style.gap = "18px";
            navigation.style.border = "1px solid #ddd";
            navigation.style.zIndex = "1000";

        }

    });

}


// ==========================================
// START OINANCE MARKETS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    loadMarkets();

    setupSearch();

    setupMobileMenu();

});
