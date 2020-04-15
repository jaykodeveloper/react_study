# Star match App
: This is a part of the **React: Getting Started** course in Pluralsight. The user can select available number(s) to match the given star.

## What I learn
+ hooks
    - useEffect(). it is componetDidMount + ComponentDidUpdate. clear after use.
    - useState  
- setTimeOut. clear timerid(clear useEffect)
- mount/unmount the component by using key element(put the component in parent component) -> clear all side effect.
- Custom hooks
  1. Don't call hooks inside loop or contidions
  2. Follow name convention. etc, useAbc...
  3. You can check out the code src/hooks/useGameState

It seems like I can take **state** and **setState** outside of the function component.

## folder structure
```javascript
- src
   - components
        - PlayAgain
        - PlayNumber
        - StarMatch //this is a dashboard for all other components
        - StarsDisplay
    - hook
        - useGameState
    - utils
        - starcal
```

## useEffect example
```javascript
const [myTime, setMyTime] = useState(10);
useEffect(() =>{
    if(timeSecond > 0) {
        const timerId = setTimeout(() => {
            setMyTime(myTime - 1);
        }, 1000);
        return () => clearTimeout(timerId);
        // clear useEffect.
    }
})
```
useEffect Official document(https://ko.reactjs.org/docs/hooks-reference.html#useeffect)

**useEffect** can be fired conditionally. Following to the document,
```javascript
useEffect (
    () => {
        const subscription = props.source.subscribe();
        return () => {
            subscription.unsubscribe(); // I bet this is cleaning the effect
        };
    }, [props.source],
)
```

```
We don't need to create a new subscription on every update, only if the source prop has changed. 
To implement this, pass a second argument to useEffect that is the array of values that the effect depends on. 
Now the subscription will only be recreated when props.source changes
```
```
If you want to run an effect and clean it up only once(on mount and unmount), you can pass an empty array([]) 
as a second argument. This tells React that your effect doesn't depend 
on any values from props or state, so it never needs to re-run.
```

```
If you pass an empty array, the props and state inside the effect will always have their initial values. 
```