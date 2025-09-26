interface MediaRendererProps {
  src: string;
  isImage: boolean;
  isVideo: boolean;
}

export const MediaRenderer = ({
  src,
  isImage,
  isVideo,
}: MediaRendererProps) => {
  if (isVideo) {
    return (
      <video autoPlay muted loop>
        <source
          src={src}
          type="video/mp4"
          className="w-full h-full object-contain object-center"
        />
      </video>
    );
  }

  if (isImage) {
    return (
      <img
        src={src}
        alt="asset"
        className="w-full h-full object-contain object-center"
      />
    );
  }

  return <h1>Unsupported media type</h1>;
};
