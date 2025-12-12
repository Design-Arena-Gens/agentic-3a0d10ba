import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const experience = [
  {
    company: "Lattice Analytics",
    location: "Remote · Series C SaaS",
    title: "Lead Data Analyst",
    dates: "2021 — Present",
    bullets: [
      "Scaled experimentation program to 40+ annual tests, enabling 9% lift in activation and 6% improvement in premium conversion.",
      "Architected reverse ETL workflows with dbt, Hightouch, and Snowflake, reducing time-to-insight from 3 days to 45 minutes.",
      "Partnered with RevOps to build predictive revenue forecast with scenario modeling, aligning GTM teams on quarterly targets.",
    ],
  },
  {
    company: "Brightloop",
    location: "San Francisco, CA",
    title: "Senior Product Analyst",
    dates: "2018 — 2021",
    bullets: [
      "Developed propensity models and cohort dashboards driving a $4.2M upsell program for enterprise accounts.",
      "Introduced event instrumentation standards and product analytics taxonomy adopted by 12 product squads.",
      "Mentored analysts on SQL, statistical testing, and stakeholder storytelling; 3 direct reports promoted to senior roles.",
    ],
  },
];

const education = [
  {
    school: "Northstate University",
    degree: "MS, Applied Statistics",
    dates: "2016 — 2018",
    notes: "Graduate research in causal inference and longitudinal modeling; teaching assistant for Statistical Computing.",
  },
  {
    school: "University of Cascadia",
    degree: "BS, Economics & Computer Science",
    dates: "2012 — 2016",
    notes: "Magna Cum Laude · Honors thesis on behavioral econometrics in subscription pricing.",
  },
];

const skills = {
  Analytics: ["Product analytics", "Experiment design", "Causal inference", "Customer segmentation"],
  Engineering: ["SQL", "Python", "dbt", "Airflow", "Dagster", "LookML"],
  Visualization: ["Tableau", "Looker", "Mode", "Hex", "Power BI"],
  Enablement: ["Stakeholder facilitation", "Narrative storytelling", "Executive reporting", "Team coaching"],
};

const highlights = [
  "Board-ready analytics storytelling with C-suite stakeholder alignment experience.",
  "Hands-on with modern data stack: Snowflake, BigQuery, Redshift, Fivetran, Stitch, Census.",
  "Partnered across product, growth, RevOps, finance, and customer success to embed analytics in execution.",
];

export const metadata = {
  title: "Resume · Ava Patel Analytics",
};

export default function ResumePage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16 text-slate-100">
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Ava Patel</h1>
          <p className="mt-2 text-sm text-slate-300">
            Data analyst specializing in experimentation, predictive modeling, and executive storytelling.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>San Francisco · Remote</span>
            <Link href="mailto:ava@insightarc.studio" className="hover:text-sky-200">
              ava@insightarc.studio
            </Link>
            <Link href="https://www.linkedin.com" className="hover:text-sky-200">
              LinkedIn
            </Link>
            <Link href="https://github.com" className="hover:text-sky-200">
              GitHub
            </Link>
          </div>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
        >
          <ArrowLeft className="size-4" />
          Back to portfolio
        </Link>
      </header>

      <main className="mt-10 space-y-12">
        <section>
          <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-400">
            Professional Summary
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Analytical leader translating fragmented data into decision-grade insights. Builds experimentation,
            forecasting, and instrumentation programs that empower operators to act fast and measure impact.
            Combines technical depth with storytelling that aligns executives around measurable growth bets.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-400">Experience</h2>
          <div className="mt-6 space-y-8">
            {experience.map((item) => (
              <article key={item.company} className="rounded-3xl border border-white/5 bg-white/[0.03] p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm font-medium text-sky-200">{item.company}</p>
                    <p className="text-sm text-slate-400">{item.location}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.dates}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-sky-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-400">Skills</h2>
            <div className="mt-4 space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-200">{category}</h3>
                  <p className="mt-2 text-sm text-slate-300">{items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-400">Education</h2>
              <div className="mt-4 space-y-4">
                {education.map((item) => (
                  <div key={item.school} className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
                    <h3 className="text-sm font-semibold text-white">{item.school}</h3>
                    <p className="text-sm text-sky-200">{item.degree}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.dates}</p>
                    <p className="mt-2 text-sm text-slate-300">{item.notes}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-400">Highlights</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
