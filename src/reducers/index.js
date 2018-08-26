import favorites from './favoritesReducer'
import filter from './filterReducer'
import {realtyData, realtyDataHasErrored, realtyDataIsLoading} from './realtyDataReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    realtyDataIsLoading,
    realtyDataHasErrored,
    realtyData,
    filter,
    favorites
})
