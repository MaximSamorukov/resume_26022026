import type { ProjectItemType } from "@/widgets/Projects";
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
        {stack.map((i) => (
          <StackItem name={i} />
        ))}
      </div>
      {/*<div className={s.item__name}>{description}</div>*/}
      {/*<div className={s.item__name}>{deploy}</div>
      <div className={s.item__name}>{github}</div>
      <div className={s.item__name}>{stack.join("-")}</div>*/}
    </div>
  );
};
