import { ASSET_STORAGE_URL, GENERAL_STORAGE_URL } from "../constants";

export const buildAssetURL = ({
  path,
  image,
  isVideo,
}: {
  path: string;
  image: string;
  isVideo: boolean;
}) => {
  return isVideo ? `${ASSET_STORAGE_URL}/${path}` : image;
};

export const buildGeneralURL = (path: string) => {
  return `${GENERAL_STORAGE_URL}/${path}`;
};

export const getHasStack = () => {
  const url = new URL(window.location.href);
  const hasStack = url.searchParams.get("stack");

  if (hasStack) {
    return hasStack;
  }

  return "";
};

export const getSlideshowId = () => {
  const url = new URL(window.location.href);
  const slideshowId = url.searchParams.get("slideshow");

  if (slideshowId) {
    return slideshowId;
  }

  return "";
};
