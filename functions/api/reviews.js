export async function onRequest(context) {
  const data = {
    reviews: [
      {
        name: "Charlie Arcodia",
        position: "CTO",
        company: "Kwiks Inc.",
        quote: "I've had the absolute pleasure of working alongside Cryptobyte for the past year, and I can honestly say he's one of the most dedicated and skilled backend engineers I've ever met, and I've spent a Cohort in TechStars 19'. Cryptobyte's ability to jump into any codebase, no matter how complex, is truly impressive. What stands out even more is Cryptobyte's ability to juggle multiple hats seamlessly while never missing a sprint goal. Watching him build a backend reminiscent of TikTok's, handling such a variety of tasks with ease, was nothing short of extraordinary. Working with Cryptobyte has been an incredible experience. His positive attitude, combined with his massive skill set, makes him a standout engineer. Cryptobyte is not just a colleague I've worked with; he's a professional I've learned from and been inspired by. I can confidently recommend Cryptobyte for any project or team, knowing he'll bring dedication and expertise to the table - you have my word."
      },
      {
        name: "Scott Kveton",
        position: "CEO",
        company: "Fractionalist",
        quote: "Cryptobyte has a knack for being able to solve tricky problems and are very thorough in their analysis and execution. They are also very flexible and have been great to have on our team."
      },
      {
        name: "Maximillian Cannon",
        position: "Lead Web Developer",
        company: "Center for Nutrition Studies",
        quote: "Cryptobyte is a very skilled and fast developer. He finished our Node.js script project within a day of accepting the contract and did it within budget. I'll gladly work with him again!"
      },
      {
        name: "Saiakhil Kovvur",
        position: "Full Stack Developer",
        company: "Otis AI",
        quote: "I had the privilege of working with Cryptobyte during my time at OTIS AI as a Junior Full Stack Developer. I consider Cryptobyte as a mentor and someone I will always look up to for the passion and commitment he shows in his work as a Senior Developer. I have learned a lot of new technical skills under his guidance that have helped me code more efficiently and elegantly. He always put a lot of emphasis on clean and legible codebase, which ultimately helps others on the team understand and write better code. He is very skilled in his profession and can take up the most challenging of tasks without hesitation. As he is also a specialist in Cybersecurity, he has taught me the importance of secure APIs, which I had previously no knowledge about. More than anything, Cryptobyte is a great friend."
      },
      {
        name: "Channi Greenwall",
        position: "Technical Product Manager",
        company: "Otis AI",
        quote: "Cryptobyte is a talented engineer, a technology enthusiast, and a true team player. Working with Cryptobyte was an absolute pleasure. From the first day I started, he demonstrated extensive knowledge of the codebase, the industry, and what it means to scale. He mentored many engineers as they onboarded, answering any and all questions with enthusiasm. Something particularly notable was Cryptobyte's documentation. As we worked together to figure out how to scale knowledge transfer, Cryptobyte took on the task of singlehandedly writing out multiple critical pieces of technical documentation. Said documentation was critical in maximizing our team's efficiency. I also particularly admire Cryptobyte's passion. His love for technology and innovation is inescapable. Cryptobyte's free time is often occupied with activities such as robotics, security research, and architectural analysis. In a world where so many engineers do what they do as means to an end, I can say with absolute certainty that Cryptobyte's career is a pure reflection of his passion, love, and drive for technology. Any organization is lucky to have him. "
      },
      {
        name: "Miguel Guerrero",
        position: "CEO",
        company: "Otis AI",
        quote: "Cryptobyte demonstrated a mastery of mobile application development and backend development throughout his tenure as Full Stack Software Developer at MeepLabs. He currently holds a Full Stack Developer position at Otis AI where he has played a pivotal role in building a digital marketing platform for small businesses. Cryptobyte is committed to building robust software solutions that follow best practices in the industry. He has demonstrated the ability to grasp new concepts and frameworks. I will definitely continue to work with Cryptobyte in the future."
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
