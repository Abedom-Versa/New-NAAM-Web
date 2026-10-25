"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type TimelineItem = { year: string | null; title: string; text: string };

/* Vertical with the markers on the left on small screens; a horizontal,
   scrollable row from lg up, so the list can keep growing. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  const scroller = useRef<HTMLOListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  function updateEdges() {
    const el = scroller.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  function scrollByCards(dir: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div className="mb-6 hidden justify-end gap-2 lg:flex">
        {([-1, 1] as const).map((dir) => {
          const disabled = dir === -1 ? edges.start : edges.end;
          const Chevron = dir === -1 ? ChevronLeft : ChevronRight;
          return (
            <button
              key={dir}
              type="button"
              onClick={() => scrollByCards(dir)}
              disabled={disabled}
              aria-label={dir === -1 ? "Earlier milestones" : "Later milestones"}
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-white text-brand-700 transition-colors hover:bg-brand-600 hover:text-white disabled:pointer-events-none disabled:opacity-40"
            >
              <Chevron className="h-5 w-5" />
            </button>
          );
        })}
      </div>

      <ol
        ref={scroller}
        onScroll={updateEdges}
        className="relative space-y-8 lg:flex lg:snap-x lg:snap-mandatory lg:space-y-0 lg:overflow-x-auto lg:pb-4 lg:[scrollbar-width:thin]"
      >
        {/* Vertical rail (small screens) */}
        <span aria-hidden className="absolute bottom-2 left-[27px] top-2 w-0.5 bg-brand-100 lg:hidden" />

        {items.map((item, i) => (
          <li
            key={`${item.year}-${item.title}`}
            className="relative pl-20 lg:w-72 lg:shrink-0 lg:snap-start lg:pl-0 lg:pr-8 lg:pt-20"
          >
            {/* Horizontal rail segment (lg up); the last one stops at its marker */}
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-7 hidden h-0.5 bg-brand-100 lg:block",
                i === items.length - 1 ? "w-14" : "right-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-0 z-10 grid h-14 w-14 place-items-center rounded-full text-xs font-bold",
                item.year
                  ? "bg-brand-600 text-white"
                  : "border-2 border-dashed border-brand-300 bg-white text-brand-600"
              )}
            >
              {item.year ?? "TBC"}
            </span>
            {/* Dated entries show the year in the marker; flag the ones still unconfirmed. */}
            {!item.year && (
              <p className="font-display text-sm font-semibold text-orange-500">
                Year to be confirmed
              </p>
            )}
            <h3 className="mt-1 pt-1 text-lg text-ink lg:pt-0">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
