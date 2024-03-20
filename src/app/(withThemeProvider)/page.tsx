"use client";

import Image from "next/image";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import {
  about,
  contact,
  contentWrapper,
  project,
  projectContent,
  projectHeader,
  projectList,
  projects,
  sectionContent,
  sectionContentWrapper,
  sectionHeader,
  sectionImage,
  sectionImageImg,
  skillSections,
  skillSectionHeader,
  skills,
  splash,
  splashHeader,
  skillSection,
  skillList,
} from "@/app/(withThemeProvider)/page.css";
import { Tile } from "@/components/Tile";
import {
  List as GridList,
  Item as GridListItem,
  ItemImage as GridListItemImage,
  ItemLabel as GridListItemLabel,
} from "./_components/GridList";

// images
import ProfilePicture from "@/../public/assets/ProfilePicture.png";

// logos
import BuildkiteLogo from "@/../public/assets/logos/BuildkiteLogo.svg";
import CSSLogo from "@/../public/assets/logos/CSSLogo.svg";
import DockerLogo from "@/../public/assets/logos/DockerLogo.svg";
import FigmaLogo from "@/../public/assets/logos/FigmaLogo.svg";
import GCPLogo from "@/../public/assets/logos/GCPLogo.svg";
import GoogleAnalyticsLogo from "@/../public/assets/logos/GoogleAnalyticsLogo.svg";
import HTMLLogo from "@/../public/assets/logos/HTMLLogo.svg";
import JSLogo from "@/../public/assets/logos/JSLogo.svg";
import KubernetesLogo from "@/../public/assets/logos/KubernetesLogo.svg";
import LaravelLogo from "@/../public/assets/logos/LaravelLogo.svg";
import LookerStudioLogo from "@/../public/assets/logos/LookerStudioLogo.svg";
import MagentoLogo from "@/../public/assets/logos/MagentoLogo.svg";
import NextJSLogo from "@/../public/assets/logos/NextJSLogo.svg";
import NodeJSLogo from "@/../public/assets/logos/NodeJSLogo.svg";
import PHPLogo from "@/../public/assets/logos/PHPLogo.svg";
import ReactLogo from "@/../public/assets/logos/ReactLogo.svg";
import SassLogo from "@/../public/assets/logos/SassLogo.svg";
import SketchLogo from "@/../public/assets/logos/SketchLogo.svg";
import TerraformLogo from "@/../public/assets/logos/TerraformLogo.svg";
import TypescriptLogo from "@/../public/assets/logos/TypescriptLogo.svg";
import WordpressLogo from "@/../public/assets/logos/WordpressLogo.svg";

import { desktopSize, tabletSize } from "@/themes/utlities/breakpoints.css";
import Markdown from "react-markdown";

import aboutContent from "@/data/homepage/about.md";
import projectSummaryContent from "@/data/homepage/projects/summary.md";
import projectHomebaseThemerContent from "@/data/homepage/projects/homebase-themer.md";
import projectHomebaseCoverageContent from "@/data/homepage/projects/homebase-coverage.md";
import projectHomebaseUIContent from "@/data/homepage/projects/homebase-ui.md";
import projectHomebaseDocsContent from "@/data/homepage/projects/homebase-docs.md";
import contactContent from "@/data/homepage/contacts.md";

export default function Home() {
  return (
    <main id="main">
      <section className={splash}>
        <header className={splashHeader}>
          <Header renderAs="h1" size={3}>
            Blair Makes <wbr />
            <Highlight color="labelHighlightMagenta">Cool Things</Highlight>
          </Header>
        </header>
      </section>
      <div className={contentWrapper}>
        <section className={about} id="about">
          <Tile color="Red" className={sectionHeader}>
            <Header renderAs="h2" size={3}>
              Who&#39;s this gal?
            </Header>
          </Tile>
          <div className={sectionContentWrapper}>
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
          </div>
        </section>
        <section className={projects} id="projects">
          <Tile color="Yellow" className={sectionHeader}>
            <Header renderAs="h2" size={3}>
              Cool Stuff I&#39;ve Worked on
            </Header>
          </Tile>
          <div className={sectionContentWrapper}>
            <Tile className={sectionContent}>
              <Markdown>{projectSummaryContent}</Markdown>
            </Tile>
          </div>
          <dl className={projectList}>
            <div className={project}>
              <Tile renderAs="dt" color="Blue" className={projectHeader}>
                <Header renderAs="h3" size={4}>
                  Homebase Themer
                </Header>
              </Tile>
              <Tile renderAs="dd" className={projectContent}>
                <Markdown>{projectHomebaseThemerContent}</Markdown>
              </Tile>
            </div>
            <div className={project}>
              <Tile renderAs="dt" color="Green" className={projectHeader}>
                <Header renderAs="h3" size={4}>
                  Homebase Coverage Extension
                </Header>
              </Tile>
              <Tile renderAs="dd" className={projectContent}>
                <Markdown>{projectHomebaseCoverageContent}</Markdown>
              </Tile>
            </div>
            <div className={project}>
              <Tile renderAs="dt" color="Magenta" className={projectHeader}>
                <Header renderAs="h3" size={4}>
                  Homebase UI Library
                </Header>
              </Tile>
              <Tile renderAs="dd" className={projectContent}>
                <Markdown>{projectHomebaseUIContent}</Markdown>
              </Tile>
            </div>
            <div className={project}>
              <Tile renderAs="dt" color="Red" className={projectHeader}>
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
        <section className={skills} id="skills">
          <Tile color="Green" className={sectionHeader}>
            <Header renderAs="h2" size={3}>
              Things I&#39;ve Used
            </Header>
          </Tile>
          <div className={sectionContentWrapper}>
            <Tile className={sectionContent}>
              <Markdown>{projectSummaryContent}</Markdown>
            </Tile>
          </div>
          <div className={skillSections}>
            <section className={skillSection}>
              <Tile renderAs="h3" className={skillSectionHeader}>
                Languages
              </Tile>
              <GridList className={skillList}>
                <GridListItem>
                  <GridListItemImage src={HTMLLogo.src} alt="" />
                  <GridListItemLabel label="HTML" color="Blue" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={CSSLogo.src} alt="" />
                  <GridListItemLabel label="CSS" color="Green" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={SassLogo.src} alt="" />
                  <GridListItemLabel label="Sass" color="Yellow" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={JSLogo.src} alt="" />
                  <GridListItemLabel label="JavaScript" color="Magenta" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={TypescriptLogo.src} alt="" />
                  <GridListItemLabel label="TypeScript" color="Blue" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={PHPLogo.src} alt="" />
                  <GridListItemLabel label="PHP" color="Red" />
                </GridListItem>
              </GridList>
            </section>
            <section className={skillSection}>
              <Tile renderAs="h3" className={skillSectionHeader}>
                Tools
              </Tile>
              <GridList className={skillList}>
                <GridListItem>
                  <GridListItemImage src={DockerLogo.src} alt="" />
                  <GridListItemLabel label="Docker" color="Green" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={KubernetesLogo.src} alt="" />
                  <GridListItemLabel label="Kubernetes" color="Yellow" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={TerraformLogo.src} alt="" />
                  <GridListItemLabel label="Terraform" color="Magenta" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={GoogleAnalyticsLogo.src} alt="" />
                  <GridListItemLabel label="Google Analytics" color="Blue" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={LookerStudioLogo.src} alt="" />
                  <GridListItemLabel label="Looker Studio" color="Red" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={GCPLogo.src} alt="" />
                  <GridListItemLabel
                    label="Google Cloud Platform"
                    color="Green"
                  />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={FigmaLogo.src} alt="" />
                  <GridListItemLabel label="Figma" color="Yellow" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={SketchLogo.src} alt="" />
                  <GridListItemLabel label="Sketch" color="Magenta" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={BuildkiteLogo.src} alt="" />
                  <GridListItemLabel label="Buildkite" color="Blue" />
                </GridListItem>
              </GridList>
            </section>
            <section className={skillSection}>
              <Tile renderAs="h3" className={skillSectionHeader}>
                Frameworks
              </Tile>
              <GridList className={skillList}>
                <GridListItem>
                  <GridListItemImage src={ReactLogo.src} alt="" />
                  <GridListItemLabel label="React" color="Green" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={NextJSLogo.src} alt="" />
                  <GridListItemLabel label="NextJS" color="Magenta" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={NodeJSLogo.src} alt="" />
                  <GridListItemLabel label="NodeJS" color="Blue" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={WordpressLogo.src} alt="" />
                  <GridListItemLabel label="Wordpress" color="Yellow" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={LaravelLogo.src} alt="" />
                  <GridListItemLabel label="Laravel" color="Red" />
                </GridListItem>
                <GridListItem>
                  <GridListItemImage src={MagentoLogo.src} alt="" />
                  <GridListItemLabel label="Magento" color="Green" />
                </GridListItem>
              </GridList>
            </section>
          </div>
        </section>
        <section className={contact} id="contact">
          <Tile color="Blue" className={sectionHeader}>
            <Header renderAs="h2" size={3}>
              Wanna Reach Out?
            </Header>
          </Tile>
          <div className={sectionContentWrapper}>
            <Tile className={sectionContent}>
              <Markdown>{contactContent}</Markdown>
            </Tile>
          </div>
        </section>
      </div>
    </main>
  );
}
