import React from 'react'
import { Line } from 'react-chartjs-2'
import { Text, Box } from '@chakra-ui/react'
import theme from '../theme'
import { abbreviateNumber } from '../utils/format'

type Props = {
    xAxisData: number[] | string[]
    yAxisData: number[]
    title?: string
    xLabel?: string
    yLabel?: string
}

const LineChart = ({ xAxisData, yAxisData, title, xLabel, yLabel }: Props) => {
    const formatPounds = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'GBP',
    })

    const legendOptions = {
        display: false,
    }

    const options = {
        title: {
            display: !!title,
            text: title,
        },
        scales: {
            gridlines: { display: false },
            yAxes: [
                {
                    scaleLabel: { display: !!yLabel, labelString: yLabel },
                    gridlines: { display: false },
                    ticks: { callback: (val: number) => abbreviateNumber(val) },
                },
            ],
            xAxes: [
                {
                    scaleLabel: { display: !!xLabel, labelString: xLabel },
                    ticks: { display: true },
                },
            ],
        },
    }

    return (
        <Box
            borderLeft={['0px', '1px', '1px']}
            borderColor={['gray.300', 'gray.300', 'gray.300']}
            pl={[0, 3, 3]}
        >
            <Line
                data={{
                    labels: xAxisData,
                    datasets: [
                        {
                            backgroundColor: theme.colors.blue100,
                            borderColor: theme.colors.primary,
                            data: yAxisData,
                        },
                    ],
                }}
                options={options}
                legend={legendOptions}
            />
            <Box color="white" p={3} bg="gray.200" borderRadius="6" mt={2} display="inline-block">
                <Text textAlign={'center'} color={'gray.700'}>
                    After{' '}
                    <Text fontWeight="bold" as="span">
                        50 years
                    </Text>
                    , your total balance is
                    <Text fontWeight="bold" as="span">
                        {' '}
                        {formatPounds.format(yAxisData[yAxisData.length - 1])}
                    </Text>
                </Text>
            </Box>
        </Box>
    )
}

export default LineChart
