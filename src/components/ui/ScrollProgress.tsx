"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        docHeight > 0
          ? (scrollTop / docHeight) * 100
          : 0;

      setProgress(percentage);
    };

    window.addEventListener(
      "scroll",
      updateProgress
    );

    updateProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-100 h-1 bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-150"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}
