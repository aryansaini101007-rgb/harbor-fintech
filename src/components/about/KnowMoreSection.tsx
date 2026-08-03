// src/components/about/KnowMoreSection.tsx
import { memo, useCallback, useEffect, useRef, useState, forwardRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  TrendingUp,
  Target,
  Layers,
  Award,
  CheckCircle2,
  Quote,
  Lightbulb,
  Compass,
  Fingerprint,
  Users2,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared tokens (mirrors AboutPage's design system)                  */
/* ------------------------------------------------------------------ */

const ease = [0.22, 1, 0.36, 1] as const;

const cardBase =
  "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(11,16,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-[0_18px_40px_-24px_rgba(37,99,235,0.45)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/30";

const CONTACT_HREF = "/contact";
const AUTOPLAY_MS = 5000;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface StatItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

interface TimelineStep {
  label: string;
  description: string;
}

interface ExpandedSection {
  heading: string;
  body?: string;
  bullets?: string[];
}

interface ExpandedContent {
  intro: string;
  sections: ExpandedSection[];
  timeline?: TimelineStep[];
  keyTakeaways: string[];
  quote?: string;
  callout: { title: string; body: string };
  closing: string;
  ctaLabel: string;
}

interface CardData {
  id: string;
  icon: LucideIcon;
  category: string;
  title: string;
  preview: string;
  stats?: StatItem[];
  expanded: ExpandedContent;
}

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const CARDS: CardData[] = [
  {
    id: "meet",
    icon: Sparkles,
    category: "Meet Harbor Finance",
    title: "Meet Harbor Finance",
    preview:
      "A dedicated education loan partner for students headed abroad — built to turn a maze of banks, paperwork and interest rates into one clear, guided path.",
    expanded: {
      intro:
        "Every year, thousands of students receive their offer letter and, within days, discover that the celebration was the easy part. What follows is a scramble: comparing interest rates across banks that all sound the same, calling relatives who might cosign, and filling out forms that ask questions no eighteen-year-old has ever had to answer about collateral valuation or repayment moratoriums. Most families quickly discover just how fragmented and unforgiving the education loan market actually is. Harbor Finance exists to close that gap. We are not a lender ourselves — we sit on the student's side of the table, close enough to the system to know how it really works, and use that knowledge to find the lender who genuinely fits, rather than the one that happens to answer the phone first.",
      sections: [
        {
          heading: "Why this matters",
          body: "A loan decision made in a hurry, on incomplete information, tends to cost more later — in a higher rate, a moratorium that doesn't match the course length, or a rejection that could have been avoided with a different lender altogether. The stakes are high enough that the process deserves more care than a single afternoon of comparing headline rates.",
        },
        {
          heading: "The Harbor Finance approach",
          body: "For a student, this means having someone in their corner who isn't selling a single product. We look across a curated network of banks and non-banking lenders and match each applicant with financing that suits their course, destination and financial background, rather than steering them toward whichever product happens to be easiest to close that month.",
          bullets: [
            "Understand the academic and financial profile in detail",
            "Shortlist lenders genuinely likely to approve the application",
            "Prepare and review documentation before it reaches the bank",
            "Stay involved from the first form through to final disbursal",
          ],
        },
        {
          heading: "A student's perspective",
          body: "Ask any student partway through the process and they'll usually describe the same feeling — relief at finally understanding why a lender said no the first time, and what to fix before trying again. One applicant, weeks from an intake deadline with two rejections already in hand, described the shift plainly: the process stopped feeling like guesswork the moment someone could explain, in advance, which lenders were realistically going to approve the file and why. That's the difference between reacting to the market and actually navigating it.",
        },
        {
          heading: "Practical benefits",
          body: "Students who come to us with an offer letter and little else often leave with a shortlist of two or three lenders who are realistically going to say yes, instead of a string of rejections and a missed intake deadline. That difference alone can be the gap between joining on time and deferring a semester.",
        },
      ],
      keyTakeaways: [
        "One partner instead of a dozen separate bank visits",
        "Recommendations based on your file, not a fixed product list",
        "Support that continues well after the loan is sanctioned",
      ],
      quote:
        "A loan approval shouldn't feel like luck. It should feel like the natural result of being matched correctly from day one.",
      callout: {
        title: "Our promise",
        body: "No generic advice and no one-size-fits-all recommendations — every student gets a financing plan built around their own file, not a template.",
      },
      closing:
        "Meeting Harbor Finance is usually the first calm moment in an otherwise stressful process — not because the paperwork disappears, but because for the first time, someone is explaining what's actually happening and why. That clarity, more than anything else, is what we're really offering.",
      ctaLabel: "Talk to a loan advisor",
    },
  },
  {
    id: "who-we-are",
    icon: Users,
    category: "Who We Are",
    title: "Your Trusted Study-Abroad Financing Partner",
    preview:
      "Independent, profile-first and lender-agnostic — we exist to represent students, not banks.",
    expanded: {
      intro:
        "Harbor Finance isn't a bank, and that's a deliberate choice, not an accident of how we started. Being independent means our only responsibility is to find the lender who will approve your file on terms you can actually manage — not to sell you a product from a fixed shelf because a branch has a target to hit before quarter-end. It's a subtle difference on paper and a considerable one in practice, because it changes whose interests sit at the center of every recommendation we make.",
      sections: [
        {
          heading: "Why this matters",
          body: "A recommendation is only useful if it can be explained. When we suggest a lender, we can tell you why that lender specifically — their collateral policy, their turnaround time, how they treat your course and destination — rather than pointing to whichever institution happens to be our newest partnership. If we can't explain the reasoning in plain terms, we don't make the recommendation.",
        },
        {
          heading: "The Harbor Finance approach",
          body: "Our advisory team has spent years inside education loan processing — reading rejection letters line by line, decoding fine print most applicants never see, and learning exactly what separates an approved file from a delayed one. That kind of judgment doesn't come from a manual; it comes from sitting through thousands of real conversations between students and underwriters.",
          bullets: [
            "5+ years of dedicated education loan experience",
            "Advisors trained across secured and unsecured loan structures",
            "A process shaped by thousands of real applications, not theory",
          ],
        },
        {
          heading: "A student's perspective",
          body: "Families often arrive already holding two or three offers and unsure which to trust. What tends to surprise them isn't the recommendation itself, but the reasoning behind it — a plain explanation of why one lender's moratorium terms suit their situation better than another's marginally lower headline rate. That kind of clarity usually ends up mattering more than any single number on a term sheet.",
        },
        {
          heading: "Practical benefits",
          body: "Because we compare interest rates, collateral requirements, moratorium periods and processing timelines across the market before recommending anything, students avoid the common trap of accepting the first offer they receive simply because it's the only one they understand.",
        },
      ],
      keyTakeaways: [
        "Independent advice with no single-lender bias",
        "A team that has processed thousands of real files",
        "Recommendations you can question, and we can defend",
      ],
      quote: "We measure success by approvals, not applications submitted.",
      callout: {
        title: "Why independence matters",
        body: "A bank will always recommend its own product. We recommend whichever product is right for you, even when that means a lender we don't have the deepest relationship with.",
      },
      closing:
        "Trust isn't something we ask for upfront. It's something we try to earn with every recommendation we make, and something we'd rather lose than stop being straightforward about the tradeoffs involved.",
      ctaLabel: "Get to know our team",
    },
  },
  {
    id: "numbers",
    icon: TrendingUp,
    category: "Harbor Finance in Numbers",
    title: "Harbor Finance in Numbers",
    preview:
      "20+ lending partners, thousands of students financed, and billions of rupees moved from application to disbursal.",
    stats: [
      { label: "Lending Partners", value: 20, suffix: "+" },
      { label: "Students Financed", value: 4000, suffix: "+" },
      { label: "Loans Disbursed", value: 1600, prefix: "₹", suffix: "Bn+" },
    ],
    expanded: {
      intro:
        "Numbers alone don't tell a story, but they do reveal a pattern worth paying attention to. Behind every figure on this card is a student who once stared at a fee letter wondering how it would ever get paid, and a lender who eventually said yes. We track these figures not to impress anyone, but because they're the clearest evidence we have that the approach holds up consistently, not just occasionally.",
      sections: [
        {
          heading: "Why this matters",
          body: "A single success story can be a coincidence. Thousands of them, across a wide enough network of lenders, start to look like a method. That's the distinction we care about — whether what works for one student's profile will still work for the next one, with a completely different course, destination and financial background.",
        },
        {
          heading: "The Harbor Finance approach",
          body: "A network of 20+ banks and NBFCs gives us the range to match almost any profile, from a strong collateral-backed application to a first-generation student applying without property to pledge. Scale, in our case, isn't about size for its own sake — it's about having enough options that a 'no' from one lender is rarely the end of the road.",
          bullets: [
            "20+ partner banks and NBFCs across secured and unsecured loans",
            "4,000+ students guided through the process to date",
            "₹1,600 Billion in education loans facilitated and counting",
          ],
        },
        {
          heading: "A student's perspective",
          body: "Every student represented in these figures went through a version of the same anxious wait — refreshing an inbox, wondering if a sanction letter would arrive before a deadline. What the totals don't show is the quieter work in between: a re-worked co-applicant structure here, a second opinion on a collateral document there. Those unglamorous details are usually what decide whether a number on this card becomes a real disbursal in someone's account.",
        },
        {
          heading: "Practical benefits",
          body: "What a large, diverse lender network means in practice is simple — a rejected first application rarely has to be the end of a student's plans. There is almost always another door to try, and we already know which one.",
        },
      ],
      keyTakeaways: [
        "A wide enough network that one rejection rarely ends the journey",
        "Real disbursal experience across 20+ lenders",
        "Growth measured in approvals, not just applications filed",
      ],
      quote:
        "Every number on this page used to be a family wondering if the loan would come through in time.",
      callout: {
        title: "Growing, deliberately",
        body: "We'd rather add one well-matched approval to this count than chase a bigger number the wrong way.",
      },
      closing:
        "The figures will keep changing. The approach behind them — profile first, always — will not.",
      ctaLabel: "See if you qualify",
    },
  },
  {
    id: "problem",
    icon: Target,
    category: "The Problem We Solve",
    title: "The Problem We Solve",
    preview:
      "Most students chase the lowest interest rate first, when eligibility, collateral fit and approval speed usually matter more.",
    expanded: {
      intro:
        "Ask any group of students what they're looking for in an education loan, and almost all of them will say the lowest interest rate. It's the natural instinct — compare the numbers, pick the smallest one — and it's often the wrong place to start. The rate only matters once a lender is actually willing to approve the file, and that's the part most comparisons skip entirely.",
      sections: [
        {
          heading: "Why this matters",
          body: "Two lenders can advertise nearly identical rates and still evaluate the same student completely differently. One might require collateral worth the full loan amount; another might decline the course outright regardless of rate; a third might approve the file in ten days while another takes ten weeks and still asks for more documents. None of that shows up on a rate comparison chart.",
        },
        {
          heading: "The Harbor Finance approach",
          body: "Before we talk about pricing, we look at what actually determines approval:",
          bullets: [
            "The university and course's risk category with that specific lender",
            "Whether collateral is required, and whether yours actually qualifies",
            "Co-applicant income, credit history and existing liabilities",
            "How the lender's internal policy treats your destination country",
          ],
        },
        {
          heading: "A student's perspective",
          body: "It's a common story: a student compares three offers, picks the one with the lowest advertised rate, and only discovers during underwriting that the lender doesn't recognise their chosen university at all. Two or three weeks are lost before the search starts over from scratch — time that, close to an intake deadline, is often the one thing nobody can get back.",
        },
        {
          heading: "Practical benefits",
          body: "By starting with eligibility and approval likelihood instead of the interest rate, students stop wasting weeks comparing offers they were never going to qualify for, and start applying to lenders who are realistically going to say yes — often at a rate that's competitive anyway once collateral and structure are right.",
        },
      ],
      keyTakeaways: [
        "Rate is one factor among several, not the whole decision",
        "Eligibility mismatches are the real cause of most delays",
        "The right structure can matter more than the headline number",
      ],
      quote: "The cheapest loan on paper is worthless if it never gets approved.",
      callout: {
        title: "Our approach",
        body: "We start with eligibility and approval likelihood, then optimise for cost, so students aren't left comparing offers they were never going to qualify for.",
      },
      closing:
        "We'd rather spend a week getting the structure right than a month chasing a rate that was never realistic.",
      ctaLabel: "Check your eligibility",
    },
  },
  {
    id: "offering",
    icon: Layers,
    category: "Our Core Offering",
    title: "Our Core Offering",
    preview:
      "From profile evaluation to final disbursal, we manage the entire education loan journey as one continuous process.",
    expanded: {
      intro:
        "Applying for an education loan usually means juggling several separate relationships at once — banks, universities, co-applicants and paperwork — each moving on its own timeline, often without any of them talking to each other. We collapse that into a single, managed process with one point of contact, so nothing falls through the gap between two institutions that were never coordinating in the first place.",
      sections: [
        {
          heading: "Why this matters",
          body: "Most loan delays aren't caused by one dramatic mistake. They're caused by small handoffs going wrong — a document sitting in an inbox for a week, a follow-up call that never happened, a form that needed a signature nobody was tracking. A fragmented process makes those gaps almost inevitable.",
        },
        {
          heading: "The Harbor Finance approach",
          body: "Rather than offering isolated help — say, just document review, or just an introduction to a lender — we stay involved through every stage of the journey, so responsibility for the outcome never quietly shifts back onto the student halfway through.",
        },
      ],
      timeline: [
        {
          label: "Profile Evaluation",
          description:
            "We map your academic background, course, destination and financial position to understand what you actually qualify for.",
        },
        {
          label: "Lender Matching",
          description:
            "Your profile is matched against our network to shortlist lenders with a genuine chance of approval.",
        },
        {
          label: "Documentation",
          description:
            "We prepare and quality-check every document before it's submitted, catching issues before the bank does.",
        },
        {
          label: "Application & Coordination",
          description:
            "We manage communication with the lender directly, keeping the process moving on your behalf.",
        },
        {
          label: "Approval & Disbursal",
          description:
            "Once sanctioned, we track disbursal against your university's fee schedule and deadlines.",
        },
      ],
      keyTakeaways: [
        "One process, one point of contact, five clear stages",
        "Issues get caught early instead of at the final stage",
        "Involvement continues through disbursal, not just approval",
      ],
      quote:
        "One process, one point of contact, from the first form to the final disbursal.",
      callout: {
        title: "Why this matters",
        body: "Loan delays are rarely caused by one big mistake — they're caused by small gaps between steps. Managing the whole journey ourselves is how we close them.",
      },
      closing:
        "The goal isn't just an approved loan. It's a disbursal that lands in time for your fee deadline, without a scramble in the final week.",
      ctaLabel: "Start your application",
    },
  },
  {
    id: "why-choose",
    icon: Award,
    category: "Why Choose Harbor Finance",
    title: "Why Choose Harbor Finance",
    preview:
      "A profile-first approach, experienced advisors, and support that continues well after the loan is sanctioned.",
    expanded: {
      intro:
        "There are plenty of ways to apply for an education loan: a bank branch, a university's preferred lender list, a comparison website. Students choose Harbor Finance for what happens in between those options — the actual matching, documentation and follow-through that determines whether an application turns into an approval, and an approval turns into money that arrives on time.",
      sections: [
        {
          heading: "Why this matters",
          body: "A recommendation without reasoning is just a guess with better packaging. It means a recommendation from us always comes with the thinking behind it — why this lender, why this structure, and what to expect at each stage — so students are never simply told to trust the process.",
        },
        {
          heading: "The Harbor Finance approach",
          bullets: [
            "Profile-first recommendations instead of one-size-fits-all lender lists",
            "Advisors who understand how each lender actually evaluates a file",
            "Direct coordination with the lender, not just an introduction",
            "Support that continues through disbursal, not just sanction",
          ],
        },
        {
          heading: "A student's perspective",
          body: "The students who stay in touch after disbursal rarely mention the interest rate first. They mention the recommendation that turned out to be right, or the time an advisor said a particular lender wasn't a good fit for them, about an option they'd already started warming up to. Being told the truth, even the inconvenient part, tends to be remembered longer than the rate ever is.",
        },
        {
          heading: "Practical benefits",
          body: "Students end up spending less time researching lenders on their own and more time preparing for the parts of studying abroad that actually need their attention — visas, accommodation, and the semester ahead.",
        },
      ],
      keyTakeaways: [
        "Reasoned recommendations, not blanket suggestions",
        "Support through disbursal, not just approval",
        "Fewer bank visits, more time for everything else",
      ],
      quote:
        "We're judged by whether the loan actually arrives, not by how confident the pitch sounded.",
      callout: {
        title: "Our commitment",
        body: "If a lender isn't right for you, we'll say so, even if it means a longer search. A wrong-fit approval helps no one.",
      },
      closing:
        "Choosing Harbor Finance means choosing to be told the truth about your options, even the inconvenient parts — because that's what actually gets a loan across the line.",
      ctaLabel: "Speak to Harbor Finance",
    },
  },
  {
    id: "how-we-work",
    icon: Compass,
    category: "How We Work",
    title: "The Right Loan Starts With The Right Strategy",
    preview:
      "Every student has a different story — different university, course, country and financial background. That's why our process starts with understanding you, not with a form.",
    expanded: {
      intro:
        "No two education loan applications look the same, even when two students are headed to the same university for the same course. Family income differs, credit histories differ, some have property to offer as collateral and others don't — and each of those variables changes which lenders are even worth approaching. A one-size-fits-all process ignores all of that in favour of speed, which usually just means more rejections, not fewer. Ours doesn't.",
      sections: [
        {
          heading: "Why this matters",
          body: "Treating every applicant the same way might move a queue faster, but it also means well-qualified files get processed identically to poor-fit ones — which is exactly how strong applicants end up with an avoidable rejection on record before anyone stops to look closely at their profile.",
        },
        {
          heading: "The Harbor Finance approach",
          body: "Each stage below builds on the one before it, which is why skipping ahead — applying to a bank before your profile has actually been evaluated — tends to cost more time than it saves.",
        },
        {
          heading: "A student's perspective",
          body: "Students frequently arrive already holding a shortlist of banks found through a search engine or a relative's recommendation, and it's rarely the right shortlist for their specific profile. The first conversation is often less about collecting documents and more about resetting expectations — explaining, for instance, why a lender with a lower advertised rate might reject their course outright, while a slightly costlier option would approve it within two weeks.",
        },
        {
          heading: "Practical benefits",
          body: "Working through these five stages in order means fewer wasted applications, fewer documents submitted twice, and a much clearer sense of how long the process will realistically take — which matters enormously when a university's deadline isn't moving to suit anyone.",
        },
      ],
      timeline: [
        {
          label: "Talk to Our Experts",
          description:
            "Tell us about your university, course, destination, financial requirements and study-abroad plans.",
        },
        {
          label: "Profile Analysis",
          description:
            "Our team evaluates your complete profile and identifies the factors that may affect your loan eligibility.",
        },
        {
          label: "Find the Right Lender",
          description:
            "We explore suitable banks and NBFCs and help identify lending options aligned with your profile.",
        },
        {
          label: "Application & Processing",
          description:
            "We assist with documentation, application processing and lender coordination.",
        },
        {
          label: "Approval & Disbursal",
          description:
            "Our team supports you through the approval process and final disbursal of your education loan.",
        },
      ],
      keyTakeaways: [
        "A five-stage process, followed in order, for every applicant",
        "Profile evaluation comes before any lender is approached",
        "Fewer wasted applications and a clearer timeline throughout",
      ],
      quote: "One journey. One dedicated team. End-to-end support.",
      callout: {
        title: "Why we don't skip steps",
        body: "Every stage exists because skipping it has cost a real student real time in the past. The order is the strategy.",
      },
      closing:
        "The right loan doesn't start with a lender. It starts with genuinely understanding the student in front of us, and everything else follows from there.",
      ctaLabel: "Start with a profile evaluation",
    },
  },
  {
    id: "what-makes-us-different",
    icon: Fingerprint,
    category: "What Makes Us Different",
    title: "We Don't Just Help You Apply. We Help You Apply Right.",
    preview:
      "Many students approach banks one after another without knowing whether their profile actually matches the lender's requirements. We reverse the order.",
    expanded: {
      intro:
        "Many students begin their education loan journey by approaching banks one after another, filling out the same forms repeatedly, without knowing in advance whether their profile even matches what that particular lender is looking for. It's an understandable instinct — more applications feel like more chances — but it usually produces more rejections than approvals, and each rejection can quietly work against the student with the next lender too.",
      sections: [
        {
          heading: "Why this matters",
          body: "A rejected application isn't neutral. It can raise questions with the next lender, cost days or weeks waiting for a response, and chip away at a student's confidence right when they need it least. Applying broadly without a plan trades the appearance of progress for the reality of delay.",
        },
        {
          heading: "The Harbor Finance approach",
          body: "We reverse the usual order. Instead of starting with a lender and hoping the student fits, we start with the student and work outward:",
          bullets: [
            "Understand the student",
            "Understand the requirement",
            "Analyse the complete profile",
            "Identify suitable lending options",
          ],
        },
        {
          heading: "A student's perspective",
          body: "It's common for a student to arrive having already been declined by one or two banks, unsure why, since the reasons given are rarely more specific than 'does not meet eligibility criteria.' Once the profile is actually mapped, the real obstacle is usually specific and fixable — a co-applicant's income ratio, a course not on a particular lender's approved list, a collateral valuation that needs updating. Naming it precisely is often the fastest way to clear it.",
        },
        {
          heading: "Practical benefits",
          body: "Our goal is not simply to submit an application — it's to help every student approach the right lender with the right preparation and the right support, the first time, rather than the third.",
        },
      ],
      keyTakeaways: [
        "Profile understanding comes before lender selection, not after",
        "Fewer rejections, because fewer applications are mismatched from the start",
        "Every recommendation is built outward from the student, not a product list",
      ],
      quote:
        "Our goal is not simply to submit an application — it is to help every student approach the right lender with the right preparation and the right support.",
      callout: {
        title: "Applying right vs. applying often",
        body: "Two well-matched applications will outperform ten scattered ones almost every time. We'd rather help you make two count.",
      },
      closing:
        "The difference between applying and applying right usually isn't visible until the first approval letter arrives — and by then, it's obvious which approach actually works.",
      ctaLabel: "Get your profile evaluated",
    },
  },
  {
    id: "our-team",
    icon: Users2,
    category: "Our Team",
    title: "Experience Behind Every Application",
    preview:
      "Based in Noida, the Harbor Finance team brings 5+ years of education loan expertise across student profiles, lender requirements, documentation and disbursal.",
    expanded: {
      intro:
        "Behind every education loan journey is a team of people actually working the phones, chasing documents and following up with underwriters — not a chatbot or a static FAQ page. Based in Noida, the Harbor Finance team brings more than five years of dedicated education loan expertise across student profiles, lender requirements, documentation, processing and disbursal, and that experience shapes how every single file is handled.",
      sections: [
        {
          heading: "Why this matters",
          body: "Education loan policies, lender criteria and processing timelines shift more often than most people expect, and a team that hasn't kept pace ends up giving advice that was accurate a year ago but isn't anymore. Staying current isn't optional in this line of work; it's the entire value we offer.",
        },
        {
          heading: "The Harbor Finance approach",
          bullets: [
            "Based in Noida — a dedicated in-house team working directly with students, families, banks and NBFCs",
            "5+ years of expertise across education loan policies, lender criteria and processing timelines",
            "Every case handled individually rather than run through a standard, one-size-fits-all process",
          ],
        },
        {
          heading: "A student's perspective",
          body: "Families often say the same thing partway through the process — that it helps to have one advisor who already knows their file, rather than re-explaining the same details to a different bank representative each time they call. That continuity, more than any single piece of expertise, is usually what people remember afterward.",
        },
        {
          heading: "Practical benefits",
          body: "An in-house, experienced team means faster answers when something changes unexpectedly, closer coordination with lenders when a file needs a second look, and someone who already understands the context the next time a question comes up.",
        },
      ],
      keyTakeaways: [
        "5+ years of dedicated education loan experience, based in Noida",
        "Every case is treated individually, not as a standard process",
        "Direct, ongoing coordination with banks and NBFCs on your behalf",
      ],
      quote:
        "For us, every loan application represents a student's global ambition, and we treat it with the attention it deserves.",
      callout: {
        title: "Why continuity matters",
        body: "The same advisor who understood your file at the start is still there at disbursal — not a different voice at every stage.",
      },
      closing:
        "Every loan application represents a student's global ambition. We built this team to treat it with the attention that deserves, from the first phone call to the day the funds arrive.",
      ctaLabel: "Meet the team",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Motion variants                                                    */
/* ------------------------------------------------------------------ */

const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 36 : -36, scale: 0.985 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -36 : 36, scale: 0.985 }),
};

const expandedVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1 },
};

const watermarkVariants: Variants = {
  enter: { opacity: 0, scale: 0.94, rotate: -4 },
  center: { opacity: 1, scale: 1, rotate: 0 },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function KnowMoreSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const reduceMotion = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  const isPaused = hovered || expanded;
  const card = CARDS[activeIndex];

  const scrollToCarousel = useCallback(() => {
  requestAnimationFrame(() => {
    const y =
      (carouselRef.current?.getBoundingClientRect().top ?? 0) +
      window.scrollY -
      120; // navbar height

    window.scrollTo({
      top: y,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  });
}, [reduceMotion]);

  const scrollToArticle = useCallback(() => {
  const y =
    (articleRef.current?.getBoundingClientRect().top ?? 0) +
    window.scrollY -
    120; // navbar height

  window.scrollTo({
    top: y,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}, [reduceMotion]);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      const nextIndex = ((index % CARDS.length) + CARDS.length) % CARDS.length;
      setDirection(dir ?? (nextIndex > activeIndex ? 1 : -1));
      setActiveIndex(nextIndex);
      setExpanded((wasExpanded) => {
        if (wasExpanded) scrollToCarousel();
        return false;
      });
    },
    [activeIndex, scrollToCarousel]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1, 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1, -1), [activeIndex, goTo]);

  const handleAutoAdvance = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  }, []);

  const toggleExpanded = useCallback(() => setExpanded((v) => !v), []);
  const closeExpanded = useCallback(() => setExpanded(false), []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleExpanded();
      }
    },
    [goNext, goPrev, toggleExpanded]
  );

  const handlePanEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const threshold = 48;
      if (info.offset.x <= -threshold) goNext();
      else if (info.offset.x >= threshold) goPrev();
    },
    [goNext, goPrev]
  );

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white px-5 pt-10 pb-20 sm:px-8 md:py-28 dark:from-[#05070f] dark:via-[#070b16] dark:to-[#05070f]">
      {/* ---------------------------------------------------------- */}
      {/* Background: soft radial glow + subtle dot grid              */}
      {/* ---------------------------------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[130px] dark:bg-blue-500/10" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-300/20 blur-[110px] dark:bg-indigo-500/10" />
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 55% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
      </div>
      <div className="fixed left-6 top-32 lg:top-36 z-50">
  <Link
    to="/"
    className="group inline-flex items-center gap-2 rounded-full bg-[#18224a] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(11,16,35,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#4338CA] hover:shadow-[0_18px_45px_rgba(37,99,235,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
  >
    <ArrowLeft className="h-4 w-4 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
    Back to Home
  </Link>
</div>
      <div className="mx-auto w-full max-w-6xl">
        {/* -------------------------------------------------------- */}
        {/* Section header                                           */}
        {/* -------------------------------------------------------- */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            Know More About Harbor Finance
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-[#0B1023] sm:text-4xl md:text-[2.75rem] dark:text-white">
            Everything you should know before choosing Harbor Finance.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            A closer look at who we are, how we work and why students trust us
            with one of the biggest financial decisions of their lives.
          </p>
        </div>

        {/* Mobile nav (moves below title on small screens) */}
        <div className="mt-6 flex items-center gap-2 sm:hidden">
          <NavButton direction="prev" onClick={goPrev} />
          <NavButton direction="next" onClick={goNext} />
          <span className="ml-1 text-xs font-medium text-slate-400">
            {activeIndex + 1} / {CARDS.length}
          </span>
        </div>

        {/* -------------------------------------------------------- */}
        {/* Main slider card                                         */}
        {/* -------------------------------------------------------- */}
        <div className="relative mt-10 sm:mt-14">
          <motion.div
            ref={carouselRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Know more about Harbor Finance"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            onPanEnd={handlePanEnd}
            aria-live="polite"
            className="relative mx-auto max-w-6xl scroll-mt-24 touch-pan-y overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-8 shadow-[0_1px_1px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(15,23,42,0.12),0_36px_90px_-28px_rgba(37,99,235,0.3)] ring-1 ring-black/[0.03] backdrop-blur-2xl transition-shadow duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 sm:p-12 dark:border-white/10 dark:bg-white/[0.03] dark:ring-white/5"
          >
            {/* glass edge highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"
            />
            {/* diagonal glass reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-8 -top-8 h-32 rotate-[-3deg] bg-gradient-to-b from-white/40 to-transparent opacity-70 dark:from-white/[0.06]"
            />
            {/* inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/10 to-transparent"
            />

            {/* Per-card watermark motif */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`watermark-${card.id}`}
                variants={watermarkVariants}
                initial="enter"
                animate="center"
                transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease }}
                aria-hidden="true"
                className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 opacity-[0.05] sm:block dark:opacity-[0.06]"
              >
                <card.icon className="h-40 w-40 text-blue-700 dark:text-blue-300" strokeWidth={1} />
              </motion.div>
            </AnimatePresence>

            {/* Desktop nav */}
            <div className="absolute right-8 top-8 z-10 hidden items-center gap-2 sm:flex">
              <NavButton direction="prev" onClick={goPrev} />
              <NavButton direction="next" onClick={goNext} />
            </div>

            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={card.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.55, ease }
                }
                className="relative pr-0 sm:pr-24"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/70 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                  <card.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {card.category}
                </div>

                <h3 className="mt-5 max-w-xl font-display text-[1.9rem] font-bold leading-[1.15] tracking-tight text-[#0B1023] sm:text-4xl dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-slate-600 sm:text-base dark:text-slate-300">
                  {card.preview}
                </p>

                {/* "Problem We Solve" — lightweight before/after framing */}
                {card.id === "problem" && (
                  <div className="mt-6 flex max-w-xl flex-wrap items-center gap-3 text-xs font-medium">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-slate-500 line-through decoration-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
                      Rate-first comparison
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600" aria-hidden="true" />
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/70 px-3.5 py-1.5 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                      Eligibility-first matching
                    </span>
                  </div>
                )}

                {card.stats && (
                  <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
                    {card.stats.map((s) => (
                      <div
                        key={s.label}
                        className={`${cardBase} relative overflow-hidden px-3 py-4 text-center sm:px-4`}
                      >
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 -top-10 h-16 bg-blue-500/10 blur-2xl"
                        />
                        <div className="relative text-xl font-bold tracking-tight text-blue-700 sm:text-[1.65rem] dark:text-blue-300">
                          <StatCountUp
                            value={s.value}
                            prefix={s.prefix}
                            suffix={s.suffix}
                            active={activeIndex === 2}
                            reduceMotion={!!reduceMotion}
                          />
                        </div>
                        <div className="relative mt-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-10 flex justify-end">
                  <motion.button
                    onClick={toggleExpanded}
                    aria-expanded={expanded}
                    whileHover={reduceMotion ? undefined : { x: 2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    transition={{ duration: 0.2, ease }}
                    className="group inline-flex items-center gap-2 rounded-full py-2 pl-3 pr-1 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    {expanded ? "Read Less" : "Read More"}
                    <motion.span
                      animate={{ rotate: expanded ? -90 : 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.3, ease }}
                      className="flex"
                    >
                      {expanded ? (
                        <ArrowUp className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      )}
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* -------------------------------------------------------- */}
          {/* Animated progress indicator                              */}
          {/* -------------------------------------------------------- */}
          <ProgressBar
            count={CARDS.length}
            titles={CARDS.map((c) => c.title)}
            activeIndex={activeIndex}
            isPaused={isPaused}
            reduceMotion={!!reduceMotion}
            onComplete={handleAutoAdvance}
            onJump={goTo}
          />
        </div>

        {/* -------------------------------------------------------- */}
        {/* Expanded article — appears BELOW the card, same page      */}
        {/* -------------------------------------------------------- */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key={`expanded-${card.id}`}
              variants={expandedVariants}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.5, ease }
              }
              onAnimationComplete={(definition) => {
                if (definition === "open") scrollToArticle();
              }}
              className="mx-auto max-w-6xl overflow-hidden"
            >
              <ExpandedArticle ref={articleRef} card={card} onClose={closeExpanded} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav button                                                         */
/* ------------------------------------------------------------------ */

const NavButton = memo(function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous card" : "Next card"}
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      transition={{ duration: 0.18, ease }}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_1px_2px_rgba(11,16,35,0.04)] transition-colors hover:border-blue-600 hover:text-blue-600 hover:shadow-[0_8px_20px_-10px_rgba(37,99,235,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
    >
      {direction === "prev" ? (
        <ChevronLeft className="h-[18px] w-[18px]" aria-hidden="true" />
      ) : (
        <ChevronRight className="h-[18px] w-[18px]" aria-hidden="true" />
      )}
    </motion.button>
  );
});

/* ------------------------------------------------------------------ */
/*  Progress bar — owns its own rAF loop so the rest of the section    */
/*  doesn't re-render on every animation frame.                        */
/* ------------------------------------------------------------------ */

const ProgressBar = memo(function ProgressBar({
  count,
  titles,
  activeIndex,
  isPaused,
  reduceMotion,
  onComplete,
  onJump,
}: {
  count: number;
  titles: string[];
  activeIndex: number;
  isPaused: boolean;
  reduceMotion: boolean;
  onComplete: () => void;
  onJump: (index: number) => void;
}) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);
  const elapsedRef = useRef(0);

  useEffect(() => {
    elapsedRef.current = 0;
    setProgress(0);
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused || reduceMotion) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    startRef.current = performance.now() - elapsedRef.current;

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      elapsedRef.current = elapsed;
      const pct = Math.min((elapsed / AUTOPLAY_MS) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        onComplete();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused, reduceMotion, activeIndex, onComplete]);

  return (
    <div className="mx-auto mt-6 max-w-6xl px-1">
      <div className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => onJump(i)}
            aria-label={`Go to slide ${i + 1}: ${titles[i]}`}
            aria-current={i === activeIndex}
            className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-slate-200/70 transition-colors hover:bg-slate-300/80 dark:bg-white/10 dark:hover:bg-white/20"
          >
            <span
              className="relative block h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
              style={{
                width:
                  i < activeIndex ? "100%" : i === activeIndex ? `${progress}%` : "0%",
                transition: i === activeIndex ? "none" : "width 0.3s ease",
              }}
            >
              {i === activeIndex && (
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_10px_2px_rgba(37,99,235,0.65)]"
                />
              )}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={titles[activeIndex]}
          initial={reduceMotion ? undefined : { opacity: 0, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -2 }}
          transition={{ duration: 0.3, ease }}
          className="mt-3 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500"
        >
          {String(activeIndex + 1).padStart(2, "0")} — {titles[activeIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
});

/* ------------------------------------------------------------------ */
/*  Animated stat value — only counts up while its card is active      */
/* ------------------------------------------------------------------ */

const StatCountUp = memo(function StatCountUp({
  value,
  prefix = "",
  suffix = "",
  active,
  reduceMotion,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
  reduceMotion: boolean;
}) {
  const [display, setDisplay] = useState(reduceMotion ? value : 0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return;
    }
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, value, reduceMotion]);

  return (
    <span>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
});

/* ------------------------------------------------------------------ */
/*  Expanded article body                                              */
/* ------------------------------------------------------------------ */

const ExpandedArticle = memo(
  forwardRef<HTMLDivElement, { card: CardData; onClose: () => void }>(
    function ExpandedArticle({ card, onClose }, ref) {
      const { expanded } = card;
      const reduceMotion = useReducedMotion();

      return (
        <article
          ref={ref}
          className="relative mt-8 scroll-mt-24 overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_1px_1px_rgba(15,23,42,0.04),0_24px_70px_-30px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.03] backdrop-blur-2xl sm:p-12 dark:border-white/10 dark:bg-white/[0.03] dark:ring-white/5"
        >
          {/* glass edge highlight + soft top glow, matching the card above */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-500/[0.06] to-transparent"
          />

          <div className="relative flex items-start justify-between gap-6">
  <div>

    <button
      onClick={onClose}
     className="group inline-flex items-center gap-2 rounded-full bg-[#151e44] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(11,16,35,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#4338CA] hover:shadow-[0_18px_45px_rgba(37,99,235,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <ArrowLeft className="h-4 w-4 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
      Back to Overview
    </button>

    <h4 className="mt-4 max-w-2xl font-display text-2xl font-bold leading-[1.2] tracking-tight text-[#0B1023] sm:text-[1.9rem] dark:text-white">
      {card.title}
    </h4>
  </div>

  <motion.button
    onClick={onClose}
    aria-label="Collapse article"
    whileHover={reduceMotion ? undefined : { scale: 1.06 }}
    whileTap={reduceMotion ? undefined : { scale: 0.94 }}
    transition={{ duration: 0.18, ease }}
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-blue-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-white/10 dark:text-slate-400"
  >
    <ArrowUp className="h-4 w-4" aria-hidden="true" />
  </motion.button>
</div>

          <p className="relative mt-7 max-w-3xl text-[17px] leading-[1.85] text-slate-700 dark:text-slate-200">
            {expanded.intro}
          </p>

          <div className="relative mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* Left: sections + timeline + key takeaways */}
            <div className="space-y-10">
              {expanded.sections.map((sec) => (
                <div key={sec.heading}>
                  <h5 className="text-[15px] font-semibold tracking-tight text-[#0B1023] dark:text-white">
                    {sec.heading}
                  </h5>
                  {sec.body && (
                    <p className="mt-2.5 max-w-2xl text-[15px] leading-[1.8] text-slate-600 dark:text-slate-300">
                      {sec.body}
                    </p>
                  )}
                  {sec.bullets && (
                    <ul className="mt-3.5 space-y-2.5">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="mt-0.5 h-[18px] w-[18px] shrink-0 text-blue-600 dark:text-blue-400"
                            aria-hidden="true"
                          />
                          <span className="text-[15px] leading-[1.65] text-slate-600 dark:text-slate-300">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {expanded.timeline && (
                <div>
                  <h5 className="text-[15px] font-semibold tracking-tight text-[#0B1023] dark:text-white">
                    How it works
                  </h5>
                  <ol className="relative mt-5 space-y-7 border-l border-slate-200 pl-6 dark:border-white/10">
                    {expanded.timeline.map((step, i) => (
                      <li key={step.label} className="relative">
                        <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[11px] font-semibold text-blue-700 shadow-[0_0_0_4px_rgba(255,255,255,0.9)] dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300 dark:shadow-[0_0_0_4px_rgba(5,7,15,0.9)]">
                          {i + 1}
                        </span>
                        <h6 className="text-sm font-semibold text-[#0B1023] dark:text-white">
                          {step.label}
                        </h6>
                        <p className="mt-1 text-[14px] leading-[1.7] text-slate-600 dark:text-slate-300">
                          {step.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div>
                <h5 className="text-[15px] font-semibold tracking-tight text-[#0B1023] dark:text-white">
                  Key takeaways
                </h5>
                <ul className="mt-3.5 space-y-2.5">
                  {expanded.keyTakeaways.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-[18px] w-[18px] shrink-0 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] leading-[1.65] text-slate-600 dark:text-slate-300">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="max-w-2xl border-t border-slate-200/70 pt-6 text-[15px] font-semibold italic leading-[1.75] text-[#0B1023] dark:border-white/10 dark:text-white">
                {expanded.closing}
              </p>
            </div>

            {/* Right: quote + callout + CTA */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {expanded.quote && (
                <blockquote className="relative overflow-hidden rounded-2xl border-l-2 border-blue-600 bg-blue-50/50 p-6 dark:bg-blue-400/5">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-400/10 blur-2xl"
                  />
                  <Quote
                    className="relative -top-1 left-0 h-5 w-5 rotate-180 text-blue-300 dark:text-blue-500/40"
                    aria-hidden="true"
                  />
                  <p className="relative -mt-1 text-[15px] italic leading-[1.75] text-slate-700 dark:text-slate-200">
                    {expanded.quote}
                  </p>
                </blockquote>
              )}

              <div className="rounded-2xl border border-slate-200/70 bg-slate-50/60 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-400/10">
                    <Lightbulb className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </span>
                  <h6 className="text-sm font-semibold tracking-tight text-[#0B1023] dark:text-white">
                    {expanded.callout.title}
                  </h6>
                </div>
                <p className="mt-3 text-[14px] leading-[1.7] text-slate-600 dark:text-slate-300">
                  {expanded.callout.body}
                </p>
              </div>

              <motion.div whileHover={reduceMotion ? undefined : { scale: 1.015 }} whileTap={reduceMotion ? undefined : { scale: 0.985 }} transition={{ duration: 0.2, ease }}>
                <Link
                  to={CONTACT_HREF}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(37,99,235,0.8)] transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  {expanded.ctaLabel}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </article>
      );
    }
  )
);
