import { Tile } from "@/components/Tile";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { header } from "./SiteHeader.css";

export function SiteHeader() {
  return (
    <Tile renderAs="header" fullWidth color="backgroundInverted">
      <Button href="/" color="Inverted">
        <h1 className={header}>
          Blair Makes{" "}
          <Highlight color="labelHighlightMagenta">Cool Things</Highlight>
        </h1>
      </Button>
      <Button color="Inverted"></Button>
    </Tile>
  );
}
