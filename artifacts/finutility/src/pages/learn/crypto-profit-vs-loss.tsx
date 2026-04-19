import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Bitcoin, AlertTriangle, Receipt, TrendingUp } from "lucide-react";

export default function CryptoProfitVsLossPage() {
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
              <Bitcoin className="h-3.5 w-3.5" /> Learn
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5 leading-tight tracking-tight text-balance">
              Crypto Profit vs Loss
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding how to calculate your actual gains and losses on cryptocurrency trades — including fees and taxes — is essential before putting any money into digital assets.
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
              { icon: TrendingUp, label: "Short-term tax", value: "Ordinary income rate" },
              { icon: Receipt, label: "Long-term tax", value: "0%, 15%, or 20%" },
              { icon: Bitcoin, label: "Taxable events", value: "Trade, sell, swap" },
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
              <h2 className="text-2xl font-bold mb-3">How Crypto Profit and Loss Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your profit or loss is the difference between what you paid (your cost basis) and what you received when you sold or exchanged. Fees, multiple purchase prices, and tax rules make it more nuanced in practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">The Basic Formula</h2>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 font-mono text-sm md:text-base text-center text-foreground tracking-wide leading-relaxed">
                Profit / Loss = (Exit Price &times; Amount) &minus; (Entry Price &times; Amount) &minus; Fees
              </div>
              <div className="mt-4 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Example:</strong> You buy 2 ETH at $1,500 each ($3,000) and sell at $2,200. Gross profit is $1,400. After $20 in fees, your net profit is <span className="text-chart-2 font-semibold">$1,380</span>.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Percentage Gain and Loss</h2>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 font-mono text-sm md:text-base text-center text-foreground tracking-wide">
                % Change = ((Exit Price &minus; Entry Price) / Entry Price) &times; 100
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-5">
                <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A <strong className="text-foreground">50% loss</strong> requires a <strong className="text-foreground">100% gain</strong> just to break even. Losses are asymmetric — keep this in mind before taking on large positions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cost Basis Methods</h2>
              <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
                {[
                  ["FIFO", "First In, First Out. The first coins you bought are treated as the first coins sold. Most widely accepted."],
                  ["LIFO", "Last In, First Out. The most recently purchased coins are sold first. Can minimize short-term gains in a rising market."],
                  ["Specific ID", "You choose exactly which coins you are selling. Requires precise record keeping."],
                ].map(([method, desc]) => (
                  <div key={method as string} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-5 py-4">
                    <span className="text-sm font-semibold text-primary shrink-0 w-24">{method}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Trading Fees</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Exchanges typically charge 0.1–0.5% per trade. On a $10,000 trade, a 0.5% fee is $50 — and you pay both entering and exiting. Round-trip fees of 1% mean you need at least a 1% gain just to break even.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tax Implications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Short-term (< 1 year)", desc: "Taxed as ordinary income — potentially your highest marginal rate.", warning: true },
                  { label: "Long-term (> 1 year)", desc: "Lower capital gains rate: 0%, 15%, or 20% in the US.", warning: false },
                ].map(({ label, desc, warning }) => (
                  <div key={label} className={`rounded-xl border p-5 ${warning ? "border-destructive/20 bg-destructive/5" : "border-chart-2/20 bg-chart-2/5"}`}>
                    <p className={`text-sm font-semibold mb-1 ${warning ? "text-destructive" : "text-chart-2"}`}>{label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Even trading one crypto for another is a taxable event in many jurisdictions. Staking rewards and airdrops are often taxable income too.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Common Mistakes</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  "Ignoring fees when calculating profitability.",
                  "Not keeping records of every transaction and its date.",
                  "Forgetting that staking rewards and airdrops are often taxable income.",
                  "Panic-selling during dips and locking in a loss that would have recovered.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-destructive mt-1">&#10005;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Calculate your crypto P&amp;L</h3>
              <p className="text-muted-foreground mb-6">
                Enter your buy price, sell price, and investment amount to instantly calculate your profit or loss.
              </p>
              <Button asChild size="lg">
                <Link href="/crypto-profit-calculator">Open Crypto Calculator</Link>
              </Button>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  "Net profit = sale proceeds minus cost basis minus all fees.",
                  "Losses are asymmetric — a 50% loss needs a 100% gain to recover.",
                  "Keep detailed records of every trade, including dates and fees.",
                  "Holding over one year can significantly reduce your tax liability.",
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
