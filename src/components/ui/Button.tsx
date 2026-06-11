import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-6 py-3 rounded-xl
        font-medium
        transition-all duration-300
        ${
          variant === "primary"
            ? "bg-blue-600 hover:bg-blue-500"
            : "border border-white/20 hover:bg-white/10"
        }
        ${className}
      `}
      {...props}
    />
  );
}
