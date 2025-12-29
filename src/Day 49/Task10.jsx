const { createStore } = require('redux');

const initialState = { itemCount: 0 };


function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { itemCount: state.itemCount + 1 };
    case 'REMOVE_ITEM':
      return { itemCount: state.itemCount > 0 ? state.itemCount - 1 : 0 };
    case 'RESET_CART':
      return { itemCount: 0 };
    default:
      return state;
  }
}


const store = createStore(cartReducer);

store.subscribe(() => console.log(store.getState()));


store.dispatch({ type: 'ADD_ITEM' });    
store.dispatch({ type: 'ADD_ITEM' });    
store.dispatch({ type: 'REMOVE_ITEM' }); 
store.dispatch({ type: 'RESET_CART' });  
