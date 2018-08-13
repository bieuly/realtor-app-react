// Action types
export const SET_FILTER = 'SELECT_FILTER'

// Action creators
export function setFilter(filter) {
    return {type: SET_FILTER, filter: filter}
}

