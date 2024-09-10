import { QRCodeSVG } from "qrcode.react";
import { IconCamera } from "@tabler/icons-react";

interface QRCodeProps {
  size?: number;
  value: string;
}

export const QRCode = ({ size = 128, value }: QRCodeProps) => {
  const logoSize = size * 0.25;

  return (
    <div className="flex flex-col gap-4 items-center max-w-[60%] mx-auto">
      <div className="flex items-center gap-2">
        <IconCamera color="white" size={40} />
        <p>Scan QR Code</p>
      </div>
      <QRCodeSVG
        imageSettings={{
          src: "logo-vtru.png",
          height: logoSize,
          width: logoSize,
          excavate: true,
        }}
        value={value}
        bgColor="transparent"
        fgColor="white"
        className="w-full"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};
