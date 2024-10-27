import "./Box.css"
export default function Box({isRed, toggle}){
    const handleClick = () =>{
        toggle()
    }
    return(
        <div className="Box" style={{backgroundColor: isRed ? "red" : "black"}} onClick={handleClick}>

        </div>
    )
}