import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { FaLinkedin } from "react-icons/fa";
import MatrixRain from "./components/MatrixRain";
import TerminalIntro from "./components/TerminalIntro";
import ThemeToggle from "./components/ThemeToggle";



// --- Quick config (edit these) ---------------------------------------------
const config = {
  name: "Graham Veitch",
  tagline: "Senior Software & Automation Engineer",
  subTagline: "Tech-Agnostic Digital Disruptor | Blending Critical Thinking, Collaboration, Communication, Creativity & Imagination to shape what’s next…",
  //subTagline: "Platform reliability • CI/CD • Workload automation",
  photoUrl: "", // ← paste a photo URL (https://...) OR leave blank to use avatar
  email: "grahamcveitch@gmail.com",
  linkedin: "https://www.linkedin.com/in/grahamveitch",
  ctaText: "Get in touch", // button text
}
// ---------------------------------------------------------------------------

function Avatar({ name, photoUrl }: { name: string; photoUrl?: string }) {
  // If a photo is defined, use it
  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={`${name} headshot`}
        className="h-18 w-18 rounded-full object-cover ring-4 ring-white/70 shadow-xl"
      />
    )
  }

// Futurist illustrated avatar
return (
  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] grid place-items-center ring-4 ring-cyan-300/70 shadow-[0_0_25px_rgba(56,189,248,0.5)] animate-[pulse_3s_ease-in-out_infinite]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#67e8f9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 drop-shadow-[0_0_10px_#22d3ee]"
    >
      <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.2c-3.2 0-9.9 1.6-9.9 4.9v2.7h19.8v-2.7c0-3.3-6.7-4.9-9.9-4.9z" />
    </svg>
  </div>
);


}

export default function LandingPage() {
  return (
    <>
      	<MatrixRain />
	<TerminalIntro />
	<ThemeToggle />
      <div className="app-wrap w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-1000 px-4 relative z-10">
      <main className="relative w-full max-w-lg mx-auto px-4 py-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="mx-auto w-full rounded-3xl border border-slate-300/60 bg-white/90 p-8 shadow-xl backdrop-blur-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <Avatar name={config.name} photoUrl={config.photoUrl} />

              <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  {config.name}
                </h1>
                <p className="mt-1 text-lg text-slate-700">{config.tagline}</p>
                <p className="mt-1 text-sm text-slate-500">{config.subTagline}</p>
              </div>

              <div className="mt-1 flex flex-wrap items-center justify-center gap-1">
                <a
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center rounded-2xl bg-slate-900 px-6 py-3 text-white shadow hover:bg-slate-800"
                >
                  <Mail className="mr-2 h-4 w-4" /> {config.ctaText}
                </a>
                {config.linkedin && (
		<a
  			href="www.linkedin.com/in/grahamveitch"
  			target="_blank"
  			rel="noopener noreferrer"
  			className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-300 text-black hover:bg-gray-100 transition"
		>
  			<FaLinkedin className="w-4 h-4 text-[#0A66C2]" aria-hidden="true" />
  			<span>LinkedIn</span>
		</a>
                )}
              </div>


{/* Highlights strip – simple, glowing cards */}
<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    "Technical Integration & Vendor Success Management",
    "Workload Automation, Orchestration & Agile Operational Efficiency",
    "Platform Reliability, Incident, Change & Governance",
  ].map((item, i) => (
    <div
      key={item}
      className="skill-card rounded-xl border border-emerald-400/40 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm flex justify-center text-center"
      style={{ animationDelay: `${i * 0.6}s` }} // stagger the glow
    >
      {item}
    </div>
  ))}
</div>


            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-left text-base text-slate-800"
        >
          © {new Date().getFullYear()} {config.name}. All rights reserved. Well apart from the Matrix stuff, some movie in the 90's ;-)
        </motion.footer>
      </main>
    </div>
    </>
  )
}

