"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const handleClick = () => {
    if (window.location.pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-2
        rounded-full
        bg-blue-600
        px-5
        py-3
        text-white
        shadow-lg
        transition
        hover:scale-105
        active:scale-95
        hover:bg-blue-500
      "
    >
      <MessageCircle size={18} />
      <span>Book a Call</span>
    </button>
  );
}
