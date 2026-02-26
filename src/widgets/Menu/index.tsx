import React from "react";
import { MENU } from "@/constants";
import s from "./style.module.scss";

export const Menu = () => {
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        {MENU.map((i) => (
          <div>{i.name}</div>
        ))}
      </div>
    </div>
  );
};
