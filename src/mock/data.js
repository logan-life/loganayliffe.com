import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Logan Ayliffe | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Homepage and contact info for Logan Ayliffe', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! I’m ',
  name: 'Logan.',
  subtitle: 'I’m a developer, book lover, and climate change activist.',
  cta: 'read more',
};

// ABOUT DATA
export const aboutData = {
  img: 'loganprofile.jpeg',
  paragraphOne:
    'I’m passionate about dedicating my time and energy to improving the human condition.',
  paragraphTwo:
    'I’m especially interested in driving technical solutions to our climate crisis and elevating human welfare through social justice.',
  paragraphThree: '  ',
  resume: 'Ayliffe_Logan_Resume_NL.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'wet_bulb_forecast_project_image.jpg',
    title: 'WetBulbForecast.com (In Progress)',
    info: 'The Wet Bulb Globe Temperature is an indicator of heat related stress on the human body at work (or play) in direct sunlight. It takes into account multiple atmospheric variables, including: temperature, humidity, wind speed, sun angle, and cloud cover.',
    info2:
      'We hope that greater visibility of the increasing frequency of extreme heat stress events will help to instill a sense of urgency regarding the climate crisis.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'excessive_alcohol_use_project_image.png',
    title: 'Can Twitter predict US county-level excessive alcohol consumption? (2021)',
    info: 'Collaborated in a team of 3 to implement published ridge regression ML model which uses NLP derived features from dense, high dimensional Twitter data to predict excessive alcohol consumption.',
    info2:
      'Experimented with various methods of dimensionality reduction to improve model performance. Designed and implement feed-forward neural network to replace prior model yielding significant improvement in both Pearson R and mean absolute error.',
    url: '',
    repo: 'https://github.com/logan-life/twitter_alcohol_use_prediction', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter_covid_cases_project_image.png',
    title: 'Predicting COVID case rate change by US state using Big Twitter Data (2021)',
    info: 'Collaborated in a team of 3 to extract, transform, and load large Twitter datasets for use in multiple ML models using Academic Research Twitter API endpoints.',
    info2:
      'Designed and constructed ML model using TF-IDF scores for ngram usage in COVID related tweets by US state. Experimented with baseline extensions and improved model performance to accurately predict percent change in COVID-19 case rates based on ngram scores.',
    url: '',
    repo: 'https://github.com/logan-life/covid_cases_big_twitter_data', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'soundtrack_surfer_project_image.png',
    title: 'SoundtrackSurfer (2021)',
    info: 'Collaborate in a team of 4 to create single-page application which explores film soundtracks, intelligently recommends relevant artists / films / songs, and plays embedded spotify tracks.',
    info2:
      'Primary responsibilities include react frontend, advanced database query optimization, and spotify integration.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pennpals_project_image.png',
    title: 'PennPals (2020)',
    info: 'Collaborate in a team of 3 to design and create a WhatsApp clone using MERN stack and Twilio Conversations API.',
    info2:
      'Design and develop messaging and multiple party audio and video chat functionality built on top of the Twilio Conversations API. Primary project manager for the team using agile methodology and GitHub Projects.',
    url: '',
    repo: 'https://github.com/logan-life/penn_pals', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'professor_59x_project_image.png',
    title: 'Professor59X (2020)',
    info: 'Design and develop Twitter bot for University of Pennsylvania graduate student organization',
    info2:
      'Monitor UPenn related tweets, interact with Penn community online, post fair-use Penn images from official Penn photostreams.',
    url: 'https://twitter.com/59xProfessor',
    repo: 'https://github.com/logan-life/Professor_59X', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to collaborate?',
  btn: 'Get in touch!',
  email: 'lmayliffe@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/logan_ayliffe',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/logan-ayliffe/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/logan-life',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
