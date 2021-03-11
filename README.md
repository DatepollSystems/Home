# Website
## Information
**Get notified about updates and join us at** &nbsp;
<a href="https://discord.gg/Tc5kAH5zhH">
        <img src="https://img.shields.io/discord/697139052717146123?logo=discord&style=for-the-badge" alt="chat on Discord">
    </a>
</h4>

* Project website (https://datepoll.org)
* created with [Docusaurus 2](https://v2.docusaurus.io/)

# Installation, development & deployment
### Installation
```console
yarn install
```

### Local Development
```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build
```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Adding docs
To add a new doc you have to add the file into the docs folder and make an entry in the sidebars.js for the navigation
Available markdown features see https://v2.docusaurus.io/docs/markdown-features

### Adding new projects
To add a new Project following steps must be done
1. create Project Page under `/src/pages/projects/projectName.tsx` with this code:
    ```tsx
    import React from 'react';
    import ProjectPage from '../../modules/Projects/ProjectPage'
    import {ProjectDefinition} from "../../modules/Projects/ProjectDefinition";
    
    export const ProjectName: ProjectDefinition = {...} 
    
    export default function index() {
        return <ProjectPage {...ProjectName} />;
    }
    ```
1. add Project-definition to `PROJECTS` array in `/src/modules/Projects/Projects.ts`
1. add Link to just created page in `docusaurus.config.js` to `projectsNav` array
   ```js
   {to: '/projects/projectName', label: 'ProjectName'}
   ```
1. create documentation folder `/docs/ProjectName/` and follow adding docs instructions

### Adding blogposts
To add a new blogpost a file within the blog directory must be created (name should be in the format `YYY-MMM-DD-blog-post-title.md`)
The only required field in the header is `title` (other available headers see https://v2.docusaurus.io/docs/blog#header-options)

`<!--truncate-->` can be used to define the content (anything above it) of the summary shown on the bloglist page