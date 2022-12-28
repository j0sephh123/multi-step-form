import { PropsWithChildren, useState } from "react";
import Checkbox from "./Checkbox";

type Props = {
  isActive: boolean;
  title: string;
  subtitle: string;
  onChange: () => void;
}&PropsWithChildren;

export default function Option({ isActive, title, subtitle, onChange , children}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(true);
  };
  const resetIsClicked = () => {
    setIsClicked(false);
  };

  return (
    <div
      onClick={onClick}
      className={`addOns__option ${
        isActive ? "addOns__option--isActive" : ""
      }`}
      key={title}
    >
      <Checkbox
        isClicked={isClicked}
        resetIsClicked={resetIsClicked}
        onChange={onChange}
        checked={isActive}
      />
      <div className="addOns__option--info">
        <div className="addOns__option--info-title">{title}</div>
        <div className="addOns__option--info-subtitle">{subtitle}</div>
      </div>
      <div className="addOns__option--price">{children}</div>
    </div>
  );
}
