import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './ProjectPage.module.css'
import {MainDescriptionProps, ProjectDefinition, ProjectFeatureProps} from "./ProjectDefinition";

export default function ProjectPage({
                                        title,
                                        features,
                                        description,
                                        getStartedLink,
                                        imageUrl,
                                        link,
                                        logoUrl,
                                        shortDescription,
                                        subTitle
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
                                 subTitle={subTitle} title={title}/>
                <Features features={features}/>
            </main>
        </Layout>
    );
}

function MainDescription({title, subTitle, description, imageUrl, getStartedLink}: MainDescriptionProps) {
    return (
        <div className="container">
            <div className="row margin-vert--lg">
                <div className={clsx("col", "col--6", styles.verticalContainer)}>
                    <div className={styles.verticalCenter}>
                        <h1 className="hero__title">{title}</h1>
                        <p className="hero__subtitle">{subTitle}</p>
                        <p>{description}</p>
                        <Link
                            className="button button--primary button--lg"
                            to={getStartedLink}>
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="col col--6 text--center">
                    <img src={imageUrl} style={{maxHeight: '400px'}}/>
                </div>
            </div>
        </div>
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
        <div className={clsx('col col--6 margin-bottom--lg', styles.feature)}>
            {imageUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imageUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}