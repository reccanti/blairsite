import { ReactNode } from "react";
import { printWrapper } from "./PrintWrapper.css";

export function PrintWrapper({ children }: { children?: ReactNode }) {
  return <div className={printWrapper}>{children}</div>;
}
