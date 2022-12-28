import { useState } from "react";
import Checkbox from "./Checkbox";

type Props = {
  isActive: boolean;
  title: string;
  subtitle: string;
  onChange: () => void;
};

export default function Option({ isActive, title, subtitle, onChange }: Props) {
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
      className={`thirdStep__option ${
        isActive ? "thirdStep__option--isActive" : ""
      }`}
      key={title}
    >
      <Checkbox
        isClicked={isClicked}
        resetIsClicked={resetIsClicked}
        onChange={onChange}
        checked={isActive}
      />
      <div className="thirdStep__option--info">
        <div className="thirdStep__option--info-title">{title}</div>
        <div className="thirdStep__option--info-subtitle">{subtitle}</div>
      </div>
      <div className="thirdStep__option--price">+$2/mo</div>
    </div>
  );
}
