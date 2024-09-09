import { ASSET_STORAGE_URL, GENERAL_STORAGE_URL } from "../constants";

export const buildAssetURL = (path: string) => {
  return `${ASSET_STORAGE_URL}/${path}`;
};

export const buildGeneralURL = (path: string) => {
  return `${GENERAL_STORAGE_URL}/${path}`;
};

export const getSlideshowId = () => {
  const url = new URL(window.location.href);
  const slideshowId = url.searchParams.get("slideshow");

  if (slideshowId) {
    return slideshowId;
  }

  return "";
};
