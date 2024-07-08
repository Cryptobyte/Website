export async function onRequestPost(context) {
  const body = await context.request.clone().json();

  if (!body.name || !body.email || !body.message) {
    return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: 'me@cryptobyte.dev',
                name: 'Cryptobyte'
              }
            ]
          }
        ],
        from: { 
          email: 'no-reply@cryptobyte.dev',
          name: `Cryptobyte - Contact Form`
        },
        subject: `Cryptobyte - Contact Form`,
        content: [
          {
            type: 'text/html',
            value: `
              <p>
                <strong>Name:</strong> ${body.name}<br />
                <strong>Email:</strong> ${body.email}<br />
                <strong>Message:</strong> ${body.message}
              </p>

              <br />
              <br />
              <pre>${JSON.stringify(body, null, 2)}</pre>
            `
          }
        ]
      })
    });

    // for testing..
    console.log(response);

  } catch (err) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: err.message 
    
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
