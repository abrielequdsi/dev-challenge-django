import React from 'react'
import { Heading, Alert } from '@chakra-ui/react'

const CalculatorHeading = () => {
    return (
        <>
            <Alert
                status="info"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                borderRadius="6"
                px={3}
                mb={4}
            >
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    Interest Calculator
                </Heading>
            </Alert>
        </>
    )
}

export default CalculatorHeading
