import { useEffect, useState } from "react";
import { checkClientData } from "../checkIp";
import { useTranslation } from "@/providers/translations";

type Response = {
  ip: string | null;
  city: string | null;
  country_name: string | null;
  languages: string | null;
};

export const useCheckClientData = () => {
  const [data, setData] = useState<Response | null>();
  const c = useTranslation();
  useEffect(() => {
    checkClientData().then((d) => {
      setData(d);
      const { languages } = d;
      if ((languages || "").includes("ru-RU")) {
        c.setCurrentLanguage("ru");
      } else {
        c.setCurrentLanguage("en");
      }
    });
  }, []);
  return data;
};
