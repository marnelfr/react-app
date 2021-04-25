## React-App
I could use **parcel** instead of **create-react-app** but parcel was occurred a lot of errors. There are also the
fact that **react-app** also have the **fast refresh** nowadays so all was set to make me use react-app instead of parcel.

## Hooks
In react, hooks are functions allowing us to create our components using function instead of classes in 
order to be able to separate our logic, treatments from our rendering. There are:

### useState
**useState** allow us to set a state to our component create using functions. 
It takes an initial value and returns an array of two elements:
- **the state variable**: it can be named as we want and contains the value of the state
- **the state setter**: a function that can be used to change the value of the state.

**E.g.**:\
<pre>
  const [state, setState] = useState(initialValue)
  const handler = () => setState(s => s+1)
</pre>

\
**useState** can be used as much as we need states in our component.

### useEffet
It's used to define a function that can be called when a given list of variables' value change. 
It takes two arguments:
- **a callback**: the function that will be executed
- **an array**: list of variables that should be observed. 

**useEffet** executes the callback on the `componentDidMount` even when the second parameter is an empty array.\
The callback should return a function that will be executed on the `componentWillUnmount`\

**useEffet** can be used as much as we need in our component.

## Create a hook
It's possible to create our own hooks using the predefined ones.\
**E.g.**:\
<pre>
  function useInccrement(intialValue, step) {
    const [state, setState] = useState(initalValue)
    const increment = () => setState(s => s+1)
    return [state, increment]
  }
</pre>
