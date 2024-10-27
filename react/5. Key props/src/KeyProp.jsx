// React needs each element in an array/list to have a unique identifier so that it can keep track of that element. If we dont do that, the program will stil work but we will get an error in the console. We can set the unique identifier using the key attribute.
export default function KeyProp(){
    const elements = [<p key="1">Hello</p>, <p key="2">Bye</p>, <p key="3">Hye</p>]
    return <h1>{elements}</h1>    
}