import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CryptoProfitVsLossPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <article className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
          <Link href="/" className="text-sm text-primary hover:underline mb-8 inline-block">
            &larr; Back to Calculators
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            Crypto Profit vs Loss
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Understanding how to calculate your actual gains and losses on cryptocurrency trades — including fees and taxes — is essential before putting any money into digital assets.
          </p>

          <div className="my-8">
            <AdPlaceholder />
          </div>

          <div className="prose prose-blue prose-lg max-w-none text-foreground">
            <h2>How Crypto Profit and Loss Works</h2>
            <p>
              Your profit or loss on a crypto trade is the difference between what you paid (your cost basis) and what you received when you sold or exchanged it. It sounds simple, but fees, multiple purchases at different prices, and tax implications make it more nuanced in practice.
            </p>

            <h2>The Basic Formula</h2>
            <div className="bg-muted/40 rounded-xl border border-border p-6 font-mono text-base my-6">
              Profit / Loss = (Exit Price &times; Amount) - (Entry Price &times; Amount) - Fees
            </div>
            <p>
              For example: You buy 2 ETH at $1,500 each ($3,000 total) and sell when ETH is at $2,200. Your gross profit is $1,400. After $20 in trading fees, your net profit is $1,380.
            </p>

            <h2>Percentage Gain and Loss</h2>
            <p>
              Percentage gain or loss tells you how your investment performed relative to its cost, regardless of the dollar amount:
            </p>
            <div className="bg-muted/40 rounded-xl border border-border p-6 font-mono text-base my-6">
              % Change = ((Exit Price - Entry Price) / Entry Price) &times; 100
            </div>
            <p>
              A 50% loss requires a 100% gain just to break even. This asymmetry is a critical concept — losing half your money means you need to double what remains to get back to where you started.
            </p>

            <h2>Cost Basis Methods</h2>
            <p>
              If you bought crypto at multiple prices, you need a method to determine which "coins" you sold. The most common methods are:
            </p>
            <ul>
              <li><strong>FIFO (First In, First Out):</strong> The first coins you bought are treated as the first coins sold. Most common and widely accepted.</li>
              <li><strong>LIFO (Last In, First Out):</strong> The most recently purchased coins are sold first. Can minimize short-term gains in a rising market.</li>
              <li><strong>Specific Identification:</strong> You choose exactly which coins you are selling. Requires precise record keeping.</li>
            </ul>

            <h2>Trading Fees</h2>
            <p>
              Fees eat into your returns significantly, especially for frequent traders. Exchanges typically charge 0.1–0.5% per trade. On a $10,000 trade, a 0.5% fee is $50 — and you pay it both when entering and exiting. Round-trip fees of 1% mean you need to gain at least 1% just to break even.
            </p>

            <h2>Tax Implications</h2>
            <p>
              In most countries, cryptocurrency is treated as property for tax purposes. This means:
            </p>
            <ul>
              <li><strong>Short-term gains</strong> (held less than 1 year) are taxed as ordinary income — potentially at your highest marginal rate.</li>
              <li><strong>Long-term gains</strong> (held more than 1 year) are taxed at the lower capital gains rate (0%, 15%, or 20% in the US).</li>
              <li>Even trading one crypto for another is a taxable event in many jurisdictions.</li>
              <li>Losses can offset gains and reduce your tax bill.</li>
            </ul>

            <h2>Common Mistakes</h2>
            <ul>
              <li>Ignoring fees when calculating profitability.</li>
              <li>Not keeping records of every transaction and its date.</li>
              <li>Forgetting that staking rewards and airdrops are often taxable income.</li>
              <li>Panic-selling during dips and locking in a loss that would have recovered.</li>
            </ul>

            <div className="bg-muted/30 p-8 rounded-2xl border border-border my-12 text-center">
              <h3 className="mt-0 text-2xl font-bold">Calculate your crypto P&L</h3>
              <p className="text-muted-foreground mb-6">
                Enter your buy price, sell price, and investment amount to instantly calculate your profit or loss.
              </p>
              <Button asChild size="lg">
                <Link href="/crypto-profit-calculator">Open Crypto Calculator</Link>
              </Button>
            </div>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Net profit = sale proceeds minus cost basis minus all fees.</li>
              <li>Losses are asymmetric — a 50% loss needs a 100% gain to recover.</li>
              <li>Keep detailed records of every trade, including dates and fees.</li>
              <li>Holding over one year can significantly reduce your tax liability.</li>
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
