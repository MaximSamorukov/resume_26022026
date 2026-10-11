import { memo } from "react";
import resume from "@/assets/resume/Резюме_frontend_Саморуков.pdf";
import s from "./style.module.scss";
import { useTranslation } from "@/providers/translations";
export const DownloadResumeBtn = memo(({ id }: { id: string }) => {
  const c = useTranslation();

  const onClick = () => {
    const atag = document.createElement("a");
    atag.href = resume;
    atag.download = c.t.common.page.contacts.resumeName;
    atag.click();
  };
  return (
    <div id={id} onClick={onClick} className={s.container}>
      Resume
    </div>
  );
});
