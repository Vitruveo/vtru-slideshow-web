import { ASSET_STORAGE_URL, GENERAL_STORAGE_URL } from "../constants";

export const buildAssetURL = (path: string) => {
  return `${ASSET_STORAGE_URL}/${path}`;
};

export const buildGeneralURL = (path: string) => {
  return `${GENERAL_STORAGE_URL}/${path}`;
};

export const getSeconds = () => {
  const url = new URL(window.location.href);
  const seconds = url.searchParams.get("time");

  if (seconds) {
    const parsed = parseInt(seconds);
    return parsed;
  }

  return 20;
};

export const getLayout = () => {
  const url = new URL(window.location.href);
  const layout = url.searchParams.get("layout") as
    | "horizontal"
    | "vertical"
    | null;

  if (layout) {
    return layout;
  }

  return "horizontal";
};

export const getNudity = () => {
  const url = new URL(window.location.href);
  const nudity = url.searchParams.get("nudity") as "yes" | "no" | null;

  if (nudity === "yes") {
    return nudity;
  }

  return "no";
};
