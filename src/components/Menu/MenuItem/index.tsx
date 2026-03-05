import React from "react";
import cn from "classnames";
import AboutIcon from "@/assets/menu/about.svg?react";
import ExperienceIcon from "@/assets/menu/experience.svg?react";
import EducationIcon from "@/assets/menu/education.svg?react";
import ProjectsIcon from "@/assets/menu/projects.svg?react";
import ContactsIcon from "@/assets/menu/contacts.svg?react";

import s from "./style.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import { PAGES } from "@/constants";

type MenuItemProps = {
  active: boolean;
  title: string;
  slug: string;
  onSelect: (arg: string) => void;
};
const icon: Record<string, React.ReactElement> = {
  [PAGES.ABOUT]: <AboutIcon />,
  [PAGES.EXPERIENCE]: <ExperienceIcon />,
  [PAGES.EDUCATION]: <EducationIcon />,
  [PAGES.PROJECTS]: <ProjectsIcon />,
  [PAGES.CONTACTS]: <ContactsIcon />,
};
export const MenuItem: React.FC<MenuItemProps> = ({
  active,
  title,
  onSelect,
  slug,
}) => {
  const less580px = useMediaQuery("(max-width: 580px)");
  if (less580px) {
    return (
      <div className={s.container}>
        <button
          className={cn(s.item, { [s.item_active]: active })}
          onClick={() => onSelect(slug)}
        >
          {icon[slug]}
        </button>
      </div>
    );
  }
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
