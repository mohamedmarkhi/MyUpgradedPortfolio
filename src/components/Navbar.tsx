import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  User,
  Briefcase,
  Mail,
  FileDown,
  PanelsTopLeft,
  ChevronRight,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { name: "About", icon: User, href: "#about" },
  { name: "Skills", icon: Code2, href: "#skills" },
  { name: "Projects", icon: Briefcase, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-3 z-50 w-[95%] max-w-6xl -translate-x-1/2 sm:top-4"
    >
      <div className="flex items-center justify-between rounded-2xl border border-primary/15 bg-background/80 px-3 py-2.5 shadow-lg backdrop-blur-xl sm:px-4 md:px-5">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm">
            M
          </div>

          <div className="min-w-0">
            <span className="truncate text-sm font-semibold tracking-tight text-foreground">
              MARKHI
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            title="Download CV"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <FileDown className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
          >
            Hire Me
            <ChevronRight className="h-4 w-4" />
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground xl:hidden"
              >
                <PanelsTopLeft className="h-4.5 w-4.5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="top"
              className="w-full rounded-b-3xl border-primary/15 bg-background/95 px-5 pt-10 pb-8 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="mx-auto max-w-md">
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                    M
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      MARKHI
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span>{item.name}</span>
                        </div>

                        <ChevronRight className="h-4 w-4 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                    );
                  })}
                </div>

                <div className="my-4 h-px w-full bg-border" />

                <div className="flex flex-col gap-3">
                  <a
                    href="/resume.pdf"
                    download
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-all duration-200 hover:bg-secondary/80"
                  >
                    <FileDown className="h-4 w-4" />
                    Download CV
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-200 hover:opacity-95"
                  >
                    Hire Me
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}