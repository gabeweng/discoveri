import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import CompCard from '../components/compcard'
export default function Test() {
    return (
        <ChakraProvider>
            <CompCard info={{
                id:12398128,
                website:"https://www.conradchallenge.org/conrad-challenge",
                host:"Conrad Foundation",
                name:"Harvard High School Economics Challenge",
                teamsize: "2-5",
                description:"Over the course of the year, you and your teammates will go step-by-step through the entrepreneurial process and design an innovation that solves an important problem."
            }}/>
        </ChakraProvider>
    )
}