"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex max-w-[95%] flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2" aria-label="The West Green Surgery Home">
            <Stethoscope className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              The West Green Surgery
            </p>
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} The West Green Surgery. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
