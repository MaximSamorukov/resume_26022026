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
      const newAcc = Object.assign({ ...acc }, { [type]: nextData });
      return newAcc;
    }, init);
    return data;
  }, [c.t.projects]);
  console.log(project, widget, testTask);
  return (
    <div id={PAGES.PROJECTS} className={s.container}>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.projects}</div>
        <div className={s.data__items}>
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
      </div>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.widgets}</div>
        <div className={s.data__items}>
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
      </div>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.testTasks}</div>
        <div className={s.data__items}>
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
    </div>
  );
};
