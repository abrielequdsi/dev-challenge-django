import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    Stack,
    NumberInputStepper,
    NumberInputField,
    NumberInput,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import RateSlider from './RateSlider'
import IInterestData from '../types/Interest'

type Props = {
    inputData: IInterestData
    handleChange: any
}

const InputForm = ({ inputData, handleChange }: Props) => {
    const format = (val: number) => `£ ` + val
    return (
        <Box p={[16, 3, 3]} pt={3}>
            <Stack spacing={5}>
                <FormControl id="initialDeposit" onChange={handleChange}>
                    <FormLabel>Initial Deposit</FormLabel>
                    <NumberInput value={format(inputData.initialDeposit)}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <FormControl id="monthlyDeposit" onChange={handleChange}>
                    <FormLabel>Monthly Deposit</FormLabel>
                    <NumberInput value={format(inputData.monthlyDeposit)}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <FormControl id="yearlyInterestRate" onChange={handleChange}>
                    <FormLabel>Interest Rate (Yearly)</FormLabel>
                    <RateSlider
                        sliderValue={inputData.yearlyInterestRate}
                        setSliderValue={handleChange}
                    />
                </FormControl>
            </Stack>
        </Box>
    )
}

export default InputForm
