import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LayoutDashboard, Search, FileText, Briefcase, Settings, Bell,
  TrendingUp, Target, Zap, CheckCircle2, Clock, XCircle, Trophy,
  Bug, ShieldCheck, Code2, Stethoscope, Palette, LineChart,
  MapPin, DollarSign,
} from "lucide-react";
import { SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — AutoApply AI" },
      { name: "description", content: "Your AI-powered job search dashboard." },
    ],
  }),
  component: Dashboard,
});

const metrics = [
  { label: "Applications sent", value: "247", change: "+18 today", icon: Zap, color: "text-primary" },
  { label: "Avg. match score", value: "87%", change: "+4% this week", icon: Target, color: "text-accent" },
  { label: "Response rate", value: "23%", change: "+2.1%", icon: TrendingUp, color: "text-success" },
  { label: "Interviews scheduled", value: "12", change: "3 this week", icon: Trophy, color: "text-warning" },
];

const jobs = [
  { title: "Senior Full-Stack Engineer", company: "Linear", location: "Remote · EU", salary: "$140k–$180k", match: 94, tags: ["React", "TypeScript", "Postgres"], icon: Code2 },
  { title: "Penetration Tester", company: "Stripe", location: "Remote · US", salary: "$160k–$210k", match: 91, tags: ["OSCP", "BurpSuite", "Web Apps"], icon: Bug },
  { title: "Product Designer", company: "Figma", location: "Hybrid · NYC", salary: "$150k–$190k", match: 88, tags: ["Design Systems", "Prototyping"], icon: Palette },
  { title: "ICU Registered Nurse", company: "Mass General", location: "Boston, MA", salary: "$95k–$130k", match: 86, tags: ["BLS", "ACLS", "Critical Care"], icon: Stethoscope },
  { title: "Senior Data Analyst", company: "Shopify", location: "Remote · Canada", salary: "$120k–$155k", match: 82, tags: ["SQL", "dbt", "Looker"], icon: LineChart },
  { title: "SOC Analyst II", company: "Datadog", location: "New York, NY", salary: "$120k–$150k", match: 79, tags: ["SIEM", "Splunk", "IR"], icon: ShieldCheck },
];

const pipeline = [
  { stage: "Saved", count: 18, color: "bg-muted-foreground/30" },
  { stage: "Applied", count: 247, color: "bg-primary/60" },
  { stage: "Interview", count: 12, color: "bg-accent/60" },
  { stage: "Assessment", count: 4, color: "bg-warning/60" },
  { stage: "Offer", count: 2, color: "bg-success/60" },
  { stage: "Rejected", count: 31, color: "bg-destructive/40" },
];

const nav = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Search, label: "Job Feed" },
  { icon: FileText, label: "Resumes" },
  { icon: Briefcase, label: "Applications" },
  { icon: Bell, label: "Alerts" },
  { icon: Settings, label: "Settings" },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-6 py-8 grid lg:grid-cols-[220px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="space-y-1 sticky top-24">
            {nav.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="space-y-8 min-w-0">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Welcome back, Alex</h1>
              <p className="text-sm text-muted-foreground mt-1">
                AutoApply submitted <span className="text-primary font-medium">18 applications</span> overnight.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-gradient-primary px-4 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90"
            >
              <Zap className="h-4 w-4" /> Run AutoApply
            </Link>
          </div>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</span>
                  <m.icon className={`h-4 w-4 ${m.color}`} />
                </div>
                <div className="text-2xl font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.change}</div>
              </div>
            ))}
          </div>

          {/* Pipeline */}
          <section className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold">Application Pipeline</h2>
              <span className="text-xs text-muted-foreground font-mono">last 30 days</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {pipeline.map((p) => (
                <div key={p.stage} className="rounded-lg bg-surface/60 p-4 border border-border/40">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`h-2 w-2 rounded-full ${p.color}`} />
                    <span className="text-xs text-muted-foreground">{p.stage}</span>
                  </div>
                  <div className="text-xl font-bold">{p.count}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Jobs */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Top Matches for You</h2>
              <button className="text-xs text-primary hover:underline font-medium">View all →</button>
            </div>
            <div className="space-y-3">
              {jobs.map((j) => (
                <div
                  key={j.title}
                  className="glass rounded-xl p-5 hover:border-primary/40 hover:shadow-card transition-all flex flex-wrap items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <j.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-[220px]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold">{j.title}</h3>
                      <span className="text-sm text-muted-foreground">· {j.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {j.location}</span>
                      <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" /> {j.salary}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {j.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-muted-foreground border border-border/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Match</div>
                      <div className={`text-lg font-bold ${j.match >= 90 ? "text-gradient" : j.match >= 85 ? "text-accent" : "text-primary"}`}>
                        {j.match}%
                      </div>
                    </div>
                    <button className="h-10 px-4 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:opacity-90">
                      Auto Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent activity */}
          <section className="glass rounded-xl p-6">
            <h2 className="font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3 text-sm">
              {[
                { icon: CheckCircle2, color: "text-success", text: "Application submitted to Cloudflare — AppSec Engineer" },
                { icon: Clock, color: "text-warning", text: "Interview scheduled with HackerOne — Tue 3:00 PM" },
                { icon: Zap, color: "text-primary", text: "Resume v3 generated and optimized (ATS 94)" },
                { icon: XCircle, color: "text-muted-foreground", text: "Rejected from Tenable — Threat Researcher" },
              ].map((a, i) => (
                <li key={i} className="flex items-center gap-3 py-1.5 border-b border-border/30 last:border-0">
                  <a.icon className={`h-4 w-4 ${a.color}`} />
                  <span className="text-muted-foreground">{a.text}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
