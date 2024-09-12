import { PopupAnimation } from "../animations";
import { QRCode } from "../components";

interface DefaultLayoutProps {
  QrCode: string;
  windowOrientation: string;
}

export default function DefaultLayout({
  QrCode,
  windowOrientation,
}: DefaultLayoutProps) {
  return (
    <div className="h-full w-full bg-black grid place-items-center">
      <img src="logo.png" alt="vtru logo" />
      <h2>You don't have digital asssets in {windowOrientation} orientation</h2>
      <PopupAnimation key={Date.now() + 1}>
        <QRCode value={QrCode} windowOrientation={windowOrientation} />
      </PopupAnimation>
    </div>
  );
}
