import { CVExperienceTraining, CVHobby, CVSkills } from "../cv-class";

const highSchool: CVExperienceTraining = new CVExperienceTraining(
  'Baccalauréat ES',
  'training',
  new Date('2008-09'),
  new Date('2011-06'),
  '2011',
  ['divers', 'general'],
  'Lycée Blaise Pascal',
  'Orsay',
  'France',
  '',
  ''
)

const musicSchool: CVExperienceTraining = new CVExperienceTraining(
  'Formation aux Musiques Actuelles - Guitare',
  'training',
  new Date('2011-09'),
  new Date('2013-06'),
  '2011 à 2013',
  ['music'],
  'EF2M',
  'Tourcoing',
  'France',
  'Apprentissage théorique de la musique et cours pratiques de guitare en groupe',
  ''
)

const afpa: CVExperienceTraining = new CVExperienceTraining(
  "Technicien d'Accueil Touristique - Animation",
  'training',
  new Date('2014-02'),
  new Date('2014-06'),
  '2014',
  ['entertainment', 'clients'],
  'Afpa',
  'Lomme',
  'France',
  "Découverte des différentes facettes des métiers de l'accueil et du tourisme et formation au métier d'animateur",
  ''
)

const openClassRooms: CVExperienceTraining = new CVExperienceTraining(
  "Prep-Apprentissage - Développeur Web",
  'training',
  new Date('2020-11'),
  new Date('2021-02'),
  '2020 à 2021',
  ['webdev'],
  'OpenClassrooms',
  'Lille',
  'France',
  `Apprentissage des différents langages et outils nécessaires au
  développeur web,
  <a href="https://vguilbaud.github.io/VincentGuilbaud_2_04012021.github.io/">
    cliquez ici
  </a>
  pour voir l'exemple d'une maquette réalisée`,
  ''
)

const udemia: CVExperienceTraining = new CVExperienceTraining(
  'The Complete JavaScript Course',
  'training',
  new Date('2021-03'),
  new Date('2021-06'),
  '2021',
  ['webdev'],
  'Udemia',
  'Lille',
  'France',
  'Apprentissage complet des différentes fonctionnalités de JavaScript',
  ''
)

const academy: CVExperienceTraining = new CVExperienceTraining(
  'Full-Stach Développeur',
  'training',
  new Date('2021-06'),
  new Date('2022-06'),
  'Depuis Juin',
  ['webdev'],
  '3W Academy',
  'Lille',
  'France',
  `- Consolider les compétences en Programmation Orientée Objet et
  en PHP avancé <br />
  - Maîtriser les technologies avancées les plus utilisées tels que Symfony en
  "back"<br />
  - Maîtriser Angular pour le "front"<br />
  <a href="https://drive.google.com/file/d/1xSWJYo2V4QfcqAGw6eU3PJIE2mCyKlDv/view">
    Cliquez ici
  </a>
  pour voir le programme complet de la formation`,
  ''
)

const trainings: Array<CVExperienceTraining> = [highSchool, musicSchool, afpa, openClassRooms, udemia, academy];

const badakan: CVExperienceTraining = new CVExperienceTraining(
  'Alternant Développeur Angular',
  'experience',
  new Date('2021-09'), 
  new Date('2021-11'),
  'De septembre à novembre 2021',
  ['webdev'],
  'Badakan',
  'Paris',
  'France',
  "Intégration de nouvelles fonctionnalités via Angular sur un site web digitalisant l'interim et les ressources humaines",
  ''
)

const sykes: CVExperienceTraining = new CVExperienceTraining(
  'Téléconseiller SAV',
  'experience',
  new Date('2019-01'),
  new Date('2020-08'),
  'De Janvier 2019 à Août 2020',
  ['divers', 'clients'],
  'Sykes',
  'Édimbourg',
  'Écosse',
  "Assistance technique par téléphone et mail en anglais sur des produits électroniques. Ce poste nécessitait une grande efficacité pour répondre à plus d'une centaine de clients par jour ainsi qu'évidemment un bon sens relationnel",
  ''
)

const odesia: CVExperienceTraining = new CVExperienceTraining(
  'Animateur - Guide',
  'experience',
  new Date('2018-06'), 
  new Date('2018-10'),
  'De Juin à Octobre 2018',
  ['entertainment', 'divers', 'clients'],
  'Odesia Vacances',
  'Uxelles',
  'France',
  "Guidage des vacanciers dans des sorties culturelles et création d'activités ludiques. Je devais me servir de mon bon sens relationnel et je devais m'adapter à tous types de public (groupes de séniors, familles...)",
  ''
)

const workingHighSchool: CVExperienceTraining = new CVExperienceTraining(
  "Assistant d'éducation",
  'experience',
  new Date('2016-10'),
  new Date('2017-09'),
  'De Octobre 2016 à Septembre 2017',
  ['divers', 'clients'],
  'Lycée Blaise Pascal',
  'Orsay',
  'France',
  "Surveillance des élèves et aide admnistrative de la vie lycéenne. Je devais cette fois faire preuve d'autorité auprès des élèves et montrer mon sens de l'organisation pour aider la vie scolaire",
  ''
)

const apas: CVExperienceTraining = new CVExperienceTraining(
  'Animateur',
  'experience',
  new Date('2016-06'),
  new Date('2017-08'),
  'Étés 2016 et 2017',
  ['entertainment', 'clients', 'music'],
  'Hôtel Apas',
  'Saint-Gervais-les-Bains',
  'France',
  "Création d'activités ludiques et de spectacles ainsi que leur mise en scène pour toute la famille. Il s'agit là d'un des postes où j'ai dû être le plus créatif et adaptable pour la création des spectacles et activités en fonction de la taille des groupes qui allaient de 10 à 120 personnes",
  ''
)

const guitarJob: CVExperienceTraining = new CVExperienceTraining(
  'Guitariste',
  'experience',
  new Date('2008-09'),
  new Date(),
  "2008 à Aujourd'hui",
  ['music'],
  'Freelance',
  'International',
  'International',
  "Cours de guitare avancé et performances live en solo et en groupe. Cela m'a forcé à être non seulement autonome mais aussi perservérant. Bien entendu, la créativité est essentielle",
  ''
)

const relevantXp: Array<CVExperienceTraining> = [
  badakan,
  sykes,
  odesia,
  workingHighSchool,
  apas,
  guitarJob
]

const grapePicking: CVExperienceTraining = new CVExperienceTraining(
  'Vendangeur',
  'experience',
  new Date('2020-08'),
  new Date ('2020-09'),
  '2020',
  ['divers'],
  '',
  'Charentay',
  'France',
  '',
  ''
)

const insurrance: CVExperienceTraining = new CVExperienceTraining(
  'Courtier en assurances',
  'experience',
  new Date('2016-01'),
  new Date ('2016-04'),
  '2016',
  ['divers', 'clients'],
  'Téléperformances',
  "Villeneuve d'Asq",
  'France',
  'Worst Job Ever...',
  ''
)

const lommeSchool: CVExperienceTraining = new CVExperienceTraining(
  'Animateur enfants',
  'experience',
  new Date('2015-01'),
  new Date ('2015-06'),
  '2015',
  ['entertainment', 'clients'],
  'Écoles Primaires de Lomme',
  "Lomme",
  'France',
  '',
  ''
)

const foirfouille: CVExperienceTraining = new CVExperienceTraining(
  'Assistant en Magasin',
  'experience',
  new Date('2014-10'),
  new Date ('2015-09'),
  '2014 et 2015',
  ['divers', 'clients'],
  "La Foir'Fouille",
  "Capinghem",
  'France',
  '',
  ''
)

const palmBeach: CVExperienceTraining = new CVExperienceTraining(
  'Animateur',
  'experience',
  new Date('2014-04'),
  new Date ('2014-05'),
  '2014',
  ['entertainment', 'clients'],
  "Palm Beach",
  "Djerba",
  'Tunisie',
  '',
  ''
)

const dia: CVExperienceTraining = new CVExperienceTraining(
  'Caissier',
  'experience',
  new Date('2011-07'),
  new Date ('2013-08'),
  'Étés 2011, 2012 et 2013',
  ['divers', 'clients'],
  "Dia",
  "Paris",
  'France',
  '',
  ''
)

const randomXp: Array<CVExperienceTraining> = [
  grapePicking,
  insurrance,
  lommeSchool,
  foirfouille,
  palmBeach,
  dia,
]

const allXp: Array<CVExperienceTraining> = [...relevantXp, ...randomXp];

const allCursus: Array<CVExperienceTraining> = [...trainings, ...allXp];

const skillEfficiency: CVSkills = new CVSkills(
  'Efficacité',
  ['divers', 'webdev'],
  '',
)

const skillCreativity: CVSkills = new CVSkills(
  'Créativité',
  ['divers', 'webdev', 'music', 'entertainment'],
  '',
)

const skillAdapt: CVSkills = new CVSkills(
  'Adaptation',
  ['divers', 'webdev', 'music', 'entertainment', 'clients'],
  '',
)

const skillSocial: CVSkills = new CVSkills(
  'Relationnel',
  ['divers', 'entertainment', 'clients'],
  '',
)

const skillHtml: CVSkills = new CVSkills(
  'HTML5',
  ['webdev'],
  '',
)

const skillScss: CVSkills = new CVSkills(
  'Scss',
  ['webdev'],
  '',
)

const skillJavaScript: CVSkills = new CVSkills(
  'JavaScript',
  ['webdev'],
  '',
)

const skillGit: CVSkills = new CVSkills(
  'Git & GitHub',
  ['webdev'],
  '',
)

const skillAngular: CVSkills = new CVSkills(
  'Angular',
  ['webdev'],
  '',
)

const skillEnglish: CVSkills = new CVSkills(
  'Anglais',
  ['webdev', 'divers', 'clients', 'entertainment'],
  '',
)

const skillSpanish: CVSkills = new CVSkills(
  'Espagnol',
  ['divers', 'clients', 'entertainment'],
  '',
)

const allSkills: Array<CVSkills> = [skillEfficiency, skillCreativity, skillAdapt, skillSocial, skillHtml, skillScss, skillJavaScript, skillGit, skillAngular, skillEnglish, skillSpanish];

const hobbyTravel: CVHobby = new CVHobby(
  'Voyages',
  '',
  ['divers'],
  [],
)

const hobbyMusic: CVHobby = new CVHobby(
  'Guitare',
  'Guitare, Basse, Ukulele et Piano',
  ['music', 'entertainment'],
  []
)

const hobbyTheatre: CVHobby = new CVHobby(
  'Théâtre',
  '',
  ['divers', 'entertainment'],
  []
)

const hobbyGames: CVHobby = new CVHobby(
  'Jeux',
  'Échecs, Jeux de plateau, Jeux video, Belote, Tarot',
  ['divers', 'entertainment'],
  []
)

const hobbyVideo: CVHobby = new CVHobby(
  'Cinema et séries',
  '',
  ['divers', 'entertainment'],
  [],
)

const hobbySports: CVHobby = new CVHobby(
  'Sport',
  'Football, tennis et parapente',
  ['divers', 'entertainment'],
  [],
)

const allHobbies: Array<CVHobby> = [hobbyTravel, hobbyMusic, hobbyTheatre, hobbyGames, hobbyVideo, hobbySports];
