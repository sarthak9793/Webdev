import "./PropertyListItem.css"
export default function PropertyListItem({name, price, rating}){
    return(
        <div className="PropertyListItem">
            <p>
                {name}
            </p>
            <p>
                ${price} a night
            </p>
            <p>
                {rating}⭐
            </p>
        </div>
    )
}