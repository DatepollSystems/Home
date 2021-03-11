import React from 'react';
import ProjectPage from '../../modules/Projects/ProjectPage'
import {ProjectDefinition} from "../../modules/Projects/ProjectDefinition";

export const LocalSIF: ProjectDefinition = {
    title: 'LocalSIF',
    fileName: __filename,
    subTitle: 'Share data between your phone and PC!',
    shortDescription: 'Local file share software system.',
    logoUrl: '/img/logos/localsif.svg',
    link: '/projects/sif',
    imageUrl: '/img/logos/localsif.svg',
    getStartedLink: '/docs/LocalSIF/index',
    description:
        <>
            LocalSIF is a local file share software system, mainly to share data between your phone and your PC.
        </>,
}

export default function index() {
    return <ProjectPage {...LocalSIF} />;
}