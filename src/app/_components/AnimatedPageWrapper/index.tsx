"use client";
import { ReactNode, useState, useEffect } from "react";
import cx from "classnames";
import {
  innerWrapper,
  pageWrapper,
  scrollingBackground,
} from "./AnimatedPageWrapper.css";

export function AnimatedPageWrapper({ children }: { children: ReactNode }) {
  const [animateBackground, setAnimateBackground] = useState(false);

  useEffect(() => {
    // const listener: Parameters<
    //   typeof window.addEventListener<"load">
    // >[1] = () => {
    //   setAnimateBackground(true);
    // };
    // window.addEventListener("load", listener);
    // return () => window.removeEventListener("load", listener);
    setAnimateBackground(true);
  }, []);

  const wrapperClasses = cx(pageWrapper, {
    [scrollingBackground]: animateBackground,
  });

  return (
    <div className={wrapperClasses}>
      <div className={innerWrapper}>{children}</div>
    </div>
  );
}
