import { useTranslation } from "@/providers/translations";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useMemo } from "react";
import { ProjectItem } from "@/components/Projects/ProjectItem";

type ProjectType = "project" | "widget" | "testTask";

export type ProjectItemType = {
  type: ProjectType;
  title: string;
  github: string;
  deploy: string;
  description: string;
  stack: string[];
};

export type DataType = Record<ProjectType, ProjectItemType[]>;

const init = {
  project: [],
  widget: [],
  testTask: [],
} as DataType;

export const Projects = () => {
  const c = useTranslation();
  const { project, widget, testTask } = useMemo(() => {
    const data = c.t.projects.reduce((acc, i) => {
      const type = i.type;
      const currentData = acc[type];
      const nextData = [...currentData, i];
      // @ts-ignore
      acc[type] = nextData;
      return acc;
    }, init);
    return data;
  }, [c.t.projects]);
  return (
    <div id={PAGES.PROJECTS} className={s.container}>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.projects}</div>
        {project.map((i) => (
          <ProjectItem
            key={i.title}
            title={i.title}
            type={i.type}
            description={i.description}
            github={i.github}
            deploy={i.deploy}
            stack={i.stack}
          />
        ))}
      </div>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.projects}</div>
        {widget.map((i) => (
          <ProjectItem
            key={i.title}
            title={i.title}
            type={i.type}
            description={i.description}
            github={i.github}
            deploy={i.deploy}
            stack={i.stack}
          />
        ))}
      </div>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.projects}</div>
        {testTask.map((i) => (
          <ProjectItem
            key={i.title}
            title={i.title}
            type={i.type}
            description={i.description}
            github={i.github}
            deploy={i.deploy}
            stack={i.stack}
          />
        ))}
      </div>
    </div>
  );
};
