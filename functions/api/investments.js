export async function onRequest(context) {
  const data = {
    investments: [
      {
        slug: 'mindpaint',
        name: 'MindPaint',
        year: '2024',
        tags: ['TypeScript', 'React', 'Web Workers', 'OpenAI', 'CloudFlare'],
        links: [
          { title: 'Website', href: 'https://mindpaint.app' }
        ],
        description: 'MindPaint is an AI powered coloring page generator. Using the power of AI you can generate coloring book style pages of anything you can dream of, print it out and color it.'
      },
      {
        slug: 'codestore',
        name: 'Code Store',
        year: '2024',
        tags: ['TypeScript', 'React', 'NodeJS', 'ExpressJS', 'MongoDB', 'AWS'],
        links: [
          { title: 'Website', href: 'https://codestore.ai' }
        ],
        description: 'Code Store is a place for Swift developers to sell their Swift Package Manager packages without rolling out the infrastructure to set up a secure sales platform on their own.'
      },
      { 
        slug: 'kwiks',
        name: 'Kwiks',
        year: '2024',
        tags: ['TypeScript', 'DevOps', 'Backend', 'Mobile', 'NodeJS', 'Swift', 'AWS', 'ExpressJS', 'MongoDB'],
        links: [
          { title: 'Website', href: 'https://kwiks.com' }
        ],
        description: 'Kwiks is a video sharing platform similar to TikTok where both creators and viewers can earn money. Creators can earn money by creating videos that people watch and viewers can earn money by watching and interacting with videos.'
      },
      { 
        slug: 'otis',
        name: 'Otis AI',
        year: '2021',
        tags: ['Javascript', 'TypeScript', 'DevOps', 'Backend', 'Mobile', 'NodeJS', 'React Native', 'AWS', 'ExpressJS', 'MongoDB'],
        links: [
          { title: 'Web', href: 'https://meetotis.com' },
          { title: 'iOS', href: 'https://apps.apple.com/us/app/otis-ai-market-your-business/id1451423564?uo=4&at=11l6hc&app=itunes&ct=fnd' },
          { title: 'Android', href: 'https://play.google.com/store/apps/details?id=com.otis&hl=en_US&gl=US' }
        ],
        description: 'Otis AI is a tool that helps small businesses with advertising on social media. It uses AI to create and manage targeted ads from business data for social media platforms.'
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
