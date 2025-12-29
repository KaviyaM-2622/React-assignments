// 1.Store

// Role: The central place where all your app’s data lives.

// Think of it as: A single source of truth or the “brain” of your app.

// Example: { user: { name: "Alice" }, cart: [] }

// 2.Action

// Role: A message or request that says what you want to do.

// Think of it as: A memo or instruction to change the state.

// Example: { type: "ADD_TO_CART", payload: { id: 1, name: "Shoes" } }

// 3️.Reducer

// Role: The function that updates the store based on the action.

// Think of it as: The clerk who reads the memo (action) and updates the filing cabinet (store).