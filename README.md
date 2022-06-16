# My notes
## React-App
I could use **parcel** instead of **create-react-app** but parcel was occurred a lot of errors. There are also the
fact that **react-app** also have the **fast refresh** nowadays so all was set to make me use react-app instead of parcel.

## Hooks
In react, hooks are functions allowing us to create our components using functions instead of classes in 
order to be able to separate our logics, treatments from our rendering. There are:

### useState
**useState** allow us to set a state to our component created using functions. 
It takes an initial value and returns an array of two elements:
- **the state variable**: it can be named as we want and contains the value of the state
- **the state setter**: a function that can be used to change the value of the state.

**E.g.**:
<pre>
  const [state, setState] = useState(initialValue)
  const handler = () => setState(s => s+1)
</pre>

\
**useState** can be used as much as we need states in our component but not in if-conditions and iterations.

### useEffet
It's used to define a function that can be called when a given list of states' value change. 
It takes two arguments:
- **a callback**: the function that will be executed
- **an array**: list of states that should be observed. 

Using **useEffet**, with can define the `componentDidMount` function when the second parameter is an empty array.\
The callback should if needed return a function that will be executed on the `componentWillUnmount`

**useEffet** can be used as much as we need in our component.


## useMemo & useCallback
**useMemo** is used as **useEffect** and allow use to memorize the result of the execution of a function.\
This is very useful if we have in our component, a function that return a result use in our virtual DOM.\
For example, we have a function which return accorded to the age of the user, an fa-icon to show. This actually need to be executed only once, when the user get connected. But without using **useMemo**, the appropriate fa-icon will be determinated every time our component will be re-rended even if the user's age doesn't change.
**Usage:**
<pre>
const faIcon = React.useMemo(function() {
  if(age < 18) {
    return 'fa-user'
  } else {
    return 'fa-users'
  }
}, [])
</pre>
If our function should be regenerated accorded to and state variable, it should be the second argument.

**useCallback** has the same usage the usage but allow us to memorize a whole function (our handler). Without **useCallback**, it's like we're defining our functions directly in our component's attribute: very bad in case our component are pure ones. 


## useRef
Allow us to create reference to our uncontrolled filed by React.
**E.g.:**
<pre>
function InputShow() {
  const inputRef = React.useRef()

  const handleClick = (e) => {
    e.preventDefault()
    alert(inputRef.current.value)
  }

  return <div>
    <input type="text" ref={inputRef}>
    <button onClick={handleClick}>Show</button>
  </div>
}
</pre>
We can also use **useRef** to memorize a certain value or object that will remain through our component life cycle.
**E.g.:**
<pre>
const age = React.useRef(15)
</pre>
Unless the value of *age* is changed, it will remain **15**.


## useLayoutEffect
Work as the **useEffect**. However, the **useEffect** is **async** while the **useLayoutEffect** is **sync**.\
Base on that, we use **useLayoutEffect** when our treatment should modify the user's interface. Otherwise, we simply use a **useEffect** for loading data for example. Here, we can show a loader while our data are been loaded.















## Create a hook
It's possible to create our own hooks using the predefined ones.\
They name should start by **use** and the can employ other state. However, hooks can't be call in callback. 
**E.g.**:
<pre>
  function useInccrement(intialValue, step) {
    const [state, setState] = useState(initalValue)
    const increment = () => setState(s => s+1)
    return [state, increment]
  }
</pre>































# Default Doc

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
