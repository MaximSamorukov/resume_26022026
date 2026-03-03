import { memo } from "react";
import s from "./style.module.scss";
const arr = Array.from({ length: 90 }, (_, i) => i);

export const AccentBox = memo(() => {
  return (
    <div className={s.container}>
      {arr.map((i) => (
        <div key={i} className={s.dot} />
      ))}
    </div>
  );
});
