/* 
What exactly is an "effect"?
The word effect refers to a functional programming term called a "side effect".
But to really understand what a side effect is, we first have to grasp the concept of a pure function.
A pure function is one which given the same input, will always return the same output
Most React components are pure functions, meaning they receive an input and produce a predictable output of JSX.

You might be saying, "Who cares? Why do we even have a name for this?"

Pure functions have the great benefit of being predictable
This is as compared to when we need to perform a side effect in our component.

What are side effects in React?
Side effects are actions that are performed with the world outside our react components and therefore they are not predictable
Common side effects include:
    1. Making a request to an API for data from a backend server
    2. To interact with browser APIs (that is, to use document or window directly)
    3. Using unpredictable timing functions like setTimeout or setInterval

    4. Changing parts of the DOM not covered by react
    5. Async operations, like AJAX requests when a component is mounted(i.e. first rendered)

This is why useEffect exists: It provide a way to handle performing these side effects in what are otherwise pure React components.
If we perform a side effect directly in our component body, it gets in the way of our React component's rendering.

Side effects should be separated from the rendering process. If we need to perform a side effect, it should strictly be done after our component renders.This is what useEffect gives us.

In short: useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.

*/