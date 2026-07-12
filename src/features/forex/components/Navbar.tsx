// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, CreditCard, GraduationCap, Landmark } from "lucide-react";
// import { openPayNow } from "./useLiveRates";
// import { HarborLogo } from "./HarborLogo";

// const LINKS = [
//   { label: "Education Loan", href: "/education", Icon: GraduationCap },
//   { label: "Forex", href: "/forex", Icon: Landmark },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
//     >
//       <nav
//         className={`relative flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 ${
//           scrolled ? "glass shadow-soft" : "bg-transparent"
//         }`}
//       >
//         {/* Logo — far left corner */}
//         <a href="#top" className="shrink-0">
//           <HarborLogo onDark={!scrolled} />
//         </a>

//         {/* Center nav — premium pill tags, absolutely centered */}
//         <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
//           {LINKS.map((l) => (
//             <li key={l.label}>
//               <a
//                 href={l.href}
//                 className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-border/60 bg-white/60 px-5 py-2 text-sm font-semibold text-foreground shadow-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:border-sky/60 hover:bg-white hover:text-sky-deep"
//               >
//                 <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-sky text-primary-foreground">
//                   <l.Icon className="h-3.5 w-3.5" />
//                 </span>
//                 <span>{l.label}</span>
//                 <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => openPayNow()}
//             className="hidden items-center gap-1.5 rounded-full bg-gradient-sky px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
//           >
//             Pay Now <CreditCard className="h-4 w-4" />
//           </button>
//           <button
//             aria-label="Toggle menu"
//             onClick={() => setOpen((v) => !v)}
//             className="grid h-10 w-10 place-items-center rounded-full glass text-foreground lg:hidden"
//           >
//             {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </button>
//         </div>
//       </nav>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute inset-x-4 top-[72px] rounded-2xl glass p-3 shadow-lift lg:hidden"
//           >
//             <ul className="flex flex-col">
//               {LINKS.map((l) => (
//                 <li key={l.label}>
//                   <a
//                     href={l.href}
//                     onClick={() => setOpen(false)}
//                     className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
//                   >
//                     <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-sky text-primary-foreground">
//                       <l.Icon className="h-4 w-4" />
//                     </span>
//                     {l.label}
//                   </a>
//                 </li>
//               ))}
//               <button
//                 onClick={() => {
//                   setOpen(false);
//                   openPayNow();
//                 }}
//                 className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-sky px-4 py-3 text-sm font-semibold text-primary-foreground"
//               >
//                 Pay Now <CreditCard className="h-4 w-4" />
//               </button>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }
