import React, { useEffect, useState } from "react";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";
import { LanguageContext } from "./language-context";
import type { TranslationKey } from "@/lib/types/translation";

const translations = {
  en: en,
  ar: ar,
};

type Language = "en" | "ar";

const getNestedValue = (obj: any, path: string): string | undefined => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    if (language === "ar") {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [language]);

  const t = (
    key: TranslationKey,
    options?: Record<string, string | number>
  ): string => {
    const selectedTranslations = translations[language];
    let translatedString = getNestedValue(selectedTranslations, key);

    if (translatedString && options) {
      Object.keys(options).forEach((optionKey) => {
        const placeholder = `{{${optionKey}}}`;
        const regex = new RegExp(
          placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "g"
        );
        translatedString = translatedString
          ?.toString()
          .replace(regex, String(options[optionKey]));
      });
    }
    return translatedString || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dir: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
