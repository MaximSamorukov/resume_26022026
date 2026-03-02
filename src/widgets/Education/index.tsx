//import React from "react";
import { HighEducationItem } from "@/components/Education/HighEducation/HighEducationItem";
import s from "./style.module.scss";
//import viamLogo from "../../assets/viam.png";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { CourseItem } from "@/components/Education/Courses/CourseItem";

export const Education = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.EDUCATION} className={s.container}>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.education}</div>
        {c.t.education.map((i) => (
          <HighEducationItem
            key={i.speciality}
            name={i.name}
            specialty={i.speciality}
            degree={i.degree}
            icon={i.icon}
          />
        ))}
      </div>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.courses}</div>
        <div className={s.data__courses}>
          {c.t.courses.map((i) => (
            <CourseItem
              key={i.name}
              name={i.name}
              school={i.school}
              icon={i.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
