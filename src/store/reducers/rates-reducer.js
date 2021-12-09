const INITIAL_STATE = {
    rates: []
}

export function ratesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_RATES':
            return { rates: action.rates }
        default:
            return state;
    }
}
