import type { ProjectItemType } from "@/widgets/Projects";
import s from "./style.module.scss";

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
    <div className={s.container}>
      <div className={s.logo}>
        <img
          src={new URL(`../../../../assets/${type}`, import.meta.url).href}
          width={50}
        />
      </div>
      <div className={s.data}>
        <div className={s.data__school}>{title}</div>
        <div className={s.data__name}>{github}</div>
        <div className={s.data__name}>{deploy}</div>
        <div className={s.data__name}>{description}</div>
        <div className={s.data__name}>{stack.join("-")}</div>
      </div>
    </div>
  );
};
