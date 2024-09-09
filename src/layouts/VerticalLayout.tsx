import { PopupAnimation, SlideLeftAnimation } from "../animations";
import {
  BackgroundOverlay,
  MediaRenderer,
  LayoutContainer,
  QRCode,
  CreatorInformation,
  Description,
} from "../components";
import { LayoutInterface } from "../types";
import { buildAssetURL } from "../utils";

export const VerticalLayout = ({
  image,
  title,
  username,
  avatar,
  QRCodeValue,
  preAsset,
  preAvatar,
}: LayoutInterface) => {
  const assetSrc = buildAssetURL(image);

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

      <main className="flex-1 grid grid-rows-[minmax(50%,auto),auto]">
        <PopupAnimation className="mx-auto w-fit" key={Date.now()}>
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
              username={username}
              avatar={avatar}
              preAvatar={preAvatar}
            />
            <Description description={title} />
          </div>
        </SlideLeftAnimation>

        <PopupAnimation key={Date.now() + 1}>
          <QRCode value={QRCodeValue} />
        </PopupAnimation>
      </aside>
    </LayoutContainer>
  );
};
