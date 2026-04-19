import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, BarChart2, DollarSign } from "lucide-react";

export default function ExchangeRatesExplainedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <div className="border-b border-border/50 bg-card">
          <div className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              &larr; Back to Calculators
            </Link>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              <Globe className="h-3.5 w-3.5" /> Learn
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5 leading-tight tracking-tight text-balance">
              Exchange Rates Explained
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Exchange rates determine how much one currency is worth relative to another. They affect international travel, imported goods, investments, and remittances.
            </p>
          </div>
        </div>

        <article className="container mx-auto px-4 md:px-8 py-14 max-w-3xl">
          <div className="mb-10">
            <AdPlaceholder />
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            {[
              { icon: BarChart2, label: "Daily forex volume", value: "$7 trillion+" },
              { icon: TrendingUp, label: "Primary rate driver", value: "Interest rates" },
              { icon: DollarSign, label: "Best place to exchange", value: "Not the airport" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-border bg-card p-5 flex flex-col gap-1">
                <Icon className="h-4 w-4 text-primary mb-1" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                <p className="text-base font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-3">What is an Exchange Rate?</h2>
              <p className="text-muted-foreground leading-relaxed">
                An exchange rate is the price at which one currency can be exchanged for another. If the EUR/USD rate is 1.10, it means 1 Euro buys 1.10 US Dollars. Rates fluctuate constantly based on supply and demand in the global forex market — with over $7 trillion traded daily, it is the largest financial market in the world.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Types of Exchange Rates</h2>
              <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
                {[
                  ["Spot Rate", "The current market rate for an immediate exchange. What you see on currency converter tools."],
                  ["Forward Rate", "A rate agreed upon today for a future exchange. Used by businesses to hedge currency risk."],
                  ["Fixed Rate", "Set and maintained by a government or central bank, pegged to another currency like the USD."],
                  ["Floating Rate", "Determined purely by market supply and demand. Most major currencies are floating."],
                ].map(([type, desc]) => (
                  <div key={type as string} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-5 py-4">
                    <span className="text-sm font-semibold text-foreground shrink-0 w-28">{type}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What Moves Exchange Rates?</h2>
              <div className="space-y-3">
                {[
                  { driver: "Interest Rates", desc: "Higher rates attract foreign capital, increasing demand for that currency and pushing its value up." },
                  { driver: "Inflation", desc: "Countries with lower inflation see their currency appreciate over time. High inflation erodes purchasing power." },
                  { driver: "Economic Performance", desc: "Strong GDP growth, low unemployment, and a trade surplus all tend to strengthen a currency." },
                  { driver: "Political Stability", desc: "Uncertainty or instability weakens a currency as investors move capital to safer havens." },
                  { driver: "Speculation", desc: "Large institutional traders can move rates based on expectations of future economic events." },
                ].map(({ driver, desc }) => (
                  <div key={driver} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 rounded-xl border border-border bg-card px-5 py-4">
                    <span className="text-sm font-semibold text-primary shrink-0 w-40">{driver}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Bid, Ask, and the Spread</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                When exchanging currency you will see two prices: the <strong className="text-foreground">bid</strong> (what the market pays to buy from you) and the <strong className="text-foreground">ask</strong> (what they charge to sell to you). The difference is the <strong className="text-foreground">spread</strong> — the exchange provider&apos;s profit margin. Banks and airports have wide spreads; services like Wise offer much tighter ones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How Exchange Rates Affect You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { area: "Travel", desc: "A stronger home currency means your money goes further abroad." },
                  { area: "Imports & Exports", desc: "A weak currency makes exports cheaper but imports more expensive." },
                  { area: "Investments", desc: "Returns on foreign assets can be amplified or reduced by currency movements." },
                  { area: "Remittances", desc: "People sending money internationally are directly affected by the rate and transfer fees." },
                ].map(({ area, desc }) => (
                  <div key={area} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-sm font-semibold text-foreground mb-1">{area}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">How to Get the Best Rate</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  "Avoid exchanging currency at airports or hotel desks — they offer the worst rates.",
                  "Use a specialist service (e.g., Wise, Revolut) rather than a bank for large transfers.",
                  "Check the mid-market rate (what you see on Google) as your benchmark for fairness.",
                  "Consider timing for large transfers — rates can vary significantly over days or weeks.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Convert currencies instantly</h3>
              <p className="text-muted-foreground mb-6">
                Use our live currency converter to check real-time exchange rates between 150+ currencies.
              </p>
              <Button asChild size="lg">
                <Link href="/currency-converter">Open Currency Converter</Link>
              </Button>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  "Exchange rates reflect the relative value between two currencies at a given moment.",
                  "Interest rates, inflation, and economic health are the primary long-term drivers.",
                  "The bid-ask spread is how currency exchangers make their profit — compare providers.",
                  "Currency movements can significantly impact international investments and purchasing power.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-14">
            <AdPlaceholder />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
