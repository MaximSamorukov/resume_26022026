import s from "./style.module.scss";

type ExperienceItemProps = {
  company: string;
  title: string;
  start: string;
  end: string;
  description: readonly string[];
};

export const ExperienceItem = ({
  company,
  title,
  start,
  end,
  description,
}: ExperienceItemProps) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.header__company}>{company}</div>
        <div className={s.header__dates}>{`${start} - ${end}`}</div>
      </div>
      <div className={s.main}>
        <div className={s.main__title}>{title}</div>
        <div className={s.main__description}>
          {description.map((ii) => (
            <div className={s.main__descriptionItem}>{ii}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
