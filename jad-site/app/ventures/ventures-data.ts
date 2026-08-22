// Featured ventures: the three products I own end to end.
//
// Each venture powers two surfaces:
//   1. A card in the "Featured Ventures" section on the homepage (image + three points + link).
//   2. A full detail page at /ventures/<slug>.
//
// TODO(Jad): the cover images in /public/ventures are designed placeholders, rendered
// from the .svg source of the same name. Swap in a real photo by overwriting
// /public/ventures/<slug>.jpg (16:9 crops best).

export type VentureRisk = {
  name: "Value" | "Usability" | "Feasibility" | "Viability";
  body: string;
};

export type VentureSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type VentureMetric = {
  value: string;
  label: string;
};

export type Venture = {
  slug: string;
  name: string;
  role: string;
  category: string;
  badge?: string;
  /** One line, used under the card title and at the top of the detail page. */
  tagline: string;
  image: string;
  imageAlt: string;
  /** Exactly three short lines. These are what the homepage card shows. */
  cardPoints: string[];
  metrics: VentureMetric[];
  vision: string;
  sections: VentureSection[];
  risks: VentureRisk[];
  /** The part I'd say out loud in an interview before anyone asks. */
  honestRisk: { heading: string; body: string };
  tags: string[];
};

export const ventures: Venture[] = [
  {
    slug: "reunion",
    name: "REUNION",
    role: "Co-Founder, Product & Operations",
    category: "Cultural Platform / Nightlife",
    badge: "17 events, 15,000+ attendees",
    tagline: "A cultural nightlife platform for Minneapolis, not a series of parties.",
    image: "/ventures/reunion.jpg",
    imageAlt: "REUNION cover art",
    cardPoints: [
      "One umbrella brand and operating system: ticketing, community, media, and premium production, with sub-brands aimed at distinct segments.",
      "17 events, 15,000+ attendees, and $120K profit over 16 months, with six vendor partnerships and three sponsorship deals.",
      "I own the CAC, retention, and pricing models, and I use them to decide what we don't do.",
    ],
    metrics: [
      { value: "17", label: "Events produced" },
      { value: "15,000+", label: "Attendees" },
      { value: "$120K", label: "Profit / 16 months" },
      { value: "~2,000", label: "Peak venue capacity" },
    ],
    vision:
      "Reunion is the umbrella brand and the underlying operating system for nightlife in Minneapolis: ticketing, community, media, and premium production, with sub-brands (Casa de Habibi, the Chapter series, REUNION Privee, Reunion Staging) as distinct product lines aimed at distinct segments. Anchor phrase: “Where have you been?”",
    sections: [
      {
        heading: "The insight",
        body:
          "The best product work starts from an insight, not a feature request. Ours came from customer exposure, not a deck: Minneapolis has locals, transplants, expats, and internationals who all want the same international house music experience, and nobody was serving them under one roof. The market wasn't underserved on supply of events. It was underserved on belonging.",
      },
      {
        heading: "Who it's for",
        body:
          "Two customer types, which is the part most people miss. Attendees are the users. Sponsors, venues, artists, and vendors are the customers who fund the business. You have to hold both, because value risk for the attendee and business viability risk for the sponsor are solved with different evidence.",
      },
      {
        heading: "Outcomes, not output",
        body:
          "I don't measure Reunion in events shipped. I measure it in profit per event, attendee repeat rate, sponsor renewal, and cost to acquire a ticket buyer. An event is output. A community that shows up to Chapter VI because they were at Chapter I is an outcome.",
      },
      {
        heading: "Current discovery agenda",
        bullets: [
          "Sponsorship productization: turning bespoke deals into a repeatable package.",
          "The anniversary event as a scale test, with international headline talent.",
          "Merchandise as a margin and identity play.",
          "Reunion Staging as an adjacent revenue line with its own configurator.",
          "A CRM and DM automation layer to stop losing inbound leads.",
        ],
      },
    ],
    risks: [
      {
        name: "Value",
        body:
          "Solved early and repeatedly. 17 events, 15,000+ attendees, 8,000 to 10,000+ combined social following. Repeat attendance across the Chapter series is the real retention signal.",
      },
      {
        name: "Viability",
        body:
          "$120K profit over 16 months, six vendor partnerships, three sponsorship deals. I built the CAC, retention, pricing sensitivity, and marketing ROI models and used them to reallocate spend, which is the actual job: deciding what not to do.",
      },
      {
        name: "Feasibility",
        body:
          "Roughly 40 contractors directed per event, 6+ artists including international talent, venues scaling from Eat Street Crossing to Royalston Square at ~2,000 capacity with 360 immersive projection. Each venue jump was a feasibility bet, prototyped at smaller scale first.",
      },
      {
        name: "Usability",
        body:
          "The weakest leg historically. Discovery, ticketing, and post-event delivery were fragmented across Instagram DMs, third-party ticketing, and shared drives.",
      },
    ],
    honestRisk: {
      heading: "The honest weakness",
      body:
        "Reunion is still closer to a services business with strong brand equity than a product with leverage. The strategic question I'm working is which layer becomes software.",
    },
    tags: [
      "Product Strategy",
      "Two-sided Market",
      "Unit Economics",
      "Brand",
      "Operations",
      "Go-to-Market",
    ],
  },
  {
    slug: "photo-finder",
    name: "Photo Finder",
    role: "Solo Product & Engineering",
    category: "Consumer AI / Retrieval",
    badge: "Live in production",
    tagline: "Every attendee finds their photos in under thirty seconds.",
    image: "/ventures/photo-finder.jpg",
    imageAlt: "Photo Finder cover art",
    cardPoints: [
      "Upload a selfie, get back every photo you appear in, ranked by similarity. No scrolling a Drive folder of 2,000 images.",
      "Next.js, Supabase with pgvector, and ArcFace embeddings. I found the problem in the field, chose the stack, and shipped it.",
      "~1,000 monthly visits and 600 monthly searches with zero paid acquisition.",
    ],
    metrics: [
      { value: "<30s", label: "To find your photos" },
      { value: "~1,000", label: "Monthly visits" },
      { value: "600", label: "Monthly searches" },
      { value: "$0", label: "Paid acquisition" },
    ],
    vision:
      "One selfie, thirty seconds, zero scrolling. The attendee gets their photos without asking anyone, and the host stops fielding DMs for a week after every event.",
    sections: [
      {
        heading: "The insight",
        body:
          "This is the cleanest example in my portfolio of customer-inspired and technology-powered. The insight came from operating Reunion: photo delivery was the single largest post-event friction point for both attendees and hosts. Attendees asked for photos in DMs for days. Photographers dumped a folder and disappeared. Nobody in the chain owned the last mile. The enabling technology, cheap face embeddings and vector search, made the problem newly solvable.",
      },
      {
        heading: "The solution",
        body:
          "A production face-matching retrieval app. Next.js front end, Supabase with pgvector for the store, ArcFace embeddings for face recognition. An attendee uploads a selfie, and the system returns every photo they appear in, ranked by similarity.",
      },
      {
        heading: "Why it matters as a portfolio piece",
        body:
          "It's the artifact where I own the whole stack: I found the problem in the field, chose the technology, shipped it, and it runs in production with real users. Missionaries versus mercenaries lands here. Nobody assigned this.",
      },
      {
        heading: "Current discovery agenda",
        bullets: [
          "Consent and privacy posture before any monetization, since biometric matching carries real regulatory exposure.",
          "A decision on whether to sell it to other operators or keep it as Reunion's moat.",
        ],
      },
    ],
    risks: [
      {
        name: "Value",
        body:
          "Validated by usage, not opinion. Roughly 1,000 monthly visits and 600 monthly searches with zero paid acquisition. People find it because they want their photos.",
      },
      {
        name: "Usability",
        body:
          "The entire product is one input and one result set. That constraint was deliberate. The user is on a phone, at brunch, the day after an event.",
      },
      {
        name: "Feasibility",
        body:
          "The hard call was the similarity threshold. Too tight and people miss their own photos. Too loose and they see strangers, which is worse than useless. That tradeoff is a product decision dressed as an engineering parameter, and I own it.",
      },
      {
        name: "Viability",
        body:
          "Currently the weakest leg, and I'd say so out loud. It's a retention and brand asset for Reunion, not yet a revenue line. The open question is whether it's a feature of Reunion or a standalone product for photographers and event operators.",
      },
    ],
    honestRisk: {
      heading: "The honest risk",
      body:
        "Biometric matching carries real regulatory exposure. Consent and privacy posture have to be settled before there is any question of monetization, and that gate comes before growth.",
    },
    tags: ["Next.js", "Supabase", "pgvector", "ArcFace", "Vector Search", "0 to 1"],
  },
  {
    slug: "custos",
    name: "Custos",
    role: "Co-Founder, Business & Strategy",
    category: "AI Governance / Fintech Infrastructure",
    badge: "Cornell Tech Startup Award Winner",
    tagline: "The governance and control plane for autonomous financial activity.",
    image: "/ventures/custos.jpg",
    imageAlt: "Custos cover art",
    cardPoints: [
      "When AI agents move company money, Custos decides whether the transaction is allowed to happen. Think 2FA for agents performing financial transactions.",
      "Cornell Tech Startup Award winner. Co-founded with a 5-person team, where I own business and strategy.",
      "Validated with an early integration partner, prototyped payment flows, and a commercial model I built myself.",
    ],
    metrics: [
      { value: "Winner", label: "Cornell Tech Startup Award" },
      { value: "5", label: "Person founding team" },
      { value: "Live", label: "Integration partner surface" },
    ],
    vision:
      "When AI agents move company money, Custos is the layer that decides whether the transaction is allowed to happen. Not the rails: the control plane above them, enforcing budgets, approvals, and audit trails before anything executes.",
    sections: [
      {
        heading: "The insight",
        body:
          "Agentic commerce is arriving faster than the controls for it. Every wave of new spending capability produces a governance bottleneck: cloud spend created cloud cost governance, corporate cards created spend management platforms. Agents will create the same gap, and enterprises will not let agents touch payroll, ACH, reimbursements, or invoice payments without budgets, approvals, and audit trails. We're building the control layer, not the rails.",
      },
      {
        heading: "Positioning, stated precisely",
        body:
          "Rails compete with each other. The governance layer works across all of them, which is where durable value sits. Agent payment rails are integration partners, not competitors. The fastest way to convey it in a room: think 2FA for agents performing financial transactions.",
      },
      {
        heading: "Who it's for",
        body:
          "Finance and operations leaders at companies deploying agents, with security and compliance as the blocking stakeholders. The user of the product is not the buyer, which shapes everything about how it has to be designed.",
      },
      {
        heading: "Outcomes, not output",
        body:
          "The metric that matters is not policies shipped. It's transaction volume flowing under Custos policy, and the number of agent actions an enterprise is willing to leave unsupervised because we're in the path.",
      },
      {
        heading: "Validation to date",
        body:
          "Cornell Tech Startup Award, which funded the company, plus an early integration partner that gives us a live product surface and a distribution channel.",
      },
    ],
    risks: [
      {
        name: "Value",
        body:
          "Validated through discovery conversations and an early integration partner, an agentic marketplace that gives us a live product surface and a distribution channel. That's the closest thing we have to a reference customer who will vouch publicly.",
      },
      {
        name: "Feasibility",
        body:
          "Prototyped payment flows in the PayPal sandbox and built a Gmail inbox integration for financial data extraction. My co-founders lead engineering and ML; I hold value and viability while they hold feasibility and usability.",
      },
      {
        name: "Viability",
        body:
          "The commercial model, tiering, and pricing are mine. We are currently raising, and the round structure and investor conversations are part of what I own.",
      },
      {
        name: "Usability",
        body:
          "The underexplored one. Policy configuration UX is where governance products die. If a finance lead can't express “agents can spend up to $500 on vendor invoices without approval, anything above routes to me” in under two minutes, the product doesn't get adopted regardless of how good the enforcement engine is.",
      },
    ],
    honestRisk: {
      heading: "The honest risk",
      body:
        "Timing. We're building infrastructure for a behavior that is real but early. If enterprise agent spending scales slower than expected, we're too early. If a rail provider bundles governance, we're squeezed. Both are answerable, and I'd rather name them than dodge them.",
    },
    tags: [
      "AI Governance",
      "Agentic Commerce",
      "Fintech Infrastructure",
      "Pricing",
      "Enterprise GTM",
      "Fundraising",
    ],
  },
];

export function getVenture(slug: string): Venture {
  const venture = ventures.find((item) => item.slug === slug);
  if (!venture) {
    throw new Error(`Unknown venture slug: ${slug}`);
  }
  return venture;
}
