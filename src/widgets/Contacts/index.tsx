import { useTranslation } from "@/providers/translations";
import resume from "@/assets/resume/Резюме_frontend_Саморуков.pdf";
import s from "./style.module.scss";
import { PAGES } from "@/constants";

export const Contacts = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.CONTACTS} className={s.container}>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle.contacts}</div>
        <div className={s.data__contacts}>
          <div className={s.data__contactItem}>
            <span>Telegram:</span>
            <a
              href={c.t.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.t.contacts.telegramName}
            </a>
          </div>
          <div className={s.data__contactItem}>
            <span>LinkedIn:</span>
            <a
              href={c.t.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.t.contacts.linkedin}
            </a>
          </div>
          <div className={s.data__contactItem}>
            <span>Github:</span>
            <a
              href={c.t.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.t.contacts.github}
            </a>
          </div>
          <div className={s.data__contactItem}>
            <span>Email:</span>
            <a href={`mailto:${c.t.contacts.email}`}>{c.t.contacts.email}</a>
          </div>
          <div className={s.data__contactItem}>
            <span>Phone:</span>
            <a href={c.t.contacts.tel}>{c.t.contacts.phone}</a>
          </div>
          <div className={s.data__contactItem}>
            <span>Resume:</span>
            <a href={resume} download="Резюме_frontend_Саморуков.pdf">
              {c.t.common.page.contacts.download}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
