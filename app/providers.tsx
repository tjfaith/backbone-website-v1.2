"use client";

import type { ThemeProviderProps } from "next-themes";

import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";
import { useEffect } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
  },
});

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <HeroUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider {...themeProps}>
          <Provider store={store}>{children}</Provider>
        </NextThemesProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
