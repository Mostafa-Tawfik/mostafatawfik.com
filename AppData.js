// eslint-disable-next-line import/no-anonymous-default-export
export default {

  myStack: [
    {
      name: 'HTML 5',
      url: 'vscode-icons:file-type-html'
    },
    {
      name: "CSS3",
      url: "vscode-icons:file-type-css",
    },
    {
      name: "SASS",
      url: "logos:sass",
    },
    {
      name: "JavaScript",
      url: "logos:javascript",
    },
    {
      name: "React",
      url: "vscode-icons:file-type-reactjs",
    },
    {
      name: "Node",
      url: "logos:nodejs-icon",
    },
    {
      name: "NPM",
      url: "vscode-icons:file-type-npm",
    },
    {
      name: "GIT",
      url: "logos:git-icon",
    },
  ],

  education: [
    {
      id: 1,
      title:'CS50',
      location: 'HarvardX',
      field: 'Computer Software Engineering',
      startDate: 'Feb-2022',
      endDate: 'Jun-2022',
      desc:'Harvard University introduction to the intellectual enterprises of computer science and the art of programming.',
      credential: '',
      more: 'https://cs50.harvard.edu/x/2022/',
    },
    {
      id: 2,
      title:'React Development Nanodegree',
      location: 'Udacity',
      field: 'Web Development',
      startDate: 'Jan-2022',
      endDate: 'Jan-2022',
      desc:'As this is a project-based course, you’re going to start building right away. This gives you an opportunity to start mastering the skills you’ll need.',
      credential: 'https://confirm.udacity.com/WAZHVGZD',
      more: 'https://egfwd.com/specializtion/react-development/',
    },
    {
      id: 3,
      title:'Foundations of User Experience',
      location: 'Google',
      field: 'UX Design',
      startDate: 'Dec-2021',
      endDate: 'Dec-2021',
      desc:'Foundations of User Experience is the first of a series of seven courses that will equip you with the skills needed to apply to jobs in user experience design.',
      credential: 'https://www.coursera.org/verify/CZT8AF25CG7V',
      more: 'https://www.coursera.org/learn/foundations-user-experience-design',
    },
    {
      id: 4,
      title:'Front-End Professional Nanodegree',
      location: 'Udacity',
      field: 'Web Development',
      startDate: 'Nov-2021',
      endDate: 'Dec-2021',
      desc:'Building high-quality websites and dynamic applications using JavaScript and connect a web application to backend server data using JavaScript.',
      credential: 'https://confirm.udacity.com/PFGT3GNC',
      more: 'https://egfwd.com/specializtion/professional-web-development/',
    },
    {
      id: 5,
      title:'Challenger Web Development',
      location: 'Udacity',
      field: 'Web Development',
      startDate: 'Sep-2021',
      endDate: 'Oct-2021',
      desc:'Create and style web components, Debug HTML and CSS code, Build a responsive website layout, Build a website using WordPress.',
      credential: '',
      more: 'https://egfwd.com/specializtion/challenger-web-development/',
    },
  ],
  services: [
    {
      id: 1,
      name: 'DESIGN',
      icon: 'majesticons:ux-circle',
      desc: 'Create a seamless and energizing user experience and user interface to establish a solid foundation for future development and long-term growth.'
    },
    {
      id: 2,
      name: 'DEVELOPMENT',
      icon: 'fluent:window-dev-tools-24-regular',
      desc: `Build static and dynamic responsive web applications with well structured, reliable, efficient, and scalable clean codes.`
    },
    {
      id: 3,
      name: 'SEO',
      icon: 'whh:seo',
      desc: 'Expand your target audiences, improve your brand awareness and boost Your credibility.'
    },
  ],
  Projects: [
    {
      id: 1,
      path: 'myreads',
      title: 'My Reads',
      desc: 'A bookshelf app that allows you to select and categorize books.',
      url: 'https://my-reads-beta.vercel.app/',
      git: 'https://github.com/Mostafa-Tawfik/My-Reads',
      image: '../../images/myReads.webp',
      imageMobile: '../../images/myReadsM.png',
      builtWith: ['HTML 5','CSS3', 'JavaScript', "React"],
    },
    {
      id: 2,
      path: 'mywebsite',
      title: 'My Website',
      desc: `My portfolio website, a full responsive multiple pages
      built and designed from scratch.`,
      url: 'https://www.mostafatawfik.com/',
      git: 'https://github.com/Mostafa-Tawfik/mostafatawfik.com',
      image: '../../images/mtL.png',
      imageMobile: '../../images/mtP.png',
      builtWith: ['HTML 5','SASS', 'JavaScript', "React"],
    },
    {
      id: 3,
      path: 'dynamiclandingpage',
      title: 'Dymanic Landing Page',
      desc: `A multi-section landing page that dynamically updates
      the navigational menu based on sections amount.`,
      url: 'https://landingpage-chi-six.vercel.app/',
      git: 'https://github.com/Mostafa-Tawfik/Landingpage',
      image: '../../images/dynamicLandingPageL.png',
      imageMobile: '../../images/dynamicLandingPageP.png',
      builtWith: ['HTML 5','CSS3', 'JavaScript',],
    },
    {
      id: 4,
      path: 'weatherjournalapp',
      title: 'Weather Journal App',
      desc: `An asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.`,
      url: 'https://mt-weather-journal-app.herokuapp.com/',
      git: 'https://github.com/Mostafa-Tawfik/Weather-Journal-App',
      image: '../../images/weatherAppL.png',
      imageMobile: '../../images/weatherAppP.png',
      builtWith: ['HTML 5','CSS3', 'JavaScript', "Node"],
    },
    {
      id: 5,
      path: 'mygames',
      title: 'My Games',
      desc: `A mockup design for gaming store, build it with pure
      HTML and CSS.`,
      url: 'https://50-fivers-games.vercel.app/',
      git: 'https://github.com/Mostafa-Tawfik/my-games',
      image: '../../images/myGamesL.png',
      imageMobile: '../../images/myGamesP.png',
      builtWith: ['HTML 5','SASS', 'JavaScript', 'SASS'],
    },
  ]
} 
