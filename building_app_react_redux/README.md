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

## Redux has provider, connect

### connect
```javascript
//connect
function mapStateToProps(state, ownProps){
    return { authors: state.authors};
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
```

#### mapStateToProps
```javascript
// mapStateToProps
/*
: what state should I expose as props.
what part of the Redux store you want to expose as props on your component. 
The component will subscribe to the Redux store updates.
Any time it updates, mapStateToProps will be called
*/
//example
function mapStateToProps(state){
    return {
        appState: state
    }
}
// In my component, I could call this.props.appState to access Redux store data.

// In case expose part of more store state in the component, we can specify the specific pieces of state that I want to expose via props
function mapStateToProps(state){
    return {
        users: state.users
        // key will be prop on the component
    }
}
```

#### mapDispatchToProps
: what actions do I want on props<br/>
It receives dispatches as its loan parameter. <br/>
It returns callback props that you want to pass down<br/><br/>
There are 4 ways to handle mapDispatchToProps
1. ignore it
2. wrap manually
3. bindActionCreators
4. return object

1. ignore it (use dispatch directly)
```javascript
this.props.dispatch(loadCourses()) //loadUsers, loadWhatever ...
/*
2 downsides
1. it requires more boilerplate
2.redux concerns in child components
*/
```

2. wrap manually
```javascript
function mapDispatchToProps(dispatch){
    return {
        loadCourses: () => {
            dispatch(loadCourses());
        },
        createCourse: course => {
            dispatch(createCourse(course));
        },
        updateCourse: course => {
            dispatch(updateCourse(course));
        }
    }
}
this.props.loadCourses()
```

3. bindActionCreators
```javascript
 funciton mapDispatchToProps(dispatch){
     return {
         actions: bindActionCreators(actions, dispatch)
     };
 }

this.props.actions.loadCourses();
```

4. mapDispatchToProps as Object
```javascript
const mapDispatchToProps = {
    loadCourses
    // wrapped in dispatch automatically
}

this.props.loadCourses();
```