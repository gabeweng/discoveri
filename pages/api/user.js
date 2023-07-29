import { systemProps } from "@chakra-ui/react"

export default function handler(req, res) {
    

    var sampledata= [
        {
            id:12398128,
            website:"https://www.conradchallenge.org/conrad-challenge",
            host:"Conrad Foundation",
            name:"Harvard High School Economics Challenge",
            teamsize: "2-5",
            description:"Over the course of the year, you and your teammates will go step-by-step through the entrepreneurial process and design an innovation that solves an important problem."
        }
    ]
    res.status(200).json({data:sampledata})
  }