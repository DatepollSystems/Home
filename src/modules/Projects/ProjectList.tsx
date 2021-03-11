import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ProjectList.module.css';
import clsx from 'clsx';
import {ProjectOverviewProps} from "./ProjectDefinition";
import PROJECTS from "./Projects";

function ProjectList() {
    let projectCnt = PROJECTS ? PROJECTS.length : 0;

    return (
        <>
            {projectCnt > 0 && (
                <div className={clsx('row', styles.centerLastRow)}>
                    {/* using map function because forEach does not return anything */}
                    {PROJECTS.map((project, idx) => (
                        <>
                            <div key={idx} className="col col--4 margin-bottom--lg">
                                <Project key={project.title} {...project} />
                            </div>
                        </>
                    ))}
                </div>
            )}
        </>
    );
}

function Project({title, shortDescription, logoUrl, link}: ProjectOverviewProps) {
    return (
        <div className={clsx('card text--center', styles.projectShadow)}>
            {logoUrl && (
                <div className="card__image padding-top--md">
                    <img
                        src={logoUrl}
                        alt={`${title} logo`}
                        title={`${title} logo`}
                        className={styles.projectImage}
                    />
                </div>
            )}
            <div className="card__body">
                <h3>{title}</h3>
                <small>
                    {shortDescription}
                </small>
            </div>
            <div className="card__footer">
                <Link
                    className="button button--primary"
                    to={link}>
                    Learn more
                </Link>
            </div>
        </div>
    );
}

export default ProjectList;