import type { ProjectItemType } from "@/widgets/Projects";
import { motion } from "motion/react";
import GHIcon from "@/assets/gh.svg?react";
import DeployIcon from "@/assets/deploy.svg?react";
import s from "./style.module.scss";
import { StackItem } from "../StackItem";

type ProjectItemProps = ProjectItemType & { index: number };

export const ProjectItem = ({
  title,
  github,
  deploy,
  stack,
  index,
}: ProjectItemProps) => {
  return (
    <motion.div
      className={s.item}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
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
    </motion.div>
  );
};
