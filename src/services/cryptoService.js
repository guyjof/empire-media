import axios from 'axios'

export const cryptoService = {
    getCoinData,
    sortData
}


async function getCoinData(timeDiff) {
    const resultsLimit = 30
    let timeFrame = ''

    switch (timeDiff) {
        case '5min':
            timeFrame = 'histominute?aggregate=5&e'
            break;
        case '1hour':
            timeFrame = 'histohour?aggregate=1&e'
            break;
        case '1week':
            timeFrame = 'histoday?aggregate=7&e'
            break;
        default:
            timeFrame = 'histominute?aggregate=1&e'
            break;
    }

    const rootUrl = `https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/${timeFrame}=CCCAGG&fsym=BTC&tsym=usd&limit=${resultsLimit}`
    const { data } = await axios.get(rootUrl)
    return data.data
}

function sortData(data, { dir, key }) {
    if (!data) return data
    if (key === 'Date') {
        if (dir === 'up') {
            data.sort((a, b) => (Date.parse(a[key]) - Date.parse(b[key])))
        } else {
            data.sort((a, b) => (Date.parse(b[key]) - Date.parse(a[key])))
        }
    }

    if (dir === 'up')
        data.sort((a, b) => (a[key] < b[key] ? 1 : -1))
    else {
        data.sort((a, b) => (a[key] > b[key] ? 1 : -1))
    }
    return data
}