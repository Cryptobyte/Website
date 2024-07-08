export async function onRequest(context) {
  const data = {
    projects: [
      {
        slug: 'mindpaint',
        name: 'MindPaint',
        year: '2024',
        tags: ['TypeScript', 'React', 'Web Workers', 'OpenAI', 'CloudFlare'],
        links: [
          { title: 'Website', href: 'https://mindpaint.app' }
        ],
        description: 'Cryptobyte architected the cloud infrastructure in AWS, developed scalable and secure NodeJS backend with MongoDB, assisted with frontend development in React.'
      },
      {
        slug: 'codestore',
        name: 'CodeStore',
        year: '2024',
        tags: ['TypeScript', 'React', 'NodeJS', 'ExpressJS', 'MongoDB', 'AWS'],
        links: [
          { title: 'Website', href: 'https://codestore.ai' }
        ],
        description: 'Cryptobyte wrote the AI integrations on CloudFlare worker edge functions, assisted with building out the React frontend and built out the hosting infrastructure / CD pipelines.'
      },
      {
        slug: 'everystate',
        name: 'EveryState',
        year: '2021',
        tags: ['Javascript', 'DevOps', 'Backend', 'NodeJS', 'PostgreSQL'],
        links: [
          { title: 'Website', href: 'https://everystate.com' }
        ],
        description: 'EveryState provides real estate data to clients from a wide variety of MLS sources to assist businesses with access to the hard to reach data in various MLS feeds. Cryptobyte worked with EveryState in developing internal tooling for processing and managing a dataset with around 60 million records and assisted with the creation of AWS resources such as read replica databases and consultation on scaling the existing infrastructure.' 
      },
      {
        slug: 'jump',
        name: 'Jump',
        year: '2022',
        tags: ['DevOps', 'AWS', 'WireGuard', 'Github Actions', 'CI/CD', 'DataDog'],
        links: [
          { title: 'Website', href: 'https://jump.co' }
        ],
        description: 'Jump is an NFT marketplace backed by real world collectables and a platform for partners that would like to bring their real world physical assets into the NFT space. Cryptobyte developed the infrastructure for the Jump platform including its AWS Elastic Beanstalk instances for multiple enviornments, secure private cloud protected by a WireGuard bastion instance and more. We also developed the continuous integration and deployment scripts to deploy updates from Github directly into their associated enviornment infrastructure.'
      },
      {
        slug: '3go',
        name: '3Go',
        year: '2022',
        tags: ['TypeScript', 'DevOps', 'Backend', 'NodeJS', 'NestJS', 'AWS', 'PostgreSQL'],
        links: [
          { title: 'Website', href: 'https://app.3go.com' }
        ],
        description: '3GO is a platform to help people unfamiliar with digital security secure their online assets. Cryptobyte worked on 3GO with Fractionalist originally as a backend developer and quickly moved into a DevOps role where I managed the AWS infrastructure and CI/CD pipelines for the platform including backend, web and mobile deployments.' 
      },
      {
        slug: 'cherokee',
        name: 'Cherokee Acquisition',
        year: '2018',
        tags: ['Javascript', 'HTML', 'CSS', 'React Native', 'NodeJS', 'ExpressJS', 'MongoDB'],
        links: [
          { title: 'Website', href: 'https://www.cherokeeacq.com/' },
          { title: 'Claims Market', href: 'https://claims-market.com/' },
          { title: 'Put Market', href: 'https://www.claimsputmarket.com/' }
        ],
        description: 'Cryptobyte worked on several projects for Cherokee Acquisition in conjunction with Meeplabs including a multi platform mobile app called Mineral Market and several websites with their respective backends. Including the main landing page and market websites.'
      },
      {
        slug: 'lq',
        name: 'LQ',
        year: '2019',
        tags: ['Swift', 'NodeJS', 'ExpressJS'],
        links: [],
        description: 'LQ was an iOS app and backend system designed to bring auditory therapy and meditation to users. Developed in conjunction with Meeplabs this app that heavily utilized system audio features. Cryptobyte developed both the iOS app and the backend system for this project.'
      },
      {
        slug: 'f8date',
        name: 'F8Date',
        year: '2017',
        tags: ['React Native', 'WebSockets'],
        links: [],
        description: 'F8Date was a modern dating application that used AI on the backend to help ensure that each user was in fact a real person. Cryptobyte created a cross platform mobile app with React Native we had to work with animations in React Native and consuming authenticated WebSockets for the chat feature among other real time connectivity features.'
      },
      {
        slug: 'pearup',
        name: 'PearUp',
        year: '2017',
        tags: ['NodeJS', 'ExpressJS', 'React Native'],
        links: [],
        description: 'PearUp is an iOS app to help people meet up in real life. Cryptobyte developed the PearUp app in conjunction with MeepLabs using modern Swift and Alamonfire for HTTP communication with their API.'
      },
      {
        slug: 'velvet',
        name: 'Velvet Magazine',
        year: '2018',
        tags: ['Javascript', 'React Native', 'NodeJS', 'MongoDB'],
        links: [
          { title: 'Android', href: 'https://play.google.com/store/apps/details?id=com.velvet.mag&hl=en_IN&gl=US' }
        ],
        description: 'Velvet is a popular Dubai magazine that needed a cross platform app to build their online presence. Working in conjunction with Meeplabs we developed the Velvet Magazine mobile app and backend system to bring their website into the mobile market. This React Native app required a lot of custom UI to match client spec and we were able to bring the clients vision to reality.'
      },
      {
        slug: 'vibez',
        name: 'Vibez',
        year: '2017',
        tags: ['Swift'],
        links: [],
        description: 'Implemented last minute features in the iOS app for App Store submission in Swift on a sharp deadline to make sure the client met their release timeline when the former team had failed to implement the changes needed for App Store submission.'
      },
      {
        slug: 'meepcraft',
        name: 'MeepCraft',
        year: '2016',
        tags: ['Java', 'Minecraft', 'Game Server', 'Sever Administration'],
        links: [
          { title: 'Website', href: 'http://meepcraft.com/' },
        ],
        description: 'MeepCraft was a large Minecraft server that had a significant player base and a lot of custom development work. Cryptobyte worked with MeepCraft at first as a development resource which evolved into a lead development and server administration role managing multiple networked game servers and a large number of Java plugins.'
      }
    ]
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
