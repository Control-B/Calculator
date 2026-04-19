import { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { CalculatorCard } from "@/components/CalculatorCard";
import { ResultCard } from "@/components/ResultCard";
import { AIInsightCard } from "@/components/AIInsightCard";
import { ChartModule } from "@/components/ChartModule";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ToolCard } from "@/components/ToolCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { calcMortgage } from "@/lib/calculators";
import { generateMortgageInsight } from "@/lib/aiInsights";
import { Search, Zap, Clock, ShieldCheck, Home, Briefcase, TrendingUp } from "lucide-react";
import { parseNaturalLanguage } from "@/lib/nlParser";
import { motion } from "framer-motion";

export default function MortgageCalculator() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  
  const [homePrice, setHomePrice] = useState(searchParams.get("homePrice") || "400000");
  const [downPaymentPercent, setDownPaymentPercent] = useState(searchParams.get("downPaymentPercent") || "20");
  const [rate, setRate] = useState(searchParams.get("rate") || "6.5");
  const [years, setYears] = useState("30");
  const [propertyTax, setPropertyTax] = useState("400");
  const [insurance, setInsurance] = useState("150");
  const [hoa, setHoa] = useState("0");
  
  const [query, setQuery] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const downPaymentAmount = (Number(homePrice) * (Number(downPaymentPercent) / 100)) || 0;

  const results = useMemo(() => {
    return calcMortgage(
      Number(homePrice) || 0,
      downPaymentAmount,
      Number(rate) || 0,
      Number(years) || 0,
      Number(propertyTax) || 0,
      Number(insurance) || 0,
      Number(hoa) || 0
    );
  }, [homePrice, downPaymentAmount, rate, years, propertyTax, insurance, hoa]);

  const insight = useMemo(() => {
    return generateMortgageInsight(
      results.principalAndInterest, 
      results.monthlyPayment, 
      results.totalInterest, 
      (Number(homePrice) - downPaymentAmount)
    );
  }, [results, homePrice, downPaymentAmount]);

  const chartData = [
    { name: "Principal & Interest", value: results.principalAndInterest, color: "#2563EB" },
    { name: "Property Tax", value: results.tax, color: "#16A34A" },
    { name: "Home Insurance", value: results.insurance, color: "#DC2626" },
    { name: "HOA Fees", value: results.hoa, color: "#F59E0B" }
  ].filter(d => d.value > 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    const intent = parseNaturalLanguage(query);
    if (intent) {
      if (intent.calculator !== "/mortgage-calculator") {
        setLocation(`${intent.calculator}?${new URLSearchParams(intent.params).toString()}`);
      } else {
        if(intent.params.homePrice) setHomePrice(intent.params.homePrice);
        if(intent.params.rate) setRate(intent.params.rate);
        if(intent.params.downPaymentPercent) setDownPaymentPercent(intent.params.downPaymentPercent);
      }
    }
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 500);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden bg-background text-foreground pt-20 pb-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">Mortgage <br/><span className="text-blue-400">Calculator</span></h1>
                <p className="text-lg text-slate-300 mb-8 max-w-xl">Estimate your monthly payments, including taxes, insurance, and HOA fees to see the true cost of your home.</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/10 border border-foreground/20 text-sm font-medium">
                    <Zap className="h-4 w-4 text-yellow-400" /> Instant results
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/10 border border-foreground/20 text-sm font-medium">
                    <Clock className="h-4 w-4 text-blue-400" /> Financial Insights
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/10 border border-foreground/20 text-sm font-medium">
                    <ShieldCheck className="h-4 w-4 text-green-400" /> Free forever
                  </div>
                </div>

                <form onSubmit={handleSearch} className="max-w-xl relative flex items-center bg-foreground/10 p-1.5 rounded-full backdrop-blur-md border border-foreground/20">
                  <Search className="absolute left-5 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="e.g. mortgage on 450k with 10% down at 7%"
                    className="h-12 pl-14 pr-32 text-base rounded-full bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Button type="submit" className="absolute right-1.5 h-10 rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Apply
                  </Button>
                </form>
              </div>

              <div className="hidden lg:flex justify-center">
                <img 
                  src="/images/mortgage.png" 
                  alt="Modern suburban house exterior" 
                  className="w-full max-w-md rounded-2xl shadow-2xl border border-white/10 object-cover aspect-4/3"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-8 py-8 max-w-6xl">
          <AdPlaceholder />

          {/* Section 2: Calculator Tool */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 my-8" ref={resultsRef}>
            <div className="xl:col-span-4">
              <CalculatorCard title="Loan Details">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="homePrice" className="text-sm font-semibold">Home Price</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-muted-foreground font-medium">$</span>
                      </div>
                      <Input 
                        id="homePrice" 
                        type="number" 
                        min="0" 
                        className="pl-8 text-lg font-medium h-12 rounded-xl bg-secondary border-border text-foreground focus-visible:ring-primary focus-visible:border-primary" 
                        value={homePrice} 
                        onChange={(e) => setHomePrice(e.target.value)} 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                      <div className="flex justify-between items-end">
                      <Label htmlFor="downPaymentPercent" className="text-sm font-semibold">Down Payment</Label>
                      <span className="text-xs font-bold text-muted-foreground bg-secondary px-2 py-1 rounded-md border border-border">${downPaymentAmount.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <Input 
                          id="downPaymentPercent" 
                          type="number" 
                          min="0" 
                          max="100" 
                          className="pr-8 text-lg font-medium h-12 rounded-xl bg-secondary border-border text-foreground focus-visible:ring-primary focus-visible:border-primary" 
                          value={downPaymentPercent} 
                          onChange={(e) => setDownPaymentPercent(e.target.value)} 
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-muted-foreground font-medium">%</span>
                        </div>
                      </div>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="h-12 rounded-xl px-4 font-semibold text-muted-foreground hover:text-foreground border-border bg-secondary"
                        onClick={() => setDownPaymentPercent("20")}
                      >
                        20%
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="years" className="text-sm font-semibold">Loan Term</Label>
                      <div className="flex gap-2">
                        <Button type="button" variant={years === "15" ? "default" : "outline"} onClick={() => setYears("15")} className="flex-1 h-12 rounded-xl font-bold bg-secondary border-border text-foreground hover:bg-accent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-colors" data-state={years === "15" ? "active" : "inactive"}>15y</Button>
                        <Button type="button" variant={years === "30" ? "default" : "outline"} onClick={() => setYears("30")} className="flex-1 h-12 rounded-xl font-bold bg-secondary border-border text-foreground hover:bg-accent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-colors" data-state={years === "30" ? "active" : "inactive"}>30y</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rate" className="text-sm font-semibold">Interest Rate</Label>
                      <div className="relative">
                        <Input 
                          id="rate" 
                          type="number" 
                          step="0.1" 
                          className="pr-8 text-lg font-medium h-12 rounded-xl bg-secondary border-border text-foreground focus-visible:ring-primary focus-visible:border-primary" 
                          value={rate} 
                          onChange={(e) => setRate(e.target.value)} 
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-muted-foreground font-medium">%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border space-y-4">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Monthly Expenses</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="propertyTax" className="text-xs font-semibold text-muted-foreground">Property Tax</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="text-muted-foreground">$</span></div>
                          <Input id="propertyTax" type="number" min="0" className="pl-8 h-10 rounded-lg bg-secondary border-border text-foreground" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="insurance" className="text-xs font-semibold text-muted-foreground">Home Insurance</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="text-muted-foreground">$</span></div>
                          <Input id="insurance" type="number" min="0" className="pl-8 h-10 rounded-lg bg-secondary border-border text-foreground" value={insurance} onChange={(e) => setInsurance(e.target.value)} />
                        </div>
                      </div>
                      <div className="space-y-2 col-span-2">
                        <Label htmlFor="hoa" className="text-xs font-semibold text-muted-foreground">HOA Fees</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span className="text-muted-foreground">$</span></div>
                          <Input id="hoa" type="number" min="0" className="pl-8 h-10 rounded-lg bg-secondary border-border text-foreground" value={hoa} onChange={(e) => setHoa(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" 
                    onClick={handleCalculate}
                  >
                    Calculate Payment
                  </Button>
                </div>
              </CalculatorCard>
            </div>

            <div className="xl:col-span-8 flex flex-col space-y-6">
              <motion.div 
                animate={isCalculating ? { scale: [1, 1.02, 1], opacity: [1, 0.8, 1] } : {}}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <ResultCard 
                  title="Monthly Payment" 
                  value={`$${results.monthlyPayment.toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:0})}`}
                />
                <ResultCard 
                  title="Principal Amount" 
                  value={`$${(Number(homePrice) - downPaymentAmount).toLocaleString(undefined, {maximumFractionDigits:0})}`}
                  valueColorClass="text-foreground"
                />
                <ResultCard 
                  title="Total Interest" 
                  value={`$${results.totalInterest.toLocaleString(undefined, {maximumFractionDigits:0})}`}
                  valueColorClass="text-rose-600"
                />
              </motion.div>

              {/* Section 3: Charts & Visualization */}
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="font-black text-xl text-foreground mb-2">Payment Breakdown</h3>
                  <p className="text-muted-foreground text-sm mb-6">See exactly where your monthly payment goes.</p>
                  <ChartModule 
                    type="pie"
                    data={chartData}
                    pieColors={chartData.map(d => d.color)}
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="bg-secondary rounded-xl p-6 border border-border">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-blue-500 shadow-sm shadow-blue-500/30"></div>
                        <span className="text-foreground font-medium">Principal & Interest</span>
                      </div>
                      <span className="font-bold text-foreground">${results.principalAndInterest.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm shadow-green-500/30"></div>
                        <span className="text-foreground font-medium">Property Tax</span>
                      </div>
                      <span className="font-bold text-foreground">${results.tax.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm shadow-red-500/30"></div>
                        <span className="text-foreground font-medium">Home Insurance</span>
                      </div>
                      <span className="font-bold text-foreground">${results.insurance.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
                    </div>
                    {results.hoa > 0 && (
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full bg-amber-500 shadow-sm shadow-amber-500/30"></div>
                          <span className="text-foreground font-medium">HOA Fees</span>
                        </div>
                        <span className="font-bold text-foreground">${results.hoa.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center pt-4 mt-2 bg-primary/10 -mx-4 px-4 rounded-b-xl">
                      <span className="text-foreground font-bold uppercase tracking-wider text-xs">Total Cost of Home</span>
                      <span className="font-black text-xl text-primary">${results.totalCost.toLocaleString(undefined, {maximumFractionDigits:0})}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AdPlaceholder />

          {/* Section 4: AI Insight Card */}
          <div className="my-8">
            <AIInsightCard content={insight} />
            <div className="flex flex-wrap gap-2 mt-4 ml-2">
              <span className="text-sm font-medium text-muted-foreground flex items-center mr-2">Related tools:</span>
              <a href="/loan-payment-calculator" className="text-xs font-semibold bg-secondary text-foreground hover:bg-accent border border-border px-3 py-1.5 rounded-full transition-colors">Amortization Schedule</a>
              <a href="/savings-goal-calculator" className="text-xs font-semibold bg-secondary text-foreground hover:bg-accent border border-border px-3 py-1.5 rounded-full transition-colors">Down Payment Savings</a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
            
            {/* Section 5: How the Math Works */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-foreground mb-6">Understanding Your Mortgage</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>A mortgage payment consists of several parts, commonly referred to as <strong>PITI</strong>: Principal, Interest, Taxes, and Insurance.</p>
                  
                  <div className="my-8 bg-card border border-border text-foreground p-6 rounded-xl font-mono text-sm shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-secondary px-3 py-1 text-xs font-bold rounded-bl-lg text-muted-foreground">FORMULA</div>
                    <div className="mb-4 text-blue-400 font-bold text-lg">M = P[r(1+r)^n]/[(1+r)^n-1]</div>
                    <ul className="space-y-2 opacity-90 list-none pl-0">
                      <li><strong className="text-primary">M</strong> = Total monthly payment</li>
                      <li><strong className="text-primary">P</strong> = Principal loan amount</li>
                      <li><strong className="text-primary">r</strong> = Monthly interest rate</li>
                      <li><strong className="text-primary">n</strong> = Number of payments (months)</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Key concepts to remember:</h3>
                  <ul className="space-y-3">
                    <li><strong>Principal and Interest:</strong> In the early years of a mortgage, the majority of your payment goes toward interest. Over time, as the principal balance decreases, more of your payment goes toward paying down the principal (amortization).</li>
                    <li><strong>Taxes and Insurance:</strong> Most lenders require you to pay property taxes and home insurance into an escrow account monthly. They will then pay these bills on your behalf when they are due.</li>
                    <li><strong>Private Mortgage Insurance (PMI):</strong> If your down payment is less than 20% of the home's value, lenders usually require PMI to protect themselves if you default. This adds an extra monthly fee not shown in the base calculation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: FAQ & Related */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-black text-foreground mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  {
                    question: "Should I choose a 15-year or 30-year mortgage?",
                    answer: "A 15-year mortgage has higher monthly payments but significantly less total interest paid over the life of the loan. A 30-year mortgage offers lower monthly payments, providing more flexibility in your monthly budget, but costs much more in total interest."
                  },
                  {
                    question: "How much should I put down?",
                    answer: "A 20% down payment is ideal as it eliminates the need for PMI and provides instant equity. However, many loans allow 3.5% or even 0% down depending on the program (like VA or FHA loans)."
                  },
                  {
                    question: "What happens if I pay extra toward principal?",
                    answer: "Making additional principal payments reduces your overall loan balance faster. This means subsequent interest charges are calculated on a smaller balance, saving you money and shortening the life of the loan."
                  },
                  {
                    question: "Are property taxes locked in?",
                    answer: "No. Property taxes change based on your local government's assessment of your home's value and local tax rates. If they go up, your monthly mortgage payment (if escrowed) will increase."
                  }
                ]} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-foreground mb-6">Explore Related Tools</h2>
                <div className="grid gap-4">
                  <ToolCard 
                    title="Loan Payment" 
                    description="Calculate payments and interest for any loan type."
                    href="/loan-payment-calculator"
                    icon={<Briefcase className="h-6 w-6" />}
                  />
                  <ToolCard 
                    title="Savings Goal Calculator" 
                    description="Calculate exactly how much to save monthly for a target."
                    href="/savings-goal-calculator"
                    icon={<Home className="h-6 w-6" />}
                  />
                  <ToolCard 
                    title="Compound Interest" 
                    description="See how your wealth grows over time."
                    href="/compound-interest-calculator"
                    icon={<TrendingUp className="h-6 w-6" />}
                  />
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
