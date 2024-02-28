import Image from "next/image";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import {
  about,
  contentWrapper,
  sectionContent,
  sectionHeader,
  sectionImage,
  sectionImageImg,
  splash,
  splashHeader,
} from "@/app/page.css";
import { Tile } from "@/components/Tile";

import ProfilePicture from "../../public/assets/ProfilePicture.png";
import AboutContent from "@/data/homepage/about.mdx";
import { desktopSize, tabletSize } from "@/themes/utlities/breakpoints.css";

export default function Home() {
  return (
    <main>
      <section className={splash}>
        <header className={splashHeader}>
          <Header renderAs="h1" size={3}>
            Blair Makes <wbr />
            <Highlight color="labelHighlightMagenta">Cool Things</Highlight>
          </Header>
        </header>
      </section>
      <div className={contentWrapper}>
        <section className={about}>
          <Tile color="backgroundRed" className={sectionHeader}>
            <Header renderAs="h2" size={3}>
              Who's this gal?
            </Header>
          </Tile>
          <Tile fullWidth className={sectionImage}>
            <Image
              src={ProfilePicture.src}
              className={sectionImageImg}
              alt="Profile picture of me, Blair"
              fill
              sizes={`
                (min-width: ${desktopSize}) 400px,
                (min-width: ${tabletSize}) 50vw,
                100vw
                `}
            />
          </Tile>
          <Tile className={sectionContent}>
            <AboutContent />
          </Tile>
        </section>
      </div>
    </main>
  );
}
