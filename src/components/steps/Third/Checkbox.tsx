import { useEffect } from "react";

type Props = {
  checked: boolean;
  onChange: any;
  isClicked: boolean;
  resetIsClicked: any;
};

export default function Checkbox({ checked, onChange, isClicked, resetIsClicked }: Props) {
  
  useEffect(() => {
    if (isClicked) {
      onChange();
      resetIsClicked();
    }
  }, [isClicked])

  return (
    <div className="checkboxWrapper">
      <label className="container">
        <input onChange={onChange} type="checkbox" checked={checked} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}
