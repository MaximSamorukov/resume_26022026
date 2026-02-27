import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

type MenuItemProps = {
  active: boolean;
  title: string;
  slug: string;
  onSelect: (arg: string) => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  active,
  title,
  onSelect,
  slug,
}) => {
  return (
    <div className={s.container}>
      <button
        className={cn(s.item, { [s.item_active]: active })}
        onClick={() => onSelect(slug)}
      >
        {title}
      </button>
    </div>
  );
};
