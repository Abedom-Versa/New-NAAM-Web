"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { TeamMember } from "@/lib/team";

/* Compact, uniform headshot cards. Every card opens the same bio dialog,
   so all bios read the same way whatever their length. */
export function TeamGrid({ members }: { members: TeamMember[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const nameId = useId();
  const [active, setActive] = useState<TeamMember | null>(null);

  function open(m: TeamMember) {
    setActive(m);
    dialog.current?.showModal();
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {members.map((m) => (
          <li key={`${m.name}-${m.role}`}>
            <button
              type="button"
              onClick={() => open(m)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white text-left transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <span className="relative block aspect-square overflow-hidden">
                <Image
                  src={m.image}
                  alt=""
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:768px) 33vw, (max-width:1024px) 25vw, 16vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="flex flex-1 flex-col p-3.5">
                <span className="font-display text-[15px] font-semibold leading-snug text-ink">
                  {m.name}
                </span>
                <span className="mt-1 line-clamp-2 min-h-[2lh] text-xs font-medium leading-snug text-brand-600">
                  {m.role}
                </span>
                <span className="mt-3 text-xs font-semibold text-ink-soft underline-offset-2 group-hover:text-brand-700 group-hover:underline">
                  View bio
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-labelledby={nameId}
        onClick={(e) => {
          // A click on the backdrop lands on the <dialog> itself.
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="m-auto w-[min(42rem,calc(100vw-2rem))] rounded-3xl bg-white p-0 shadow-soft backdrop:bg-brand-950/60 backdrop:backdrop-blur-sm"
      >
        {active && (
          <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-start gap-5">
              <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-28">
                <Image src={active.image} alt={active.name} fill sizes="112px" className="object-cover object-top" />
              </span>
              <div className="min-w-0 flex-1 pt-1">
                <h3 id={nameId} className="text-xl text-ink sm:text-2xl">
                  {active.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-600">{active.role}</p>
              </div>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                aria-label="Close bio"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-ink-soft transition-colors hover:bg-cloud hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 space-y-4 border-t border-brand-100 pt-6">
              {active.bio.length > 0 ? (
                active.bio.map((para) => (
                  <p key={para.slice(0, 40)} className="leading-relaxed text-ink-soft">
                    {para}
                  </p>
                ))
              ) : (
                <p className="leading-relaxed text-ink-soft">Bio coming soon.</p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
