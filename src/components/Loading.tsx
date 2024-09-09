import { HueAnimation } from "../animations";

export const Loading = () => {
  return (
    <div className="h-full w-full bg-black grid place-items-center">
      <HueAnimation>
        <img src="logo.png" alt="Loading..." />
      </HueAnimation>
    </div>
  );
};
