export async function onRequest(context) {
  const data = {
    resume: [
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
      { 
        slug: 'meeplabs',
        name: 'MeepLabs',
        tags: ['Javascript', 'Backend', 'Mobile', 'NodeJS', 'React Native', 'Swift', 'Java', 'ExpressJS', 'MongoDB'],
        links: [
          { title: 'Company', href: 'https://meeplabs.com' }
        ],
        description: 'MeepLabs was a SaaS company developing software in many forms for clients across the globe. Cryptobyte worked on several projects for MeepLabs clients including multiple Swift iOS applications, React Native (iOS & Android) applications, Android TV applications and backend systems for each project. As defacto team lead within the organization Cryptobyte was responsible for each client project as it came in and was passed through the development pipeline, working with every part of the application development lifecycle and working to meet client expectations while balancing time and effort.'
      },
      {
        slug: 'lawlsec',
        name: 'LawlSec',
        tags: ['HTML', 'CSS', 'Linux', 'PHP', 'MySQL', 'Wordpress'],
        links: [],
        description: 'LawlSec was my first freelance agency working with local small business clients to build websites, web applications and modernizing infrastructure. Cryptobyte worked on several projects for LawlSec clients including Wordpress websites, custom PHP applications and Linux server administration.'
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
