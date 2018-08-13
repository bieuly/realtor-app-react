import { SET_FILTER } from '../actions/filterActions'
import FilterOptions from '../constants/filterOptions'

export default function filter(state = FilterOptions.id, action) {
    switch(action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}