/* Why do we need Context API:

Assume we have component A > component B > component C > component D, A has a state and we need that state in D. What can we do? We can pass it as a prop from A to B, from B to C, and from C to D. This is called prop drilling and it is a very bad practise in react. Why is this a bad practise, lets say that we have to render component B inside some other component instead of rendering it in A or lets say we have to render component D in some other component, to make that happen we will have to completely change our component tree

What we do in context API is that we keep our state in context and therefore component A can also access it and component D can also access it without any prop drilling. Another feature of context API is that whenever the state in context changes, then whatever components that are using the state also gets re-rendered. 

To give our components access to the context, we will have to wrap it in context provider


How to create a context?
    Create a folder called context where we will store all our contexts.
    Create a jsx file for our context
    import createContext
    Create a context 
    We will create a context provider component that will wrap its nested content i.e. App component inside a context provider. Doing so will give all components access to our context
    Import context provider component in main.jsx and render <App/> inside context provider component

    Hamne context bana liya, hamne context provider bhi bana liya and components ko uske undar wrap bhi kar diya, now we have to create the state that will hold the actual count
    Create state using useState()
    Now we will pass a value prop with the state and stateSetterFunction to our context provider. The value prop expects an object. This is the value jo hamare sare components access kar payenge

How to Access the value of a context?
First import the context where you want to access its value
Also import useContext
Then const {count, setCount} = useContext(context)

Naming convention:
Here's a simple example:
    JSX File Name: AuthContext.jsx
    Context Name: AuthContext
    Context Provider Component Name: AuthContextProvider
*/

// Essentially context API is a way we can make any piece of data: varibale, string, object, state, function universally available