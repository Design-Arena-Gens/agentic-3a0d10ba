import Link from "next/link";
import {
  ArrowUpRight,
  BarChart4,
  Brain,
  CalendarDays,
  Database,
  FileBarChart,
  LineChart,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";

const metrics = [
  {
    label: "Revenue influenced",
    value: "$12.4M",
    description: "Growth unlocked through pricing, churn, and funnel analytics",
  },
  {
    label: "Experiments led",
    value: "87",
    description: "Designed, launched, and analyzed end-to-end experimentation",
  },
  {
    label: "Dashboards shipped",
    value: "40+",
    description: "Executive-ready dashboards built with SQL, dbt, and Looker",
  },
];

const caseStudies = [
  {
    title: "Subscription churn prediction",
    client: "Nimbus Finance",
    summary:
      "Unified six disparate data sources, engineered demand signals, and deployed a weekly churn propensity model for 280k subscribers.",
    impact: [
      "Reduced monthly churn by 18% within the first quarter",
      "Automated lead routing improved save-team conversion by 26%",
    ],
    metrics: "Gradient boosted trees, Snowflake, dbt, Tableau, Python",
  },
  {
    title: "Marketing mix optimization",
    client: "Atlas Health",
    summary:
      "Built incremental ROI attribution across paid, earned, and owned channels, replacing last-click reporting with a Bayesian MMM.",
    impact: [
      "Reallocated 22% of spend to higher-yield channels",
      "Unlocked $4.6M incremental ARR with scenario planning",
    ],
    metrics: "Hierarchical Bayesian modeling, Prophet, Dagster, Power BI",
  },
  {
    title: "Operational forecasting",
    client: "Zenlog Logistics",
    summary:
      "Implemented an automated demand forecast and capacity planner across 43 fulfillment centers with a single source of truth.",
    impact: [
      "Improved SLA adherence from 82% to 95%",
      "Saved 9,500 labor hours via auto-generated staffing rosters",
    ],
    metrics: "Time-series ensembles, BigQuery, Looker Studio, Hex",
  },
];

const services = [
  {
    icon: FileBarChart,
    title: "Executive analytics",
    description:
      "Self-serve KPI frameworks, board reporting, and instrumentation that keeps leaders aligned on growth levers.",
    deliverables: ["Metric catalogs", "Executive dashboards", "Weekly readouts"],
  },
  {
    icon: Brain,
    title: "Predictive modeling",
    description:
      "Machine learning pipelines that translate messy data into probabilistic forecasts, uplift models, and monitoring.",
    deliverables: ["Feature stores", "Model governance", "A/B testing"],
  },
  {
    icon: LineChart,
    title: "Experimentation",
    description:
      "Design, launch, and analyze experiments with guardrails, sequential testing, and narrative storytelling for stakeholders.",
    deliverables: ["Experiment playbooks", "Lift analysis", "Decision dashboards"],
  },
  {
    icon: Database,
    title: "Modern data stacks",
    description:
      "Warehouse modeling, reliable ingestion, and analytics engineering that set the foundation for scale.",
    deliverables: ["dbt transformations", "Data contracts", "Observability"],
  },
];

const process = [
  {
    stage: "Discover",
    focus: "Embed with stakeholders to clarify the decision and constraints",
    output: "Research brief, KPI audit, opportunity sizing",
  },
  {
    stage: "Design",
    focus: "Architect data flows, experiments, and modeling approach",
    output: "Data blueprint, success metrics, analysis timeline",
  },
  {
    stage: "Deliver",
    focus: "Ship production-grade analytics assets and narratives",
    output: "Dashboards, models, operational playbooks",
  },
  {
    stage: "Uplevel",
    focus: "Train teams, automate insights, and iterate on results",
    output: "Enablement sessions, monitoring, next-step roadmap",
  },
];

const toolkit = [
  "Python",
  "SQL",
  "R",
  "dbt",
  "Snowflake",
  "BigQuery",
  "Looker",
  "Power BI",
  "Tableau",
  "Mode",
  "Hex",
  "Dagster",
  "Airflow",
  "Fivetran",
  "Feast",
  "Git & CI/CD",
];

const experience = [
  {
    company: "Lattice Analytics",
    role: "Lead Data Analyst",
    years: "2021 — Present",
    summary:
      "Scaled the analytics function from 2 to 14 analysts, delivering revenue forecasting, PLG activation insights, and exec dashboards.",
  },
  {
    company: "Brightloop",
    role: "Senior Product Analyst",
    years: "2018 — 2021",
    summary:
      "Owned experimentation and growth analytics across acquisition and retention channels for a 9M MAU SaaS platform.",
  },
  {
    company: "Northstate University",
    role: "MS, Applied Statistics",
    years: "2016 — 2018",
    summary:
      "Research focused on causal inference, longitudinal modeling, and visualization for complex systems.",
  },
];

const testimonials = [
  {
    quote:
      "Ava turns raw telemetry into board-ready narratives. Her churn program alone paid for the engagement five times over.",
    name: "Marcus Lin",
    title: "VP Growth, Nimbus Finance",
  },
  {
    quote:
      "She built our experimentation practice from scratch, mentoring product squads and codifying playbooks that we still rely on.",
    name: "Sasha Romero",
    title: "Head of Product Analytics, Atlas Health",
  },
  {
    quote:
      "From ingestion to storytelling, Ava delivers with empathy, rigor, and relentless follow-through.",
    name: "Jamal Peters",
    title: "COO, Zenlog Logistics",
  },
];

const insights = [
  {
    title: "Designing reliable north-star metrics",
    description:
      "A four-step framework for de-risking metric changes with sensitivity analysis and stakeholder alignment.",
    link: "https://medium.com",
  },
  {
    title: "Experimentation guardrails that don't slow teams down",
    description:
      "Sequential testing, variance reduction, and how to communicate do-not-ship thresholds with product partners.",
    link: "https://medium.com",
  },
  {
    title: "Standing up an analytics engineering stack in 90 days",
    description:
      "Lessons learned while moving from ad-hoc SQL to dbt, data contracts, and observability.",
    link: "https://medium.com",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_60%)]" />
        <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <div className="grid gap-10 lg:grid-cols-[2.2fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-sm font-medium text-sky-200">
                <Sparkles className="size-4" />
                Ava Patel · Data Analyst & Insight Architect
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Driving compound growth with decision-grade analytics and storytelling.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                I help venture-backed teams turn fragmented data into clarity. From experimentation to forecasting, I partner with leaders to define the right questions, build modern data stacks, and deliver insights that land with gravitas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#work"
                  className="flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                >
                  Explore work
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="mailto:ava@insightarc.studio"
                  className="flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
                >
                  <Mail className="size-4" />
                  Book a discovery call
                </Link>
              </div>
            </div>
            <aside className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Impact snapshot
              </h2>
              <ul className="mt-6 space-y-6">
                {metrics.map((item) => (
                  <li key={item.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-sm font-medium text-slate-200">{item.label}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section
          id="work"
          className="rounded-4xl -mt-20 border border-white/5 bg-slate-950/80 p-10 shadow-xl shadow-sky-950/30 backdrop-blur-lg sm:p-14"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">Case studies</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Analytics programs that moved the needle
              </h2>
            </div>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
            >
              <CalendarDays className="size-4" /> View resume
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.04] p-6 transition hover:border-sky-500/40 hover:bg-white/[0.06]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{study.client}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{study.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {study.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 size-2 rounded-full bg-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-xs uppercase tracking-wider text-slate-400">
                  {study.metrics}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="rounded-4xl border border-white/5 bg-white/[0.04] p-10">
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sky-200">
              <BarChart4 className="size-4" />
              Offerings
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              From instrumentation to decision enablement
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Engagements are purpose-built to untangle messy data, quantify the upside, and turn analysis into action. Pick the track or blend that matches your stage.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/5 bg-slate-950/80 p-5"
                >
                  <service.icon className="size-8 text-sky-300" />
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{service.description}</p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-slate-400">
                    Deliverables
                  </p>
                  <ul className="mt-1 space-y-1 text-sm text-slate-200">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-4xl border border-white/5 bg-gradient-to-br from-slate-900/80 via-slate-950 to-[#020617] p-10">
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sky-200">
              <Users className="size-4" />
              Process
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Collaborative, transparent, outcome-driven
            </h2>
            <ol className="mt-6 space-y-6">
              {process.map((step, index) => (
                <li key={step.stage} className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold text-white">{step.stage}</h3>
                    <Sparkles className="size-4 text-sky-200" />
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{step.focus}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key outputs
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{step.output}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-24 rounded-4xl border border-white/5 bg-white/[0.04] p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-slate-400">Toolkit</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Stack fluent across analytics and ML</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              Every engagement pairs the right tool for the job with automation and documentation so your team can iterate after handoff.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {toolkit.map((tool) => (
              <div
                key={tool}
                className="rounded-3xl border border-white/5 bg-slate-950/70 px-4 py-6 text-center text-sm font-semibold text-slate-200"
              >
                {tool}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="rounded-4xl border border-white/5 bg-white/[0.04] p-10">
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sky-200">
              <CalendarDays className="size-4" />
              Journey
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">Experience & education</h2>
            <div className="mt-8 space-y-8">
              {experience.map((item) => (
                <div key={item.company} className="rounded-3xl border border-white/5 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.years}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.role}</h3>
                  <p className="text-sm font-medium text-sky-200">{item.company}</p>
                  <p className="mt-3 text-sm text-slate-300">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-4xl border border-white/5 bg-gradient-to-br from-sky-600/30 via-sky-900/10 to-slate-950 p-10">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sky-100">
                <Users className="size-4" />
                Testimonials
              </div>
              <div className="mt-6 space-y-6">
                {testimonials.map((item) => (
                  <blockquote key={item.name} className="rounded-3xl border border-white/5 bg-white/[0.07] p-5 text-sm text-slate-100">
                    <p>“{item.quote}”</p>
                    <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-200">
                      {item.name} · {item.title}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
            <div className="rounded-4xl border border-white/5 bg-white/[0.03] p-10">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sky-200">
                <BarChart4 className="size-4" />
                Latest insights
              </div>
              <ul className="mt-5 space-y-5">
                {insights.map((insight) => (
                  <li key={insight.title} className="group">
                    <Link
                      href={insight.link}
                      className="flex items-start justify-between gap-4 rounded-3xl border border-white/5 bg-white/[0.04] p-5 transition hover:border-sky-400 hover:bg-white/[0.08]"
                    >
                      <div>
                        <h3 className="text-base font-semibold text-white group-hover:text-sky-200">
                          {insight.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-300">{insight.description}</p>
                      </div>
                      <ArrowUpRight className="size-5 text-slate-400 group-hover:text-sky-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-24 rounded-4xl border border-white/5 bg-gradient-to-br from-sky-600/40 via-slate-900 to-slate-950 p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Ready to turn noise into decision-grade clarity?
              </h2>
              <p className="mt-4 text-base text-slate-200">
                Share a short brief and I’ll respond within two business days with a discovery framework, milestones, and a proposed analytics roadmap.
              </p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/[0.05] p-6">
              <form
                className="space-y-4"
                action="https://formsubmit.co/ava@insightarc.studio"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://agentic-3a0d10ba.vercel.app/thanks" />
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white focus:border-sky-300 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white focus:border-sky-300 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project" className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    What problem are we solving?
                  </label>
                  <textarea
                    id="project"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-white focus:border-sky-300 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                >
                  <Mail className="size-4" /> Submit brief
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-20 w-full max-w-6xl border-t border-white/5 px-6 py-10 text-sm text-slate-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Insight Arc Studio. Analytics with heart.</p>
          <div className="flex gap-4 text-slate-400">
            <Link href="https://www.linkedin.com" className="transition hover:text-sky-200">
              LinkedIn
            </Link>
            <Link href="https://github.com" className="transition hover:text-sky-200">
              GitHub
            </Link>
            <Link href="mailto:ava@insightarc.studio" className="transition hover:text-sky-200">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
