import express from "express";
import path from "path";

const app = express();
const PORT = 3000;


// Real-time market API endpoint
app.get("/api/markets", async (req, res) => {
  try {
    const data = {
      currencies: {},
      commodities: {},
      zse: {}
    };

    // 1. Fetch Exchange Rates
    try {
      const exRateRes = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      if (exRateRes.ok) {
        const exData = await exRateRes.json();
        data.currencies = {
          ZWG: exData.rates.ZWG || 26.79,
          ZWL: exData.rates.ZWL || 15847.50,
          ZAR: exData.rates.ZAR || 18.5,
          GBP: exData.rates.GBP || 0.78,
          EUR: exData.rates.EUR || 0.91
        };
      }
    } catch (e) {
      console.error("Exchange rate fetch error", e);
    }

    // 2. Fetch Commodities from Yahoo Finance
    const fetchYahoo = async (ticker) => {
      try {
        const response = await fetch(`https://query2.finance.yahoo.com/v8/finance/chart/${ticker}`, {
          headers: { "User-Agent": "Mozilla/5.0" }
        });
        if (response.ok) {
          const json = await response.json();
          const meta = json.chart.result[0].meta;
          const price = meta.regularMarketPrice;
          const prevClose = meta.chartPreviousClose;
          const change = price - prevClose;
          const changePct = (change / prevClose) * 100;
          return { price, change, changePct, up: change >= 0 };
        }
      } catch (e) { }
      return null;
    };

    const [gold, platinum, palladium, corn, cotton] = await Promise.all([
      fetchYahoo("GC=F"), // Gold
      fetchYahoo("PL=F"), // Platinum
      fetchYahoo("PA=F"), // Palladium
      fetchYahoo("ZC=F"), // Corn
      fetchYahoo("CT=F")  // Cotton
    ]);

    if (gold) data.commodities.gold = gold;
    if (platinum) data.commodities.platinum = platinum;
    if (palladium) data.commodities.palladium = palladium;
    if (corn) data.commodities.maize = corn; // using corn for maize
    if (cotton) data.commodities.cotton = cotton;

    // Simulated ZSE data since no public free API exists for ZSE
    // Use random walk around baseline
    const now = Date.now();
    const noise = Math.sin(now / 100000) * 0.02; // slow variation
    const zseBase = 4847.32;
    data.zse = {
      allShare: { price: zseBase * (1 + noise), changePct: noise * 100, up: noise >= 0 },
      top10: { price: 3124.56 * (1 + noise * 1.2), changePct: noise * 1.2 * 100, up: noise >= 0 },
      industrial: { price: 5102.18 * (1 + noise * 0.8), changePct: noise * 0.8 * 100, up: noise >= 0 },
      mining: { price: 2845.90 * (1 - noise * 0.5), changePct: -noise * 0.5 * 100, up: -noise >= 0 }
    };

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
});


// Serve static files from root directory
app.use(express.static(path.join(process.cwd())));

// Fallback or explicit route for html files and SPA
app.get("*", (req, res) => {
  const reqPath = req.path === "/" ? "/index.html" : req.path;
  const filePath = path.join(process.cwd(), reqPath);
  
  res.sendFile(filePath, (err) => {
    if (err) {
      // If file not found with exact path, try adding .html if no extension
      if (!path.extname(reqPath)) {
        res.sendFile(filePath + ".html", (err2) => {
          if (err2) {
            res.sendFile(path.join(process.cwd(), "index.html"));
          }
        });
      } else {
        res.sendFile(path.join(process.cwd(), "index.html"));
      }
    }
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
