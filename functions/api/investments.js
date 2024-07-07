export async function onRequest(context) {
  const data = {
    investments: [
      {
        slug: 'mindpaint'
      },
      {
        slug: 'codestore'
      },
      {
        slug: 'kwiks'
      },
      {
        slug: 'otis'
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
