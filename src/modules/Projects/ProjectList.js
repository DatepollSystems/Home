import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ProjectList.module.css';
import projects from './Projects'

function Project({ title, shortDescription, logoUrl, link }) {
  return (
    <div className="card text--center">
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
  return (
    <>
      {projects && Object.keys(projects).length > 0 && (
        <div className="row">
          {Object.keys(projects).map((name, idx) => (
            <div className="col col--4 margin-bottom--lg">
              <Project key={idx} {...projects[name]} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProjectList;