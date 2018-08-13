import favorites from './favoritesReducer'
import filter from './filterReducer'
import realtyData from './realtyDataReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    favorites,
    filter,
    realtyData
})
