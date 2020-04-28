import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';


// GET ITEMS
export const getItems = () => dispatch =>  {
    
    dispatch(setItemsLoading());

    axios
        .get('/api/items')
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }) 
        )
};




// DELETE ITEM
export const deleteItem = id => dispatch => {
    axios
        .delete(`/api/items/${id}`)
        .then(res => 
            dispatch({
                type: DELETE_ITEM,
                payload: id
            }))
};




// ADD ITEM
export const addItem = item => dispatch =>  {
    
    axios
        .post('/api/items', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            }))
};








// DISPATCH ITEMS LOADING
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};