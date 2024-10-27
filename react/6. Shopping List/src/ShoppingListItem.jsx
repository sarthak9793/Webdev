export default function ShoppingList({obj}){
    const style = {
        color: obj.completed ? "grey" : "red", 
        textDecoration: obj.completed ? "line-through" : "none"
    }
    return (
        <li style={style}>
            {obj.name} -- {obj.quantity}
        </li>
    )
}