import { PopupAnimation, SlideLeftAnimation } from "../animations";
import { LayoutInterface } from "../types";
import { buildAssetURL } from "../utils";
import {
  BackgroundOverlay,
  CreatorInformation,
  LayoutContainer,
  MediaRenderer,
  QRCode,
  Description,
} from "../components";

export const HorizontalLayout = ({
  asset,
  creator,
  QRCodeValue,
  preAsset,
  preAvatar,
}: LayoutInterface) => {
  const assetSrc = buildAssetURL(asset.image);

  return (
    <LayoutContainer>
      <img
        src={preAsset}
        alt="pre-asset"
        style={{
          display: "none",
        }}
      />

      <BackgroundOverlay src={assetSrc} />

      <main className="flex flex-col w-[80vw]">
        <PopupAnimation className="h-full" key={Date.now()}>
          <MediaRenderer src={assetSrc} />
        </PopupAnimation>
      </main>

      <aside className="w-[20vw] flex flex-col justify-between gap-8">
        <SlideLeftAnimation delay={0.2} key={Date.now()}>
          <div className="flex flex-col gap-4 items-center">
            <img
              src="vitruveo-logo.png"
              className="flex-1 object-contain max-w-[50%]"
            />
            <CreatorInformation
              className="max-w-[12vw] self-center"
              username={creator.username}
              avatar={creator.avatar}
              preAvatar={preAvatar}
            />
            <Description description={asset.title} />
          </div>
        </SlideLeftAnimation>

        <PopupAnimation key={Date.now() + 1}>
          <QRCode value={QRCodeValue} />
        </PopupAnimation>
      </aside>
    </LayoutContainer>
  );
};
