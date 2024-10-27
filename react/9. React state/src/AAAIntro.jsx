// React state: In React, state is a concept used to manage and store data that can change over time within a component. The state in React is typically used for dynamic data that needs to be rendered and updated in the component. For example, a component that displays a counter might have a state variable to keep track of the current count value. To use state in a React component, you typically declare it inside the component's definition.

// Here although num is being updated when button is clicked, but the problem is that the component is not being updated in the DOM. This has to do with how react renders components and when it knows to rerender them. Remember that a component is just a function, react has to know somehow when to call this function again to update what is in the view. Right now it has no idea that it needs to update the view. There is no way that react knows it needs to rerender. What I want to happen is that the component should re-render when the number changes. The way we accomplish it is by using state. Whenever state changes for a given component, the component is re-rendered on the page. So anytime, we want data to change and we want to see that change reflected in the page, we will have to use state.

// There is sometimes confusion as to when to use state and when not to use state. The rule is simple: If you have data that needs to change within a component you need to use state
export default function AAAIntro(){
    let num = 0;
    const incrementNum = ()=>{
        num = num+1
        console.log(num)
    }
    return(
        <>
            <button onClick={incrementNum}>Counter</button>
            <p>The count is: {num}</p>
            <hr />
        </>
    )
}