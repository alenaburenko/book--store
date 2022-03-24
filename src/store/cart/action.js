export const addCart = (good) => {
    return { type: 'ADD_CART', payload: {good} }
  }
  
  export const removeCart = (id) => {
  
    return { type: 'REMOVE_CART', payload: id }
  }



  