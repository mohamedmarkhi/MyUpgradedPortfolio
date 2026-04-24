import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  animate,
} from "framer-motion";
import { useTheme } from "next-themes";
import { SunMedium, MoonStar } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const y = useMotionValue(0);
  const cordHeight = useTransform(y, [0, 60], [36, 92]);
  const glowOpacity = useTransform(y, [0, 60], [0.12, 0.3]);
  const rotate = useTransform(y, [0, 60], [0, 6]);
  const scale = useTransform(y, [0, 60], [1, 1.05]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  const resetPull = () => {
    animate(y, 0, {
      type: "spring",
      stiffness: 300,
      damping: 22,
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    if (y.get() > 40 && mounted) {
      setTheme(nextTheme);
    }

    resetPull();
  };

  return (
    <div className="pointer-events-none fixed left-1/2 top-0 z-[60] flex -translate-x-1/2 flex-col items-center sm:left-6 sm:translate-x-0">
      <motion.div
        style={{ height: cordHeight }}
        className="w-[3px] rounded-full bg-gradient-to-b from-primary via-primary/80 to-primary/30"
      />

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 60 }}
        dragElastic={0.08}
        dragMomentum={false}
        style={{ y, rotate, scale }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
        role="button"
        tabIndex={0}
        aria-label={`Pull to switch to ${nextTheme} mode`}
        onKeyDown={(e) => {
          if (!mounted) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setTheme(nextTheme);
          }
        }}
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute -inset-3 rounded-full bg-primary/20 blur-xl"
          />

          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-background shadow-lg">
            {mounted ? (
              isDark ? (
                <SunMedium className="h-5 w-5 text-primary" />
              ) : (
                <MoonStar className="h-5 w-5 text-primary" />
              )
            ) : (
              <div className="h-5 w-5" />
            )}
          </div>

          <AnimatePresence>
            {(isHovered || isDragging) && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                className="absolute top-14 whitespace-nowrap rounded-lg border border-primary/20 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary shadow-md"
              >
                Pull to {isDark ? "Light" : "Dark"}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}