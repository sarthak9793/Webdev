import {createContext, useContext} from "react"
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBirm6WgaIDebI8CVz5GEB2uI2-zrtIT6g",
    authDomain: "app-7c391.firebaseapp.com",
    databaseURL: "https://app-7c391-default-rtdb.firebaseio.com",
    projectId: "app-7c391",
    storageBucket: "app-7c391.appspot.com",
    messagingSenderId: "1063698244770",
    appId: "1:1063698244770:web:a8523941e6b8c2b95de3fb"
  };
const app = initializeApp(firebaseConfig);
const FirebaseContext = createContext(null)
const auth = getAuth(app)

// Creating our custom hook
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseContextProvider = (props) => {
    const signUp = async (email, password) => {
        const data = await createUserWithEmailAndPassword(auth, email, password)
        console.log(data)
    }
    return(
        <FirebaseContext.Provider value={{signUp}}>{props.children}</FirebaseContext.Provider>
    )

}

/*
What we did here:
What you need to understand here is that context API is basically a way to make something universally available among our components. That something could be plain data, state, object, functions, etc. So here we are using context API to make our firebase utility functions like signUp available across our components.
First we import initializeApp, then we get our firebaseconfig. Then we initialize the firebase app. For the example we are showing in this dummy component we will also need auth, so we will import it. We will create an instance of auth. We will create a context called FirebaseContext using createContext. Then we will create our contextProvider component. Inside the component we will define a signUp function which accepts email and password as parameters and creates a user. We will also create a custom hook/function which we will also export other than our component. This function will simply return an object that contain the value of the context.
We will wrap the topmost level component <App/> inside context provider component so all components can have access to firebase utility functions. 
Wherever we want to use the firebase utility function, we will import our custom hook. Extract the function from the object and use it!!!

*/