"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE5EE] bg-white text-[#10233F] shadow-[0_16px_38px_rgba(16,35,63,0.14)] transition focus:outline-none focus:ring-2 focus:ring-[#0F9F9A] focus:ring-offset-2 focus:ring-offset-[#F7F9FC] ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
