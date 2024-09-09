import { PopupAnimation } from "../animations";
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
  asset,
  creator,
  QRCodeValue,
  preAsset,
  preAvatar,
}: LayoutInterface) => {
  const assetSrc = buildAssetURL(asset.image);

  return (
    <LayoutContainer className="px-0 pb-0">
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
        <footer className="flex justify-center p-4 mt-4 bg-[rgba(0,0,0,0.67)]">
          <div className="flex justify-between items-center w-full max-w-screen-xl">
            <PopupAnimation key={Date.now() + 1}>
              <CreatorInformation
                className="w-[100px]"
                username={creator.username}
                avatar={creator.avatar}
                preAvatar={preAvatar}
              />
            </PopupAnimation>
            <div className="flex flex-col gap-2">
              <Description description={asset.title} />
            </div>

            <PopupAnimation key={Date.now() + 2}>
              <QRCode value={QRCodeValue} />
            </PopupAnimation>
          </div>
        </footer>
      </main>
    </LayoutContainer>
  );
};
