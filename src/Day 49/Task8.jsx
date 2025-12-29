const { createStore } = require('redux');

const initialState = { theme: 'light' };


function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}


const store = createStore(themeReducer);


store.subscribe(() => console.log(store.getState()));


store.dispatch({ type: 'TOGGLE_THEME' }); 
store.dispatch({ type: 'TOGGLE_THEME' }); 