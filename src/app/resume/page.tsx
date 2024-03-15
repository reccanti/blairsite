import { Markdown } from "@/components/Markdown";
import {
  contactList,
  wrapper,
  skillList,
  skillListHeader,
  section,
} from "./page.css";
import { Header } from "@/components/Header";

// content
import linkContent from "@/data/resume/links.md";
import globalThinkingContent from "@/data/resume/experience/globalThinking.md";
import fitbitContent from "@/data/resume/experience/fitbit.md";
import wayfairContent from "@/data/resume/experience/wayfair.md";
import languagesContent from "@/data/resume/skills/languages.md";
import toolsContent from "@/data/resume/skills/tools.md";
import frameworksContent from "@/data/resume/skills/frameworks.md";
import paradigmsContent from "@/data/resume/skills/paradigms.md";

// import a stylesheet for handling print styles, since Vanilla Extract doesn't
// handle "@page" declarations
import "./print.css";

export default function Page() {
  return (
    <div className={wrapper}>
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
          <h3>
            Rochester Institute of Technolgy - BS New Media Interactive
            Development
          </h3>
          <div>
            <span>September 2012</span>
            <span>June 2017</span>
          </div>
        </section>
      </section>
      <section className={section}>
        <Header renderAs="h2" size={5}>
          Writing
        </Header>
        <section>
          <p>
            <a href="https://medium.com/wayfair-design/design-infrastructure-engineering-at-wayfair-a78df89fa075">
              Design Infrastructure Engineering at Wayfair
            </a>
          </p>
        </section>
      </section>
      <section className={section}>
        <Header renderAs="h2" size={5}>
          Skills
        </Header>
        <div>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
        {/* <Markdown
          components={{
            h1: (props) => <Header {...props} renderAs="h2" size={5} />,
            h2: (props) => (
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
          {skillsContent}
        </Markdown> */}
      </section>
    </div>
  );
}
