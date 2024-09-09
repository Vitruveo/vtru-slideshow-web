import { twMerge } from "tailwind-merge";
import { CreatorInterface } from "../types";
import { buildGeneralURL } from "../utils";
import "./index.css";

export const CreatorInformation = ({
  username,
  avatar,
  className,
  preAvatar,
}: CreatorInterface) => {
  return (
    <div className={twMerge("flex flex-col gap-2 items-center", className)}>
      {preAvatar && (
        <img
          src={buildGeneralURL(preAvatar)}
          alt={username + " Pre Avatar"}
          style={{ display: "none" }}
        />
      )}
      {avatar && (
        <img
          src={buildGeneralURL(avatar)}
          alt={username + " Profile Picture"}
          className="w-full aspect-square object-cover rounded-full bg-white"
        />
      )}
      <h2 className="max-w-full usernameText text-center">{username}</h2>
    </div>
  );
};
