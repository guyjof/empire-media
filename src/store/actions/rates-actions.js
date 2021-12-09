import { cryptoService } from "../../services/cryptoService";

export function loadData(timeDiff) {
    return async (dispatch) => {
        const rates = await cryptoService.getCoinData(timeDiff)
        dispatch({ type: 'SET_RATES', rates })
    }
}

export function sortData(sortBy) {
    return (dispatch, getState) => {
        const data = getState().rates
        if (!data) return
        const rates = cryptoService.sortData(data.rates, sortBy)
        dispatch({ type: 'SET_RATES', rates })
    }
}