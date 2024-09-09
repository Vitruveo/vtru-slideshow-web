export interface ArtInterface {
  _id: string;
  title: string;
  image: string;
  orientation: string;
  avatar: string;
  username: string;
}

export interface CreatorInterface {
  avatar?: string;
  username: string;
  preAvatar?: string;
  className: string;
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
