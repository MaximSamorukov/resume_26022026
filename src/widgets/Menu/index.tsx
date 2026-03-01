import React from "react";
import { useActiveSection } from "@/utils/hooks/useActiveSection";
import { MENU, PAGES } from "@/constants";
import s from "./style.module.scss";
import { MenuItem } from "@/components/Menu/MenuItem";
const pages = Object.values(PAGES);

export const Menu = () => {
  const { setActivePage, activeId } = useActiveSection(pages);

  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        {MENU.map((i) => (
          <MenuItem
            title={i.name}
            onSelect={setActivePage}
            active={i.name === activeId}
            slug={i.slug}
          />
        ))}
      </div>
    </div>
  );
};
