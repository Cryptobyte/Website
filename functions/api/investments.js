export async function onRequest(context) {
  const data = {
    investments: [
      {
        slug: 'mindpaint',
        name: 'MindPaint',
        tags: ['TypeScript', 'React', 'Web Workers', 'OpenAI', 'CloudFlare'],
        links: [
          { title: 'Website', href: 'https://mindpaint.app' }
        ],
        description: 'Cryptobyte architected the cloud infrastructure in AWS, developed scalable and secure NodeJS backend with MongoDB, assisted with frontend development in React.'
      },
      {
        slug: 'codestore',
        name: 'CodeStore',
        tags: ['TypeScript', 'React', 'NodeJS', 'ExpressJS', 'MongoDB', 'AWS'],
        links: [
          { title: 'Website', href: 'https://codestore.ai' }
        ],
        description: 'Cryptobyte wrote the AI integrations on CloudFlare worker edge functions, assisted with building out the React frontend and built out the hosting infrastructure / CD pipelines.'
      },
      { 
        slug: 'kwiks',
        name: 'Kwiks',
        tags: ['TypeScript', 'DevOps', 'Backend', 'Mobile', 'NodeJS', 'Swift', 'AWS', 'ExpressJS', 'MongoDB'],
        links: [
          { title: 'Website', href: 'https://kwiks.com' }
        ],
        description: 'Cryptobyte acted as a lead technical resource at Kwiks. Building scalable infrastructure in Amazon Web Services (AWS), a high performance TypeScript & NodeJS backend and assisted with Kwiks mobile app development in Swift with a focus on API integration.'
      },
      { 
        slug: 'otis',
        name: 'Otis AI',
        tags: ['Javascript', 'TypeScript', 'DevOps', 'Backend', 'Mobile', 'NodeJS', 'React Native', 'AWS', 'ExpressJS', 'MongoDB'],
        links: [
          { title: 'Web', href: 'https://meetotis.com' },
          { title: 'iOS', href: 'https://apps.apple.com/us/app/otis-ai-market-your-business/id1451423564?uo=4&at=11l6hc&app=itunes&ct=fnd' },
          { title: 'Android', href: 'https://play.google.com/store/apps/details?id=com.otis&hl=en_US&gl=US' }
        ],
        description: 'Otis AI is an AI driven marketing tool for small business that helps small business publish smart advertisements across platforms using data from many existing sources. Cryptobyte worked on Full Stack Development with NodeJS, ExpressJS and React Native (iOS & Android). Setup and maintained CI/CD pipelines to multiple environments including backend, web and mobile app beta and production distributions. Mentored and trained multiple junior developers on staff and lead the development team from the start of the project up to over 5000 users and 15 team members.'
      },
    ]
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
