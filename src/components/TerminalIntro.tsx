import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "> initializing handshake…",
  "> probing reality layers…",
  "> Thinking.....…",
  "> wake up, Neo.",
];

export default function TerminalIntro() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  // auto-progress lines
  useEffect(() => {
    if (!visible) return;
    if (lineIndex >= LINES.length) {
      const t = setTimeout(() => setVisible(false), 700);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 1000);
    return () => clearTimeout(t);
  }, [lineIndex, visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-20 grid place-items-center bg-black"
      >
        <div className="w-[min(90vw,720px)] font-mono text-green-400">
          {LINES.slice(0, lineIndex + 1).map((l, i) => (
            <div key={i} className="mb-2">
              <span className="opacity-80">{l}</span>
              {i === lineIndex && <span className="animate-pulse">_</span>}
            </div>
          ))}
          <button
            onClick={() => setVisible(false)}
            className="mt-6 rounded-md border border-green-500/50 px-3 py-1 text-sm hover:bg-green-500/10"
          >
            Skip
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

