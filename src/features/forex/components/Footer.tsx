// import { useState } from "react";
// import { Anchor, Twitter, Instagram, Linkedin, Facebook, ArrowRight } from "lucide-react";

// const COLUMNS = [
//   {
//     title: "Quick Links",
//     links: ["Buy Forex", "Forex Card", "Money Transfer", "Currency Converter", "Study Destinations"],
//   },
//   {
//     title: "Company",
//     links: ["About Harbor", "Education Loans", "Careers", "Newsroom", "Partners"],
//   },
//   {
//     title: "Legal",
//     links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Compliance", "Grievance Redressal"],
//   },
// ];

// export function Footer() {
//   const [email, setEmail] = useState("");
//   const [sent, setSent] = useState(false);

//   return (
//     <footer className="border-t border-border bg-card">
//       <div className="mx-auto max-w-6xl px-4 py-16">
//         <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
//           <div>
//             <a href="#top" className="flex items-center gap-2.5">
//               <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-sky text-primary-foreground shadow-glow">
//                 <Anchor className="h-5 w-5" strokeWidth={2.4} />
//               </span>
//               <span className="font-display text-lg font-bold text-foreground">
//                 Harbor Finance
//               </span>
//             </a>
//             <p className="mt-4 max-w-sm text-sm text-muted-foreground">
//               Premium forex, education loans and global transfers for the next
//               generation of students and travellers.
//             </p>

//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 if (email) setSent(true);
//               }}
//               className="mt-6"
//             >
//               <p className="text-sm font-semibold text-foreground">
//                 Subscribe to the newsletter
//               </p>
//               <div className="mt-3 flex max-w-sm items-center gap-2 rounded-full border border-border bg-secondary/50 p-1.5">
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@email.com"
//                   className="w-full bg-transparent px-3 text-sm text-foreground outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-sky text-primary-foreground"
//                   aria-label="Subscribe"
//                 >
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </div>
//               {sent && (
//                 <p className="mt-2 text-xs font-medium text-emerald-600">
//                   Thanks! You're subscribed.
//                 </p>
//               )}
//             </form>

//             <div className="mt-6 flex gap-2">
//               {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-gradient-sky hover:text-primary-foreground"
//                   aria-label="Social link"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
//             {COLUMNS.map((col) => (
//               <div key={col.title}>
//                 <p className="text-sm font-semibold text-foreground">{col.title}</p>
//                 <ul className="mt-4 space-y-3">
//                   {col.links.map((l) => (
//                     <li key={l}>
//                       <a
//                         href="#"
//                         className="text-sm text-muted-foreground transition-colors hover:text-foreground"
//                       >
//                         {l}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
//           <p>© {new Date().getFullYear()} Harbor Finance. All rights reserved.</p>
//           <p>Forex services offered via RBI-authorised partners.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
