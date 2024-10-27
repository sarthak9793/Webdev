import { useState } from "react";
import AADShoppingListForm from "./AADShoppingListForm";
export default function AAEShoppingList(){
    const [itemList, setItemList] = useState([])
    // updater function that will be passed down to the lower level/child component
    const addItem = (formData) => {
        const newItemList = [...itemList, formData]
        setItemList(newItemList)
    }
    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {
                    itemList.map((item)=>(<li>{item.productName} -- {item.quantity}</li>))
                }
            </ul>
            <AADShoppingListForm addItem={addItem}/>
        </div>
    )
}