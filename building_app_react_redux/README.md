# Building Applications with React and Redux
### hosted at Pluralsight (https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents)
I build an web application with React and Redux.
This app simply makes course selection webapp that mimic pluralsight

# What I learn
#### Redux concept
1. Reducer
   - Reducers are functions that take current state in an action and return new state. Pure function
2. Container
   - Just react component, containing necessary logic for marshalling data and data, which they pass down to dumb child component via props. This separation keeps components simple, pure functions that receive data via props.
   - Easy to reuse and test
3. Immutability
   - Store is immutable.
   - Return new state
   - Clarity, Performance, Awesome Sauce

### Flux vs Redux
1. Flux <br/>
  action -> dispatcher -> store -> react -> action
    - Each store must connect to the dispatcher via eventEmitter

2. Redux <br/>
   ```
   action -> store -> react -> action
              ||
           reducers
   ```
   store communicates reducers

Redux short example
```javascript
// action
{ type: RATE_COURSE, rating: 5 }
// we must have type. rest of it, it is free

//reducer
function appReducer(state=defaultState, action){
    switch(action.type){
        case RATE_COURSE:
            //return new state
    }
}
// once new state is returned from reducer, the store is updated. React re-renders any components that utilizing the data.
```
```javascript
// store
store.dispatch(action)
store.subscribe(listener)
store.getState()
replaceReducer(nextReducer)
```
```javascript
// assign 
Object.assign({}, state, {role: 'admin'})

// spread
const newState = {...state, role: 'admin'} // right side is shallow copy
// arguments on the right override arguments on the left
```