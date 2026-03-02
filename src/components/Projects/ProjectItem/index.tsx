import type { ProjectItemType } from "@/widgets/Projects";
import GHIcon from "@/assets/gh.svg?react";
import DeployIcon from "@/assets/deploy.svg?react";
import s from "./style.module.scss";
import { StackItem } from "../StackItem";

type ProjectItemProps = ProjectItemType;

export const ProjectItem = ({
  type,
  title,
  github,
  deploy,
  description,
  stack,
}: ProjectItemProps) => {
  return (
    <div className={s.item}>
      <div className={s.item__title}>{title}</div>
      <div className={s.item__stack}>
        {stack.map((i, index) => (
          <StackItem key={`${i}_${index}`} name={i} />
        ))}
      </div>
      <div className={s.item__links}>
        <a target="_blank" rel="noopener noreferrer" href={github}>
          <GHIcon />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={deploy}>
          <DeployIcon />
        </a>
      </div>
    </div>
  );
};
