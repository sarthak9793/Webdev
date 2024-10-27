/* Props: Props are like arguments that we can provide to our components. We can use props to make configurable components */

// export default function AAAIntro(props){ // The props parameter is an object and the property we passed in App.jsx will be a property of this object
//     console.log(props);
//     return <h1>Hello {props.name}</h1>
// }

// We can also destructure parameters to get only get the properties we want instead of getting the whole object. Also we can also set default values
    export default function AAAIntro({name = "stranger", from = "Sarthak"}){ 
        return <h1>Hello {name} from {from}</h1>
    }
