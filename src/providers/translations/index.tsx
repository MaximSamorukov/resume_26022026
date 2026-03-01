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
  const currentData = useMemo(
    () => ({
      language,
      setCurrentLanguage,
      t: t[language],
    }),
    [language],
  );
  return (
    <TranslationsContext value={currentData}>{children}</TranslationsContext>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationsContext);
  return context;
};
