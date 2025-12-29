const { createStore } = require('redux'); 


const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}


const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({ type: 'INCREMENT' }); 
store.dispatch({ type: 'DECREMENT' }); 
