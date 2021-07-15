import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './ProjectPage.module.css'
import {MainDescriptionProps, ProjectDefinition, ProjectFeatureProps, ProjectUsedByProps} from "./ProjectDefinition";

export default function ProjectPage({
                                      title,
                                      features,
                                      usedBy,
                                      description,
                                      getStartedLink,
                                      imageUrl,
                                      link,
                                      logoUrl,
                                      shortDescription,
                                      subTitle,
                                    }: ProjectDefinition) {
  if (!title) {
    return (
      <Layout
        title="Project not found">
        <main className="container">
          <h1>Project not found</h1>
        </main>
      </Layout>
    );
  }

  return (
    <Layout
      title={title}
      description={shortDescription}>
      <main>
        <MainDescription description={description} getStartedLink={getStartedLink} imageUrl={imageUrl}
                         subTitle={subTitle} title={title} logoUrl={logoUrl}/>

        <UsedBys usedBy={usedBy}/>
        <Features features={features}/>
      </main>
    </Layout>
  );
}

function MainDescription({title, subTitle, description, imageUrl, getStartedLink, logoUrl}: MainDescriptionProps) {
  return (
    <div className="container" style={{marginTop: "5vh"}}>
      <div className="row">
        <div className="col s12">
          <div className="text--center">
            <img className="materialboxed" src={logoUrl} style={{maxHeight: '100px', marginLeft: 'auto', marginRight: 'auto'}}/>
          </div>
          <h1 className="here__title text--center">{title}</h1>
          <p className="hero__subtitle text--center">{subTitle}</p>
          <p className="text--center">{description}</p>
          <div className="text--center">
            <Link
              className="button button--primary button--lg"
              to={getStartedLink}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="row" style={{marginTop: "5vh"}}>
        <img className="materialboxed" src={imageUrl} style={{maxHeight: '550px', marginLeft: 'auto', marginRight: 'auto'}}/>
      </div>
    </div>
  );
}

type UsedByArray = {
  usedBy: ProjectUsedByProps[];
}

function UsedBys({usedBy}: UsedByArray) {
  return (
    <>
      {usedBy && usedBy.length > 0 && (
        <div style={{backgroundColor: "#212121", height: "190px", marginTop: "3vh", paddingTop: "10px", paddingBottom: "1ßpx"}} className="text--center">
          <span>Benutzt von</span>
          <div className="row">
            {usedBy.map((props, idx) => (
              <UsedBy key={idx} {...props} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function UsedBy({imageUrl, title, websiteUrl}: ProjectUsedByProps) {
  return (
    <a href={websiteUrl} target="_blank" style={{marginLeft: "auto", marginRight: "auto", height: "140px"}}>
      <img src={imageUrl} alt={title} />
    </a>
  );
}

type FeatureArray = {
  features: ProjectFeatureProps[];
}

function Features({features}: FeatureArray) {
  return (
    <>
      {features && features.length > 0 && (
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Feature({imageUrl, title, description}: ProjectFeatureProps) {
  return (
    <div className={clsx('col col--12 margin-bottom--lg', styles.feature)}>
      <div className="row">
        {imageUrl && (
          <div className="text--center col col--3">
            <img className={styles.featureImage} src={imageUrl} alt={title}/>
          </div>
        )}
        <div className="col col--9" style={{paddingTop: "40px"}}>
          <h3>{title}</h3>
          <p >{description}</p>
        </div>

      </div>
    </div>
  );
}
