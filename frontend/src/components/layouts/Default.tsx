import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import NavHeader from '../NavHeader'

type LayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => (
    <Box
        display="flex"
        minHeight="100vh"
        height="100%"
        flexDirection="column"
        backgroundColor="#F7F7F9"
    >
        <NavHeader />
        <Container maxW={'6xl'} py={12}>
            {children}
        </Container>
    </Box>
)

export default DefaultLayout
