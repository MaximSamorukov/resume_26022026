import cn from "classnames";
import { motion } from "motion/react";
import s from "./style.module.scss";

type HighEducationItemProps = {
  name: string;
  specialty: string;
  degree: string;
  icon: string;
  index: number;
};

export const HighEducationItem = ({
  name,
  specialty,
  degree,
  icon,
  index,
}: HighEducationItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={s.container}
    >
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
    </motion.div>
  );
};
