import Image from "next/image";
import Link from "next/link";
import { ventures, type Venture } from "./ventures-data";

export function VentureDetail({ venture }: { venture: Venture }) {
  const others = ventures.filter((item) => item.slug !== venture.slug);

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-purple-500/10 blur-[110px]" />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10 md:px-10">
          <Link
            href="/#ventures"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition hover:bg-white hover:text-black"
          >
            <span aria-hidden>&larr;</span> Back to portfolio
          </Link>

          <header>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70">
                {venture.category}
              </span>
              {venture.badge ? (
                <span className="rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black">
                  {venture.badge}
                </span>
              ) : null}
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{venture.name}</h1>
            <p className="mt-3 text-lg text-white/60">{venture.role}</p>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-white/75 md:text-2xl md:leading-9">
              {venture.tagline}
            </p>
            <a
              href={venture.site.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
            >
              {venture.site.label} <span aria-hidden>&#8599;</span>
            </a>
          </header>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <Image
              src={venture.image}
              alt={venture.imageAlt}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <section>
            <SectionLabel>Product vision</SectionLabel>
            <p className="max-w-3xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              {venture.vision}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {venture.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-xs text-white/45">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {venture.sections.map((section) => (
              <article
                key={section.heading}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6"
              >
                <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                {section.body ? (
                  <p className="mt-4 leading-7 text-white/60">{section.body}</p>
                ) : null}
                {section.bullets?.length ? (
                  <ul className="mt-4 grid gap-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-7 text-white/60">
                        <span
                          aria-hidden
                          className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-white/40"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </section>

          <section>
            <SectionLabel>Where the four risks sat</SectionLabel>
            <p className="mb-6 max-w-3xl leading-7 text-white/50">
              Value, usability, feasibility, and viability, and the evidence behind each one.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {venture.risks.map((risk) => (
                <article
                  key={risk.name}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">{risk.name} risk</p>
                  <p className="mt-4 leading-7 text-white/60">{risk.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>Tools / Skills</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {venture.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section>
            <SectionLabel>Other ventures</SectionLabel>
            <div className="grid gap-4 md:grid-cols-2">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/ventures/${item.slug}`}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">{item.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.name}</h3>
                  <p className="mt-3 leading-7 text-white/55">{item.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition group-hover:text-white">
                    View details <span aria-hidden>&rarr;</span>
                  </span>
                  <span className="mt-2 block text-xs text-white/35">{item.site.label}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/35">{children}</p>
  );
}
