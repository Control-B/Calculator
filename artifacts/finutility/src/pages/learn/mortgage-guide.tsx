import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, CreditCard, ShieldCheck, TrendingDown } from "lucide-react";

export default function MortgageGuidePage() {
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
              <Home className="h-3.5 w-3.5" /> Learn
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5 leading-tight tracking-tight text-balance">
              Mortgage Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A mortgage is one of the biggest financial commitments you will ever make. This guide breaks down how mortgages work, what affects your payments, and how to borrow smartly.
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
              { icon: Home, label: "Typical term", value: "15 or 30 years" },
              { icon: CreditCard, label: "Down payment", value: "3–20% of price" },
              { icon: TrendingDown, label: "PMI required when", value: "Down payment < 20%" },
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
              <h2 className="text-2xl font-bold mb-3">What is a Mortgage?</h2>
              <p className="text-muted-foreground leading-relaxed">
                A mortgage is a loan used to purchase real estate, with the property itself serving as collateral. You borrow a lump sum from a lender, then repay it — plus interest — over a fixed term. If you stop making payments, the lender can repossess the property through foreclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Components of a Mortgage</h2>
              <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
                {[
                  ["Principal", "The amount you borrow (purchase price minus your down payment)."],
                  ["Interest Rate", "The annual cost of borrowing. Can be fixed or adjustable."],
                  ["Term", "The loan length — most commonly 15 or 30 years."],
                  ["Down Payment", "The upfront cash you pay. Typically 3–20% of the purchase price."],
                  ["PMI", "Private Mortgage Insurance — required if your down payment is less than 20%."],
                ].map(([term, def]) => (
                  <div key={term as string} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-5 py-4">
                    <span className="text-sm font-semibold text-foreground shrink-0 w-36">{term}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{def}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">How Monthly Payments Are Calculated</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each payment covers that month&apos;s interest first, with the remainder reducing the principal. Early in the loan, most of your payment is interest.
              </p>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 font-mono text-lg text-center text-foreground tracking-wide">
                M = P &times; [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> - 1]
              </div>
              <ul className="mt-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  ["M", "Monthly payment"],
                  ["P", "Loan principal"],
                  ["r", "Monthly interest rate (annual rate / 12)"],
                  ["n", "Total number of payments (years × 12)"],
                ].map(([key, desc]) => (
                  <li key={key} className="flex gap-3">
                    <span className="text-primary font-bold font-mono w-4 shrink-0">{key}</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Fixed vs. Adjustable Rate Mortgages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Fixed Rate", desc: "Locks in your interest rate for the full term. Your payment never changes, making budgeting predictable.", accent: true },
                  { title: "Adjustable Rate (ARM)", desc: "Starts with a lower rate that adjusts periodically based on a market index. Lower initially but carries payment risk.", accent: false },
                ].map(({ title, desc, accent }) => (
                  <div key={title} className={`rounded-xl border p-5 ${accent ? "border-primary/30 bg-primary/5" : "border-border bg-card"}`}>
                    <p className="font-semibold text-foreground mb-2">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">How to Get a Better Rate</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  "Improve your credit score before applying — even 20 points can make a meaningful difference.",
                  "Make a larger down payment to reduce the loan-to-value ratio.",
                  "Shop multiple lenders and compare APRs, not just headline rates.",
                  "Consider discount points to buy down the rate if you plan to stay long-term.",
                  "Keep your debt-to-income (DTI) ratio below 43%.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-start gap-3 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                <ShieldCheck className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Total Cost Reality Check</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A $400,000 loan at 7% for 30 years results in over $558,000 in interest alone — nearly $960,000 total. The sticker price of a home is never the true cost.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Calculate your mortgage payment</h3>
              <p className="text-muted-foreground mb-6">
                Enter your loan amount, rate, and term to see your exact monthly payment and total interest.
              </p>
              <Button asChild size="lg">
                <Link href="/mortgage-calculator">Open Mortgage Calculator</Link>
              </Button>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  "Your payment is split between interest and principal — interest-heavy at first.",
                  "A 15-year mortgage costs far less in total interest than a 30-year mortgage.",
                  "A good credit score and larger down payment are your best tools for a lower rate.",
                  "Always account for property taxes, insurance, and PMI in your true monthly cost.",
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
