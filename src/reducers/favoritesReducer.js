import { Set } from 'immutable'
import { TOGGLE_FAVORITE } from '../actions/favoritesActions'

function toggleFavorite(favorites, id) {
    if(!favorites.has(id)){
        return favorites.add(id)
    } else {
        return favorites.delete(id)
    }
  }

export default function favorites(state = Set(), action) {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            return toggleFavorite(state, action.id)
        default:
            return state
    }
}