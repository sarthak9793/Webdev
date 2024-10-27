import { useState } from "react"

export default function AADShoppingListForm({addItem}){
    const [formData, setFormData] = useState({productName: "", quantity: ""})
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})        
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        addItem(formData)
        // to empty the fields after submitting
        setFormData({productName: "", quantity: 0})
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="productName">Product name</label>
            <input type="text" id="productName" value={formData.productName} name="productName" onChange={handleChange}/>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" value={formData.quantity} name="quantity" onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}
// The next step is that when I click the submit button, I want to update a state somewhere else, with the formData
// Basically what I want to happen is that when I click a button, I want to send this data up to the ShoppingList component. But since we cant do that, what we will do instead is pass down an updater function from the ShoppingList component to ShoppingList, which will be invoked when i click the button
// Total Crux of the problem is: When some action is performed in the lower level component, I want some value in the upper level component to change. Since we cannot pass data up, we have to use a work around. We instead pass an updater function from the parent component to the child component as prop. Then when the action is performed in the lower level component the event handler function will be called, which in turn will invoke the updater function that was passed down.
