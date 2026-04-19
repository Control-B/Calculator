import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ArticlePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <article className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            &larr; Back to Calculators
          </Link>

          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Learn
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5 leading-tight tracking-tight text-balance">
            Financial Education Hub
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Learn the foundational concepts of personal finance, debt management, and investing to make smarter decisions with your money.
          </p>

          <div className="mb-10">
            <AdPlaceholder />
          </div>

          <div className="space-y-10 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-3">Why Financial Literacy Matters</h2>
              <p className="text-muted-foreground leading-relaxed">
                Understanding how money works — how it grows through compounding, how debt drains it through interest, and how to protect it — is essential for long-term security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Core Concepts</h2>
              <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
                {[
                  ["Compound Interest", "The eighth wonder of the world. Earning interest on your interest leads to exponential growth over time."],
                  ["Amortization", "How loans are paid off over time. Early payments are mostly interest; later payments are mostly principal."],
                  ["ROI", "A universal metric for evaluating the profitability of an investment relative to its cost."],
                ].map(([term, def]) => (
                  <div key={term} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-5 py-4">
                    <span className="text-sm font-semibold text-primary shrink-0 w-40">{term}</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{def}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Ready to run your own numbers?</h3>
              <p className="text-muted-foreground mb-6">Use our free, instant calculators to see how these concepts apply to your specific financial situation.</p>
              <Button asChild size="lg">
                <Link href="/compound-interest-calculator">Go to Calculators</Link>
              </Button>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-3">Taking Action</h2>
              <p className="text-muted-foreground leading-relaxed">
                Knowledge without action is just trivia. The best way to learn is to apply these concepts to your own life. Start by calculating your net worth, tracking your spending, and defining clear savings goals.
              </p>
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
