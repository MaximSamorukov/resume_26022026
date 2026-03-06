import { motion } from "motion/react";
import s from "./style.module.scss";
type CourseItemProps = {
  school: string;
  name: string;
  icon: string;
  index: number;
};

export const CourseItem = ({ name, school, icon, index }: CourseItemProps) => {
  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className={s.logo}>
        <img
          src={new URL(`../../../../assets/${icon}`, import.meta.url).href}
          width={50}
        />
      </div>
      <div className={s.data}>
        <div className={s.data__school}>{school}</div>
        <div className={s.data__name}>{name}</div>
      </div>
    </motion.div>
  );
};
