import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield, Zap, Target, FileCheck, Bell, BarChart3, Bot, Lock,
  CheckCircle2, ArrowRight, Terminal, Bug, Network, Code2, ShieldCheck,
  Search, Sparkles, Briefcase, Stethoscope, Palette, LineChart, GraduationCap,
  Megaphone, Scale, Wrench, Building2, Globe2,
} from "lucide-react";
import heroImg from "@/assets/hero-cyber.jpg";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoApply AI — Land Any Job, in Any Field, on Autopilot" },
      { name: "description", content: "Upload your resume and let AI find, match, and auto-apply to jobs across tech, security, healthcare, finance, design, marketing, and every field in between." },
      { property: "og:title", content: "AutoApply AI" },
      { property: "og:description", content: "AI job automation for every career path." },
    ],
  }),
  component: Index,
});

const niches = [
  { icon: Code2, label: "Software & Web Dev", count: "42,800+ open roles" },
  { icon: ShieldCheck, label: "Cybersecurity & Pentest", count: "6,540+ open roles" },
  { icon: LineChart, label: "Data & Analytics", count: "18,200+ open roles" },
  { icon: Stethoscope, label: "Healthcare & Nursing", count: "31,400+ open roles" },
  { icon: Building2, label: "Finance & Banking", count: "12,900+ open roles" },
  { icon: Megaphone, label: "Marketing & Sales", count: "24,700+ open roles" },
  { icon: Palette, label: "Design & Creative", count: "9,150+ open roles" },
  { icon: GraduationCap, label: "Education & Research", count: "7,800+ open roles" },
  { icon: Scale, label: "Legal & Compliance", count: "4,320+ open roles" },
  { icon: Wrench, label: "Engineering & Trades", count: "16,600+ open roles" },
  { icon: Globe2, label: "Remote · Worldwide", count: "55,000+ open roles" },
  { icon: Briefcase, label: "+ 80 more categories", count: "explore all" },
];

const features = [
  { icon: Search, title: "Universal Job Feed", desc: "Indexes LinkedIn, Indeed, Glassdoor, Greenhouse, Lever, and 200+ niche boards across every industry." },
  { icon: Sparkles, title: "AI Resume Optimizer", desc: "ATS scoring, missing-keyword detection, and tailored bullet rewrites for any role you target." },
  { icon: Target, title: "Smart Match Engine", desc: "Embedding-based ranking by skills, experience, salary, location, and personal preferences." },
  { icon: Bot, title: "One-Click Auto Apply", desc: "Headless workers fill forms, upload your resume, and answer common screening questions." },
  { icon: FileCheck, title: "AI Cover Letters", desc: "Personalized per role with tone and length controls. Regenerate in a click." },
  { icon: BarChart3, title: "Pipeline Analytics", desc: "Kanban tracker, response rates, interview funnels, and best-performing resume insights." },
  { icon: Bell, title: "Instant Alerts", desc: "Push, email, and Telegram notifications the moment a high-match role drops in your field." },
  { icon: Lock, title: "Encrypted Vault", desc: "Credentials and resumes encrypted at rest. GDPR-compliant infrastructure." },
];

const stats = [
  { value: "92%", label: "avg. ATS score" },
  { value: "14×", label: "faster applications" },
  { value: "3.4×", label: "interview rate" },
  { value: "300k+", label: "jobs indexed daily" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-28 lg:pb-36 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Built for cybersecurity & tech professionals
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Land your next <span className="text-gradient">security role</span> on autopilot.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              AutoApply AI finds, ranks, and applies to pentest, SOC, ethical hacking, AppSec, and developer
              jobs for you — while you focus on the work that matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/dashboard"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
              >
                Start applying free <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#features"
                className="inline-flex h-12 items-center rounded-lg glass px-6 text-sm font-semibold hover:bg-surface-elevated transition-colors"
              >
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> No credit card</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> 50 free auto-applies</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border">
              <img
                src={heroImg}
                alt="Cybersecurity dashboard visualization"
                width={1600}
                height={1024}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 shadow-elevated max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold">14 auto-applies</div>
                  <div className="text-xs text-muted-foreground">sent in the last hour</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-elevated">
              <div className="text-xs text-muted-foreground mb-1">Match score</div>
              <div className="text-2xl font-bold text-gradient">94%</div>
              <div className="text-xs text-muted-foreground">Senior Pentester · Remote</div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-border/50">
          <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NICHES */}
      <section id="niches" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Specialized for security & tech</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for the roles you actually want
          </h2>
          <p className="mt-4 text-muted-foreground">
            Curated job sources, screening questions, and resume templates tuned for each track.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {niches.map((n) => (
            <div
              key={n.label}
              className="group glass rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-glow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                  <n.icon className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-semibold">{n.label}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">{n.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-surface/40 border-y border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Platform</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to win the search</h2>
            <p className="mt-4 text-muted-foreground">
              From resume optimization to one-click apply — an end-to-end AI workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="glass rounded-xl p-6 hover:shadow-card transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary mb-4">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">How it works</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Set it up once. <span className="text-gradient">Land interviews weekly.</span>
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { n: "01", t: "Upload your resume", d: "We parse skills, certs (OSCP, CEH, CISSP…), and experience." },
                { n: "02", t: "Set your targets", d: "Roles, stack, salary floor, remote/hybrid, clearance level." },
                { n: "03", t: "AutoApply runs 24/7", d: "Headless workers apply, tailor cover letters, and log everything." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="font-mono text-sm font-bold text-primary shrink-0 w-10">{s.n}</div>
                  <div>
                    <div className="font-semibold">{s.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock terminal */}
          <div className="glass rounded-xl overflow-hidden shadow-elevated">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-surface-elevated/50">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <div className="ml-3 text-xs font-mono text-muted-foreground">autoapply --watch</div>
            </div>
            <pre className="p-5 text-xs font-mono leading-relaxed overflow-x-auto">
{`> scanning sources... `}<span className="text-accent">✓ 8 boards</span>{`
> new match found     `}<span className="text-primary">[94%]</span>{` Senior Pentester @ Stripe
> tailoring resume    `}<span className="text-accent">✓</span>{` injected OSCP, BurpSuite
> generating letter   `}<span className="text-accent">✓</span>{` tone: confident, 220w
> filling application `}<span className="text-accent">✓</span>{` 12/12 fields
> submission          `}<span className="text-accent">✓ accepted</span>{`
> next in queue       `}<span className="text-primary">[88%]</span>{` SOC Analyst II @ Datadog
`}
            </pre>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-surface/40 border-y border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, fair pricing</h2>
            <p className="mt-4 text-muted-foreground">Start free. Upgrade when you're shipping applications daily.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Free", price: "$0", desc: "Try the platform", features: ["50 auto-applies / mo", "Basic ATS scoring", "1 resume version", "Email alerts"], cta: "Start free" },
              { name: "Pro", price: "$29", featured: true, desc: "For active job seekers", features: ["Unlimited auto-applies", "Advanced AI optimization", "5 resume versions", "Priority alerts (Telegram)", "Deep analytics"], cta: "Go Pro" },
              { name: "Enterprise", price: "Custom", desc: "Teams & bootcamps", features: ["Everything in Pro", "Recruiter dashboard", "SSO & SAML", "Dedicated support"], cta: "Contact sales" },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 ${p.featured ? "glass border-primary/50 shadow-glow relative" : "glass"}`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                    Most popular
                  </div>
                )}
                <div className="text-sm font-semibold text-muted-foreground">{p.name}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{p.price}</span>
                  {p.price.startsWith("$") && p.price !== "$0" && <span className="text-muted-foreground text-sm">/mo</span>}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full h-11 rounded-lg font-semibold text-sm transition-all ${
                  p.featured
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                    : "glass hover:bg-surface-elevated"
                }`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="glass rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-primary shadow-glow mb-6">
              <Briefcase className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Stop scrolling job boards. <br className="hidden sm:block" />
              <span className="text-gradient">Start interviewing.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Join thousands of security and tech professionals letting AI handle the busywork.
            </p>
            <Link
              to="/dashboard"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-gradient-primary px-8 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
            >
              Launch your dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
