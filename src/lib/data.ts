import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  LineChart,
  Workflow,
  Sparkles,
  Target,
  Gauge,
  Layers,
  Zap,
  GitBranch,
} from "lucide-react";

export const site = {
  name: "Sonu Kumar",
  role: "Data Analyst · AI Automation Engineer",
  longRole: "Data Analyst | AI Automation Engineer | Computer Science Engineer",
  url: "https://sonu-kumar.vercel.app",
  location: "India",
  email: "sonudeo346@gmail.com",
  phone: "+91 9430836870",
  github: "https://github.com/SonuDeo",
  githubUser: "SonuDeo",
  linkedin: "https://linkedin.com/in/sonu-45-kumar/",
  resume: "/Sonu_Kumar_Resume.pdf",
  // 👇 Your hero/profile photo. Put the file in /public and set its path here.
  //    e.g. "/sonu.jpg", "/sonu.png", or "/me.webp"
  photo: "/sonu.jpeg",
  headline: "Transforming Data Into Intelligent Business Decisions",
  subheadline:
    "Data Analyst, AI Automation Engineer, and Computer Science student building data-driven systems and intelligent workflows.",
  tagline:
    "I build intelligent systems that automate repetitive work and turn raw data into decisions that move the business.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Recruiters", href: "#recruiters" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 1000, suffix: "+", label: "Survey records analyzed" },
  { value: 25, suffix: "+", label: "Projects & repositories" },
  { value: 3, suffix: "", label: "Industry certifications" },
];

export const about = {
  paragraphs: [
    "My journey started with a simple question every analyst eventually asks: why does this number look the way it does? Chasing that answer through spreadsheets, SQL queries and Power BI dashboards turned into a genuine obsession with finding the story hidden inside data.",
    "As I went deeper, I realized the real bottleneck was rarely the analysis — it was the repetitive, manual work surrounding it. So I taught myself automation: wiring up n8n, Make.com, webhooks and APIs to let data flow, enrich and act on its own. Adding large language models on top turned static pipelines into systems that can read, reason and respond.",
    "Today I sit at the intersection of analytics, automation and AI — building enrichment pipelines, voice-AI outreach flows and decision-ready dashboards. I'm completing my B.Tech in Computer Science and looking for a role where I can turn messy, real-world data into measurable business outcomes.",
  ],
  facts: [
    { label: "Based in", value: "India" },
    { label: "Focus", value: "Analytics · Automation · AI" },
    { label: "Degree", value: "B.Tech CSE (2022–2026)" },
    { label: "Status", value: "Open to opportunities" },
  ],
};

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  blurb: string;
  skills: string[];
  accent: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analytics",
    icon: LineChart,
    blurb: "Turning raw, messy data into clean, decision-ready insight.",
    skills: ["Pandas", "NumPy", "Excel", "Data Cleaning", "EDA", "Statistics"],
    accent: "from-sky-400 to-cyan-400",
  },
  {
    title: "Business Intelligence",
    icon: BarChart3,
    blurb: "Dashboards and reports executives actually use.",
    skills: ["Power BI", "Tableau", "Power Query", "DAX", "KPI Design"],
    accent: "from-amber-400 to-orange-400",
  },
  {
    title: "AI & Automation",
    icon: BrainCircuit,
    blurb: "LLM-powered workflows that run without me.",
    skills: ["OpenAI", "n8n", "Make.com", "Vapi Voice AI", "Webhooks", "APIs"],
    accent: "from-violet-400 to-fuchsia-400",
  },
  {
    title: "Programming",
    icon: Code2,
    blurb: "The languages behind every pipeline and model.",
    skills: ["Python", "SQL", "Pandas", "Scripting"],
    accent: "from-emerald-400 to-teal-400",
  },
  {
    title: "Databases",
    icon: Database,
    blurb: "Designing and querying the source of truth.",
    skills: ["MySQL", "Airtable", "DBMS", "Schema Design"],
    accent: "from-rose-400 to-pink-400",
  },
  {
    title: "Software Engineering",
    icon: Workflow,
    blurb: "CS fundamentals that keep systems reliable.",
    skills: ["DSA", "OOP", "Operating Systems", "Git", "GitHub"],
    accent: "from-indigo-400 to-blue-400",
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  architecture: string[];
  results: string[];
  lessons: string;
  accent: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-enrichment-pipeline",
    title: "Autonomous Data Enrichment & AI Qualification Pipeline",
    tagline:
      "A self-running pipeline that researches companies, qualifies leads with AI, and runs voice outreach end to end.",
    year: "2026",
    stack: ["Make.com", "Airtable", "OpenAI", "Vapi Voice AI", "Webhooks", "JSON"],
    metrics: [
      { label: "Manual research removed", value: "~90%" },
      { label: "Pipeline stages automated", value: "6" },
      { label: "Human handoff", value: "0 steps" },
    ],
    challenge:
      "Lead research and qualification was slow, manual and inconsistent. Each prospect needed hours of company research, judgement calls on fit, and follow-up — none of which scaled.",
    solution:
      "I designed an autonomous workflow in Make.com orchestrated around an Airtable source of truth. An OpenAI-powered enrichment step researches each company and returns structured JSON, a qualification model scores fit, and Vapi Voice AI runs the outreach call. Transcripts are captured, run through sentiment analysis, and written straight back to the database.",
    architecture: [
      "Airtable as the single source of truth and trigger surface",
      "Make.com scenarios orchestrating each automation stage",
      "OpenAI enrichment returning strict structured JSON for reliability",
      "Vapi Voice AI for automated, natural outbound calls",
      "Webhooks capturing call transcripts back into the pipeline",
      "Sentiment analysis + automated database updates close the loop",
    ],
    results: [
      "Eliminated the bulk of manual company research",
      "Consistent, structured enrichment data instead of ad-hoc notes",
      "Outreach + transcript analysis run with zero human steps",
      "Sentiment-scored records ready for prioritisation",
    ],
    lessons:
      "Forcing the LLM to emit strict JSON was the difference between a demo and a dependable system. Treating Airtable as the contract between stages kept the whole pipeline observable and debuggable.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "power-bi-survey-dashboard",
    title: "Power BI Data Professional Survey Dashboard",
    tagline:
      "An interactive dashboard turning 1,000+ survey responses into salary, job-market and work-life insight.",
    year: "2026",
    stack: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    metrics: [
      { label: "Responses analyzed", value: "1,000+" },
      { label: "Interactive views", value: "Multiple" },
      { label: "Insight themes", value: "3 core" },
    ],
    challenge:
      "A raw survey of over a thousand data professionals held valuable signal about pay, roles and satisfaction — but it was unusable as a flat spreadsheet full of inconsistent, multi-value fields.",
    solution:
      "I cleaned and reshaped the data in Power Query, modeled it for analysis, and authored DAX measures to surface KPIs. The result is an interactive Power BI dashboard that lets a reader slice salary by role and country, explore the job market, and study work-life balance trends.",
    architecture: [
      "Power Query transformations to clean and normalize messy survey fields",
      "A dimensional model designed for fast, flexible slicing",
      "DAX measures driving salary, role and satisfaction KPIs",
      "Interactive report pages with cross-filtering visuals",
    ],
    results: [
      "Turned 1,000+ noisy responses into a clean analytical model",
      "Surfaced salary patterns across roles and geographies",
      "Delivered work-life balance and job-market insights at a glance",
      "Reusable measures and model for future survey waves",
    ],
    lessons:
      "Most of the value lived in the cleaning and modeling — the visuals were the easy part. Well-named DAX measures and a tidy model made the dashboard genuinely self-serve.",
    accent: "from-amber-500 to-orange-500",
  },
];

export interface RecruiterTrait {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: number;
  suffix: string;
  metricLabel: string;
}

export const recruiterTraits: RecruiterTrait[] = [
  {
    icon: Target,
    title: "Analytical Thinking",
    description:
      "I frame ambiguous problems as measurable questions and let the data settle the argument.",
    metric: 1000,
    suffix: "+",
    metricLabel: "records analyzed in a single project",
  },
  {
    icon: Zap,
    title: "Automation Expertise",
    description:
      "Multi-stage Make.com & n8n workflows that run reliably without a human in the loop.",
    metric: 90,
    suffix: "%",
    metricLabel: "manual research removed",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Production LLM and voice-AI features wired into real pipelines, not just notebooks.",
    metric: 6,
    suffix: "+",
    metricLabel: "AI-powered systems shipped",
  },
  {
    icon: Layers,
    title: "Business Problem Solving",
    description:
      "I optimise for the decision a stakeholder needs to make, not just a chart that looks busy.",
    metric: 2,
    suffix: "",
    metricLabel: "domains: analytics & automation",
  },
  {
    icon: Gauge,
    title: "Data Visualization",
    description:
      "Power BI and Tableau dashboards designed so the insight lands in seconds.",
    metric: 100,
    suffix: "%",
    metricLabel: "decision-focused dashboards",
  },
  {
    icon: GitBranch,
    title: "Engineering Foundation",
    description:
      "CS fundamentals — DSA, OOP, DBMS, OS — keep what I build correct and maintainable.",
    metric: 25,
    suffix: "+",
    metricLabel: "public repositories",
  },
];

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
  points: string[];
  type: "experience" | "education";
}

export const timeline: TimelineItem[] = [
  {
    period: "2026",
    title: "Data Analytics Virtual Experience Program",
    org: "Deloitte (Forage)",
    type: "experience",
    description:
      "Completed Deloitte's job simulation focused on real-world data analysis and forensic technology tasks.",
    points: [
      "Examined datasets to identify anomalies, trends and business patterns",
      "Built visual reports and dashboards for stakeholder communication",
      "Demonstrated proficiency in data interpretation and business reporting",
    ],
  },
  {
    period: "2022 – 2026",
    title: "B.Tech, Computer Science & Engineering",
    org: "Indo Global College, Abhipur · I.K. Gujral Punjab Technical University",
    type: "education",
    description:
      "Core computer science foundation alongside a self-directed focus on data and automation.",
    points: [
      "Strong grounding in DSA, OOP, DBMS and Operating Systems",
      "Self-taught Power BI, SQL, Python and AI automation tooling",
      "Built 25+ projects spanning analytics, ML and workflow automation",
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  blurb: string;
  accent: string;
}

export const certifications: Certification[] = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    year: "2026",
    blurb:
      "Hands-on simulation in data analysis and forensic technology, from raw data to stakeholder-ready reporting.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "SOAR — AI to be Aware",
    issuer: "Microsoft (Skill India / NCVET)",
    year: "2026",
    blurb:
      "Microsoft's AI awareness and responsible-AI program covering applied AI concepts and ethics.",
    accent: "from-sky-400 to-indigo-500",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    year: "2026",
    blurb:
      "Foundations of building with Claude — prompting, capabilities and integrating LLMs into real workflows.",
    accent: "from-violet-400 to-fuchsia-500",
  },
];

/** Repos to feature first if present, in this order. */
export const featuredRepoOrder = [
  "Uber-Data-Analysis",
  "Sales-Data-Analysis",
  "Hotel-Booking-Analysis",
  "E-Commerce-Data-Analysis",
  "House-Price-Prediction",
  "Multi-Agentic-Blog-Generation",
  "Conversational-Chatbot-using-Langchain",
  "Article-Web-Scraping",
];
