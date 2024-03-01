import { Tile } from "../../../components/Tile";
import { Highlight } from "../../../components/Highlight";
import { Header } from "../../../components/Header";
import Link from "next/link";
import { Button } from "../../../components/Button";

export function SiteHeader() {
  return (
    <Tile renderAs="header" fullWidth color="backgroundInverted">
      <Link href="/">
        <Header renderAs="h1" size={6}>
          Blair Makes{" "}
          <Highlight color="labelHighlightMagenta">Cool Things</Highlight>
        </Header>
      </Link>
      <Button color="Inverted"></Button>
    </Tile>
  );
}
