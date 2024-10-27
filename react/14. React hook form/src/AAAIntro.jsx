// React hook form: Its a library that helps us write Performant, flexible and extensible forms with easy-to-use validation. 
import { useForm } from "react-hook-form"
export default function AAAIntro(){
    // Instead of useState we will use the hook useForm which comes from react-hook-form
    // useState returns an array, useForm returns an object
    // register is a function which we use to register our input into the hook
    // handleSubmit is a function that we wrap around whatever function(call it xyz) we want to run when the form is submitted. "handleSubmit" will validate your inputs before invoking xyz. handleSubmit is just a wrapper that makes sure, thanks to this library, that xyz wont run until handleSubmit runs first and validates the input correctly
    // formState: This object contains the current state of the form, including any validation errors.
    const {register, handleSubmit, formState: {errors}} = useForm()
    const registerOptions = {
        name: { required: "Name cannot be blank" },
    };
    // formData object is passed to formSubmit automatically by react-hook-form
    const formSubmit = (formData) => {
        console.log("Submitted")
        console.log(formData)
    }
    const handle

    return(
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name</label>
            {/* register your input into the hook by invoking the "register" function. To register the input we pass the name of input to the register function. We can also pass through options for the validation in the register function. We use the spread operator to spread the result of register function. */}
            <input type="text" name="name" id="name" {...register("name", registerOptions.name) } />
            <button>Submit</button>
        </form>
        
    )

}