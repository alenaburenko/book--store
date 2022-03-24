export const showModal = ({onSuccess,description, bg}) => {
    return { type: 'SHOW_MODAL', payload : {onSuccess, description, bg}}
  }
  
  export const hideModal = () => {
  
    return { type: 'HIDE_MODAL' }
  }
  
  
  