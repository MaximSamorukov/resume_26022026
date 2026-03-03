import { StackItem } from "../StackItem";
import s from "./style.module.scss";

type ExperienceItemProps = {
  company: string;
  title: string;
  start: string;
  end: string;
  description: readonly string[];
  stack: readonly string[];
};

export const ExperienceItem = ({
  company,
  title,
  start,
  end,
  description,
  stack,
}: ExperienceItemProps) => {
  return (
    <div className={s.container}>
      <div className={s.dates}>{`${start} - ${end}`}</div>
      <div className={s.mainData}>
        <div className={s.mainData__header}>
          <div className={s.mainData__title}>{title}</div>&middot;
          <div className={s.mainData__company}>{company}</div>
        </div>
        <div className={s.mainData__description}>
          {description.map((ii) => (
            <div key={ii} className={s.mainData__descriptionItem}>
              {ii}
            </div>
          ))}
        </div>
        <div className={s.mainData__stack}>
          {stack.map((i) => (
            <StackItem key={i} name={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
