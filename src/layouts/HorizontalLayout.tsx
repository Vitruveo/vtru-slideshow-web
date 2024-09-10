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
  avatar,
  image,
  username,
  title,
  QRCodeValue,
  preAsset,
  preAvatar,
  display,
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
      <div style={{ display: "flex", padding: "2.0837%", gap: "2.0837%" }}>
        <main
          className="flex flex-col w-full h-screen m-0 p-0"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <PopupAnimation className="h-full" key={Date.now()}>
            <MediaRenderer src={assetSrc} />
          </PopupAnimation>
        </main>

        {display !== "hide" && (
          <aside
            className="w-[20%] flex flex-col justify-between gap-8 p-8 bg-[rgba(0,0,0,0.67)]"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
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
        )}
      </div>
    </LayoutContainer>
  );
};
