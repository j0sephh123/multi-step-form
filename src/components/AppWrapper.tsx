import { PropsWithChildren } from "react";

export default function AppWrapper({ children }: PropsWithChildren) {
  return (
    <div className="app">
      <div className="main">{children}</div>
    </div>
  );
}
