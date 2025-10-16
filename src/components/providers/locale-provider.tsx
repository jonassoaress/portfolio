"use client";

import { Dictionary, SupportedLocale } from "@/lib/i18n";
import { PropsWithChildren, createContext, useContext, useMemo } from "react";

interface LocaleContextValue {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps extends PropsWithChildren {
  locale: SupportedLocale;
  dictionary: Dictionary;
}

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: LocaleProviderProps) {
  const value = useMemo(() => ({ locale, dictionary }), [locale, dictionary]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}

export function useTranslations<Section extends keyof Dictionary>(
  section: Section
): Dictionary[Section] {
  const { dictionary } = useLocale();
  return dictionary[section];
}
