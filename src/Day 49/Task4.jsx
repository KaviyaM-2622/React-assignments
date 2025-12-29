const initialState = {
  count: 0
};


function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

let state = counterReducer(undefined, {}); 
console.log(state); 

state = counterReducer(state, { type: 'INCREMENT' });
console.log(state); 

state = counterReducer(state, { type: 'DECREMENT' });
console.log(state); 
