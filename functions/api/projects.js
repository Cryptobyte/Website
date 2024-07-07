export async function onRequest(context) {
  const data = {
    projects: [
      {
        slug: 'mindpaint'
      },
      {
        slug: 'codestore'
      },
      {
        slug: 'everystate'
      },
      {
        slug: 'jump'
      },
      {
        slug: '3go'
      },
      {
        slug: 'cherokee'
      },
      {
        slug: 'lq'
      },
      {
        slug: 'f8date'
      },
      {
        slug: 'pearup'
      },
      {
        slug: 'velvet'
      },
      {
        slug: 'vibez'
      },
      {
        slug: 'meepcraft'
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
