import { PropsWithChildren } from "react";

type Props = {
  name: string;
} & PropsWithChildren;

export default function Field({ children, name }: Props) {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {name}
      </label>
      {children}
    </div>
  );
}
