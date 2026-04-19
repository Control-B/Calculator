import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Percent, AlertTriangle } from "lucide-react";

export default function WhatIsCompoundInterestPage() {
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
              <TrendingUp className="h-3.5 w-3.5" /> Learn
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5 leading-tight tracking-tight text-balance">
              What is Compound Interest?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compound interest is the process of earning interest on both your original principal and the interest you have already earned — making your money grow exponentially over time.
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
              { icon: TrendingUp, label: "Growth type", value: "Exponential" },
              { icon: Clock, label: "Best factor", value: "Time" },
              { icon: Percent, label: "Works on debt too", value: "Yes — both ways" },
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
              <h2 className="text-2xl font-bold mb-3">Simple Interest vs. Compound Interest</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                With <strong className="text-foreground">simple interest</strong>, you earn interest only on your original deposit. If you invest $1,000 at 10% per year, you earn $100 every year — no more, no less.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With <strong className="text-foreground">compound interest</strong>, each period your interest is added to the principal. After year one you have $1,100. In year two you earn 10% on $1,100, giving you $1,210 — an extra $10. That gap widens dramatically over decades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">The Formula</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The standard compound interest formula is:</p>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 font-mono text-lg text-center text-foreground tracking-wide">
                A = P &times; (1 + r/n)<sup>nt</sup>
              </div>
              <ul className="mt-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  ["A", "Final amount (principal + interest)"],
                  ["P", "Principal (starting amount)"],
                  ["r", "Annual interest rate (decimal, e.g. 0.07 for 7%)"],
                  ["n", "Number of times interest compounds per year"],
                  ["t", "Time in years"],
                ].map(([key, desc]) => (
                  <li key={key} className="flex gap-3">
                    <span className="text-primary font-bold font-mono w-4 shrink-0">{key}</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Compounding Frequency</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interest can compound annually, quarterly, monthly, or daily. The more frequently it compounds, the more you earn. For example, $10,000 at 6% for 10 years:
              </p>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                {[
                  ["Annually", "$17,908"],
                  ["Monthly", "$18,194"],
                  ["Daily", "$18,221"],
                ].map(([freq, amount], i) => (
                  <div key={freq} className={`flex justify-between items-center px-5 py-4 ${i < 2 ? "border-b border-border" : ""}`}>
                    <span className="text-muted-foreground text-sm">{freq}</span>
                    <span className="text-foreground font-semibold tabular-nums">{amount}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">The Power of Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                Time is the most critical variable. Starting early — even with a small amount — can dramatically outperform starting late with larger contributions. Someone who invests $5,000 at age 20 at 8% will have roughly $160,000 by age 60. The same $5,000 invested at age 40 grows to only about $33,000.
              </p>
            </section>

            <section>
              <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-5">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Compound Interest Working Against You</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Compounding works both ways. Credit card debt at 22% APR compounds into over $6,100 in just one year on a $5,000 balance if left unpaid. Understanding this is the first step to avoiding the debt trap.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">See it in action</h3>
              <p className="text-muted-foreground mb-6">
                Use our free Compound Interest Calculator to project how your savings grow over time.
              </p>
              <Button asChild size="lg">
                <Link href="/compound-interest-calculator">Open Calculator</Link>
              </Button>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                {[
                  "Compound interest earns interest on previously earned interest.",
                  "The earlier you start, the more powerful the effect.",
                  "Higher compounding frequency increases your returns slightly.",
                  "Debt also compounds — pay it down aggressively.",
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
