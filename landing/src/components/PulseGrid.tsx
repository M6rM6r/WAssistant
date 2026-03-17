import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Pulse {
  id: number;
  x: number;
  y: number;
}

const PulseGrid = () => {
  const [pulses, setPulses] = useState<Pulse[]>([]);

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      const cols = Math.floor(window.innerWidth / 32);
      const rows = Math.floor(window.innerHeight / 32);
      const x = Math.floor(Math.random() * cols) * 32;
      const y = Math.floor(Math.random() * rows) * 32;
      const newPulse = { id: id++, x, y };
      setPulses((prev) => [...prev.slice(-8), newPulse]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 grid-bg overflow-hidden">
      <AnimatePresence>
        {pulses.map((pulse) => (
          <motion.div
            key={pulse.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute h-2 w-2 rounded-full bg-primary"
            style={{ left: pulse.x - 4, top: pulse.y - 4, boxShadow: "0 0 12px hsl(145 50% 55% / 0.6)" }}
          />
        ))}
      </AnimatePresence>
      {/* Radial fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
    </div>
  );
};

export default PulseGrid;
