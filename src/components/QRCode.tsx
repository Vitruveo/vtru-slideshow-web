import { QRCodeSVG } from "qrcode.react";
import { IconLabel } from "./IconLabel";
import { IconCamera } from "@tabler/icons-react";

interface QRCodeProps {
  size?: number;
  value: string;
}

export const QRCode = ({ size = 128, value }: QRCodeProps) => {
  const logoSize = size * 0.25;

  return (
    <div className="flex flex-col gap-4 items-center">
      <IconLabel icon={<IconCamera color="white" />}>Scan QR Code</IconLabel>
      <QRCodeSVG
        imageSettings={{
          src: "logo-vtru.png",
          height: logoSize,
          width: logoSize,
          excavate: true,
        }}
        value={value}
        size={size}
        bgColor="transparent"
        fgColor="white"
        className="w-full"
      />
    </div>
  );
};
