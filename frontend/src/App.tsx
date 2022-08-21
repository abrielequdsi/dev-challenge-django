import React, { useState, useEffect } from 'react'
import './App.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Grid,
    GridItem,
    Flex,
    SimpleGrid,
} from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import LineChart from './components/LineChart'
import CalculatorHeading from './components/CalculatorHeading'
import InputForm from './components/InputForm'
import theme from './theme'
import { calculateInterestData } from './api/InterestAPI'
import IInterestData from './types/Interest'

const defaultTheme = extendTheme(theme)

// Note: This is just for example purposes
// should be replaced with real data from the server
const mockInterestData = {
    xAxis: [0, 1, 2, 3, 4, 5],
    yAxis: [100, 150, 180, 210, 240, 350],
}

function App() {
    const parse = (val: string) => val.replace(/^\£ /, '')

    const [inputData, setInputData] = useState<IInterestData>({
        initialDeposit: 0,
        monthlyDeposit: 0,
        yearlyInterestRate: 0,
    })
    const [interestReturns, setInterestReturns] = useState<number[]>([])

    useEffect(() => {
        calculateInterestData(inputData)
            .then((data) => {
                setInterestReturns(data)
                console.log(data[data.length - 1])
            })
            .catch((err) => console.log(err))
    }, [inputData])

    const handleChange = (e: any) => {
        // Temporary Fix
        if (typeof e === 'number') {
            setInputData((prevState: IInterestData) => ({ ...prevState, yearlyInterestRate: e }))
        } else {
            setInputData((prevState: IInterestData) => ({
                ...prevState,
                [e.target.id]: parse(e.target.value),
            }))
        }
    }

    return (
        <ChakraProvider theme={defaultTheme}>
            <DefaultLayout>
                <Box
                    w={'full'}
                    bg={'white'}
                    boxShadow={'md'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}
                >
                    <CalculatorHeading />
                    <Grid templateColumns="repeat(6, 3fr)" gap={4}>
                        <GridItem colSpan={[6, 2, 2]}>
                            <InputForm inputData={inputData} handleChange={handleChange} />
                        </GridItem>
                        <GridItem colSpan={[6, 4, 4]}>
                            <LineChart
                                title="Savings Over time"
                                xAxisData={interestReturns.map((_: any, idx: number) => idx)}
                                yAxisData={interestReturns}
                                xLabel="Years"
                                yLabel="Amount"
                            />
                        </GridItem>
                    </Grid>
                </Box>
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App
