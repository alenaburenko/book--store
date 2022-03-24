const getInitialState = () => {
    try {
        const lsItem = localStorage.getItem('favorites');
        if (!lsItem) { return [] }
        return JSON.parse(lsItem)
    } catch (e) {
        console.error(e);
        return []
    }
  }
  
  const initialState = getInitialState()
  
  export default function reducerFav(state = initialState, action) {
  
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, action.payload.goods];
        case "REMOVE_FAVORITE":
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state;
    }
  }
  

