import s from "./style.module.scss";

type StackItemProps = {
  name: string;
};

export const StackItem = ({ name }: StackItemProps) => {
  return <div className={s.item}>{name}</div>;
};
