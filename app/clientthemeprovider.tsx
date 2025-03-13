"use client";

import { ThemeProvider } from "next-themes";

export default function ClientThemeprovider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableColorScheme={false}>
      {children}
    </ThemeProvider>
  );
}
