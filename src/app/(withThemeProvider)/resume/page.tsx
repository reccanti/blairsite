"use client";
import dynamic from "next/dynamic";
import { Markdown } from "@/components/Markdown";
import {
  contactList,
  wrapper,
  skillList,
  skillListHeader,
  section,
  skillListWrapper,
} from "./page.css";
import { Header } from "@/components/Header";

// content
import linkContent from "@/data/resume/links.md";
import globalThinkingContent from "@/data/resume/experience/globalThinking.md";
import fitbitContent from "@/data/resume/experience/fitbit.md";
import wayfairContent from "@/data/resume/experience/wayfair.md";
import ritContent from "@/data/resume/education/rit.md";
import designInfrastructureContent from "@/data/resume/writing/designInfrastructureEngineeringAtWayfair.md";
import languagesContent from "@/data/resume/skills/languages.md";
import toolsContent from "@/data/resume/skills/tools.md";
import frameworksContent from "@/data/resume/skills/frameworks.md";
import paradigmsContent from "@/data/resume/skills/paradigms.md";

// import a stylesheet for handling print styles, since Vanilla Extract doesn't
// handle "@page" declarations
import "./print.css";

const NoSSRPrintButton = dynamic(
  () =>
    import("./_components/PrintButton").then(({ PrintButton }) => PrintButton),
  { ssr: false }
);

export default function Page() {
  return (
    <main id="main" className={wrapper}>
      <section className={section}>
        <Header renderAs="h1" size={4}>
          Blair Wilcox: Design Technologist
        </Header>
        <nav className={contactList}>
          <Markdown>{linkContent}</Markdown>
        </nav>
      </section>
      <section className={section}>
        <Header renderAs="h2" size={5}>
          Work Experience
        </Header>
        <Markdown
          components={{
            h1: (props) => <Header {...props} renderAs="h3" size={6} />,
          }}
        >
          {wayfairContent}
        </Markdown>
        <Markdown
          components={{
            h1: (props) => <Header {...props} renderAs="h3" size={6} />,
          }}
        >
          {fitbitContent}
        </Markdown>
        <Markdown
          components={{
            h1: (props) => <Header {...props} renderAs="h3" size={6} />,
          }}
        >
          {globalThinkingContent}
        </Markdown>
      </section>
      <section className={section}>
        <Header renderAs="h2" size={5}>
          Education
        </Header>
        <section>
          <Markdown
            components={{
              h1: (props) => <Header {...props} renderAs="h3" size={6} />,
            }}
          >
            {ritContent}
          </Markdown>
        </section>
      </section>
      <section className={section}>
        <Header renderAs="h2" size={5}>
          Writing
        </Header>
        <section>
          <Markdown>{designInfrastructureContent}</Markdown>
        </section>
      </section>
      <section className={section}>
        <Header renderAs="h2" size={5}>
          Skills
        </Header>
        <div>
          <div className={skillListWrapper}>
            <Markdown
              components={{
                h1: (props) => (
                  <Header
                    {...props}
                    className={skillListHeader}
                    renderAs="h3"
                    size={6}
                  />
                ),
                ul: (props) => <ul {...props} className={skillList} />,
              }}
            >
              {languagesContent}
            </Markdown>
          </div>
          <div className={skillListWrapper}>
            <Markdown
              components={{
                h1: (props) => (
                  <Header
                    {...props}
                    className={skillListHeader}
                    renderAs="h3"
                    size={6}
                  />
                ),
                ul: (props) => <ul {...props} className={skillList} />,
              }}
            >
              {toolsContent}
            </Markdown>
          </div>
          <div className={skillListWrapper}>
            <Markdown
              components={{
                h1: (props) => (
                  <Header
                    {...props}
                    className={skillListHeader}
                    renderAs="h3"
                    size={6}
                  />
                ),
                ul: (props) => <ul {...props} className={skillList} />,
              }}
            >
              {frameworksContent}
            </Markdown>
          </div>
          <div className={skillListWrapper}>
            <Markdown
              components={{
                h1: (props) => (
                  <Header
                    {...props}
                    className={skillListHeader}
                    renderAs="h3"
                    size={6}
                  />
                ),
                ul: (props) => <ul {...props} className={skillList} />,
              }}
            >
              {paradigmsContent}
            </Markdown>
          </div>
        </div>
      </section>
      <NoSSRPrintButton />
    </main>
  );
}
