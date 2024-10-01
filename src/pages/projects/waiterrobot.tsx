import React from 'react';
import ProjectPage from '../../modules/Projects/ProjectPage'
import {ProjectDefinition} from "../../modules/Projects/ProjectDefinition";

export const WaiterRobot: ProjectDefinition = {
    title: 'kellner.team',
    fileName: __filename,
    subTitle: 'Die simple Bonierapp für deine Veranstaltungen',
    shortDescription: 'Die simple Bonierapp für deine Veranstaltungen.',
    logoUrl: '/img/logos/kellner-team.svg',
    link: 'https://kellner.team',
    imageUrl: '/img/logos/kellner-team.svg',
    getStartedLink: 'https://kellner.team',
    description: <></>,
}

export default function index() {
    return <ProjectPage {...WaiterRobot} />;
}
