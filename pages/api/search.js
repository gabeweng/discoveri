export default function handler(req, res) {
    var sampledata= [
        {
            id:12398128,
            website:"https://www.conradchallenge.org/conrad-challenge",
            host:"Conrad Foundation",
            name:"Harvard High School Economics Challenge",
            teamsize: "2-5",
            description:"Over the course of the year, you and your teammates will go step-by-step through the entrepreneurial process and design an innovation that solves an important problem."
        },
        {
            id:12398128,
            website:"https://www.destinationimagination.org/challenge-experience/",
            host:"Destination Imagine",
            name:"Destination Imagination Challenge Experience",
            teamsize: "2-5",
            description:"The Challenge Experience is our flagship program for pre-K, K-12 and university students. Teams develop solutions to project-based STEAM challenges and then present their solutions live at tournaments."+
            " Destination Imagination Challenges are the prompts or guidelines for what a team creates. Our Challenges are open-ended, allowing teams to express themselves creatively and take full ownership of their solutions. Challenges are designed to teach the creative process—a system of learning that is at the root of innovation and a child’s ability to bring an idea to life."
        }
    ]
    res.status(200).json({data:sampledata})
  }