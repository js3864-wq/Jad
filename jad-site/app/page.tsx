"use client";

import { useState } from "react";

type ExperienceKey = "digikey" | "checkinwin" | "reunion" | "studentgov";

type Metric = {
  label: string;
  value: string;
};

type StoryCardData = {
  title: string;
  description: string;
};

type Experience = {
  key: ExperienceKey;
  name: string;
  role: string;
  category: string;
  shortDescription: string;
  metrics: Metric[];
  skills: string[];
  stories: StoryCardData[];
};

const experiences: Experience[] = [
  {
    key: "digikey",
    name: "Digi-Key",
    role: "Software Engineer",
    category: "Engineering / Customer Automation",
    shortDescription:
      "Designed and shipped customer-facing tools that improved self-service workflows and reduced operational friction.",
    metrics: [
      { value: "40%", label: "Support reduction" },
      { value: "2", label: "Customer-facing tools" },
      { value: "Cross-functional", label: "PM, QA, Design, Support" },
    ],
    skills: ["C#", ".NET", "SQL", "APIs", "Azure DevOps", "Agile"],
    stories: [
      {
        title: "Self-Service Automation",
        description:
          "A concise case study area for customer-facing automation and support reduction.",
      },
      {
        title: "Legacy Workflow Modernization",
        description:
          "A short section for explaining registration and account creation improvements.",
      },
      {
        title: "Bug Triage & Prioritization",
        description:
          "A recruiter-friendly story around cross-functional execution and impact.",
      },
    ],
  },
  {
    key: "checkinwin",
    name: "CheckInWin",
    role: "Co-Founder & Product Lead",
    category: "Startup / Product / B2B2C SaaS",
    shortDescription:
      "Built a digital loyalty platform helping local businesses replace punch cards with rewards, analytics, and engagement tools.",
    metrics: [
      { value: "1,200+", label: "Users" },
      { value: "20", label: "Merchants onboarded" },
      { value: "3rd", label: "BETA showcase placement" },
    ],
    skills: ["Product", "SaaS", "CRM", "Go-to-Market", "Analytics", "UX"],
    stories: [
      {
        title: "From Pain Point to Product",
        description:
          "A compact story about turning physical loyalty card friction into a startup.",
      },
      {
        title: "Merchant Onboarding",
        description:
          "A section for sales, demos, feedback, and business customer discovery.",
      },
      {
        title: "AI Personalization Vision",
        description:
          "A future-looking product story around smarter rewards and retention.",
      },
    ],
  },
  {
    key: "reunion",
    name: "REUNION",
    role: "Co-Founder & COO",
    category: "Experiential Events / Growth / Operations",
    shortDescription:
      "Scaled a culturally inclusive events platform with operational rigor and a community-led brand strategy.",
    metrics: [
      { value: "14,000+", label: "Attendees" },
      { value: "19", label: "Events in 14 months" },
      { value: "8", label: "Partners scaled" },
    ],
    skills: ["Operations", "Growth", "Brand", "Sponsorships", "Ticketing", "Events"],
    stories: [
      {
        title: "Community-Led Growth Engine",
        description:
          "Built AI-powered Claude analytics to mine customer data, attendance patterns, and retention signals that informed pricing, marketing spend, and event strategy.",
      },
      {
        title: "Operational Command Layer",
        description:
          "Directed a ~40-person contractor workforce per event across staffing, run-of-show execution, issue escalation, and wrap-up.",
      },
      {
        title: "Full-Stack Platform + Partner Ops",
        description:
          "Designed and deployed a React/TypeScript app with Lovable, Cursor, and Supabase plus SEO/CRM systems that drove 100+ weekly site visitors and scaled workflows across 8 partners, including Red Bull and Breakaway.",
      },
    ],
  },
  {
    key: "studentgov",
    name: "Student Government",
    role: "President / Co-President",
    category: "Leadership / Community / Campus Strategy",
    shortDescription:
      "Led campus-wide initiatives across clubs, events, student representation, institutional memory, and external partnerships.",
    metrics: [
      { value: "$20K", label: "Hackathon sponsorships" },
      { value: "35", label: "Clubs supported" },
      { value: "700+", label: "Student community" },
    ],
    skills: ["Leadership", "Partnerships", "Governance", "Events", "Comms", "Strategy"],
    stories: [
      {
        title: "Rebuilding Student Government Systems",
        description:
          "A concise section about committees, documentation, and operating structure.",
      },
      {
        title: "EmpireHacks & NYC Ecosystem",
        description:
          "A section for sponsorships, partner schools, and AI programming.",
      },
      {
        title: "Community Building",
        description:
          "A section for club fair, gala, mixers, graduation support, and student voice.",
      },
    ],
  },
];

export default function PortfolioHome() {
  const [activeKey, setActiveKey] = useState<ExperienceKey>("digikey");
  const activeExperience = experiences.find((item) => item.key === activeKey) ?? experiences[0];

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="relative overflow-hidden">
        <GlowBackground />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-10 md:px-10 lg:px-12">
          <Nav />
          <Hero />
          <ExperienceTabs
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            activeExperience={activeExperience}
          />
          <FooterCTA />
        </div>
      </section>
    </main>
  );
}

function GlowBackground() {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-purple-500/10 blur-[110px]" />
      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[100px]" />
    </>
  );
}

function Nav() { return <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-black">JS</div><div><p className="text-sm font-semibold">Jad Saouma</p><p className="text-xs text-white/50">Product • Engineering • Operations</p></div></div><button className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white hover:text-black">Resume</button></nav>; }

function Hero() {
  return (
    <section className="grid gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div>
        <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">Cornell Tech MBA / Software Engineer / Founder / Operator</div>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">I build products, systems, and experiences that move people.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Recruiter-first placeholder copy for a premium founder/operator/technical narrative.</p>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div
          className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(8, 10, 15, 0.05) 0%, rgba(8, 10, 15, 0.8) 100%), url('/jad-profile.jpg')",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-white/55">About Jad</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
              Software engineer, entrepreneur, triathlete. And oh, a 730-day streak holder on Duolingo.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTabs({ activeKey, setActiveKey, activeExperience }: { activeKey: ExperienceKey; setActiveKey: (key: ExperienceKey) => void; activeExperience: Experience; }) {
  return (
    <section id="experience" className="scroll-mt-10">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="text-3xl font-semibold md:text-4xl">Selected Experience</h2>
        <p className="max-w-xl text-sm leading-6 text-white/50">Each tab is designed to be skimmed in seconds with structure first.</p>
      </div>
      <div className="mb-6 flex gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
        {experiences.map((experience) => {
          const isActive = activeKey === experience.key;
          return (
            <button key={experience.key} onClick={() => setActiveKey(experience.key)} className={`min-w-fit rounded-xl px-4 py-3 text-left transition ${isActive ? "bg-white text-black" : "text-white/60 hover:bg-white/[0.06] hover:text-white"}`}>
              <p className="text-sm font-semibold">{experience.name}</p>
              <p className={`text-xs ${isActive ? "text-black/60" : "text-white/40"}`}>{experience.role}</p>
            </button>
          );
        })}
      </div>
      <ExperiencePanel experience={activeExperience} />
    </section>
  );
}

function ExperiencePanel({ experience }: { experience: Experience }) {
  return <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"><div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"><div className="mb-8"><p className="mb-3 text-sm text-white/40">{experience.category}</p><h3 className="text-4xl font-semibold">{experience.name}</h3><p className="mt-2 text-lg text-white/60">{experience.role}</p><p className="mt-6 leading-7 text-white/60">{experience.shortDescription}</p></div><div className="grid gap-3 sm:grid-cols-3">{experience.metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}</div><div className="mt-8"><p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/35">Tools / Skills</p><div className="flex flex-wrap gap-2">{experience.skills.map((skill) => <TechBadge key={skill} label={skill} />)}</div></div></div><div className="grid gap-4">{experience.stories.map((story, index) => <StoryCard key={story.title} index={index + 1} story={story} />)}</div></div>;
}

function MetricCard({ value, label }: Metric) {
  return <div className="rounded-2xl border border-white/10 bg-black/25 p-4"><p className="text-2xl font-semibold">{value}</p><p className="mt-1 text-xs text-white/45">{label}</p></div>;
}

function TechBadge({ label }: { label: string }) {
  return <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/70"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-white">{label.slice(0, 2).toUpperCase()}</div><span>{label}</span></div>;
}

function StoryCard({ story, index }: { story: StoryCardData; index: number }) {
  return <div className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"><div className="mb-5 flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-black">{index}</div><span className="text-xs uppercase tracking-[0.25em] text-white/30">Case Story</span></div><h4 className="text-xl font-semibold">{story.title}</h4><p className="mt-3 leading-7 text-white/55">{story.description}</p></div>;
}

function FooterCTA() {
  return <section id="contact" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-10"><h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">Clean, modern, and scan-friendly.</h2><p className="mt-4 max-w-2xl text-white/55">Placeholder CTA block for recruiter actions.</p></section>;
}
