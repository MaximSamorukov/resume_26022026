import { memo } from "react";
import resume from "@/assets/resume/Резюме_frontend_Саморуков.pdf";
import s from "./style.module.scss";
export const DownloadResumeBtn = memo(() => {
  const onClick = () => {
    const atag = document.createElement("a");
    atag.href = resume;
    atag.download = "Резюме_frontend_Саморуков.pdf";
    atag.click();
  };
  return (
    <div onClick={onClick} className={s.container}>
      Resume
    </div>
  );
});
