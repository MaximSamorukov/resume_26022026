import { CHECK_IP_URL } from "@/constants";

type Response = {
  id: string;
  city: string;
  country_name: string;
  languages: string[];
};

export const checkClientData = async (): Promise<Response> => {
  const response = await fetch(CHECK_IP_URL)
    .then((d) => d.json())
    .then((data) => {
      console.log(data);
      const { id, city, country_name, languages } = data;
      return { id, city, country_name, languages };
    });
  return response;
};
