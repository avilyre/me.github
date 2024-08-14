"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { ProvidersProps } from "./interface";

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  const invalidateQueryTime = 60 * 60; // 1 hour

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: invalidateQueryTime,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
