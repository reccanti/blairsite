"use client";
import { Button } from "@/components/Button";
import PrintIcon from "@/components/Icons/PrintIcon";
import { printButtonWrapper } from "./PrintButton.css";

export function PrintButton() {
  return (
    <div className={printButtonWrapper}>
      <Button color="Inverted" onClick={print}>
        <PrintIcon />
        Save / Print
      </Button>
    </div>
  );
}
