import { PopupAnimation } from "../animations";
import { QRCode } from "../components";

interface DefaultLayoutProps {
  QrCode: string;
}

export default function DefaultLayout({ QrCode }: DefaultLayoutProps) {
  return (
    <div className="h-full w-full bg-black grid place-items-center">
      <img src="logo.png" alt="vtru logo" />
      <PopupAnimation key={Date.now() + 1}>
        <QRCode value={QrCode} />
      </PopupAnimation>
    </div>
  );
}
