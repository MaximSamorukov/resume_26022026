import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { ExperienceItem } from "@/components/Experience/ExperienceItem";

export const Experience = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.EXPERIENCE} className={s.container}>
      <div className={s.data}>
        {c.t.experience.map((i) => (
          <ExperienceItem
            company={i.company}
            title={i.title}
            start={i.start}
            end={i.end}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
};
