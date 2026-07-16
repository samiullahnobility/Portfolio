"use client";

import { useState } from "react";

interface ProjectFilterProps {
  filters: string[];
  activeFilter: string;
  onChange: (filter: string) => void;
}

export function ProjectFilter({ filters, activeFilter, onChange }: ProjectFilterProps) {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
      {filters.map((filter, index) => {
        const active = filter === activeFilter;
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={focusedIndex === index ? 0 : -1}
            onFocus={() => setFocusedIndex(index)}
            onClick={() => onChange(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-[#F7F9FC] ${active ? "border-[#0F9F9A] bg-[#0F9F9A] text-white" : "border-[#DCE5EE] bg-white text-[#52647A] hover:border-[#0F9F9A] hover:text-[#10233F]"}`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
