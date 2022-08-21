import React from 'react'
import {
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    Tooltip,
    SliderThumb,
} from '@chakra-ui/react'

type Props = {
    sliderValue: number
    setSliderValue: any
}

const RateSlider = ({ sliderValue, setSliderValue }: Props) => {
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
        <Slider
            defaultValue={sliderValue}
            min={0}
            max={100}
            colorScheme="teal"
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
                25%
            </SliderMark>
            <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
                50%
            </SliderMark>
            <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
                75%
            </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
                hasArrow
                bg="teal.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue}%`}
            >
                <SliderThumb />
            </Tooltip>
        </Slider>
    )
}

export default RateSlider
