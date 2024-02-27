import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import {
  pageWrapper,
  scrollingBackground,
  splash,
  splashHeader,
} from "./page.css";

export default function Home() {
  return (
    <main className={pageWrapper}>
      <section className={splash}>
        <header className={splashHeader}>
          <Header renderAs="h1" size={3}>
            Blair Makes <wbr />
            <Highlight color="labelHighlightMagenta">Cool Things</Highlight>
          </Header>
        </header>
      </section>
    </main>
  );
}
