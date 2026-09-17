,
    ["Celestia", "TIA", "$1.71", "+1.08%", "$1.1B"],
    ["Jupiter", "JUP", "$0.82", "+2.32%", "$1.1B"],
    ["Ondo", "ONDO", "$0.93", "+1.17%", "$1.4B"],
    ["Bonk", "BONK", "$0.000021", "+3.42%", "$1.7B"],
    ["Floki", "FLOKI", "$0.000095", "+1.93%", "$0.9B"],
    ["Quant", "QNT", "$112.40", "+0.64%", "$1.6B"],
    ["Zcash", "ZEC", "$51.30", "+1.72%", "$0.8B"],
    ["Dash", "DASH", "$27.20", "-0.38%", "$0.3B"]
];


// =====================================
// STOCK DATA
// =====================================

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
    ["Micron", "MU", "$156.44", "+1.87%", "$174B"],
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
    ["Costco", "COST", "$972.12", "+0.71%", "$431B"],
    ["Home Depot", "HD", "$402.41", "+0.28%", "$400B"],
    ["Starbucks", "SBUX", "$91.21", "+0.54%", "$104B"],
    ["Uber", "UBER", "$102.41", "+1.03%", "$214B"],
    ["Airbnb", "ABNB", "$131.42", "-0.31%", "$83B"],
    ["PayPal", "PYPL", "$74.81", "+0.72%", "$76B"],
    ["Shopify", "SHOP", "$152.42", "+1.22%", "$196B"],
    ["Palantir", "PLTR", "$165.21", "+2.61%", "$390B"],
    ["Snowflake", "SNOW", "$231.41", "+1.11%", "$78B"],
    ["Coinbase", "COIN", "$372.41", "+2.11%", "$96B"]
];


// =====================================
// CREATE MARKET ROW
// =====================================

function createRow(item, number) {

    const name = item[0];
    const symbol = item[1];
    const price = item[2];
    const change = item[3];
    const marketCap = item[4];

    const movement =
        change.startsWith("-")
            ? "negative"
            : "positive";

    return `
        <div class="market-row generated-row">

            <span>
                ${String(number).padStart(2, "0")}
            </span>

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

            <span class="${movement}">
                ${change}
            </span>

            <span>
                ${marketCap}
            </span>

        </div>
    `;
}


// =====================================
// LOAD CRYPTO
// =====================================

function loadCrypto() {

    const box =
        document.querySelector(".crypto-market-box");

    if (!box) return;

    const header =
        box.querySelector(".table-header");

    box.innerHTML = "";

    box.appendChild(header);

    crypto.forEach(function(item, index) {

        box.insertAdjacentHTML(
            "beforeend",
            createRow(item, index + 1)
        );

    });
}


// =====================================
// LOAD STOCKS
// =====================================

function loadStocks() {

    const box =
        document.querySelector(".stock-market-box");

    if (!box) return;

    const header =
        box.querySelector(".table-header");

    box.innerHTML = "";

    box.appendChild(header);

    stocks.forEach(function(item, index) {

        box.insertAdjacentHTML(
            "beforeend",
            createRow(item, index + 1)
        );

    });
}


// =====================================
// TOP MOVERS
// =====================================

function updateTopMovers() {

    const allMarkets =
        crypto.concat(stocks);

    const sorted =
        [...allMarkets].sort(function(a, b) {

            const changeA =
                parseFloat(a[3].replace("%", ""));

            const changeB =
                parseFloat(b[3].replace("%", ""));

            return changeB - changeA;

        });


    const topGainer = sorted[0];


    const topLoser =
        sorted[sorted.length - 1];


    const gainerName =
        document.getElementById("topGainerName");

    const gainerPrice =
        document.getElementById("topGainerPrice");

    const gainerChange =
        document.getElementById("topGainerChange");


    const loserName =
        document.getElementById("topLoserName");

    const loserPrice =
        document.getElementById("topLoserPrice");

    const loserChange =
        document.getElementById("topLoserChange");


    if (topGainer) {

        gainerName.textContent =
            topGainer[0];

        gainerPrice.textContent =
            topGainer[2];

        gainerChange.textContent =
            topGainer[3];

    }


    if (topLoser) {

        loserName.textContent =
            topLoser[0];

        loserPrice.textContent =
            topLoser[2];

        loserChange.textContent =
            topLoser[3];

    }

}


// =====================================
// MARKET TABS
// =====================================

function setupMarketTabs() {

    const tabs =
        document.querySelectorAll(".market-tab");

    const cryptoSection =
        document.getElementById("crypto");

    const stockSection =
        document.getElementById("stocks");


    tabs.forEach(function(tab) {

        tab.addEventListener("click", function() {

            tabs.forEach(function(button) {

                button.classList.remove("active");

            });


            this.classList.add("active");


            const market =
                this.dataset.market;


            if (market === "crypto") {

                cryptoSection.style.display =
                    "block";

                stockSection.style.display =
                    "none";

                cryptoSection.scrollIntoView({
                    behavior: "smooth"
                });

            }


            else if (market === "stocks") {

                cryptoSection.style.display =
                    "none";

                stockSection.style.display =
                    "block";

                stockSection.scrollIntoView({
                    behavior: "smooth"
                });

            }


            else {

                cryptoSection.style.display =
                    "block";

                stockSection.style.display =
                    "block";

                document.getElementById("markets")
            
