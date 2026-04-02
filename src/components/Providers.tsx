"use client";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "next-themes";

const Providers = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="dashboard-theme"
    >
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
