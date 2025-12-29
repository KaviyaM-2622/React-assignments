const { createStore } = require('redux');

const initialState = { isLoggedIn: false };


function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: true };
    case 'LOGOUT':
      return { isLoggedIn: false };
    default:
      return state;
  }
}


const store = createStore(loginReducer);


store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'LOGIN' });  
store.dispatch({ type: 'LOGOUT' }); 
