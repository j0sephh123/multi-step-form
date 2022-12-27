import { ReactNode } from "react";

type Props = {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Card({ icon, label, isActive,onClick }: Props) {
  return (
    <div onClick={onClick} className={`card ${isActive ? "isActive" : ""}`}>
      <img width={40} src={icon} />
      <div className="card__text">
        <div className="card__text--label">{label}</div>
        <div className="card__text--offer">$9/mo</div>
      </div>
    </div>
  );
}
