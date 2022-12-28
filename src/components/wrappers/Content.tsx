import { PropsWithChildren, ReactNode } from "react";

type Props = {
  controls: ReactNode;
} & PropsWithChildren;

export default function Content({ children, controls }: Props) {
  return (
    <div className="content__wrapper">
      <div className="content">{children}</div>
      {controls}
    </div>
  );
}
