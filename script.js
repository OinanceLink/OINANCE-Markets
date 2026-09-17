E: "PFE",
        CVX: "CVX",
        XOM: "XOM",
        COST: "COST",
        HD: "HD",
        SBUX: "SBUX",
        UBER: "UBER",
        ABNB: "ABNB",
        PYPL: "PYPL",
        SHOP: "SHOP",
        PLTR: "PLTR",
        SNOW: "SNOW",
        COIN: "COIN",
        GE: "GE",
        GM: "GM",
        F: "F",
        TM: "TM",
        SONY: "SONY",
        BABA: "BABA",
        TCEHY: "TCEHY",
        TSM: "TSM",
        ASML: "ASML",
        NVO: "NVO",
        LVMH: "LVMUY",
        SHEL: "SHEL",
        BP: "BP",
        TTE: "TTE",
        RIO: "RIO",
        BHP: "BHP",
        AZN: "AZN",
        LLY: "LLY",
        UNH: "UNH",
        TMO: "TMO",
        DHR: "DHR",
        HON: "HON",
        CAT: "CAT",
        DE: "DE",
        UNP: "UNP",
        UPS: "UPS",
        FDX: "FDX",
        T: "T",
        VZ: "VZ",
        TMUS: "TMUS",
        CMCSA: "CMCSA",
        DIS: "DIS",
        WBD: "WBD",
        SPOT: "SPOT",
        EA: "EA",
        TTWO: "TTWO",
        RBLX: "RBLX",
        DASH: "DASH",
        XYZ: "XYZ",
        INTU: "INTU",
        NOW: "NOW",
        CRWD: "CRWD",
        PANW: "PANW",
        FTNT: "FTNT",
        DELL: "DELL",
        HPQ: "HPQ",
        MRVL: "MRVL",
        TXN: "TXN",
        AMAT: "AMAT",
        LRCX: "LRCX",
        ARM: "ARM",
        MELI: "MELI",
        SE: "SE",
        JD: "JD",
        PDD: "PDD",
        BIDU: "BIDU",
        NIO: "NIO",
        LI: "LI",
        XIACY: "XIACY",
        SSNLF: "SSNLF",
        AIR: "AIR",
        SIEGY: "SIEGY",
        SAP: "SAP",
        ACN: "ACN",
        BKNG: "BKNG",
        MAR: "MAR",
        EL: "EL",
        MKC: "MKC",
        TGT: "TGT",
        LOW: "LOW",
        TJX: "TJX",
        GIS: "GIS",
        MDLZ: "MDLZ"
    };

    const isCrypto = crypto.some(item => item[1] === symbol);

    let logoURL;

    if (isCrypto && cryptoLogos[symbol]) {

        logoURL =
            `https://assets.coingecko.com/coins/images/1/large/bitcoin.png`;

        /*
         * The image URL above is replaced below
         * for the individual coin.
         */

        const logoNames = {
            BTC: "bitcoin",
            ETH: "ethereum",
            USDT: "tether",
            BNB: "binancecoin",
            XRP: "ripple",
            SOL: "solana",
            ADA: "cardano",
            DOGE: "dogecoin",
            TRX: "tron",
            AVAX: "avalanche-2",
            LINK: "chainlink",
            DOT: "polkadot",
            LTC: "litecoin",
            BCH: "bitcoin-cash"
        };

        if (logoNames[symbol]) {
            logoURL =
                `https://assets.coingecko.com/coins/images/1/large/bitcoin.png`;
        }

    } else {

        logoURL =
            `https://images.financialcontent.com/stocks/logos/${symbol}.png`;

    }

    row.innerHTML = `
        <span>${number}</span>

        <span class="asset">
            <span class="asset-icon">
                <img
                    src="${logoURL}"
                    alt="${name}"
                    onerror="this.style.display='none'; this.parentElement.textContent='${symbol.charAt(0)}';"
                >
            </span>

            <span>
                <strong>${name}</strong>
                <small>${symbol}</small>
            </span>
        </span>

        <span>${price}</span>

        <span class="${changeClass}">
            ${change}
        </span>

        <span>${marketCap}</span>
    `;

    row.style.cursor = "pointer";

    row.addEventListener("click", function () {

        window.location.href =
            `asset.html?symbol=${encodeURIComponent(symbol)}`;

    });

    return row;
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
            "OINANCE Markets loaded:"
        );

        console.log(
            crypto.length +
            " crypto assets"
        );

        console.log(
            stocks.length +
            " stocks"
        );

    }
);
