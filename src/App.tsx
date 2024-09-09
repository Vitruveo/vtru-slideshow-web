/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { APIResponseInterface, ArtInterface } from "./types";
import { Loading } from "./components/Loading";
import { HorizontalLayout } from "./layouts/HorizontalLayout";
import { buildAssetURL, getLayout, getNudity, getSeconds } from "./utils";
import { VerticalLayout } from "./layouts/VerticalLayout";
import { API_URL, STORE_URL } from "./constants";

export default function App() {
  const [arts, setArts] = useState<ArtInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentArtIndex, setCurrentArtIndex] = useState(0);

  const layout = getLayout();
  const nudity = getNudity();

  /* Buscar as imagens da API */
  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await fetch(
          `${API_URL}/assets/public/carousel?layout=${layout}&nudity=${nudity}`
        );
        const { data } = (await response.json()) as APIResponseInterface;

        setArts(data);

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
    const interval = setInterval(() => {
      const isLastArt = currentArtIndex === arts.length - 1;
      const nextIndex = isLastArt ? 0 : currentArtIndex + 1;
      setCurrentArtIndex(nextIndex);
    }, getSeconds() * 1000);
    return () => clearInterval(interval);
  }, [currentArtIndex, arts, isLoading, getSeconds]);

  if (isLoading || arts.length < 1) {
    return <Loading />;
  }

  /** Só devem ser calculados após o load */
  const currentArt = arts[currentArtIndex];
  const QRCodeValue = `${STORE_URL}/${currentArt.creator.username}/${currentArt._id}`;

  const nextArtIndex =
    currentArtIndex === arts.length - 1 ? 0 : currentArtIndex + 1;

  const preAssetImage = buildAssetURL(arts[nextArtIndex].asset.image);
  const preAvatarImage = arts[nextArtIndex].creator?.avatar;

  if (layout === "vertical") {
    return (
      <VerticalLayout
        {...currentArt}
        preAsset={preAssetImage}
        QRCodeValue={QRCodeValue}
        preAvatar={preAvatarImage}
      />
    );
  }

  return (
    <HorizontalLayout
      {...currentArt}
      preAsset={preAssetImage}
      QRCodeValue={QRCodeValue}
      preAvatar={preAvatarImage}
    />
  );
}
