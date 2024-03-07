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

// images
import ProfilePicture from "../../public/assets/ProfilePicture.png";

// logos
import BuildkiteLogo from "../../public/assets/logos/BuildkiteLogo.svg";
import CSSLogo from "../../public/assets/logos/CSSLogo.svg";
import DockerLogo from "../../public/assets/logos/DockerLogo.svg";
import FigmaLogo from "../../public/assets/logos/FigmaLogo.svg";
import GCPLogo from "../../public/assets/logos/GCPLogo.svg";
import GoogleAnalyticsLogo from "../../public/assets/logos/GoogleAnalyticsLogo.svg";
import HTMLLogo from "../../public/assets/logos/HTMLLogo.svg";
import JSLogo from "../../public/assets/logos/JSLogo.svg";
import KubernetesLogo from "../../public/assets/logos/KubernetesLogo.svg";
import LaravelLogo from "../../public/assets/logos/LaravelLogo.svg";
import LookerStudioLogo from "../../public/assets/logos/LookerStudioLogo.svg";
import MagentoLogo from "../../public/assets/logos/MagentoLogo.svg";
import NextJSLogo from "../../public/assets/logos/NextJSLogo.svg";
import NodeJSLogo from "../../public/assets/logos/NodeJSLogo.svg";
import PHPLogo from "../../public/assets/logos/PHPLogo.svg";
import ReactLogo from "../../public/assets/logos/ReactLogo.svg";
import SassLogo from "../../public/assets/logos/SassLogo.svg";
import SketchLogo from "../../public/assets/logos/SketchLogo.svg";
import TerraformLogo from "../../public/assets/logos/TerraformLogo.svg";
import TypescriptLogo from "../../public/assets/logos/TypescriptLogo.svg";
import WordpressLogo from "../../public/assets/logos/WordpressLogo.svg";

import { desktopSize, tabletSize } from "@/themes/utlities/breakpoints.css";
import Markdown from "react-markdown";

import aboutContent from "@/data/homepage/about.md";
import projectSummaryContent from "@/data/homepage/projects/summary.md";
import projectHomebaseThemerContent from "@/data/homepage/projects/homebase-themer.md";
import projectHomebaseCoverageContent from "@/data/homepage/projects/homebase-coverage.md";
import projectHomebaseUIContent from "@/data/homepage/projects/homebase-ui.md";
import projectHomebaseDocsContent from "@/data/homepage/projects/homebase-docs.md";

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
            <div className={project}>
              <Tile
                renderAs="dt"
                color="backgroundBlue"
                className={projectHeader}
              >
                <Header renderAs="h3" size={4}>
                  Homebase Coverage Extension
                </Header>
              </Tile>
              <Tile renderAs="dd" className={projectContent}>
                <Markdown>{projectHomebaseCoverageContent}</Markdown>
              </Tile>
            </div>
            <div className={project}>
              <Tile
                renderAs="dt"
                color="backgroundGreen"
                className={projectHeader}
              >
                <Header renderAs="h3" size={4}>
                  Homebase UI Library
                </Header>
              </Tile>
              <Tile renderAs="dd" className={projectContent}>
                <Markdown>{projectHomebaseUIContent}</Markdown>
              </Tile>
            </div>
            <div className={project}>
              <Tile
                renderAs="dt"
                color="backgroundYellow"
                className={projectHeader}
              >
                <Header renderAs="h3" size={4}>
                  Homebase Docs Site
                </Header>
              </Tile>
              <Tile renderAs="dd" className={projectContent}>
                <Markdown>{projectHomebaseDocsContent}</Markdown>
              </Tile>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
