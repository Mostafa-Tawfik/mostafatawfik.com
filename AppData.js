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
      name: "JavaScript",
      url: "logos:javascript",
    },
    {
      name: "SASS",
      url: "logos:sass",
    },
    {
      name: "Tailwind",
      url: "vscode-icons:file-type-tailwind",
    },
    {
      name: "React",
      url: "vscode-icons:file-type-reactjs",
    },
    {
      name: "Redux",
      url: "logos:redux",
    },
    {
      name: "React-Query",
      url: "logos:react-query-icon",
    },
    {
      name: "Material UI",
      url: "logos:material-ui",
    },
    {
      name: "Framer Motion",
      url: "simple-icons:framer",
    },
    {
      name: "Next.js",
      url: "file-icons:nextjs",
    },
    {
      name: "Node.js",
      url: "logos:nodejs-icon",
    },
    {
      name: "Firebase",
      url: "logos:firebase",
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
      startDate: 'Jul-2022',
      endDate: 'Dec-2022',
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
      id: 8,
      path: 'nextflix',
      title: 'Nextflix',
      desc: `A Movies Library App with Netflix ux/ui where you can search, surf, and save your favoraite shows.`,
      url: 'https://nextflix-6b685.web.app/',
      git: 'https://github.com/Mostafa-Tawfik/nextflix',
      image: 'https://i.ibb.co/1QQKRkV/nextflix-L.webp',
      imageMobile: 'https://i.ibb.co/5X0L5Mq/nextflix-P.webp',
      builtWith: ['HTML 5', 'Tailwind', 'JavaScript', 'React' , 'Firebase'],
      overview: [
        {
          section: {
            desc: 'A homepage shows a random show as main hero and shelfs of popular, trending, upcoming, and in theatres shows.',
            img: 'https://i.ibb.co/Rb1FGbT/nextflix-overview1-L.webp'
          }
        },
        {
          section: {
            desc: 'A detailed page where the user find infos, trailer, and recommended shows.',
            img: 'https://i.ibb.co/8dymVVG/nextflix-6b685-web-app.png'
          }
        },
        {
          section: {
            desc: 'User can create an account using email and password or using google account.',
            img: 'https://i.ibb.co/Jm29KFS/nextflix-6b685-web-app.png'
          }
        },
        {
          section: {
            desc: 'User can save favorite shows.',
            img: 'https://i.ibb.co/Sww6p4Z/nextflix-6b685-web-app-1.webp'
          }
        },
      ]
    },
    {
      id: 7,
      path: 'sprints-bank',
      title: 'Sprints online banking',
      desc: `Sprints online banking web application Project built with MERN Stack.`,
      url: 'https://sprints-bank.herokuapp.com/',
      git: 'https://github.com/Sprints-Team-13/OnlineBanking',
      image: 'https://i.ibb.co/MNtwyZC/sprints-bank-L.webp',
      imageMobile: 'https://i.ibb.co/mCGKS7h/sprints-bank-P.webp',
      builtWith: ['HTML 5', 'SASS', 'JavaScript', 'React' , 'React-Query', 'Material UI'],
      overview: [
        {
          section: {
            desc: 'For direct login',
            img: 'https://i.ibb.co/xYJPbYr/github-com-Sprints-Team-13-Online-Banking.png'
          }
        },
        {
          section: {
            desc: 'Landing page',
            img: 'https://i.ibb.co/qkVpRcg/sprints-bank-herokuapp-com.png'
          }
        },
        {
          section: {
            desc: 'Users dashboard overview page',
            img: 'https://i.ibb.co/kXqQhwh/sprints-bank-herokuapp-com-1.png'
          }
        },
        {
          section: {
            desc: 'Users create a new account that needs admin approval, and cant withdraw more than they have in their accounts.',
            img: 'https://i.ibb.co/QM1m9Tp/sprints-bank-herokuapp-com.png'
          }
        },
        {
          section: {
            desc: 'Users can transfer money between their accounts or to other users accounts, all accounts must be active and the sender account should cover the transferred amount.',
            img: 'https://i.ibb.co/BCpNH4h/sprints-bank-herokuapp-com.png'
          }
        },
        {
          section: {
            desc: 'Users can see their transactions in detail including transaction id, type, date, description, and account number.',
            img: 'https://i.ibb.co/724Mj9X/sprints-bank-herokuapp-com-1.png'
          }
        },
        {
          section: {
            desc: 'Admin dashboard overview page.',
            img: 'https://i.ibb.co/MCgB48T/sprints-bank-herokuapp-com.png'
          }
        },
        {
          section: {
            desc: "Admin can see all users and go to a specific user's detail page.",
            img: 'https://i.ibb.co/fkNHMtq/sprints-bank-herokuapp-com-1.png'
          }
        },
        {
          section: {
            desc: "Admin can see the personal Infos in user's page and can activate, deactivate or suspend user's accounts, and see all his transactions.",
            img: 'https://i.ibb.co/31WCfR7/sprints-bank-herokuapp-com-1.png'
          }
        },
        {
          section: {
            desc: "Admin can see all accounts in the database and search for certain ones using an account id or user id and can activate or deactivate them.",
            img: 'https://i.ibb.co/tBPtVT6/sprints-bank-herokuapp-com.png'
          }
        },
        {
          section: {
            desc: "Admin can see all transactions in the database and search for certain ones using a transaction id, user id, or account number.",
            img: 'https://i.ibb.co/VL3b1J9/sprints-bank-herokuapp-com.png'
          }
        },
      ],
      credits: [
        {
          name: 'Mostafa Tawfik',
          role: 'Frontend Developer',
          github: 'https://github.com/Mostafa-Tawfik',
          img: 'https://avatars.githubusercontent.com/u/90884365?v=4',
        },
        {
          name: 'Ahmed Basem',
          role: 'Backend Developer',
          github: 'https://github.com/AhmedBasem20',
          img: 'https://avatars.githubusercontent.com/u/62952819?v=4',
        },
      ]
    },
    {
      id: 6,
      path: 'e-shop',
      title: 'E-Shop',
      desc: `A full E-commerce project, a website that allows you to buy and sell any kind of product, contains a user interface and fully functional admin dashboard.`,
      url: 'https://sprints-ecommerce.herokuapp.com/',
      git: 'https://github.com/Mostafa-Tawfik/e-shop',
      image: 'https://i.ibb.co/NCT7LN1/e-shopL.webp',
      imageMobile: 'https://i.ibb.co/sWWK2xv/e-shopP.webp',
      builtWith: ['HTML 5', 'SASS', 'JavaScript', 'React' , 'React-Query', 'Framer Motion'],
      overview: '',
      credits: [
        {
          name: 'Mostafa Tawfik',
          role: 'Frontend Developer',
          github: 'https://github.com/Mostafa-Tawfik',
          img: 'https://avatars.githubusercontent.com/u/90884365?v=4',
        },
        {
          name: 'Abdel-Rahman Khaled',
          role: 'Backend Developer',
          github: 'https://github.com/Homie980',
          img: 'https://avatars.githubusercontent.com/u/18067165?v=4',
        },
      ]
    },
    {
      id: 5,
      path: 'mygames',
      title: 'My Games',
      desc: `An app lets you discover trending, new releases, upcoming games, and search for your favorite titles, plus news and reviews sections.`,
      url: 'https://50-fivers-games.vercel.app/',
      git: 'https://github.com/Mostafa-Tawfik/my-games',
      image: 'https://i.ibb.co/N9dQ6Pg/myGamesL.webp',
      imageMobile: 'https://i.ibb.co/JCc2q10/myGamesP.webp',
      builtWith: ['HTML 5', 'SASS', 'JavaScript', 'React' , 'Next.js'],
      overview: ''
    },
    {
      id: 2,
      path: 'mywebsite',
      title: 'My Website',
      desc: `My portfolio website, a full responsive multiple pages
      built and designed from scratch.`,
      url: 'https://www.mostafatawfik.com/',
      git: 'https://github.com/Mostafa-Tawfik/mostafatawfik.com',
      image: 'https://i.ibb.co/fMPTPzw/mtL.webp',
      imageMobile: 'https://i.ibb.co/GtJ0RRS/mtP.webp',
      builtWith: ['HTML 5','SASS', 'JavaScript', "React", 'Next.js', 'Framer Motion'],
      overview: ''
    },
    {
      id: 1,
      path: 'myreads',
      title: 'My Reads',
      desc: 'A bookshelf app that allows you to select and categorize books.',
      url: 'https://my-reads-beta.vercel.app/',
      git: 'https://github.com/Mostafa-Tawfik/My-Reads',
      image: 'https://i.ibb.co/VJyRLFh/myReads.webp',
      imageMobile: 'https://i.ibb.co/BNnmPV5/myReadsM.webp',
      builtWith: ['HTML 5','CSS3', 'JavaScript', "React"],
      overview: ''
    },
    {
      id: 3,
      path: 'dynamiclandingpage',
      title: 'Dymanic Landing Page',
      desc: `A multi-section landing page that dynamically updates
      the navigational menu based on sections amount.`,
      url: 'https://landingpage-chi-six.vercel.app/',
      git: 'https://github.com/Mostafa-Tawfik/Landingpage',
      image: 'https://i.ibb.co/5cW7qDf/dynamic-Landing-Page-L.webp',
      imageMobile: 'https://i.ibb.co/QPLNNX0/dynamic-Landing-Page-P.webp',
      builtWith: ['HTML 5','CSS3', 'JavaScript',],
      overview: ''
    },
    {
      id: 4,
      path: 'weatherjournalapp',
      title: 'Weather Journal App',
      desc: `An asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.`,
      url: 'https://mt-weather-journal-app.herokuapp.com/',
      git: 'https://github.com/Mostafa-Tawfik/Weather-Journal-App',
      image: 'https://i.ibb.co/FJcqDc7/weather-App-L.webp',
      imageMobile: 'https://i.ibb.co/Lx4MHh1/weather-App-P.webp',
      builtWith: ['HTML 5','CSS3', 'JavaScript', "Node.js"],
      overview: ''
    },

  ]
} 
