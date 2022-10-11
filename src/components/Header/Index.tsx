import { AddUrl } from "./AddUrl";
import { ConfirmUrl } from "./ConfirmUrl";

export const Header = () => {
  return (
    <header className="w-full relative">
      <AddUrl />
      <ConfirmUrl />
    </header>
  );
};
