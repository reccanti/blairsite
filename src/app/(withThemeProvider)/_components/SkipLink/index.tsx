import { Button } from "@/components/Button";
import { skipLinkWrapper } from "./SkipLink.css";

export function SkipLink() {
  return (
    <div className={skipLinkWrapper}>
      <Button href="#main" color="Inverted">
        Skip to content
      </Button>
    </div>
  );
}
