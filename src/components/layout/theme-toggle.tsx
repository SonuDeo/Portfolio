"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-secondary/50 text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
    >
      {mounted && (
        <>
          <Sun
            className={`h-[18px] w-[18px] transition-all duration-300 ${
              isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            } absolute`}
          />
          <Moon
            className={`h-[18px] w-[18px] transition-all duration-300 ${
              isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
            } absolute`}
          />
        </>
      )}
    </button>
  );
}
