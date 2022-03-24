
export const addFavorite = (goods) => {
  return { type: 'ADD_FAVORITE', payload: { goods } }
}

export const removeFavorite = (id) => {

  return { type: 'REMOVE_FAVORITE', payload: { id } }
}








