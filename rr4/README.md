# React Router v4
: This is simple react app that I record my learning about react-router.<br/>

## Sources
React Router v4 강의 사용법 알아보기[https://youtu.be/o6j8zi5mFIg] by Velopert<br/>
Building Applications with React and Flux[https://app.pluralsight.com/library/courses/react-flux-building-applications/table-of-contents] by Cory House

# What I learn

1. Router
   - Wrap app entry point(mostly use BrowserRouter that uses HTML5 history API)
2. Route
   - Load this component for this URL
3. Link
   - Link prevents complete reload the page. It renders certain part.
   - Anchors
   - No more posting back to the server. Page transitions are now instant
4. NavLink
   - NavLink is good to use for menu(navigator)
   - has extra prop, activeStyle, we can specify a style to apply when the
     NavLink's route matches the URL
```javascript
//NavLink example
<NavLink to="/users" activeClassName="active">Users</NavLink>
// this class will be applied when the route is /users
```
5. Redirect
   - It redirects the page
   - It is usually used with condition
```javascript
// with condition
{ this.state.isUserLogin && <Redirect to='/home' />}
//old url to new url
<Redirect from='/old' to='/new'/>
```

6. Redirect programmatically
   - `props.history.push('new/path')`

7. URL params
```javascript
<Route path='/users/:slug' component={Users} /> 
//after colon(:), you can name anything, etc.id, slug, foo ...

//If we are given this url,
myapp.com/users/jay-ko?module=3

// inside of props,
function User(props){
    props.match.params.slug // jay-ko
    props.location.query //{module:3}
    props.location.pathname // users/jay-ko/?module=3
}
```