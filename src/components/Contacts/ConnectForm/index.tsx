import React, { useCallback } from "react";
import s from "./style.module.scss";
import { InputItem } from "./InputItem";
import { useTranslation } from "@/providers/translations";
import {
  sendNotificationOnRequest,
  type NotificationData,
} from "@/utils/checkIp";

type ConnectFormPropsType = {
  translateKey: string;
};

export const ConnectForm: React.FC<ConnectFormPropsType> = ({
  translateKey,
}) => {
  const c = useTranslation();
  const l = c.t[translateKey as keyof typeof c.t];
  const {
    // @ts-ignore
    form: { title, subtitle, question, contact, submit },
  } = l;
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    sendNotificationOnRequest(formObject as NotificationData);
    e.currentTarget.reset();
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <div className={s.container}>
        <div className={s.container__title}>{title}</div>
        <div className={s.container__subtitle}>{subtitle}</div>
        <div className={s.container__question}>
          <InputItem
            placeholder={question.placeholder}
            name="question"
            type="textarea"
            label={question.label}
          />
        </div>
        <div className={s.container__contact}>
          <InputItem
            placeholder={contact.placeholder}
            name="contact"
            type="input:text"
            label={contact.label}
          />
        </div>
        <div className={s.container__control}>
          <InputItem
            placeholder=""
            name="submit_btn"
            type="submit"
            label={submit.label}
          />
        </div>
      </div>
    </form>
  );
};
