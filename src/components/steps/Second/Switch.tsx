type Props = {
  checkedIndex: number;
  onClick: () => void;
  options: [string, string];
};

export default function Switch({ checkedIndex, onClick, options }: Props) {
  return (
    <div className="switchWrapper">
      <div
        className={`switchWrapper__label ${
          checkedIndex === 1 ? "" : "switchWrapper__label--checked"
        }`}
      >
        {options[0]}
      </div>
      <label className="switch">
        <input
          onChange={onClick}
          type="checkbox"
          checked={checkedIndex === 1}
        />
        <span className="slider round"></span>
      </label>
      <div
        className={`switchWrapper__label ${
          checkedIndex === 1 ? "switchWrapper__label--checked" : ""
        }`}
      >
        {options[1]}
      </div>
    </div>
  );
}
