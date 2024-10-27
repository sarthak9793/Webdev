import "./PropertyList.css"
import PropertyListItem from "./PropertyListItem"
export default function PropertyList({items}){
    return(
        <div className="PropertyList">
            {items.map((item)=>(
                // <PropertyListItem name={item.name} price={item.price} rating={item.rating}/>
                // or we can use the spread operator. It takes every key value pair from item and passes it through individually. Only point is that the name of the parameters in the component we want to pass the properties to must match exactly with the keys of the object.
                <PropertyListItem {...item} key={item.id}/>
            ))}
        </div>
    )
}