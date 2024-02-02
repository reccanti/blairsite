export default function Page() {
  return (
    <>
      <h1>Blair Wilcox: Design Technologist</h1>
      <nav>
        <ul>
          <li>
            <a href="mailto:blairwilcox93@gmail.com">blairwilcox93@gmail.com</a>
          </li>
          <li>
            <a href="tel:4135797376">413-579-7376</a>
          </li>
          <li>
            <a href="https://github.com/reccanti">
              https://github.com/reccanti
            </a>
          </li>
          <li>
            <a href="https://medium.com/@reccanti">
              https://medium.com/@reccanti
            </a>
          </li>
        </ul>
      </nav>
      <section>
        <h2>Work Experience</h2>
        <section>
          <h3>Wayfair: Design Infrastructure Engineer - Homebase Tools Team</h3>
          <div>
            <span>March 2022</span>
            <span>January 2024</span>
          </div>
          <p>
            Proposed, planned, and implemented several Figma design tools that
            allowed us to migrate from Sketch and maintain our design assets at
            scale. A key project here was an extension of the{" "}
            <a href="https://github.com/thomas-lowry/themer">Themer plugin</a>{" "}
            that allowed us to change our component styles to match one of
            Wayfair’s several brands. Other projects include a plugin to
            automate difficult migrations and a plugin to catch potential design
            issues. Also developed a strategy for injecting analytics into
            plugins to determine how they were used so we could make strategic
            decisions on features.
          </p>
        </section>
        <section>
          <h3>Wayfair: Frontend Engineer - Homebase Tools Team</h3>
          <div>
            <span>February 2020</span>
            <span>March 2022</span>
          </div>
          <p>
            Proposed, planned and implemented a wide variety of projects to make
            it easier for our UX team to maintain the design system, and for
            downstream teams to use it. Maintained a documentation site listing
            all of our components and created a tool for analyzing the usage of
            our design system at runtime. Also helped introduce TypeScript to
            the team by using it in the Coverage extension.
          </p>
        </section>
        <section>
          <h3>Wayfair: Frontend Engineer - Product Detail Page</h3>
          <div>
            <span>January 2018</span>
            <span>February 2020</span>
          </div>
          <p>
            Worked on a team of 10+ people to implement features on the Product
            Details Page of the Wayfair website. Tasks included: working with
            project managers to inform the planning of new features, working
            with designers to inform the designs of these features, working with
            QA engineers to ensure that all edge-cases and bugs were accounted
            for, and working with analysts to measure the effectiveness of the
            new features and plan analytics strategies.
          </p>
        </section>
        <section>
          <h3>Fitbit: Digital Marketing Engineer</h3>
          <div>
            <span>June 2017</span>
            <span>January 2018</span>
          </div>
          <p>
            Worked on a team of 8+ people to create marketing pages for Fitbit
            projects. Tasks included working with designers to implement
            Photoshop designs in several languages, and finding ways to improve
            the efficiency of this process with our static build system.
          </p>
        </section>
      </section>
      <section>
        <h2>Projects</h2>
        <section>
          <h3>Homebase Themer</h3>
          <p>
            A Figma plugin that extends{" "}
            <a href="https://github.com/thomas-lowry/themer">Themer</a> with
            some additional tokens used by our design system. As part of our
            design team’s shift from Sketch to Figma, we were looking for ways
            that we could ease the migration process and make maintaining our
            various themes easier going forward. As a result of implementing
            this plugin, we are now able to maintain 3 times the number of
            themes as before using 1⁄3 of the assets.
          </p>
        </section>
        <section>
          <h3>Homebase Coverage Extension</h3>
          <p>
            This is a browser extension used internally at Wayfair for measuring
            the proportion of Homebase components on a page, which was used by
            teams as a signal for compliance with our design system. This
            project involved learning the Webextension API, setting up a project
            in TypeScript (the first major project on the Homebase Team to use
            it), and creating a project in which multiple self-contained
            “modules” communicated with each other.
          </p>
        </section>
      </section>
      <section>
        <h2>Education</h2>
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
      <section>
        <h2>Writing</h2>
        <section>
          <p>
            <a href="https://medium.com/wayfair-design/design-infrastructure-engineering-at-wayfair-a78df89fa075">
              Design Infrastructure Engineering at Wayfair
            </a>
          </p>
        </section>
      </section>
      <section>
        <h2>Skills</h2>
        <section>
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
          </ul>
        </section>
        <section>
          <h3>Tools</h3>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Terraform</li>
            <li>Google Analytics</li>
            <li>Looker Studio</li>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Google Cloud Platform</li>
          </ul>
        </section>
        <section>
          <h3>Frameworks</h3>
          <ul>
            <li>React</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>Metalsmith</li>
          </ul>
        </section>
        <section>
          <h3>Paradigms</h3>
          <ul>
            <li>Frontend Development</li>
            <li>Figma Plugin Development</li>
            <li>Chrome Extension Development</li>
          </ul>
        </section>
      </section>
    </>
  );
}
