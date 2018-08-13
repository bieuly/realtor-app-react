// Actions types
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

// Action creators
export function toggleFavorite(id) {
    return {type: TOGGLE_FAVORITE, id: id}
}