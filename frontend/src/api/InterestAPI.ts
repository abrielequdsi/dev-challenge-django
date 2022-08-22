//API calls, edit url in baseUrl.ts when ready for production
import { baseUrl } from './baseUrl'
import IInterestData from '../types/Interest'

const interestDataUrl = `${baseUrl}/v1/interest-data/`

const calculateInterestData = async (data: IInterestData): Promise<number[]> => {
    const method = 'POST'
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(data)

    const response = await fetch(interestDataUrl, { method, headers, body })

    // Handle error
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    }

    const jsonRes = await response.json()

    return jsonRes
}

export { calculateInterestData }
