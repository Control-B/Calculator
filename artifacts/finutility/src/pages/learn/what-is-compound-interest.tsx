import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function WhatIsCompoundInterestPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <article className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
          <Link href="/" className="text-sm text-primary hover:underline mb-8 inline-block">
            &larr; Back to Calculators
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            What is Compound Interest?
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Compound interest is the process of earning interest on both your original principal and the interest you have already earned — making your money grow exponentially over time.
          </p>

          <div className="my-8">
            <AdPlaceholder />
          </div>

          <div className="prose prose-blue prose-lg max-w-none text-foreground">
            <h2>Simple Interest vs. Compound Interest</h2>
            <p>
              With <strong>simple interest</strong>, you earn interest only on your original deposit. If you invest $1,000 at 10% per year, you earn $100 every year — no more, no less.
            </p>
            <p>
              With <strong>compound interest</strong>, each period your interest is added to the principal, so the next period you earn interest on a larger balance. After year one you have $1,100. In year two you earn 10% on $1,100, giving you $1,210 — an extra $10 compared to simple interest. That gap widens dramatically over decades.
            </p>

            <h2>The Formula</h2>
            <p>The standard compound interest formula is:</p>
            <div className="bg-muted/40 rounded-xl border border-border p-6 font-mono text-base my-6">
              A = P &times; (1 + r/n)<sup>nt</sup>
            </div>
            <ul>
              <li><strong>A</strong> — Final amount (principal + interest)</li>
              <li><strong>P</strong> — Principal (starting amount)</li>
              <li><strong>r</strong> — Annual interest rate (decimal, e.g. 0.07 for 7%)</li>
              <li><strong>n</strong> — Number of times interest compounds per year</li>
              <li><strong>t</strong> — Time in years</li>
            </ul>

            <h2>Compounding Frequency</h2>
            <p>
              Interest can compound at different intervals — annually, quarterly, monthly, or even daily. The more frequently it compounds, the more you earn. For example, $10,000 at 6% for 10 years:
            </p>
            <ul>
              <li><strong>Annually:</strong> $17,908</li>
              <li><strong>Monthly:</strong> $18,194</li>
              <li><strong>Daily:</strong> $18,221</li>
            </ul>

            <h2>The Power of Time</h2>
            <p>
              Time is the most critical variable. Starting early — even with a small amount — can outperform starting late with larger contributions. Someone who invests $5,000 at age 20 at 8% will have roughly $160,000 by age 60. The same $5,000 invested at age 40 grows to only about $33,000.
            </p>

            <h2>Compound Interest Working Against You</h2>
            <p>
              Compounding works both ways. Credit card debt that compounds monthly at a high APR can snowball quickly. A $5,000 balance at 22% APR compounds into over $6,100 in just one year if left unpaid. Understanding this is the first step to avoiding the debt trap.
            </p>

            <div className="bg-muted/30 p-8 rounded-2xl border border-border my-12 text-center">
              <h3 className="mt-0 text-2xl font-bold">See it in action</h3>
              <p className="text-muted-foreground mb-6">
                Use our free Compound Interest Calculator to project how your savings grow over time.
              </p>
              <Button asChild size="lg">
                <Link href="/compound-interest-calculator">Open Calculator</Link>
              </Button>
            </div>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Compound interest earns interest on previously earned interest.</li>
              <li>The earlier you start, the more powerful the effect.</li>
              <li>Higher compounding frequency increases your returns slightly.</li>
              <li>Debt also compounds — pay it down aggressively.</li>
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
