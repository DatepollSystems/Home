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

### Adding new projects
To add a new Project following steps must be done
1. add Project details to `/src/modules/Projects/Projects.js`
2. create Project detail Page under `/src/pages/projects/projectName.js` with this code:
```js
    import React from 'react';
    import ProjectPage from '../../modules/Projects/ProjectPage'
    import projects from '../../modules/Projects/Projects'

    function index() {
        return <ProjectPage {...projects['ProjectName']} />;
    }
    
    export default index;
```
3. add Link to just created page in `docusaurus.config.js` under `themeConfig.navbar.items[label=projects].items`
4. create documentation folder `/docs/ProjectName/` and follow adding docs instructions