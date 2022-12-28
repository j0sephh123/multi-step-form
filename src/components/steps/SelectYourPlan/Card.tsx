import { PropsWithChildren } from "react";

type Props = {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
} & PropsWithChildren;

export default function Card({
  icon,
  label,
  isActive,
  onClick,
  children,
}: Props) {
  return (
    <div onClick={onClick} className={`card ${isActive ? "isActive" : ""}`}>
      <img width={40} src={icon} />
      <div className="card__text">
        <div className="card__text--label">{label}</div>
        <div className="card__text--offer">{children}</div>
      </div>
    </div>
  );
}
