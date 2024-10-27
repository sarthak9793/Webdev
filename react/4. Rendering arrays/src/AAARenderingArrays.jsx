// 
export function AAARenderingArrays({nums}){
    // What jsx does is that it takes every value from this array and renders it in the h1. The reason it matters is becauase it wont just take numbers or strings from an array and render them, we can give it an array of jsx elements
    return <h1>{nums}</h1>        
}
export function AAARenderingArrays2({}){
    const elements = [<p>Hello</p>, <p>Bye</p>, <p>Hye</p>]
    return <h1>{elements}</h1>        
}
// A use case:
export function AAARenderingArrays3({fruits}){
    // Using map to render multiple elements in a loop is extremely common in react
    // const list = fruits.map((fruit)=><li>{fruit}</li>)
    // return <ul>{list}</ul>
    
    // It is more common to do this inline
    return <ul>{fruits.map((fruit)=><li>{fruit}</li>)}</ul>
}