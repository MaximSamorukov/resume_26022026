import { t } from "@/translations";
import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";

const data = {
  language: "ru",
  setCurrentLanguage: Function.prototype,
  toggleLanguage: Function.prototype,
  t: t["ru"],
};
const TranslationsContext = createContext(data);

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<"ru" | "en">("ru");
  const setCurrentLanguage = useCallback(
    (arg: "ru" | "en") => setLanguage(arg),
    [],
  );
  const toggleLanguage = useCallback(
    () =>
      setLanguage((arg) => {
        if (arg === "en") return "ru";
        return "en";
      }),
    [],
  );
  const currentData = useMemo(
    () => ({
      language,
      setCurrentLanguage,
      toggleLanguage,
      t: t[language],
    }),
    [language],
  );
  return (
    // @ts-ignore
    <TranslationsContext value={currentData}>{children}</TranslationsContext>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationsContext);
  return context;
};
