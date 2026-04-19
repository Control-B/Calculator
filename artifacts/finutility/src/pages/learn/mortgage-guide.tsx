import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function MortgageGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <article className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
          <Link href="/" className="text-sm text-primary hover:underline mb-8 inline-block">
            &larr; Back to Calculators
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
            Mortgage Guide
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            A mortgage is one of the biggest financial commitments you will ever make. This guide breaks down how mortgages work, what affects your payments, and how to borrow smartly.
          </p>

          <div className="my-8">
            <AdPlaceholder />
          </div>

          <div className="prose prose-blue prose-lg max-w-none text-foreground">
            <h2>What is a Mortgage?</h2>
            <p>
              A mortgage is a loan used to purchase real estate, with the property itself serving as collateral. You borrow a lump sum from a lender, then repay it — plus interest — over a fixed term, typically 15 or 30 years. If you stop making payments, the lender has the legal right to repossess the property through foreclosure.
            </p>

            <h2>Key Components of a Mortgage</h2>
            <ul>
              <li><strong>Principal:</strong> The amount you borrow (purchase price minus your down payment).</li>
              <li><strong>Interest Rate:</strong> The annual cost of borrowing, expressed as a percentage. Can be fixed or adjustable.</li>
              <li><strong>Term:</strong> The length of the loan — most commonly 15 or 30 years.</li>
              <li><strong>Down Payment:</strong> The upfront cash you pay. Typically 3–20% of the purchase price.</li>
              <li><strong>PMI:</strong> Private Mortgage Insurance — required if your down payment is less than 20%. Adds to your monthly cost.</li>
            </ul>

            <h2>How Monthly Payments Are Calculated</h2>
            <p>
              Your monthly payment is determined by the loan amount, interest rate, and term. The formula used is called an amortizing payment formula. Each payment covers that month&apos;s interest first, with the remainder reducing the principal. Early in the loan, most of your payment goes to interest. Over time, more goes to principal.
            </p>
            <div className="bg-muted/40 rounded-xl border border-border p-6 font-mono text-base my-6">
              M = P &times; [r(1+r)<sup>n</sup>] / [(1+r)<sup>n</sup> - 1]
            </div>
            <ul>
              <li><strong>M</strong> — Monthly payment</li>
              <li><strong>P</strong> — Loan principal</li>
              <li><strong>r</strong> — Monthly interest rate (annual rate / 12)</li>
              <li><strong>n</strong> — Total number of payments (years &times; 12)</li>
            </ul>

            <h2>Fixed vs. Adjustable Rate Mortgages</h2>
            <p>
              A <strong>fixed-rate mortgage</strong> locks in your interest rate for the entire term. Your payment never changes, making budgeting easy. A <strong>adjustable-rate mortgage (ARM)</strong> starts with a lower rate that adjusts periodically based on a market index. ARMs can save money initially but carry the risk of rising payments.
            </p>

            <h2>How to Get a Better Rate</h2>
            <ul>
              <li>Improve your credit score before applying — even 20 points can make a meaningful difference.</li>
              <li>Make a larger down payment to reduce the loan-to-value ratio.</li>
              <li>Shop multiple lenders and compare APRs, not just headline rates.</li>
              <li>Consider paying discount points to buy down the rate if you plan to stay long-term.</li>
              <li>Keep your debt-to-income (DTI) ratio below 43%.</li>
            </ul>

            <h2>Total Cost of a Mortgage</h2>
            <p>
              The sticker price of a home is not the true cost. Over a 30-year loan, the total interest paid can rival or even exceed the original purchase price. A $400,000 loan at 7% for 30 years results in over $558,000 in interest payments alone — making the total cost nearly $960,000.
            </p>

            <div className="bg-muted/30 p-8 rounded-2xl border border-border my-12 text-center">
              <h3 className="mt-0 text-2xl font-bold">Calculate your mortgage payment</h3>
              <p className="text-muted-foreground mb-6">
                Enter your loan amount, rate, and term to see your exact monthly payment and total interest.
              </p>
              <Button asChild size="lg">
                <Link href="/mortgage-calculator">Open Mortgage Calculator</Link>
              </Button>
            </div>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Your payment is split between interest and principal — interest-heavy at first.</li>
              <li>A 15-year mortgage costs far less in interest than a 30-year mortgage.</li>
              <li>A good credit score and larger down payment are your best tools for a lower rate.</li>
              <li>Always account for property taxes, insurance, and PMI in your true monthly cost.</li>
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
