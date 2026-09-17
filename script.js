// ======================================================
// OINANCE MARKETS
// Market Data
// ======================================================

// =========================
// CRYPTOCURRENCIES
// =========================

const crypto = [

    ["Bitcoin", "BTC", "$108,450.00", "+2.41%", "$2.15T"],
    ["Ethereum", "ETH", "$4,210.32", "+1.87%", "$507.8B"],
    ["Tether", "USDT", "$1.00", "+0.02%", "$164.2B"],
    ["BNB", "BNB", "$965.40", "+0.91%", "$135.8B"],
    ["XRP", "XRP", "$2.94", "+3.21%", "$176.2B"],
    ["Solana", "SOL", "$231.45", "+4.12%", "$111.5B"],
    ["Cardano", "ADA", "$0.86", "+1.22%", "$30.7B"],
    ["Dogecoin", "DOGE", "$0.25", "-1.14%", "$37.1B"],
    ["TRON", "TRX", "$0.35", "+0.42%", "$33.9B"],
    ["Avalanche", "AVAX", "$37.21", "+2.31%", "$15.2B"],
    ["Chainlink", "LINK", "$23.14", "+3.44%", "$15.0B"],
    ["Polkadot", "DOT", "$4.82", "-0.62%", "$7.9B"],
    ["Wrapped Bitcoin", "WBTC", "$108,220.00", "+2.10%", "$13.4B"],
    ["Bitcoin Cash", "BCH", "$575.32", "+1.51%", "$11.4B"],
    ["Litecoin", "LTC", "$91.25", "+0.72%", "$6.8B"],
    ["Uniswap", "UNI", "$8.14", "+2.15%", "$5.1B"],
    ["Stellar", "XLM", "$0.38", "+1.42%", "$11.7B"],
    ["Hedera", "HBAR", "$0.22", "+3.04%", "$9.1B"],
    ["Cosmos", "ATOM", "$4.91", "-0.44%", "$1.9B"],
    ["Filecoin", "FIL", "$2.81", "+1.13%", "$1.8B"],
    ["Arbitrum", "ARB", "$0.51", "-1.21%", "$2.2B"],
    ["Aave", "AAVE", "$276.41", "+5.14%", "$4.2B"],
    ["Maker", "MKR", "$1,842.00", "+1.77%", "$1.7B"],
    ["NEAR Protocol", "NEAR", "$2.96", "+2.84%", "$3.6B"],
    ["Aptos", "APT", "$4.91", "+1.42%", "$3.1B"],
    ["Monero", "XMR", "$321.40", "+0.82%", "$5.9B"],
    ["Sui", "SUI", "$3.51", "+4.73%", "$10.2B"],
    ["Pepe", "PEPE", "$0.000011", "+2.31%", "$4.6B"],
    ["Render", "RENDER", "$5.62", "+3.19%", "$2.9B"],
    ["Injective", "INJ", "$13.42", "-0.71%", "$1.4B"],
    ["Algorand", "ALGO", "$0.24", "+1.16%", "$2.0B"],
    ["VeChain", "VET", "$0.026", "+0.91%", "$1.9B"],
    ["The Sandbox", "SAND", "$0.29", "-0.41%", "$0.7B"],
    ["Decentraland", "MANA", "$0.31", "+1.28%", "$0.6B"],
    ["Axie Infinity", "AXS", "$2.84", "+2.14%", "$1.0B"],
    ["Tezos", "XTZ", "$0.72", "+0.82%", "$0.7B"],
    ["EOS", "EOS", "$0.67", "-0.33%", "$1.0B"],
    ["PancakeSwap", "CAKE", "$2.31", "+1.92%", "$0.6B"],
    ["Curve DAO", "CRV", "$0.61", "+3.11%", "$0.8B"],
    ["Lido DAO", "LDO", "$0.78", "+2.14%", "$0.7B"],
    ["Immutable", "IMX", "$0.54", "-1.04%", "$0.9B"],
    ["Kaspa", "KAS", "$0.12", "+2.73%", "$3.1B"],
    ["Mantle", "MNT", "$1.01", "+1.22%", "$3.4B"],
    ["Fantom", "FTM", "$0.43", "-0.72%", "$1.2B"],
    ["Sei", "SEI", "$0.34", "+4.15%", "$1.3B"],
    ["Celestia", "TIA", "$1.61", "-2.14%", "$0.9B"],
    ["Jupiter", "JUP", "$0.72", "+3.72%", "$0.9B"],
    ["Ondo", "ONDO", "$0.91", "+2.84%", "$1.4B"],
    ["Bonk", "BONK", "$0.000021", "+4.21%", "$1.6B"],
    ["Floki", "FLOKI", "$0.000091", "+2.71%", "$0.9B"],
    ["Quant", "QNT", "$94.20", "+0.83%", "$1.4B"],
    ["Zcash", "ZEC", "$41.82", "+1.17%", "$0.7B"],
    ["Dash", "DASH", "$25.14", "-0.91%", "$0.3B"],
    ["Optimism", "OP", "$0.81", "+2.01%", "$1.5B"],
    ["Stacks", "STX", "$0.81", "+1.42%", "$1.2B"],
    ["THORChain", "RUNE", "$1.67", "-1.12%", "$0.6B"],
    ["The Graph", "GRT", "$0.071", "+1.84%", "$0.7B"],
    ["Flow", "FLOW", "$0.29", "+2.14%", "$0.5B"],
    ["MultiversX", "EGLD", "$13.82", "+0.91%", "$0.4B"],
    ["Theta Network", "THETA", "$0.78", "+1.71%", "$0.8B"],
    ["Frax", "FRAX", "$0.99", "+0.04%", "$0.4B"],
    ["Pyth Network", "PYTH", "$0.12", "+2.51%", "$0.7B"],
    ["Worldcoin", "WLD", "$0.74", "+3.12%", "$1.0B"],
    ["Notcoin", "NOT", "$0.0021", "-1.42%", "$0.2B"],
    ["JasmyCoin", "JASMY", "$0.021", "+2.44%", "$1.0B"],
    ["Gala", "GALA", "$0.016", "+1.91%", "$0.6B"],
    ["IOTA", "IOTA", "$0.18", "+0.82%", "$0.6B"],
    ["Kava", "KAVA", "$0.29", "-0.52%", "$0.3B"],
    ["Chiliz", "CHZ", "$0.043", "+1.41%", "$0.4B"],
    ["Enjin Coin", "ENJ", "$0.077", "+2.18%", "$0.1B"],
    ["Basic Attention Token", "BAT", "$0.19", "+0.71%", "$0.3B"],
    ["Zilliqa", "ZIL", "$0.011", "-0.34%", "$0.2B"],
    ["1inch", "1INCH", "$0.21", "+1.24%", "$0.2B"],
    ["Synthetix", "SNX", "$0.52", "+1.83%", "$0.2B"],
    ["Compound", "COMP", "$45.31", "+2.14%", "$0.4B"],
    ["Convex Finance", "CVX", "$2.21", "+1.11%", "$0.3B"],
    ["yearn.finance", "YFI", "$4,920.00", "+0.82%", "$0.2B"],
    ["Gnosis", "GNO", "$143.12", "+1.41%", "$0.3B"],
    ["Rocket Pool", "RPL", "$4.72", "-0.91%", "$0.1B"],
    ["SushiSwap", "SUSHI", "$0.71", "+2.02%", "$0.2B"],
    ["Loopring", "LRC", "$0.084", "+1.21%", "$0.1B"],
    ["0x", "ZRX", "$0.25", "+0.94%", "$0.2B"],
    ["Celo", "CELO", "$0.26", "+1.43%", "$0.1B"],
    ["Harmony", "ONE", "$0.009", "-0.51%", "$0.1B"],
    ["Waves", "WAVES", "$0.94", "+0.71%", "$0.1B"],
    ["Ontology", "ONT", "$0.16", "+1.12%", "$0.1B"],
    ["Siacoin", "SC", "$0.0028", "+1.62%", "$0.1B"],
    ["Nano", "XNO", "$0.71", "+0.84%", "$0.1B"],
    ["Decred", "DCR", "$18.42", "+0.62%", "$0.3B"],
    ["Qtum", "QTUM", "$2.41", "-0.81%", "$0.2B"],
    ["ICON", "ICX", "$0.13", "+0.92%", "$0.1B"],
    ["Audius", "AUDIO", "$0.052", "+1.72%", "$0.1B"],
    ["Bancor", "BNT", "$0.61", "+0.81%", "$0.1B"],
    ["CKB", "CKB", "$0.005", "+2.11%", "$0.2B"],
    ["Ravencoin", "RVN", "$0.018", "-0.61%", "$0.2B"],
    ["Mina Protocol", "MINA", "$0.16", "+1.33%", "$0.2B"],
    ["Kusama", "KSM", "$13.21", "+0.72%", "$0.2B"],
    ["WOO Network", "WOO", "$0.081", "+1.42%", "$0.1B"],
    ["Mask Network", "MASK", "$1.34", "+2.13%", "$0.1B"],
    ["Storj", "STORJ", "$0.29", "+1.04%", "$0.1B"],
    ["Arweave", "AR", "$5.21", "+2.82%", "$0.3B"],
    ["Helium", "HNT", "$2.71", "+1.92%", "$1.0B"],
    ["Akash Network", "AKT", "$1.21", "+2.14%", "$0.3B"],
    ["Pendle", "PENDLE", "$4.02", "+3.01%", "$0.6B"],
    ["Starknet", "STRK", "$0.14", "-1.21%", "$0.3B"],
    ["Manta Network", "MANTA", "$0.19", "+1.14%", "$0.1B"],
    ["Blur", "BLUR", "$0.061", "+2.42%", "$0.1B"],
    ["dYdX", "DYDX", "$0.39", "+1.21%", "$0.1B"],
    ["LayerZero", "ZRO", "$1.61", "+2.32%", "$0.2B"],
    ["Ethena", "ENA", "$0.62", "+3.12%", "$1.1B"],
    ["ApeCoin", "APE", "$0.51", "-0.72%", "$0.3B"]
];


// =========================
// STOCKS
// =========================

const stocks = [

    ["Apple", "AAPL", "$246.75", "+1.42%", "$3.68T"],
    ["Microsoft", "MSFT", "$505.12", "+0.84%", "$3.76T"],
    ["NVIDIA", "NVDA", "$176.42", "+2.18%", "$4.30T"],
    ["Amazon", "AMZN", "$238.91", "+1.14%", "$2.52T"],
    ["Alphabet", "GOOGL", "$251.82", "+0.92%", "$3.05T"],
    ["Meta Platforms", "META", "$780.21", "+1.63%", "$1.96T"],
    ["Tesla", "TSLA", "$335.62", "-1.21%", "$1.08T"],
    ["Broadcom", "AVGO", "$392.51", "+2.04%", "$1.85T"],
    ["Berkshire Hathaway", "BRK.B", "$512.31", "+0.42%", "$1.11T"],
    ["JPMorgan Chase", "JPM", "$311.42", "+0.72%", "$865B"],
    ["Visa", "V", "$344.12", "+0.81%", "$675B"],
    ["Mastercard", "MA", "$587.42", "+0.63%", "$535B"],
    ["Walmart", "WMT", "$102.41", "+0.51%", "$820B"],
    ["Netflix", "NFLX", "$1,190.31", "+1.31%", "$510B"],
    ["AMD", "AMD", "$164.31", "+2.41%", "$267B"],
    ["Oracle", "ORCL", "$247.42", "+1.18%", "$700B"],
    ["Coca-Cola", "KO", "$71.42", "+0.34%", "$308B"],
    ["PepsiCo", "PEP", "$151.42", "-0.41%", "$208B"],
    ["McDonald's", "MCD", "$313.12", "+0.72%", "$226B"],
    ["Nike", "NKE", "$74.31", "-0.83%", "$110B"],
    ["Adobe", "ADBE", "$342.41", "+1.02%", "$145B"],
    ["Salesforce", "CRM", "$352.42", "+1.44%", "$338B"],
    ["Intel", "INTC", "$24.82", "-1.51%", "$108B"],
    ["Cisco", "CSCO", "$71.42", "+0.52%", "$285B"],
    ["IBM", "IBM", "$282.12", "+0.31%", "$263B"],
    ["Qualcomm", "QCOM", "$164.41", "+1.21%", "$183B"],
    ["Micron", "MU", "$151.21", "+2.82%", "$168B"],
    ["Goldman Sachs", "GS", "$742.11", "+0.64%", "$238B"],
    ["Morgan Stanley", "MS", "$158.21", "+0.51%", "$247B"],
    ["Bank of America", "BAC", "$52.42", "+0.81%", "$397B"],
    ["Wells Fargo", "WFC", "$91.42", "+0.42%", "$302B"],
    ["Citigroup", "C", "$103.21", "+0.31%", "$191B"],
    ["American Express", "AXP", "$328.21", "+0.72%", "$230B"],
    ["Procter & Gamble", "PG", "$158.42", "+0.21%", "$370B"],
    ["Johnson & Johnson", "JNJ", "$176.31", "+0.32%", "$425B"],
    ["AbbVie", "ABBV", "$198.42", "+0.74%", "$351B"],
    ["Merck", "MRK", "$83.42", "-0.21%", "$207B"],
    ["Pfizer", "PFE", "$26.42", "+0.44%", "$150B"],
    ["Chevron", "CVX", "$158.41", "+0.62%", "$290B"],
    ["Exxon Mobil", "XOM", "$112.41", "+0.71%", "$485B"],
    ["Costco", "COST", "$972.42", "+0.53%", "$432B"],
    ["Home Depot", "HD", "$394.12", "+0.42%", "$394B"],
    ["Starbucks", "SBUX", "$84.42", "+1.02%", "$95B"],
    ["Uber", "UBER", "$97.31", "+1.82%", "$204B"],
    ["Airbnb", "ABNB", "$132.42", "+0.81%", "$82B"],
    ["PayPal", "PYPL", "$69.42", "+1.13%", "$70B"],
    ["Shopify", "SHOP", "$143.12", "+2.12%", "$185B"],
    ["Palantir", "PLTR", "$158.42", "+3.14%", "$360B"],
    ["Snowflake", "SNOW", "$241.42", "+1.44%", "$80B"],
    ["Coinbase", "COIN", "$381.42", "+2.81%", "$96B"],
    ["Johnson Controls", "JCI", "$113.42", "+0.42%", "$76B"],
    ["Lockheed Martin", "LMT", "$520.21", "+0.32%", "$118B"],
    ["Boeing", "BA", "$228.42", "+1.21%", "$137B"],
    ["GE Aerospace", "GE", "$279.42", "+0.62%", "$300B"],
    ["General Motors", "GM", "$62.41", "+0.91%", "$69B"],
    ["Ford", "F", "$12.42", "-0.41%", "$50B"],
    ["Toyota", "TM", "$241.42", "+0.42%", "$390B"],
    ["Sony", "SONY", "$28.42", "+0.81%", "$170B"],
    ["Alibaba", "BABA", "$156.42", "+1.41%", "$390B"],
    ["Tencent", "TCEHY", "$71.42", "+1.02%", "$650B"],
    ["Taiwan Semiconductor", "TSM", "$262.42", "+2.02%", "$1.36T"],
    ["ASML", "ASML", "$1,024.42", "+1.31%", "$400B"],
    ["Novo Nordisk", "NVO", "$62.42", "-0.71%", "$140B"],
    ["LVMH", "LVMUY", "$145.42", "+0.42%", "$290B"],
    ["Shell", "SHEL", "$74.42", "+0.62%", "$210B"],
    ["BP", "BP", "$31.42", "+0.31%", "$75B"],
    ["TotalEnergies", "TTE", "$63.42", "+0.51%", "$145B"],
    ["Rio Tinto", "RIO", "$71.42", "+0.41%", "$115B"],
    ["BHP Group", "BHP", "$51.42", "+0.34%", "$130B"],
    ["AstraZeneca", "AZN", "$83.42", "+0.52%", "$260B"],
    ["Eli Lilly", "LLY", "$742.42", "+1.21%", "$705B"],
    ["UnitedHealth", "UNH", "$310.42", "-0.42%", "$285B"],
    ["Thermo Fisher", "TMO", "$462.42", "+0.62%", "$177B"],
    ["Danaher", "DHR", "$221.42", "+0.51%", "$160B"],
    ["Honeywell", "HON", "$221.42", "+0.32%", "$144B"],
    ["Caterpillar", "CAT", "$435.42", "+0.82%", "$210B"],
    ["Deere", "DE", "$520.42", "+0.41%", "$142B"],
    ["Union Pacific", "UNP", "$242.42", "+0.32%", "$145B"],
    ["UPS", "UPS", "$86.42", "-0.52%", "$74B"],
    ["FedEx", "FDX", "$247.42", "+0.61%", "$60B"],
    ["AT&T", "T", "$28.42", "+0.21%", "$200B"],
    ["Verizon", "VZ", "$42.42", "+0.31%", "$180B"],
    ["T-Mobile", "TMUS", "$245.42", "+0.52%", "$285B"],
    ["Comcast", "CMCSA", "$31.42", "-0.21%", "$120B"],
    ["Walt Disney", "DIS", "$115.42", "+0.72%", "$205B"],
    ["Warner Bros. Discovery", "WBD", "$14.42", "+1.42%", "$36B"],
    ["Spotify", "SPOT", "$675.42", "+1.82%", "$134B"],
    ["Electronic Arts", "EA", "$192.42", "+0.72%", "$51B"],
    ["Take-Two Interactive", "TTWO", "$235.42", "+1.01%", "$43B"],
    ["Roblox", "RBLX", "$122.42", "+2.14%", "$79B"],
    ["DoorDash", "DASH", "$254.42", "+1.62%", "$107B"],
    ["Block", "XYZ", "$72.42", "+1.11%", "$43B"],
    ["Intuit", "INTU", "$742.42", "+0.92%", "$208B"],
    ["ServiceNow", "NOW", "$1,012.42", "+1.32%", "$210B"],
    ["CrowdStrike", "CRWD", "$492.42", "+2.01%", "$120B"],
    ["Palo Alto Networks", "PANW", "$196.42", "+1.71%", "$126B"],
    ["Fortinet", "FTNT", "$82.42", "+1.21%", "$63B"],
    ["Dell Technologies", "DELL", "$132.42", "+1.01%", "$92B"],
    ["HP", "HPQ", "$29.42", "+0.42%", "$28B"],
    ["Marvell Technology", "MRVL", "$82.42", "+2.41%", "$71B"],
    ["Texas Instruments", "TXN", "$205.42", "+0.71%", "$187B"],
    ["Applied Materials", "AMAT", "$211.42", "+1.81%", "$172B"],
    ["Lam Research", "LRCX", "$151.42", "+1.42%", "$195B"],
    ["Arm Holdings", "ARM", "$158.42", "+2.22%", "$165B"],
    ["MercadoLibre", "MELI", "$2,145.42", "+1.51%", "$109B"],
    ["Sea Limited", "SE", "$182.42", "+1.02%", "$104B"],
    ["JD.com", "JD", "$42.42", "+0.82%", "$61B"],
    ["PDD Holdings", "PDD", "$118.42", "+1.21%", "$165B"],
    ["Baidu", "BIDU", "$94.42", "+0.41%", "$27B"],
    ["NIO", "NIO", "$5.42", "-0.71%", "$12B"],
    ["Li Auto", "LI", "$28.42", "+1.12%", "$29B"],
    ["Xiaomi", "XIACF", "$5.42", "+0.61%", "$135B"],
    ["Samsung Electronics", "SSNLF", "$45.42", "+0.52%", "$280B"],
    ["Nintendo", "NTDOY", "$24.42", "+1.42%", "$108B"],
    ["Airbus", "EADSY", "$47.42", "+0.31%", "$135B"],
    ["Siemens", "SIEGY", "$115.42", "+0.42%", "$95B"],
    ["SAP", "SAP", "$290.42", "+0.82%", "$350B"],
    ["Accenture", "ACN", "$260.42", "+0.72%", "$160B"],
    ["Booking Holdings", "BKNG", "$5,420.42", "+1.21%", "$180B"],
    ["Marriott", "MAR", "$310.42", "+0.61%", "$87B"],
    ["Estée Lauder", "EL", "$88.42", "+0.41%", "$31B"],
    ["McCormick", "MKC", "$82.42", "+0.32%", "$22B"],
    ["Target", "TGT", "$105.42", "+0.21%", "$48B"],
    ["Lowe's", "LOW", "$275.42", "+0.52%", "$155B"],
    ["TJX Companies", "TJX", "$147.42", "+0.72%", "$165B"],
    ["General Mills", "GIS", "$54.42", "-0.31%", "$30B"],
    ["Mondelez", "MDLZ", "$72.42", "+0.42%", "$95B"]
];


// ======================================================
// LOGOS
// ======================================================

const cryptoLogos = {

    BTC: "btc",
    ETH: "eth",
    USDT: "usdt",
    BNB: "bnb",
    XRP: "xrp",
    SOL: "sol",
    ADA: "ada",
    DOGE: "doge",
    TRX: "trx",
    AVAX: "avax",
    LINK: "link",
    DOT: "dot",
    WBTC: "wbtc",
    BCH: "bch",
    LTC: "ltc",
    UNI: "uni",
    XLM: "xlm",
    HBAR: "hbar",
    ATOM: "atom",
    FIL: "fil",
    ARB: "arb",
    AAVE: "aave",
    MKR: "mkr",
    NEAR: "near",
    APT: "apt",
    XMR: "xmr",
    SUI: "sui",
    PEPE: "pepe",
    RENDER: "rndr",
    INJ: "inj",
    ALGO: "algo",
    VET: "vet",
    SAND: "sand",
    MANA: "mana",
    AXS: "axs",
    XTZ: "xtz",
    EOS: "eos",
    CAKE: "cake",
    CRV: "crv",
    LDO: "ldo",
    IMX: "imx",
    KAS: "kas",
    MNT: "mnt",
    FTM: "ftm",
    SEI: "sei",
    TIA: "tia",
    JUP: "jup",
    ONDO: "ondo",
    BONK: "bonk",
    FLOKI: "floki",
    QNT: "qnt",
    ZEC: "zec",
    DASH: "dash",
    OP: "op",
    STX: "stx",
    RUNE: "rune",
    GRT: "grt",
    FLOW: "flow",
    EGLD: "egld",
    THETA: "theta",
    FRAX: "frax",
    PYTH: "pyth",
    WLD: "wld",
    NOT: "not",
    JASMY: "jasmy",
    GALA: "gala",
    IOTA: "iota",
    KAVA: "kava",
    CHZ: "chz",
    ENJ: "enj",
    BAT: "bat",
    ZIL: "zil",
    "1INCH": "1inch",
    SNX: "snx",
    COMP: "comp",
    CVX: "cvx",
    YFI: "yfi",
    GNO: "gno",
    RPL: "rpl",
    SUSHI: "sushi",
    LRC: "lrc",
    ZRX: "zrx",
    CELO: "celo",
    ONE: "one",
    WAVES: "waves",
    ONT: "ont",
    SC: "sc",
    XNO: "nano",
    DCR: "dcr",
    QTUM: "qtum",
    ICX: "icx",
    AUDIO: "audio",
    BNT: "bnt",
    CKB: "ckb",
    RVN: "rvn",
    MINA: "mina",
    KSM: "ksm",
    WOO: "woo",
    MASK: "mask",
    STORJ: "storj",
    AR: "ar",
    HNT: "hnt",
    AKT: "akt",
    PENDLE: "pendle",
    STRK: "strk",
    MANTA: "manta",
    BLUR: "blur",
    DYDX: "dydx",
    ZRO: "zro",
    ENA: "ena",
    APE: "ape"
};


// Stock company websites

const stockDomains = {

    AAPL: "apple.com",
    MSFT: "microsoft.com",
    NVDA: "nvidia.com",
    AMZN: "amazon.com",
    GOOGL: "google.com",
    META: "meta.com",
    TSLA: "tesla.com",
    AVGO: "broadcom.com",
    "BRK.B": "berkshirehathaway.com",
    JPM: "jpmorganchase.com",
    V: "visa.com",
    MA: "mastercard.com",
    WMT: "walmart.com",
    NFLX: "netflix.com",
    AMD: "amd.com",
    ORCL: "oracle.com",
    KO: "coca-cola.com",
    PEP: "pepsico.com",
    MCD: "mcdonalds.com",
    NKE: "nike.com",
    ADBE: "adobe.com",
    CRM: "salesforce.com",
    INTC: "intel.com",
    CSCO: "cisco.com",
    IBM: "ibm.com",
    QCOM: "qualcomm.com",
    MU: "micron.com",
    GS: "goldmansachs.com",
    MS: "morganstanley.com",
    BAC: "bankofamerica.com",
    WFC: "wellsfargo.com",
    C: "citigroup.com",
    AXP: "americanexpress.com",
    PG: "pg.com",
    JNJ: "jnj.com",
    ABBV: "abbvie.com",
    MRK: "merck.com",
    PFE: "pfizer.com",
    CVX: "chevron.com",
    XOM: "exxonmobil.com",
    COST: "costco.com",
    HD: "homedepot.com",
    SBUX: "starbucks.com",
    UBER: "uber.com",
    ABNB: "airbnb.com",
    PYPL: "paypal.com",
    SHOP: "shopify.com",
    PLTR: "palantir.com",
    SNOW: "snowflake.com",
    COIN: "coinbase.com",
    JCI: "johnsoncontrols.com",
    LMT: "lockheedmartin.com",
    BA: "boeing.com",
    GE: "ge.com",
    GM: "gm.com",
    F: "ford.com",
    TM: "toyota.com",
    SONY: "sony.com",
    BABA: "alibabagroup.com",
    TCEHY: "tencent.com",
    TSM: "tsmc.com",
    ASML: "asml.com",
    NVO: "novonordisk.com",
    LVMUY: "lvmh.com",
    SHEL: "shell.com",
    BP: "bp.com",
    TTE: "totalenergies.com",
    RIO: "riotinto.com",
    BHP: "bhp.com",
    AZN: "astrazeneca.com",
    LLY: "lilly.com",
    UNH: "unitedhealthgroup.com",
    TMO: "thermofisher.com",
    DHR: "danaher.com",
    HON: "honeywell.com",
    CAT: "caterpillar.com",
    DE: "deere.com",
    UNP: "up.com",
    UPS: "ups.com",
    FDX: "fedex.com",
    T: "att.com",
    VZ: "verizon.com",
    TMUS: "t-mobile.com",
    CMCSA: "comcast.com",
    DIS: "disney.com",
    WBD: "wbd.com",
    SPOT: "spotify.com",
    EA: "ea.com",
    TTWO: "take2games.com",
    RBLX: "roblox.com",
    DASH: "doordash.com",
    XYZ: "block.xyz",
    INTU: "intuit.com",
    NOW: "servicenow.com",
    CRWD: "crowdstrike.com",
    PANW: "paloaltonetworks.com",
    FTNT: "fortinet.com",
    DELL: "dell.com",
    HPQ: "hp.com",
    MRVL: "marvell.com",
    TXN: "ti.com",
    AMAT: "appliedmaterials.com",
    LRCX: "lamresearch.com",
    ARM: "arm.com",
    MELI: "mercadolibre.com",
    SE: "sea.com",
    JD: "jd.com",
    PDD: "pddholdings.com",
    BIDU: "baidu.com",
    NIO: "nio.com",
    LI: "lixiang.com",
    XIACF: "mi.com",
    SSNLF: "samsung.com",
    NTDOY: "nintendo.com",
    EADSY: "airbus.com",
    SIEGY: "siemens.com",
    SAP: "sap.com",
    ACN: "accenture.com",
    BKNG: "bookingholdings.com",
    MAR: "marriott.com",
    EL: "elcompanies.com",
    MKC: "mccormick.com",
    TGT: "target.com",
    LOW: "lowes.com",
    TJX: "tjx.com",
    GIS: "generalmills.com",
    MDLZ: "mondelezinternational.com"
};


// ======================================================
// CREATE MARKET ROW
// ======================================================

function createRow(item, number) {

    const row = document.createElement("div");

    row.className = "market-row generated-row";

    const name = item[0];
    const symbol = item[1];
    const price = item[2];
    const change = item[3];
    const marketCap = item[4];

    const changeClass =
        change.startsWith("+")
            ? "positive"
            : "negative";

    const isCrypto =
        crypto.some(function(asset) {
            return asset[1] === symbol;
        });

    let logoURL = "";

    // Crypto logo
    if (isCrypto) {

        const logoSymbol = cryptoLogos[symbol];

        if (logoSymbol) {

            logoURL =
                `https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/128/color/${logoSymbol}.png`;
        }

    } else {

        // Stock logo
        const domain = stockDomains[symbol];

        if (domain) {

            logoURL =
                `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
        }
    }


    row.innerHTML = `

        <span>${number}</span>

        <span class="asset">

            <span class="asset-icon">

                ${
                    logoURL

                    ?

                    `<img
                        src="${logoURL}"
                        alt="${name} logo"
                        loading="lazy"
                    >`

                    :

                    `<span>${symbol.charAt(0)}</span>`
                }

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


    // Make entire row clickable

    row.style.cursor = "pointer";

    row.addEventListener("click", function() {

        window.location.href =
            `asset.html?symbol=${encodeURIComponent(symbol)}`;

    });


    // Logo fallback

    const logo =
        row.querySelector(".asset-icon img");

    if (logo) {

        logo.addEventListener("error", function() {

            this.style.display = "none";

            const icon =
                this.parentElement;

            icon.innerHTML =
                `<span>${symbol.charAt(0)}</span>`;

        });

    }


    return row;
}


// ======================================================
// LOAD CRYPTO
// ======================================================

function loadCrypto() {

    const box =
        document.querySelector(".crypto-market-box");

    if (!box) return;


    const header =
        box.querySelector(".table-header");


    box.innerHTML = "";


    if (header) {

        box.appendChild(header);

    }


    crypto.forEach(function(item, index) {

        const row =
            createRow(item, index + 1);

        box.appendChild(row);

    });

}


// ======================================================
// LOAD STOCKS
// ======================================================

function loadStocks() {

    const box =
        document.querySelector(".stock-market-box");

    if (!box) return;


    const header =
        box.querySelector(".table-header");


    box.innerHTML = "";


    if (header) {

        box.appendChild(header);

    }


    stocks.forEach(function(item, index) {

        const row =
            createRow(item, index + 1);

        box.appendChild(row);

    });

}


// ======================================================
// TOP MOVERS
// ======================================================

function updateTopMovers() {

    const allAssets =
        crypto.concat(stocks);


    let topGainer =
        allAssets[0];

    let topLoser =
        allAssets[0];


    allAssets.forEach(function(item) {

        const change =
            parseFloat(item[3].replace("%", ""));


        const gainerChange =
            parseFloat(
                topGainer[3].replace("%", "")
            );


        const loserChange =
            parseFloat(
                topLoser[3].replace("%", "")
            );


        if (change > gainerChange) {

            topGainer = item;

        }


        if (change < loserChange) {

            topLoser = item;

        }

    });


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


    if (gainerName) {

        gainerName.textContent =
            topGainer[0];

    }


    if (gainerPrice) {

        gainerPrice.textContent =
            topGainer[2];

    }


    if (gainerChange) {

        gainerChange.textContent =
            topGainer[3];

    }


    if (loserName) {

        loserName.textContent =
            topLoser[0];

    }


    if (loserPrice) {

        loserPrice.textContent =
            topLoser[2];

    }


    if (loserChange) {

        loserChange.textContent =
            topLoser[3];

    }

}


// ======================================================
// MARKET TABS
// ======================================================

function setupMarketTabs() {

    const tabs =
        document.querySelectorAll(".market-tab");

    const cryptoSection =
        document.querySelector("#crypto");

    const stockSection =
        document.querySelector("#stocks");


    tabs.forEach(function(tab) {

        tab.addEventListener("click", function() {

            tabs.forEach(function(t) {

                t.classList.remove("active");

            });


            tab.classList.add("active");


            const market =
                tab.dataset.market;


            if (market === "crypto") {

                cryptoSection.style.display =
                    "block";

                stockSection.style.display =
                    "none";

            }


            else if (market === "stocks") {

                cryptoSection.style.display =
                    "none";

                stockSection.style.display =
                    "block";

            }


            else {

                cryptoSection.style.display =
                    "block";

                stockSection.style.display =
                    "block";

            }

        });

    });

}


// ======================================================
// SEARCH
// ======================================================

function setupSearch() {

    const searchInput =
        document.querySelector(".search-box input");

    if (!searchInput) return;


    searchInput.addEventListener("input", function() {

        const search =
            searchInput.value
                .toLowerCase()
                .trim();


        const rows =
            document.querySelectorAll(
                ".generated-row"
            );


        rows.forEach(function(row) {

            const text =
                row.textContent.toLowerCase();


            if (text.includes(search)) {

                row.style.display =
                    "grid";

            } else {

                row.style.display =
                    "none";

            }

        });

    });

}


// ======================================================
// MOBILE MENU
// ======================================================

function setupMobileMenu() {

    const menuButton =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".navigation");


    if (!menuButton || !navigation) return;


    menuButton.addEventListener("click", function() {

        navigation.classList.toggle("open");

    });

}


// ======================================================
// ASSET PAGE
// ======================================================

function loadAssetPage() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const symbol =
        params.get("symbol");


    if (!symbol) return;


    const allAssets =
        crypto.concat(stocks);


    const asset =
        allAssets.find(function(item) {

            return item[1] === symbol;

        });


    if (!asset) return;


    const name = asset[0];

    const price = asset[2];

    const change = asset[3];

    const marketCap = asset[4];


    const isCrypto =
        crypto.some(function(item) {

            return item[1] === symbol;

        });


    const type =
        isCrypto
            ? "CRYPTOCURRENCY"
            : "STOCK";


    const market =
        isCrypto
            ? "Crypto"
            : "Stocks";


    const assetName =
        document.getElementById("assetName");

    const assetSymbol =
        document.getElementById("assetSymbol");

    const assetType =
        document.getElementById("assetType");

    const assetPrice =
        document.getElementById("assetPrice");

    const assetChange =
        document.getElementById("assetChange");

    const marketCapElement =
        document.getElementById("marketCap");

    const infoSymbol =
        document.getElementById("infoSymbol");

    const infoMarket =
        document.getElementById("infoMarket");

    const aboutTitle =
        document.getElementById("aboutTitle");

    const assetIcon =
        document.getElementById("assetIcon");


    if (assetName)
        assetName.textContent = name;


    if (assetSymbol)
        assetSymbol.textContent = symbol;


    if (assetType)
        assetType.textContent = type;


    if (assetPrice)
        assetPrice.textContent = price;


    if (assetChange) {

        assetChange.textContent =
            change;

        assetChange.className =
            change.startsWith("+")
                ? "positive"
                : "negative";

    }


    if (marketCapElement)
        marketCapElement.textContent =
            marketCap;


    if (infoSymbol)
        infoSymbol.textContent =
            symbol;


    if (infoMarket)
        infoMarket.textContent =
            market;


    if (aboutTitle)
        aboutTitle.textContent =
            `About ${name}`;


    if (assetIcon) {

        let logoURL = "";


        if (isCrypto) {

            const logoSymbol =
                cryptoLogos[symbol];


            if (logoSymbol) {

                logoURL =
                    `https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/128/color/${logoSymbol}.png`;

            }

        }

        else {

            const domain =
                stockDomains[symbol];


            if (domain) {

                logoURL =
                    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

            }

        }


        if (logoURL) {

            assetIcon.innerHTML = `

                <img
                    src="${logoURL}"
                    alt="${name} logo"
                >

            `;

        } else {

            assetIcon.textContent =
                symbol.charAt(0);

        }


        const iconImage =
            assetIcon.querySelector("img");


        if (iconImage) {

            iconImage.addEventListener(
                "error",
                function() {

                    assetIcon.innerHTML =
                        `<span>${symbol.charAt(0)}</span>`;

                }
            );

        }

    }


    // Update browser title

    document.title =
        `${name} (${symbol}) | OINANCE Markets`;

}


// ======================================================
// START EVERYTHING
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCrypto();

        loadStocks();

        updateTopMovers();

        setupMarketTabs();

        setupSearch();

        setupMobileMenu();

        loadAssetPage();

    }
);
