/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { APIResponseInterface, ArtInterface } from "./types";
import { Loading } from "./components/Loading";
import { HorizontalLayout } from "./layouts/HorizontalLayout";
import { buildAssetURL, getSlideshowId } from "./utils";
import { VerticalLayout } from "./layouts/VerticalLayout";
import { API_URL, SEARCH_URL } from "./constants";
import packageInfo from "../package.json";

export default function App() {
  console.log("Version: ", packageInfo.version);
  const [arts, setArts] = useState<ArtInterface[]>([]);
  const [time, setTime] = useState<number>(0);
  const [display, setDisplay] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentArtIndex, setCurrentArtIndex] = useState(0);

  const slideshowId = getSlideshowId();

  /* Buscar as imagens da API */
  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await fetch(
          `${API_URL}/assets/slideshow/${slideshowId}`
        );
        const { data } = (await response.json()) as APIResponseInterface;

        setArts(data.assets);
        setTime(data.interval);
        setDisplay(data.display.toLowerCase());

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArts();
  }, []);

  useEffect(() => {
    if (arts.length > 0) {
      const interval = setInterval(() => {
        setCurrentArtIndex((prevIndex) => (prevIndex + 1) % arts.length);
      }, time * 1000);
      return () => clearInterval(interval);
    }
  }, [arts, time]);

  if (isLoading || arts.length < 1) {
    return <Loading />;
  }

  /** Só devem ser calculados após o load */
  const currentArt = arts[currentArtIndex];
  const QRCodeValue = `${SEARCH_URL}?slideshow=${slideshowId}`;

  const nextArtIndex =
    currentArtIndex === arts.length - 1 ? 0 : currentArtIndex + 1;

  const preAssetImage = buildAssetURL(arts[nextArtIndex]?.image);
  const preAvatarImage = arts[nextArtIndex]?.avatar;

  if (currentArt.orientation === "vertical") {
    return (
      <VerticalLayout
        {...currentArt}
        preAsset={preAssetImage}
        QRCodeValue={QRCodeValue}
        preAvatar={preAvatarImage}
        display={display}
      />
    );
  }

  return (
    <HorizontalLayout
      {...currentArt}
      preAsset={preAssetImage}
      QRCodeValue={QRCodeValue}
      preAvatar={preAvatarImage}
      display={display}
    />
  );
}
