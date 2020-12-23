import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import projects from '../../modules/Projects/Projects'

function Project({ title, shortDescription, logoUrl, link }) {
  return (
    <div className="card text--center">
      {logoUrl && (
        <div class="card__image padding-top--md">
          <img
            src={logoUrl}
            alt={`${title} logo`}
            title={`${title} logo`}
            className={styles.projectImage}
          />
        </div>
      )}
      <div class="card__body">
        <h3>{title}</h3>
        <small>
          {shortDescription}
        </small>
      </div>
      <div class="card__footer">
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
    <Layout
      title="Projects"
      description="DatePoll Systems project overview">
      <main className="container margin-vert--lg">
        {projects && Object.keys(projects).length > 0 && (
          <div className="row">
            {Object.keys(projects).map((name, idx) => (
              <div className="col col--4 margin-bottom--lg">
                <Project key={idx} {...projects[name]} />
              </div>
            ))}
          </div>
        )}
      </main >
    </Layout >
  );
}

export default ProjectList;