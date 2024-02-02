# Welcome to Blairsite

This is a portfolio/tech blog for me, Blair

## How does this site work?

This site is made with NextJS, specifically using it's new(ish) App Layout. All code and content lives under the `src` directory in the following folders

1. **The `/app` directory** - This is the NextJS app directory and follows all the conventions associated with it
2. **The `/components` directory** - This is where we keep reusable components throughout the site. Essentially, this is for anything that can be packaged nicely and displayed with Storybook
3. **The `/lib` directory** - This is for more data-oriented, utility stuff that doesn't fit into `/components`. Try to keep this framework-agnostic. `/components` can involve, React, but `/lib` shouldn't, unless it's some sort of configuration thing.
4. **The `/data` directory** - This is where all the site content lives. More info on that below.

### How `/data` is organized

All content on the site is ordered like this:

```
data
|--[projectName]
|----[postTimestamp]
|------index.md
|------...other files
|----drafts
|------[tempTitle]
|--------index.md
|--------...other files
```

Any post starts out in a `/drafts` folder in the given project. When it's ready to be published, we'll add the YAML frontmatter field `publish: true`. Our "publishPost" script will then remove that field, rename the folder, and move it out of the drafts folder.
