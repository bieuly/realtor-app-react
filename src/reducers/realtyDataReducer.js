import { REALTY_DATA_FETCH_SUCCESS, REALTY_DATA_HAS_ERRORED, REALTY_DATA_IS_LAOADING } from '../actions/realtyDataActions'

export function realtyDataHasErrored(state = false, action) {
    switch (action.type) {
        case REALTY_DATA_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state
    }
}

export function realtyDataIsLoading(state = false, action) {
    switch(action.type) {
        case REALTY_DATA_IS_LAOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function realtyData(state = [], action) {
    switch(action.type) {
        case REALTY_DATA_FETCH_SUCCESS:
            return action.data;
        default:
            return state
    }
}