import React from 'react';
import ProjectPage from '../../modules/Projects/ProjectPage'
import projects from '../../modules/Projects/Projects'

function index() {
  return <ProjectPage {...projects['LocalSIF']} />;
}

export default index;