import React from 'react';
import ProjectPage from '../../modules/Projects/ProjectPage'
import {ProjectDefinition} from "../../modules/Projects/ProjectDefinition";

export const WaterLevelMonitor: ProjectDefinition = {
    title: 'Water-Level-Monitor',
    fileName: __filename,
    subTitle: 'Measure the level of rivers and lakes!',
    shortDescription: 'Automatic water level measurement.',
    logoUrl: '/img/logos/wlm.png',
    link: '/projects/wlm',
    imageUrl: '',
    getStartedLink: '/docs/WaterLevelMonitor/',
    description:
        <>
            Water-Level-Monitor is a software system to handle automatic water level tracking and show the data in human
            readable stats.
        </>,
}

export default function index() {
    return <ProjectPage {...WaterLevelMonitor} />;
}
