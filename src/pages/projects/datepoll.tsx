import React from 'react';
import ProjectPage from '../../modules/Projects/ProjectPage'
import {ProjectDefinition} from "../../modules/Projects/ProjectDefinition";

export const DatePoll: ProjectDefinition = {
  title: 'DatePoll',
  fileName: __filename,
  subTitle: 'digitales Vereinsleben, im 21. Jahrhundert',
  shortDescription: 'Club managing made easy!',
  logoUrl: '/img/logos/datepoll-dark.png',
  link: '/projects/datepoll',
  imageUrl: '/img/screenshots/showoff.png',
    getStartedLink: '/docs/DatePoll/',
  description:
    <>
      melde deine An-/Abwesenheit, verschicke oder checke E-Mails über den eingebauten Verteiler oder verwalte die Daten
      der Mitglieder mit dem kleinem Finger.
      DatePoll bietet Vereinsvorständen und Mitgliedern ein vereinfachtes, datenschutzfreundliches und kostenkünstiges
      digitales Vereinsleben.
    </>,
  usedBy: [
    {
      title: 'priv. unif. Bürgerkorps Eggenburg',
      websiteUrl: 'https://buergerkorps-eggenburg.at',
      imageUrl: '/img/users/bke.png',
    },
  ],
  features: [
    {
      title: 'Immer dabei',
      imageUrl: '/img/devices.svg',
      description:
        <>
          DatePoll ist immer dabei, gib deinen Mitglieder die Möglichkeit ihre Daten zu ändern und dir die Möglichkeit
          Daten deiner Mitglieder jederzeit abzurufen und anzupassen. Das Telefonbuch, die Kontaktlisten, die Gruppenverwaltung und
          eine Änderungshistorie geben dem Vorstand unzählige Einstellungsmöglichkeiten.
        </>,
    },
    {
      title: 'Abläufe vereinfachen',
      imageUrl: '/img/team_spirit.svg',
      description:
        <>
          Egal ob du eine neue Probe, Ausrückung, Fußballspiel oder Feuerwehrübung eintragen willst, wir unterstützen
          dich dabei. Du kannst mehrere Treff- und Zeitpunkte für jegliche art von Events eintragen, unterschiedlichste
          Antwortmöglichkeiten anlegen und alles über einen Kalendarexport noch in deinen privaten Kalendar übertragen.
        </>,
    },
    {
      title: 'Ganz einfach',
      imageUrl: '/img/idea.svg',
      description:
        <>
          Probier es einfach mal aus. Kontaktiere <a href="mailto:suppoer@datepoll.org">support@datepoll.org</a> um einen
          Demo-Zugang anzufragen.
        </>,
    }
  ]
}

export default function index() {
  return <ProjectPage {...DatePoll} />;
}
