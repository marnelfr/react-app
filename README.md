# My notes
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
