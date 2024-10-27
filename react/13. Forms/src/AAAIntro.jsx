/* In vanilla JavaScript, working with forms involves directly interacting with the HTML elements that make up the form. You use JavaScript code to access and manipulate those elements, retrieve their values, and perform actions like submitting the form or validating the input.

In React, forms are handled differently. React provides special components for form elements, and you use these components to build your form. You define the form elements using React syntax, and React takes care of managing the form's state and updating the user interface.

React introduces the concept of "controlled components" for forms. A controlled component is a form element whose value is controlled by component's state. To make a controlled component we have to have a piece of state that we bind to the form element's value, we will do that by setting the value prop of form element to a piece of state. We will also attach an onChange event handler to the form element, which will trigger everytime user changes something in the form element. When the onChange event handler gets triggered, the event handler function will be called which will update the value of the state which will in turn trigger a re-render of the component with the updated value.

With controlled components, the component's state becomes the single source of truth for the input's value. This means that the current value of the input is always derived from the component's state. (Action: typing something in the form) It looks like I am changing something in the form, but really there is an intermediate step, where I type, then the state is updated, when the state is updated the form re-renders and then we see the new value. This approach ensures that React stays in control of the form values

What is the advantage? At any given point in time in my component the state is going to be in sync with whatever is in the form, so If I need to do something with the username, I have it already, I dont have to go find what is in the form

React also provides options for form validation. You can define rules and conditions for the form inputs, such as requiring a certain format for an email address or checking if a checkbox is selected. React libraries like Formik or react-hook-form simplify the process of setting up validation rules and handling form submissions.
*/
import { useState } from "react"
export default function AAAIntro(){
    const [userName, setUserName] = useState("")
    const handleChange = (evt) => {
        const newUserName = evt.target.value
        setUserName(newUserName)
    }
    return(
        <>
            {/* onChange is event handler, handleChange is event handler function */}
            {/* To make this a controlled component we have to have a piece of state that we bind to this input's value, we will do that by setting the value prop of input element to a piece of state. We will also attach an onChange event handler to the input element, which will trigger everytime user changes something in the input. When the onChange event handler gets triggered, the event handler function will be called which will update the value of the state which will in turn trigger a re-render of the component with the updated value. This will ensure that the piece of state is kept in sync with whatever the user is typing */}
            <input type="text" placeholder="username" value={userName} onChange={handleChange} id="username"/>
            
            {/* To add attach a label to an input we will use the htmlFor property instead of for, cuz for is a reserved keyword in javascript */}
            <label htmlFor="username">Username</label>
            <hr />
        </>

    )
}