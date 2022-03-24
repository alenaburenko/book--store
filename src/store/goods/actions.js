import axios from "axios";

const getGoods = () => (dispatch,getState) =>{
    const {goods} = getState()
    if(goods.length === 0){
        axios.get("http://localhost:3000/goods.json")
    .then(({data}) => {
    return  dispatch({type:"GET_GOODS", payload: data.goods});
    });
    }
}


export default getGoods