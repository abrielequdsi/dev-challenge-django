import React from 'react'
import { Box, Image, Container } from '@chakra-ui/react'
import images from '../images'

const NavHeader = () => (
    <Box display="flex" flexDirection="row" justifyContent="space-between" px={7} py={6} bg="white">
        <Image src={images.fullBrandLogo} alt="Finimize" width="160px" />
    </Box>
)

export default NavHeader
