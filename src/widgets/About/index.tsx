import React from "react";
import GitHubIcon from "@/assets/gh.svg?react";
import InstaIcon from "@/assets/insta.svg?react";
import LinkedInIcon from "@/assets/ln.svg?react";
import TelegramIcon from "@/assets/tg.svg?react";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";

export const About = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.ABOUT} className={s.container}>
      <div className={s.data}>
        <div className={s.data__brief}>
          <div className={s.data__title}>{c.t.about.brief.name}</div>
          <div className={s.data__occupation}>{c.t.about.brief.occupation}</div>
          <div className={s.data__moto}>{c.t.about.brief.moto}</div>
          <div className={s.data__socials}>
            <div className={s.data__socialItem}>
              <GitHubIcon />
            </div>
            <div className={s.data__socialItem}>
              <LinkedInIcon />
            </div>
            <div className={s.data__socialItem}>
              <InstaIcon />
            </div>
            <div className={s.data__socialItem}>
              <TelegramIcon />
            </div>
          </div>
        </div>
        <div className={s.data__summary}>
          <span>{c.t.about.summary.first}</span>
          <br />
          <br />
          <span>{c.t.about.summary.second}</span>
          <br />
          <br />
          <span>{c.t.about.summary.third}</span>
        </div>
      </div>
    </div>
  );
};
