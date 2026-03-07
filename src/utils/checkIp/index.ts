import { CHECK_IP_URL } from "@/constants";

type Response = {
  id: string | null;
  city: string | null;
  country_name: string | null;
  languages: string[];
};

export const checkClientData = async (): Promise<Response> => {
  try {
    const response = await fetch(CHECK_IP_URL)
      .then((d) => d.json())
      .then((data) => {
        const { id, city, country_name, languages } = data;
        return { id, city, country_name, languages };
      });
    return response;
  } catch {
    return {
      id: null,
      city: null,
      country_name: null,
      languages: [],
    };
  }
};
