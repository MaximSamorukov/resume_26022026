import { useActiveSection } from "@/utils/hooks/useActiveSection";
import { motion } from "motion/react";
import { MENU, PAGES } from "@/constants";
import s from "./style.module.scss";
import { MenuItem } from "@/components/Menu/MenuItem";
import { useTranslation } from "@/providers/translations";
import { LanguageToggler } from "@/components/Shared/LanguageToggler";
const pages = Object.values(PAGES);

export const Menu = () => {
  const { setActivePage, activeId } = useActiveSection(pages);
  const c = useTranslation();
  return (
    <div className={s.container}>
      <motion.div
        className={s.innerContainer}
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
      >
        {MENU.map((i) => (
          <MenuItem
            key={i.slug}
            title={c.t.menu[i.name]}
            onSelect={setActivePage}
            active={i.name === activeId}
            slug={i.slug}
          />
        ))}
        <LanguageToggler />
      </motion.div>
    </div>
  );
};
