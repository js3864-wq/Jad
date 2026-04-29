"use client";

import Image from "next/image";
import { useState } from "react";

type ExperienceKey = "digikey" | "checkinwin" | "reunion" | "studentgov" | "projects";

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
  logo: string;
  logoImage?: string;
  logoAlt?: string;
  category: string;
  shortDescription: string;
  metrics: Metric[];
  skills: string[];
  stories: StoryCardData[];
};

type PersonalItem = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
};

type ProjectItem = {
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  skills: string[];
  linkLabel?: string;
  link?: string;
};

const experiences: Experience[] = [
  {
    key: "digikey",
    name: "Digi-Key",
    role: "Software Engineer",
    logo: "DK",
    logoImage: "/logos/digikey.png",
    logoAlt: "Digi-Key logo",
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
    logo: "CW",
    logoImage: "/logos/checkinwin.png",
    logoAlt: "CheckInWin logo",
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
    logo: "RE",
    logoImage: "/logos/reunion.png",
    logoAlt: "REUNION logo",
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
    logo: "SG",
    logoImage: "/logos/cornell.png",
    logoAlt: "Cornell University logo",
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
  {
    key: "projects",
    name: "Projects & Internships",
    role: "Technical Projects / Internships",
    logo: "PI",
    category: "Healthcare / Automation / Web / Data",
    shortDescription:
      "Before and alongside my professional experience, I built a range of technical, analytical, and internship projects across healthcare research, automation, web development, game development, and data structures.",
    metrics: [
      { value: "10+", label: "Projects & internships" },
      { value: "300+", label: "Yearly hours saved through automation" },
      { value: "2030", label: "Forecasting analysis for Mayo Clinic research" },
      { value: "Multiple", label: "Full-stack, React, Java, and web projects" },
    ],
    skills: [
      "JavaScript",
      "React",
      "Java",
      "HTML",
      "CSS",
      "PHP",
      "Selenium",
      "Eclipse",
      "WordPress",
      "Google Analytics",
      "UX/UI",
      "Data Analysis",
      "Forecasting",
      "Automation",
      "CMS",
      "ADA Testing",
    ],
    stories: [],
  },
];

const projectItems: ProjectItem[] = [
  {
    title: "Mayo Clinic Research Project",
    date: "March 2024",
    category: "Healthcare Research / Data Analysis",
    image: "https://saouma1.github.io/Saouma.github.io/images/Mayo.jpg",
    description:
      "Collaborated on a multidisciplinary research project investigating the use of a novel biomarker to help guide treatment strategy for pancreatic cancer. My role focused on demographic analysis, forecasting projected case counts through 2030, and developing partnership and collaboration strategy.",
    skills: ["Data Analysis", "Forecasting", "Research", "Healthcare Strategy", "Excel"],
    linkLabel: "Article",
    link: "https://www.fox21online.com/2024/02/29/css-students-going-to-mayo-clinic-to-present-research/",
  },
  {
    title: "Johnson Brothers Internship",
    date: "August 2022",
    category: "IT Business Analyst Internship / Automation",
    image: "https://saouma1.github.io/Saouma.github.io/images/JBD.jpeg",
    description:
      "Developed and implemented an automation script using Eclipse and Selenium to improve internal workflows, saving an estimated 300+ hours annually. Also worked with WordPress CMS, ADA testing, Google Analytics, and consolidated findings into an Excel-based reporting workflow.",
    skills: ["Selenium", "Eclipse", "Automation", "WordPress", "Google Analytics", "ADA Testing", "Excel"],
    linkLabel: "LinkedIn Post",
    link: "https://www.linkedin.com/posts/activity-6963598020366008320-XAjf?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Digi-Key Guest Order Status Pages",
    date: "August 2023",
    category: "Internship Project / Customer Self-Service",
    image: "https://saouma1.github.io/Saouma.github.io/images/DigikeyProject.png",
    description:
      "During my Digi-Key internship, I developed two webpages to improve the experience for unregistered customers. The pages allowed guest users to enter order details and independently review order status information, reducing the need for representative-assisted support.",
    skills: ["Web Development", "Customer Experience", "Self-Service", "UX", "Frontend"],
    linkLabel: "Website",
    link: "https://www.digikey.com/orderhistory/guest/orderstatus",
  },
  {
    title: "Game Theory Educational Website",
    date: "December 2023",
    category: "Capstone Project / Full-Stack Web",
    image: "https://saouma1.github.io/Saouma.github.io/images/theory.png",
    description:
      "Created a game theory-based educational website for microeconomics, centered on the red and black card game. The project included planning, coding, hosting, UX/UI design, and deployment using HTML, CSS, JavaScript, PHP, and Bluehost.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "UX/UI", "Bluehost"],
    linkLabel: "Website",
    link: "https://cssgametheory.com/",
  },
  {
    title: "Tic Tac Toe React",
    date: "November 2023",
    category: "React Project / Full-Stack Class",
    image: "https://saouma1.github.io/Saouma.github.io/images/react.png",
    description:
      "Built a Tic Tac Toe game using React as one of my first hands-on React projects. The project helped strengthen my understanding of component-based development, state management, and interactive UI design.",
    skills: ["React", "JavaScript", "HTML", "CSS", "State Management"],
    linkLabel: "Code",
    link: "https://github.com/Saouma1/tictactoeReact.git",
  },
  {
    title: "Connect 4",
    date: "September 2023",
    category: "Web Game / JavaScript",
    image: "https://saouma1.github.io/Saouma.github.io/images/Connect4.png",
    description:
      "Built a Connect 4 game for a full-stack development class using JavaScript, HTML, and CSS. The project introduced interactive browser-based game logic and frontend event handling.",
    skills: ["JavaScript", "HTML", "CSS", "Game Logic", "Frontend"],
    linkLabel: "Code",
    link: "https://github.com/Saouma1/Connect4.git",
  },
  {
    title: "COVID Contact Tracing",
    date: "Fall 2022",
    category: "Java Application / Public Health",
    image: "https://saouma1.github.io/Saouma.github.io/images/Covid-Tracing-Project.png",
    description:
      "Designed a Java application for COVID-19 contact tracing that tracked interpersonal interactions and exposure layers. The system helped model how contacts and secondary exposure could be identified through structured data.",
    skills: ["Java", "Object-Oriented Programming", "Data Structures", "Public Health"],
    linkLabel: "Code",
    link: "https://github.com/Saouma1/Covid-Contact-Tracing",
  },
  {
    title: "Admission Management System",
    date: "May 2022",
    category: "Java Application / File Storage",
    image: "https://saouma1.github.io/Saouma.github.io/images/Admission-Picture.png",
    description:
      "Built an admission management program where users could select whether they were a student or teacher, enter their information, and store the data in a Notepad file.",
    skills: ["Java", "File Handling", "OOP", "Console Application"],
    linkLabel: "Code",
    link: "https://github.com/Saouma1/Admission-mangement-Program",
  },
  {
    title: "Gaming Concept Website",
    date: "Fall 2021",
    category: "Website Development Class",
    image: "https://saouma1.github.io/Saouma.github.io/images/gaming.png",
    description:
      "Designed and built an end-to-end gaming-themed website for a website development class. The project focused on frontend structure, visual design, layout, and web fundamentals.",
    skills: ["HTML", "CSS", "Web Design", "Frontend"],
    linkLabel: "Website",
    link: "https://jsaouma.com/",
  },
  {
    title: "Melody Player",
    date: "November 2022",
    category: "Java Application / Data Structures",
    image: "https://saouma1.github.io/Saouma.github.io/images/Melody-Player.png",
    description:
      "Built a music player application that allowed users to select and play tracks. The application integrated Stack and Queue data structures to support playback flow.",
    skills: ["Java", "Stack", "Queue", "Data Structures", "OOP"],
    linkLabel: "Code",
    link: "https://github.com/Saouma1/Melody-Player/",
  },
  {
    title: "Blocky",
    date: "December 2022",
    category: "Java Game / Algorithms",
    image: "https://saouma1.github.io/Saouma.github.io/images/Blocky.png",
    description:
      "Designed and developed Blocky, an interactive game with a dynamic board of randomly generated square tiles across four colors. The game used Map data structures, board generation logic, and modular software design principles.",
    skills: ["Java", "Maps", "Algorithms", "Game Design", "OOP"],
    linkLabel: "Code",
    link: "https://github.com/Saouma1/Blocky",
  },
  {
    title: "Tic Tac Toe Java",
    date: "May 2021",
    category: "Java Game",
    image: "https://saouma1.github.io/Saouma.github.io/images/TICTACTOE.png",
    description:
      "Built a Tic Tac Toe game for my Java I class. The game supports two-player gameplay and a mode to play against the computer.",
    skills: ["Java", "OOP", "Game Logic", "Console Application"],
    linkLabel: "Code",
    link: "https://github.com/Saouma1/TICTACTOE",
  },
];

const personalItems: PersonalItem[] = [
  {
    icon: "SC",
    title: "Soccer",
    subtitle: "Competition, teamwork, leadership",
    description: "Soccer keeps me sharp, competitive, and grounded in team dynamics.",
  },
  {
    icon: "SB",
    title: "Sailing & Boating",
    subtitle: "Water, adaptability, calm under pressure",
    description:
      "Being on the water reminds me to read changing conditions, stay composed, and adjust quickly.",
  },
  {
    icon: "DJ",
    title: "DJing & House Music",
    subtitle: "Music, storytelling, crowd energy",
    description:
      "DJing is where my creative and technical sides meet through rhythm, timing, and the energy of a room.",
  },
  {
    icon: "TR",
    title: "Training",
    subtitle: "Strength, cardio, mobility",
    description: "I train to stay athletic, durable, and ready for whatever comes next.",
  },
  {
    icon: "TS",
    title: "Travel & Side Quests",
    subtitle: "Culture, spontaneity, exploration",
    description:
      "I like places that feel alive: food, music, streets, people, and unexpected moments.",
  },
  {
    icon: "HC",
    title: "Hosting & Community",
    subtitle: "Events, hospitality, connection",
    description:
      "I like creating rooms where people walk in as strangers and leave with a story.",
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
          <WhatKeepsMeMoving />
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
            <button key={experience.key} onClick={() => setActiveKey(experience.key)} className={`flex min-w-fit items-center gap-3 rounded-xl px-4 py-3 text-left transition ${isActive ? "bg-white text-black" : "text-white/60 hover:bg-white/[0.06] hover:text-white"}`}>
              <ExperienceLogo experience={experience} isActive={isActive} />
              <span>
                <p className="text-sm font-semibold">{experience.role}</p>
                <p className={`text-xs ${isActive ? "text-black/60" : "text-white/40"}`}>{experience.name}</p>
              </span>
            </button>
          );
        })}
      </div>
      <ExperiencePanel experience={activeExperience} />
    </section>
  );
}

function ExperienceLogo({ experience, isActive }: { experience: Experience; isActive: boolean }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const logoSrc = logoFailed ? undefined : experience.logoImage;

  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border text-xs font-bold ${isActive ? "border-black/10 bg-white text-black" : "border-white/10 bg-white/[0.08] text-white/75"}`}>
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt={experience.logoAlt ?? `${experience.name} logo`}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        experience.logo
      )}
    </span>
  );
}

function ExperiencePanel({ experience }: { experience: Experience }) {
  if (experience.key === "projects") {
    return <ProjectExperiencePanel experience={experience} />;
  }

  return <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"><div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"><div className="mb-8"><p className="mb-3 text-sm text-white/40">{experience.category}</p><h3 className="text-4xl font-semibold">{experience.name}</h3><p className="mt-2 text-lg text-white/60">{experience.role}</p><p className="mt-6 leading-7 text-white/60">{experience.shortDescription}</p></div><div className="grid gap-3 sm:grid-cols-3">{experience.metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}</div><div className="mt-8"><p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/35">Tools / Skills</p><div className="flex flex-wrap gap-2">{experience.skills.map((skill) => <TechBadge key={skill} label={skill} />)}</div></div></div><div className="grid gap-4">{experience.stories.map((story, index) => <StoryCard key={story.title} index={index + 1} story={story} />)}</div></div>;
}

function ProjectExperiencePanel({ experience }: { experience: Experience }) {
  const featuredProjects = projectItems.slice(0, 3);
  const remainingProjects = projectItems.slice(3);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-6">
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm text-white/40">{experience.category}</p>
          <h3 className="text-4xl font-semibold">{experience.name}</h3>
          <p className="mt-2 text-lg text-white/60">{experience.role}</p>
          <p className="mt-6 max-w-3xl leading-7 text-white/60">{experience.shortDescription}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {experience.metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/35">Tools / Skills</p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <TechBadge key={skill} label={skill} />
          ))}
        </div>
      </div>

      <div className="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/35">Featured Work</p>
          <h4 className="mt-2 text-2xl font-semibold">High-signal projects and internships</h4>
        </div>
        <p className="max-w-md text-sm leading-6 text-white/45">
          A curated view of technical execution, analysis, and customer-facing product work.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {remainingProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: ProjectItem; featured?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = project.title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-black/20 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
      <div className="relative mb-5 h-48 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center bg-white/[0.04] text-sm font-semibold tracking-[0.25em] text-white/40">
            {initials}
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={featured ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"}
            className="object-cover transition duration-500 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/70">
          {project.category}
        </span>
        <span className="text-xs text-white/35">{project.date}</span>
      </div>

      <h4 className={`${featured ? "text-2xl" : "text-xl"} font-semibold text-white`}>
        {project.title}
      </h4>
      <p className="mt-3 flex-1 leading-7 text-white/55">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/60">
            {skill}
          </span>
        ))}
      </div>

      {project.link && project.linkLabel ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
        >
          {project.linkLabel}
        </a>
      ) : null}
    </article>
  );
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

function WhatKeepsMeMoving() {
  return (
    <section id="what-keeps-me-moving" className="scroll-mt-10">
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/35">Beyond Work</p>
        <h2 className="text-3xl font-semibold md:text-4xl">What Keeps Me Moving</h2>
        <p className="mt-4 text-base leading-7 text-white/55 md:text-lg">
          Outside of work, I&apos;m drawn to movement, music, water, and people. Whether I&apos;m
          playing soccer, sailing, DJing, training, or planning the next gathering, I&apos;m usually
          chasing experiences that feel alive.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {personalItems.map((item) => (
          <PersonalCard key={item.title} item={item} />
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-white/75">
        I like building things people can feel, whether it is a product, a party, a team, or a
        moment.
      </p>
    </section>
  );
}

function PersonalCard({ item }: { item: PersonalItem }) {
  return (
    <article className="group min-h-[250px] rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-sm font-bold text-black shadow-lg shadow-black/20 transition group-hover:scale-105">
        {item.icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm font-medium text-white/45">{item.subtitle}</p>
      <p className="mt-5 leading-7 text-white/55">{item.description}</p>
    </article>
  );
}

function FooterCTA() {
  return <section id="contact" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-10"><h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">Clean, modern, and scan-friendly.</h2><p className="mt-4 max-w-2xl text-white/55">Placeholder CTA block for recruiter actions.</p></section>;
}
