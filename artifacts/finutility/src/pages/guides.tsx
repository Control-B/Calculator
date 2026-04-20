import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { guideArticles } from "@/lib/guides";

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-slate-950 text-white pt-24 pb-20 border-b border-slate-800">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              <BookOpen className="h-4 w-4" />
              Finance Guides
            </div>
            <h1 className="mt-6 text-5xl font-black tracking-tight md:text-6xl">Financial education built around practical tools.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore beginner-friendly guides on mortgages, savings, loans, crypto profit, and currency conversion. Each guide links back to a calculator so readers can apply the concept to their own numbers.
            </p>
          </div>
        </section>

        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <AdPlaceholder />
          </div>
        </section>

        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guideArticles.map((article) => (
                <a key={article.slug} href={`/${article.slug}`} className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{article.category}</span>
                    <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" />{article.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-black text-foreground group-hover:text-primary transition-colors">{article.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-7">{article.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-foreground">Pairs with {article.calculatorLabel}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button size="lg" asChild>
                <a href="/compound-interest-calculator">Start with a calculator</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
