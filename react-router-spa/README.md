https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

# Rendering a Router

Router components only expect to receive a single child element. To work within this limitation, it is useful to create an <App> component that renders the rest of your application. Separating your application from the router is also useful for server rendering because you can re-use the <App> on the server while switching the router to a <MemoryRouter>.

`import { BrowserRouter } from 'react-router-dom'`
`ReactDOM.render((`
  `<BrowserRouter>`
    `<App />`
  `</BrowserRouter>`
`), document.getElementById('root'))`

## Route

The `<Route>` component is the main building block of React Router. Anywhere that you want to only render content based on the location’s pathname, you should use a `<Route>` element.

Routes have three props that can be used to define what should be rendered when the route’s path matches. Only one should be provided to a <Route> element.

component — A React component. When a route with a component prop matches, the route will return a new element whose type is the provided React component (created using React.createElement).
render — A function that returns a React element [5]. It will be called when the path matches. This is similar to component, but is useful for inline rendering and passing extra props to the element.
children — A function that returns a React element. Unlike the prior two props, this will always be rendered, regardless of whether the route’s path matches the current location.

## Links

`<Link>`s use the to prop to describe the location that they should navigate to. This can either be a string or a location object (containing a combination of pathname, search, hash, and state properties). When it is a string, it will be converted to a location object.
