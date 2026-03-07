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
        fetch("https://check-client-app.vercel.app/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, city, country_name, languages }),
        }).catch(console.error);
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
