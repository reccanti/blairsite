import Image from "next/image";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import {
  about,
  contentWrapper,
  project,
  projectContent,
  projectHeader,
  projectList,
  projects,
  sectionContent,
  sectionHeader,
  sectionImage,
  sectionImageImg,
  splash,
  splashHeader,
} from "@/app/page.css";
import { Tile } from "@/components/Tile";

import ProfilePicture from "../../public/assets/ProfilePicture.png";
import { desktopSize, tabletSize } from "@/themes/utlities/breakpoints.css";
import Markdown from "react-markdown";

import aboutContent from "@/data/homepage/about.md";
import projectSummaryContent from "@/data/homepage/projects/summary.md";
import projectHomebaseThemerContent from "@/data/homepage/projects/homebase-themer.md";

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
              Who&#39;s this gal?
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
            <Markdown>{aboutContent}</Markdown>
          </Tile>
        </section>
        <section className={projects}>
          <Tile color="backgroundYellow" className={sectionHeader}>
            <Header renderAs="h2" size={3}>
              Cool Stuff I&#39;ve Worked on
            </Header>
          </Tile>
          <Tile className={sectionContent}>
            <Markdown>{projectSummaryContent}</Markdown>
          </Tile>
          <dl className={projectList}>
            <div className={project}>
              <Tile
                renderAs="dt"
                color="backgroundMagenta"
                className={projectHeader}
              >
                <Header renderAs="h3" size={4}>
                  Homebase Themer
                </Header>
              </Tile>
              <Tile renderAs="dd" className={projectContent}>
                <Markdown>{projectHomebaseThemerContent}</Markdown>
              </Tile>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
