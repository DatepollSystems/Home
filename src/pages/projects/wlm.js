import React from 'react';
import ProjectPage from '../../modules/Projects/ProjectPage'
import projects from '../../modules/Projects/Projects'

function index() {
    return <ProjectPage {...projects['Wlm']} />;
}

export default index;