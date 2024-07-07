export async function onRequest(context) {
  const data = {
    resume: [
      { 
        slug: 'kwiks' 
      },
      { 
        slug: 'otis' 
      },
      { 
        slug: 'meeplabs' 
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
