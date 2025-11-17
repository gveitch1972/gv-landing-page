import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PanelHighlight({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [box, setBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  // Cycle 0 → 1 → 2 → 0…
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % 3);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  // Measure position of the active card
  useLayoutEffect(() => {
    const container = containerRef.current;
    const el = cardRefs.current[active];
    if (!container || !el) return;

    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();

    setBox({
      x: eRect.left - cRect.left,
      y: eRect.top - cRect.top,
      w: eRect.width,
      h: eRect.height,
    });
  }, [active]);

  return (
    <div ref={containerRef} className="relative">
      {/* moving neon border */}
      {box && (
        <motion.div
          className="absolute pointer-events-none rounded-xl border-2 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
          style={{
            top: box.y,
            left: box.x,
            width: box.w,
            height: box.h,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 28,
          }}
        />
      )}

      {/* Clone children and attach refs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div key={i} ref={(el) => {
  			cardRefs.current[i] = el;
		}}>
                {child}
              </div>
            ))
          : children}
      </div>
    </div>
  );
}

