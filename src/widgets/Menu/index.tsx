import React from "react";
import { useActiveSection } from "@/utils/hooks/useActiveSection";
import { MENU, PAGES } from "@/constants";
import s from "./style.module.scss";
import { MenuItem } from "@/components/Menu/MenuItem";
import { useTranslation } from "@/providers/translations";
const pages = Object.values(PAGES);

export const Menu = () => {
  const { setActivePage, activeId } = useActiveSection(pages);
  const c = useTranslation();
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        {MENU.map((i) => (
          <MenuItem
            title={c.t.menu[i.name]}
            onSelect={setActivePage}
            active={i.name === activeId}
            slug={i.slug}
          />
        ))}
      </div>
    </div>
  );
};
