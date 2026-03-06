import { useTranslation } from "@/providers/translations";
import cn from "classnames";
import s from "./style.module.scss";
const lang: Record<string, string> = {
  en: "EN",
  ru: "РУ",
};
export const LanguageToggler = () => {
  const c = useTranslation();
  const toggle = () => c.toggleLanguage();
  return (
    <div className={s.container}>
      <button
        onClick={toggle}
        className={cn(s.pointer, {
          [s.pointer__en]: c.language === "en",
          [s.pointer__ru]: c.language === "ru",
        })}
      >
        {lang[c.language]}
      </button>
    </div>
  );
};
