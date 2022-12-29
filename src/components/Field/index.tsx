import { PropsWithChildren } from "react";

type Props = {
  name: string;
  hasError: boolean;
} & PropsWithChildren;

// Red Errors

export default function Field({ children, name, hasError }: Props) {
  return (
    <div className="field">
      <div className="field__label">
        <label className="field__label--name" htmlFor={name}>
          {name}
        </label>
        {hasError && <div className="field__label--error">error</div>}
      </div>
      {children}
    </div>
  );
}
