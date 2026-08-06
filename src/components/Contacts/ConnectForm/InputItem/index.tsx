import React from "react";
import s from "./style.module.scss";

type InputType = "textarea" | "input:text" | "submit";

type InputItemPropsType = {
  type: InputType;
  label: string;
  name: "question" | "contact" | "submit_btn";
  placeholder: string;
};

export const InputItem: React.FC<InputItemPropsType> = ({
  type,
  label,
  name,
  placeholder,
}) => {
  if (type === "textarea") {
    return (
      <div className={s.textAreaContainer}>
        <div className={s.textAreaContainer__label}>{label}</div>
        <div className={s.textAreaContainer__input}>
          <textarea
            name={name}
            placeholder={placeholder}
            className={s.textAreaContainer__inputField}
          />
        </div>
      </div>
    );
  }
  if (type === "input:text") {
    return (
      <div className={s.inputTextContainer}>
        <div className={s.inputTextContainer__label}>{label}</div>
        <div className={s.inputTextContainer__input}>
          <input
            name={name}
            placeholder={placeholder}
            className={s.inputTextContainer__inputField}
            type="text"
          />
        </div>
      </div>
    );
  }
  if (type === "submit") {
    return (
      <div className={s.submitContainer}>
        <button type={type} className={s.submitContainer__button}>
          {label}
        </button>
      </div>
    );
  }
  return <></>;
};
