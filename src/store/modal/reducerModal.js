const initialState = {
    isOpen: false,
    description: "",
    onSuccess : null,
    bg : "",
    };
  
 export function modalReducer(state = initialState, action) {
    switch (action.type) {
      case "SHOW_MODAL":
        const {onSuccess, description, bg} = action.payload
        return {
          ...state,
          isOpen: true,
          onSuccess,
          description,
          bg,
        };

      case "HIDE_MODAL":
        return {
          ...state,
          isOpen: false,
          onSuccess : null,
        };
  
      default:
        return state;
    }
  }