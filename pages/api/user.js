import { systemProps } from "@chakra-ui/react"

export default function handler(req, res) {
    

    var sampledata= [
        {
            id:12398128,
            image: "https://images.squarespace-cdn.com/content/v1/53cd080fe4b006756b7288ea/1628875019321-WSO82ZGBFRSI1T7MIQEU/CanopyGraphics.jpg?format=2500w",
            website:"https://www.conradchallenge.org/conrad-challenge",
            host:"Conrad Foundation",
            name:"Harvard High School Economics Challenge",
            teamsize: "2-5",
            description:"Over the course of the year, you and your teammates will go step-by-step through the entrepreneurial process and design an innovation that solves an important problem."
        },
        {
            id:10237453,
            image: "https://images.squarespace-cdn.com/content/v1/53cd080fe4b006756b7288ea/1628875019321-WSO82ZGBFRSI1T7MIQEU/CanopyGraphics.jpg?format=2500w",
            website:"https://www.conradchallenge.org/conrad-challenge",
            host:"Conrad Foundation",
            name:"Harvard High School Economics Challenge",
            teamsize: "2-5",
            description:"Over the course of the year, you and your teammates will go step-by-step through the entrepreneurial process and design an innovation that solves an important problem."
        }
    ]
    res.status(200).json({data:sampledata})
  }