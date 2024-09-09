export interface AssetInterface {
  image: string;
  title: string;
  description: string;
}

export interface CreatorInterface {
  avatar?: string;
  username: string;
  preAvatar?: string;
}

export interface ArtInterface {
  _id: string;
  asset: AssetInterface;
  creator: CreatorInterface;
}

export interface APIResponseInterface {
  code: string;
  message: string;
  transaction: string;
  data: ArtInterface[];
}

export interface LayoutInterface extends Omit<ArtInterface, "_id"> {
  QRCodeValue: string;
  preAsset: string;
  preAvatar?: string;
}
