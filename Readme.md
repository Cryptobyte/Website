# Cryptobyte Website (`cryptobyte.dev`)
This is the repository for my website / portfolio at [cryptobyte.dev](https://cryptobyte.dev) currently hosted in CloudFlare using Pages and Workers.

## Decisions
- **React** was chosen because it's the frontend framework I'm most familar with although admittedly I'm more of a backend and infrastructure guy. I needed something that would allow me to build out reusable components pretty easily so that I can quickly add all of my data without a ton of repetitive HTML (DRY) and React fit the bill. In the future, this may change because I tend to play around with new frameworks and adopt them into projects like this one.

- **Cloudflare** was chosen for it's fairly generous free hosting services. Ideally this website will remain live for as long as the domain is registered and I won't have to be concerned about making sure that my hosting bills are taken care of. I do have other services in AWS and on random VPS machines but Cloudflare Pages seemed like a good fit for its simplicity and cost.

- **API** was created so that I can quickly add all of my existing data and to make it easier to add/remove data later on which is then automatically handled by React's reusable components.

- **Template** was chosen because I suck at design, though I did migrate it to React and in the process replaced a large amount of what was in the original. I kept what I liked most from the style, removed what I didn't want/need and replaced some things that stopped working during the React migration (React & jQuery do NOT get along!). 

- **SendGrid** was chosen because although the dashboard is awful and refuses to work about 40% of the time it was the easiest for me to set up because I had some familiarity with it from previous projects and I didn't need anything super robust for a simple contact form.
