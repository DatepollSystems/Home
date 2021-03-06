import React from 'react';

const projects = {
    DatePoll: {
        title: 'DatePoll',
        subTitle: 'Manage your Club',
        shortDescription: 'Club managing made easy!',
        logoUrl: '/img/logos/datepoll.svg',
        link: '/projects/datepoll',
        imageUrl: '/img/team_spirit.svg',
        getStartedLink: '/docs/DatePoll/index',
        description: (
            <>
                DatePoll is a club managing software to support especially voluntary clubs by automating standard
                processes of an organization. Birthdays of club members, event managing and an integrated club calendar
                will give your members an easy opportunity to leave crowded chat messaging groups behind. .
            </>
        ),
        features: [
            {
                title: 'The Idea',
                imageUrl: '/img/idea.svg',
                description: (
                    <>
                        All our services are open source because we want to support the world with free and secure
                        software. That means, every single code line is publicly verifiable. We set ourselves high
                        privacy standards to protect your data. Furthermore, we are only using state-of-the-art security
                        technologies to ensure privacy.
                    </>
                ),
            },
            {
                title: 'Supported devices',
                imageUrl: '/img/devices.svg',
                description: (
                    <>
                        DatePoll runs on every devices which has a browser. Nevertheless we have also developed an
                        android app to give the user a more fluent experience.
                    </>
                ),
            }
        ]
    }
};

export default projects;