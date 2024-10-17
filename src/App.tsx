import { useEffect, useState } from "react";
import {
  APIResponseInterface,
  ArtInterface,
  DisplayOptions,
  WindowOrientation,
} from "./types";
import { Loading } from "./components/Loading";
import { HorizontalLayout } from "./layouts/HorizontalLayout";
import { buildAssetURL, getSlideshowId, getHasStack } from "./utils";
import { VerticalLayout } from "./layouts/VerticalLayout";
import { API_URL, SEARCH_URL } from "./constants";
import packageInfo from "../package.json";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  console.log("Version: ", packageInfo.version);

  const [allArts, setAllArts] = useState<ArtInterface[]>([]);
  const [arts, setArts] = useState<ArtInterface[]>([]);
  const [time, setTime] = useState<number>(0);
  const [display, setDisplay] = useState<DisplayOptions>("alternate");
  const [isLoading, setIsLoading] = useState(true);
  const [currentArtIndex, setCurrentArtIndex] = useState(0);
  const [windowOrientation, setWindowOrientation] =
    useState<WindowOrientation>("horizontal");
  const [alternateSettings, setAlternateSettings] = useState({
    horizontal: 0,
    vertical: 0,
  });

  const slideshowId = getSlideshowId();
  const hasStack = getHasStack();

  const checkOrientation = () => {
    if (window.innerWidth > window.innerHeight) {
      setWindowOrientation("horizontal");
    } else {
      setWindowOrientation("vertical");
    }
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  /* Buscar as imagens da API */
  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await fetch(
          `${API_URL}/assets/slideshow/${slideshowId}`
        );
        const { data } = (await response.json()) as APIResponseInterface;

        setAllArts(data.assets);
        setTime(Number.isNaN(data.interval) ? 10 : data.interval);
        setDisplay(data.display.toLowerCase() as DisplayOptions);

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArts();
  }, [slideshowId]);

  useEffect(() => {
    const filteredArts = allArts.filter(
      (art) =>
        art.orientation === windowOrientation || art.orientation === "square"
    );
    setArts(filteredArts);
  }, [allArts, windowOrientation]);

  useEffect(() => {
    if (arts.length > 0) {
      const interval = setInterval(() => {
        setCurrentArtIndex((prevIndex) => (prevIndex + 1) % arts.length);
      }, time * 1000);
      return () => clearInterval(interval);
    }
  }, [arts, time]);

  useEffect(() => {
    if (display === "alternate") {
      if (windowOrientation === "horizontal") {
        setAlternateSettings((prevSettings) => ({
          ...prevSettings,
          horizontal: prevSettings.horizontal + 1,
        }));
      } else {
        setAlternateSettings((prevSettings) => ({
          ...prevSettings,
          vertical: prevSettings.vertical + 1,
        }));
      }
    }
  }, [currentArtIndex, display, windowOrientation]);

  if (isLoading) return <Loading />;

  /** Só devem ser calculados após o load */
  const currentArt = arts[currentArtIndex];
  const QRCodeValue = `${SEARCH_URL}?slideshow=${slideshowId}`;

  const nextArtIndex =
    currentArtIndex === arts.length - 1 ? 0 : currentArtIndex + 1;

  const preAssetImage = buildAssetURL(arts[nextArtIndex]?.image);
  const preAvatarImage = arts[nextArtIndex]?.avatar;

  if (arts.length === 0)
    return (
      <DefaultLayout
        QrCode={QRCodeValue}
        windowOrientation={windowOrientation}
      />
    );

  if (windowOrientation === "vertical") {
    return (
      <VerticalLayout
        {...currentArt}
        preAsset={preAssetImage}
        QRCodeValue={QRCodeValue}
        preAvatar={preAvatarImage}
        display={display}
        alternativeSetting={alternateSettings.vertical}
        hasStack={!!hasStack}
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
      alternativeSetting={alternateSettings.horizontal}
      hasStack={!!hasStack}
    />
  );
}
