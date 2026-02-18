import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [matrix, setMatrix] = useState(false); // start ON

  useEffect(() => {
    document.body.classList.toggle("matrix", matrix);
  }, [matrix]);

  return (
    <button
      onClick={() => setMatrix(m => !m)}
      className="fixed right-4 top-4 z-50 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-mono text-white/80 backdrop-blur hover:bg-black/60"
      title="Toggle Matrix mode"
    >
      {matrix ? "MATRIX: ON" : "MATRIX: OFF"}
    </button>
  );
}
