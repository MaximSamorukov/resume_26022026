import React from "react";
import cn from "classnames";
import { useActiveSection } from "@/utils/hooks/useActiveSection";
import { MENU, PAGES } from "@/constants";
import s from "./style.module.scss";
const pages = Object.values(PAGES);
export const Menu = () => {
  const result = useActiveSection(pages);
  console.log(result);
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        {MENU.map((i) => (
          <div className={cn(s.item, { [s.item_active]: i.name === result })}>
            {i.name}
          </div>
        ))}
      </div>
    </div>
  );
};
