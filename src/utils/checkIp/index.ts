import { CHECK_IP_URL } from "@/constants";

type Response = {
  ip: string | null;
  city: string | null;
  country_name: string | null;
  languages: string | null;
};
const SERVER_URL = "https://check-client-app.vercel.app/api/resume"; // "http://localhost:3000/api/resume";
export const checkClientData = async (): Promise<Response> => {
  try {
    const response = await fetch(CHECK_IP_URL)
      .then((d) => d.json())
      .then((data) => {
        const { ip, city, country_name, languages } = data;
        fetch(SERVER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip, city, country_name, languages }),
        }).catch(console.error);
        return { ip, city, country_name, languages };
      });
    return response;
  } catch {
    const errorObject = {
      ip: null,
      city: null,
      country_name: null,
      languages: null,
    };
    fetch(SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(errorObject),
    }).catch(console.error);
    return errorObject;
  }
};
