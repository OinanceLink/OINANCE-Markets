// =====================================
// OINANCE MARKETS V1
// =====================================


// =====================================
// CRYPTOCURRENCY DATA
// =====================================

const crypto = [
    ["Bitcoin", "BTC", "$108,450.00", "+2.41%", "$2.15T"],
    ["Ethereum", "ETH", "$4,210.32", "+1.87%", "$507.8B"],
    ["BNB", "BNB", "$965.40", "+0.91%", "$135.8B"],
    ["XRP", "XRP", "$2.94", "+3.21%", "$176.2B"],
    ["Solana", "SOL", "$241.65", "-0.74%", "$116.4B"],
    ["Cardano", "ADA", "$0.91", "+1.12%", "$32.8B"],
    ["Dogecoin", "DOGE", "$0.25", "-1.31%", "$37.4B"],
    ["TRON", "TRX", "$0.35", "+0.64%", "$33.9B"],
    ["Avalanche", "AVAX", "$35.42", "+2.08%", "$14.5B"],
    ["Chainlink", "LINK", "$24.18", "+1.72%", "$15.6B"],
    ["Polkadot", "DOT", "$4.31", "+0.86%", "$6.8B"],
    ["Litecoin", "LTC", "$105.23", "+1.45%", "$7.9B"],
    ["Uniswap", "UNI", "$8.42", "+3.15%", "$5.0B"],
    ["Stellar", "XLM", "$0.39", "+0.73%", "$11.9B"],
    ["Hedera", "HBAR", "$0.21", "+1.94%", "$8.0B"],
    ["Cosmos", "ATOM", "$4.12", "-0.62%", "$1.6B"],
    ["Filecoin", "FIL", "$2.91", "+0.83%", "$1.9B"],
    ["Arbitrum", "ARB", "$0.46", "-1.42%", "$2.0B"],
    ["Aave", "AAVE", "$291.40", "+4.11%", "$4.4B"],
    ["Maker", "MKR", "$1,842.20", "-0.83%", "$1.7B"],
    ["NEAR Protocol", "NEAR", "$3.88", "+2.12%", "$4.7B"],
    ["Aptos", "APT", "$4.91", "+1.26%", "$3.0B"],
    ["Monero", "XMR", "$318.20", "+1.14%", "$5.8B"],
    ["Sui", "SUI", "$3.41", "+3.12%", "$10.2B"],
    ["Pepe", "PEPE", "$0.000010", "+2.87%", "$4.2B"],
    ["Render", "RENDER", "$4.81", "+2.71%", "$2.5B"],
    ["Injective", "INJ", "$14.12", "+1.71%", "$1.4B"],
    ["Algorand", "ALGO", "$0.23", "+1.07%", "$1.9B"],
    ["VeChain", "VET", "$0.025", "+1.21%", "$1.8B"],
    ["The Sandbox", "SAND", "$0.29", "-0.92%", "$0.7B"],
    ["Decentraland", "MANA", "$0.31", "+1.33%", "$0.6B"],
    ["Axie Infinity", "AXS", "$3.41", "+2.18%", "$0.6B"],
    ["Tezos", "XTZ", "$0.71", "+0.61%", "$0.7B"],
    ["EOS", "EOS", "$0.57", "+0.81%", "$0.9B"],
    ["PancakeSwap", "CAKE", "$2.71", "+2.61%", "$0.8B"],
    ["Curve", "CRV", "$0.63", "+1.31%", "$0.8B"],
    ["Lido DAO", "LDO", "$1.02", "+0.84%", "$0.9B"],
    ["Immutable", "IMX", "$0.61", "-1.11%", "$1.1B"],
    ["Kaspa", "KAS", "$0.091", "+1.18%", "$2.2B"],
    ["Mantle", "MNT", "$1.02", "+0.74%", "$3.4B"],
    ["Fantom", "FTM", "$0.78", "+1.54%", "$2.2B"],
    ["Sei", "SEI", "$0.32", "-0.51%", "$1.2B"],
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
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        });

    });

}


// =====================================
// SEARCH
// =====================================

function setupSearch() {

    const search =
        document.querySelector(".search-box input");


    if (!search) return;


    search.addEventListener("input", function() {

        const keyword =
            this.value.toLowerCase().trim();


        const rows =
            document.querySelectorAll(
                ".generated-row"
            );


        rows.forEach(function(row) {

            const content =
                row.textContent.toLowerCase();


            row.style.display =
                content.includes(keyword)
                    ? "grid"
                    : "none";

        });

    });

}


// =====================================
// MOBILE MENU
// =====================================

function setupMobileMenu() {

    const button =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".navigation");


    if (!button || !navigation) return;


    button.addEventListener("click", function() {

        if (
            navigation.style.display ===
            "flex"
        ) {

            navigation.style.display =
                "none";

        } else {

            navigation.style.display =
                "flex";

            navigation.style.flexDirection =
                "column";

            navigation.style.position =
                "absolute";

            navigation.style.top =
                "78px";

            navigation.style.right =
                "20px";

            navigation.style.background =
                "#fff";

            navigation.style.padding =
                "20px";

            navigation.style.border =
                "1px solid #ddd";

            navigation.style.borderRadius =
                "10px";

        }

    });

}


// =====================================
// START OINANCE MARKETS
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCrypto();

        loadStocks();

        updateTopMovers();

        setupMarketTabs();

        setupSearch();

        setupMobileMenu();

        console.log(
            "OINANCE Markets is running."
        );

    }
);
