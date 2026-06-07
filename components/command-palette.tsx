"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Home, Layers3, Mail, Search, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: Layers3 },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "GitHub", href: "https://github.com/Haideransari444", icon: Github }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        className="soft-button fixed right-4 top-5 z-40 hidden h-11 w-11 p-0 md:inline-flex"
        onClick={() => setOpen(true)}
        type="button"
        aria-label="Open quick navigation"
      >
        <Search aria-hidden="true" size={18} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-start justify-center bg-ink-900/20 px-4 pt-24 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
          >
            <button
              className="absolute inset-0 cursor-default"
              onClick={() => setOpen(false)}
              type="button"
              aria-label="Close quick navigation"
            />
            <motion.div
              className="soft-card relative w-full max-w-lg p-3"
              initial={{ opacity: 0, y: -18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            >
              <div className="grid gap-2">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      className="soft-inset flex items-center gap-3 p-4 font-bold transition hover:bg-mint-300/60"
                      href={item.href}
                      key={item.label}
                      onClick={() => setOpen(false)}
                    >
                      <Icon aria-hidden="true" size={18} />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
