import GitHubIcon from "@/assets/gh.svg?react";
import EmailIcon from "@/assets/email.svg?react";
import LinkedInIcon from "@/assets/ln.svg?react";
import TelegramIcon from "@/assets/tg.svg?react";
import { useMediaQuery } from "@uidotdev/usehooks";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { DownloadResumeBtn } from "@/components/About/DownloadResumeBtn";

export const About = () => {
  const c = useTranslation();
  const less980px = useMediaQuery("(max-width: 980px)");
  if (less980px) {
    return (
      <div id={PAGES.ABOUT} className={s.container}>
        <div className={s.data}>
          <div className={s.data__brief}>
            <div className={s.data__title}>{c.t.about.brief.name}</div>
            <div className={s.data__occupation}>
              {c.t.about.brief.occupation}
            </div>
            <div className={s.data__moto}>{c.t.about.brief.moto}</div>
          </div>
          <div className={s.data__summary}>
            <span
              dangerouslySetInnerHTML={{ __html: c.t.about.summary.first }}
            />
            <br />
            <br />
            <span
              dangerouslySetInnerHTML={{ __html: c.t.about.summary.second }}
            />
            <br />
            <br />
            <span
              dangerouslySetInnerHTML={{ __html: c.t.about.summary.third }}
            />
          </div>
          <div className={s.data__brief}>
            <div className={s.data__socials}>
              <a
                href={c.t.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className={s.data__socialItem}
              >
                <GitHubIcon />
              </a>
              <a
                href={c.t.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={s.data__socialItem}
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${c.t.contacts.email}`}
                className={s.data__socialItem}
              >
                <EmailIcon />
              </a>
              <a
                href={c.t.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={s.data__socialItem}
              >
                <TelegramIcon />
              </a>
            </div>
            <DownloadResumeBtn />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div id={PAGES.ABOUT} className={s.container}>
      <div className={s.data}>
        <div className={s.data__brief}>
          <div className={s.data__title}>{c.t.about.brief.name}</div>
          <div className={s.data__occupation}>{c.t.about.brief.occupation}</div>
          <div className={s.data__moto}>{c.t.about.brief.moto}</div>
          <div className={s.data__socials}>
            <a
              href={c.t.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={s.data__socialItem}
            >
              <GitHubIcon />
            </a>
            <a
              href={c.t.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={s.data__socialItem}
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${c.t.contacts.email}`}
              className={s.data__socialItem}
            >
              <EmailIcon />
            </a>
            <a
              href={c.t.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={s.data__socialItem}
            >
              <TelegramIcon />
            </a>
          </div>
          <DownloadResumeBtn />
        </div>
        <div className={s.data__summary}>
          <span dangerouslySetInnerHTML={{ __html: c.t.about.summary.first }} />
          <br />
          <br />
          <span
            dangerouslySetInnerHTML={{ __html: c.t.about.summary.second }}
          />
          <br />
          <br />
          <span dangerouslySetInnerHTML={{ __html: c.t.about.summary.third }} />
        </div>
      </div>
    </div>
  );
};
