import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ProjectList.module.css';
import projects from './Projects'
import clsx from 'clsx';

function Project({ title, shortDescription, logoUrl, link }) {
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


function ProjectList() {
  let projectCnt = projects ? Object.keys(projects).length : 0;

  return (
    <>
      {projectCnt > 0 && (
        <div className={clsx('row', styles.centerLastRow)}>
          {/* using map function because forEach does not return anything */}
          {Object.entries(projects).map(([name, project], idx) => (
            <>
              <div key={idx} className="col col--4 margin-bottom--lg">
                <Project key={name} {...project} />
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default ProjectList;