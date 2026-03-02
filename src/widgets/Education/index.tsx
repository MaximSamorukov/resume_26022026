//import React from "react";
import s from "./style.module.scss";
//import viamLogo from "../../assets/viam.png";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";

export const Education = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.EDUCATION} className={s.container}>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.education}</div>
      </div>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.courses}</div>
      </div>
      <img src={"../..assets/viam.png"} width={100} />
    </div>
  );
};
