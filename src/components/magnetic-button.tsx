"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & { children: ReactNode; variant?: "light" | "dark" | "gold" };

export function MagneticButton({ children, className = "", variant = "dark", ...props }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 16 });
  const springY = useSpring(y, { stiffness: 200, damping: 16 });
  const palette =
    variant === "light"
      ? "border-ivory/30 bg-ivory/12 text-ivory hover:bg-ivory hover:text-navy hover:shadow-[0_20px_50px_rgba(255,253,247,0.2)]"
      : variant === "gold"
        ? "border-gold/50 bg-gold text-navy hover:bg-ivory hover:text-gold hover:shadow-[0_20px_50px_rgba(200,168,90,0.3)] hover:border-gold"
        : "border-navy/15 bg-navy text-ivory hover:bg-royal hover:text-ivory hover:shadow-[0_20px_50px_rgba(30,58,138,0.2)] hover:border-gold/40";

  return (
    <motion.a
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${palette} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <motion.div whileHover={{ x: 2, y: -2 }} transition={{ type: "spring", stiffness: 200 }}>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      </motion.div>
    </motion.a>
  );
}
