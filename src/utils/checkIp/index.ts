import {
  CHECK_IP_URL,
  MUTE,
  SERVER_URL,
  SERVER_URL_NOTIFICATION,
  SERVER_VIDEO_URL,
} from "@/constants";
import { isLocalhost } from "../checkLocalhost";

type Response = {
  ip: string | null;
  city: string | null;
  country_name: string | null;
  languages: string | null;
};
const nullObject = {
  ip: null,
  city: null,
  country_name: null,
  languages: null,
};
export const checkClientData = async (
  watchingVideo: boolean = false,
): Promise<Response> => {
  if (MUTE || isLocalhost()) return Promise.resolve(nullObject);
  const PATH = watchingVideo ? SERVER_VIDEO_URL : SERVER_URL;
  try {
    const response = await fetch(CHECK_IP_URL)
      .then((d) => d.json())
      .then((data) => {
        const { ip, city, country_name, languages } = data;
        fetch(PATH, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...nullObject,
            ip,
            city,
            country_name,
            languages,
          }),
        }).catch(console.error);
        return { ip, city, country_name, languages };
      });
    return response;
  } catch {
    fetch(PATH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nullObject),
    }).catch(console.error);
    return nullObject;
  }
};

export type NotificationData = {
  question: string;
  contact: string;
};
export const sendNotificationOnRequest = async (
  data: NotificationData,
): Promise<boolean> => {
  if (import.meta.env.DEV) {
    return Promise.resolve(false);
  }
  const { question, contact } = data;
  try {
    fetch(SERVER_URL_NOTIFICATION, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, contact }),
    }).catch(console.error);

    return true;
  } catch {
    return false;
  }
};
