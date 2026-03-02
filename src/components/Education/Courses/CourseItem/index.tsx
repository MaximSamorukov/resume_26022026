import s from "./style.module.scss";

type CourseItemProps = {
  school: string;
  name: string;
  icon: string;
};

export const CourseItem = ({ name, school, icon }: CourseItemProps) => {
  return (
    <div className={s.container}>
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
    </div>
  );
};
