import { initializeApp } from "firebase/app"
import { createContext, useContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBirm6WgaIDebI8CVz5GEB2uI2-zrtIT6g",
    authDomain: "app-7c391.firebaseapp.com",
    databaseURL: "https://app-7c391-default-rtdb.firebaseio.com",
    projectId: "app-7c391",
    storageBucket: "app-7c391.appspot.com",
    messagingSenderId: "1063698244770",
    appId: "1:1063698244770:web:198629be319af3755de3fb"
};

const FirebaseContext = createContext(null)
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)

export const useFirebase = () => (
    useContext(FirebaseContext)
)

export function FirebaseContextProvider(props){
    const signUp = async () => {
        try{
            const data = await signInWithPopup(auth, provider)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <FirebaseContext.Provider value={{signUp}}>{props.children}</FirebaseContext.Provider>
    )
}