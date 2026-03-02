import cn from "classnames";
import s from "./style.module.scss";

type HighEducationItemProps = {
  name: string;
  specialty: string;
  degree: string;
  icon: string;
};

export const HighEducationItem = ({
  name,
  specialty,
  degree,
  icon,
}: HighEducationItemProps) => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img
          className={cn({ [s.logo__transform]: icon === "bmstu.svg" })}
          src={new URL(`../../../../assets/${icon}`, import.meta.url).href}
          width={100}
        />
      </div>
      <div className={s.data}>
        <div className={s.data__name}>{name}</div>
        <div className={s.data__specialty}>{specialty}</div>
        <div className={s.data__degree}>{degree}</div>
      </div>
    </div>
  );
};
