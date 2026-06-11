"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  const timer = requestAnimationFrame(() => {
    setMounted(true);
  });

  return () => cancelAnimationFrame(timer);
}, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg">
        <div className="w-4.5 h-4.5" />
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded-lg"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
