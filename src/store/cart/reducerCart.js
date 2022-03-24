const getInitialState = () => {
    try {
        const lsItem = localStorage.getItem('cart');
        if (!lsItem) { return [] }
        return JSON.parse(lsItem)
    } catch (e) {
        console.error(e);
        return []
    }
  }
  
  const initialState = getInitialState()
  export default function reducerCart(state = initialState, action) {
  
    switch (action.type) {
        case 'ADD_CART':
            return [...state, action.payload.good];
            
        case "REMOVE_CART":
            return state.filter(item => item.id !== action.payload)
        default:
            return state;
    }
  }
