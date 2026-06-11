"use client";

export default function SkillBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-1000"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
