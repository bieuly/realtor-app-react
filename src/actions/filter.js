export const SELECT_FILTER = 'SELECT_FILTER'
export const FILTER = 'FILTER'

export function selectFilter(filter) {
    return {type: SELECT_FILTER, filter: filter}
}

export function filter(text) {
    return {type: FILTER, text: text}
}

