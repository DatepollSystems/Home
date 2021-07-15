export interface ProjectDefinition extends MainDescriptionProps, ProjectOverviewProps {
    fileName: string;
    /** (relative) link to the index or Get started of the docu */
    getStartedLink: string;
    /** features of the Project */
    features?: ProjectFeatureProps[];
    /** used by of the Project */
    usedBy?: ProjectUsedByProps[];
}

export type ProjectUsedByProps = {
    /** website url of the Feature */
    websiteUrl: string;
    /** url to to image for the feature */
    imageUrl: string;
    title: string;
}

export type ProjectFeatureProps = {
    /** title of the Feature */
    title: string;
    /** url to to image for the feature */
    imageUrl: string;
    /** description of the Feature */
    description: JSX.Element;
}

export type MainDescriptionProps = {
    /** Project name/title */
    title: string;
    /** short Project subtitle */
    subTitle: string;
    /** Content for the main description on the Project-page */
    description: JSX.Element;
    /** url to the image for the main description on the Project-page */
    imageUrl: string;
    /** url to the logo for the main description on the Project-page */
    logoUrl: string;
    /** (relative) link to the index or Get started of the docu */
    getStartedLink: string;
}

export type ProjectOverviewProps = {
    /** Project name/title */
    title: string;
    /** short Project description for the Overview-page */
    shortDescription: string;
    /** url to the logo */
    logoUrl: string;
    /** link to the project page */
    link: string;
}
