// To pass we non string props, we enclose them in {} instead of ""
export default function AABNonStringProps({num1, num2}){
    return <h1>Sum of {num1} and {num2} is = {num1+num2}</h1>
}