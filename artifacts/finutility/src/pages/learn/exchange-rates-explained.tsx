import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ExchangeRatesExplainedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <article className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
          <Link href="/" className="text-sm text-primary hover:underline mb-8 inline-block">
            &larr; Back to Calculators
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            Exchange Rates Explained
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Exchange rates determine how much one currency is worth relative to another. They affect everything from international travel costs to the price of imported goods and global investments.
          </p>

          <div className="my-8">
            <AdPlaceholder />
          </div>

          <div className="prose prose-blue prose-lg max-w-none text-foreground">
            <h2>What is an Exchange Rate?</h2>
            <p>
              An exchange rate is the price at which one currency can be exchanged for another. For example, if the EUR/USD rate is 1.10, it means 1 Euro buys 1.10 US Dollars. Exchange rates fluctuate constantly based on supply and demand in the global foreign exchange (forex) market — the largest financial market in the world, with over $7 trillion traded daily.
            </p>

            <h2>Types of Exchange Rates</h2>
            <ul>
              <li>
                <strong>Spot Rate:</strong> The current market rate for an immediate exchange. This is what you see quoted on currency converter tools.
              </li>
              <li>
                <strong>Forward Rate:</strong> A rate agreed upon today for a currency exchange that will happen at a future date. Used by businesses to hedge against currency risk.
              </li>
              <li>
                <strong>Fixed Rate:</strong> A rate set and maintained by a government or central bank, pegged to another currency like the US Dollar.
              </li>
              <li>
                <strong>Floating Rate:</strong> Determined purely by market forces — supply and demand. Most major currencies like the USD, EUR, and JPY are floating.
              </li>
            </ul>

            <h2>What Moves Exchange Rates?</h2>
            <p>Exchange rates shift constantly. The main drivers are:</p>
            <ul>
              <li>
                <strong>Interest Rates:</strong> Higher interest rates attract foreign capital, increasing demand for that currency and pushing its value up. Central bank decisions are closely watched by forex traders.
              </li>
              <li>
                <strong>Inflation:</strong> Countries with lower inflation tend to see their currency appreciate over time. High inflation erodes purchasing power and weakens a currency.
              </li>
              <li>
                <strong>Economic Performance:</strong> Strong GDP growth, low unemployment, and a trade surplus all signal a healthy economy and typically strengthen a currency.
              </li>
              <li>
                <strong>Political Stability:</strong> Political uncertainty or instability tends to weaken a currency as investors move money to safer havens.
              </li>
              <li>
                <strong>Speculation:</strong> Large institutional traders and hedge funds can move rates based on expectations of future economic events.
              </li>
            </ul>

            <h2>Bid, Ask, and the Spread</h2>
            <p>
              When exchanging currency, you will notice two prices: the <strong>bid</strong> (what the market will pay to buy from you) and the <strong>ask</strong> (what the market will charge to sell to you). The difference is the <strong>spread</strong> — the profit margin for the exchange provider. Banks and airports often have wide spreads; specialized forex brokers or services like Wise offer much tighter spreads.
            </p>

            <h2>How Exchange Rates Affect You</h2>
            <ul>
              <li><strong>Travel:</strong> A stronger home currency means your money goes further abroad. A weaker currency makes foreign trips more expensive.</li>
              <li><strong>Imports and exports:</strong> A weak currency makes exports cheaper for foreign buyers but makes imported goods more expensive domestically.</li>
              <li><strong>International investments:</strong> Returns on foreign investments are affected by currency movements. A gain in the asset price can be partially or fully offset by an unfavorable exchange rate shift.</li>
              <li><strong>Remittances:</strong> People sending money internationally are directly affected by the rate and the fees charged per transfer.</li>
            </ul>

            <h2>How to Get the Best Rate</h2>
            <ul>
              <li>Avoid exchanging currency at airports or hotel desks — they offer the worst rates.</li>
              <li>Use a specialist money transfer service (e.g., Wise, Revolut) rather than a bank for large transfers.</li>
              <li>Check the mid-market rate (the rate you see on Google) as your benchmark for fairness.</li>
              <li>Consider timing if you are making a large international transfer — rates can vary significantly over days or weeks.</li>
            </ul>

            <div className="bg-muted/30 p-8 rounded-2xl border border-border my-12 text-center">
              <h3 className="mt-0 text-2xl font-bold">Convert currencies instantly</h3>
              <p className="text-muted-foreground mb-6">
                Use our live currency converter to check real-time exchange rates between 150+ currencies.
              </p>
              <Button asChild size="lg">
                <Link href="/currency-converter">Open Currency Converter</Link>
              </Button>
            </div>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Exchange rates reflect the relative value between two currencies at a given moment.</li>
              <li>Interest rates, inflation, and economic health are the primary long-term drivers.</li>
              <li>The bid-ask spread is how currency exchangers make their profit — compare providers.</li>
              <li>Currency movements can significantly impact international investments and purchasing power.</li>
            </ul>
          </div>

          <div className="my-12">
            <AdPlaceholder />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
