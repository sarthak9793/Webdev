// To detect if the user is logged in then we will use onAuthStateChanged. When we sign up, the auth state changes, when we log out the auth state changes again. We will use useEffect hook to run the onAuthStateChanged function on mount. The first parameter of this function will be auth and the second parameter will be a callback function which will automatically be passed a user object. Agar hamare paas user object hai then that means the user is logged in, agar use object null hai then that means the user is logged out
import { useEffect, useState } from "react";
import {app} from "./Firebase"
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const handleSignIn = async () => {
    try{
        await signInWithPopup(auth, provider)
    }
    catch(err){
        console.log(err)
    }
}
const handleSignOut = async () => {
    try{
        await signOut(auth)
        console.log("Sign out successful!")
    }catch(err){
        console.log(err)
    }    
}


export default function DummyComponent(){
    const [user, setUser] = useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user)
                setUser(user)
            else
                setUser(null)    
        })
    }, [])
    return(
        <div>
            {user && <h1>Hello {user.displayName}</h1>}
            {!user && <button onClick={handleSignIn}>Sign In with Google</button>}
            {/* when the user clicks the "Sign Out" button, the handleSignOut function is executed, which calls signOut(auth) to sign the user out. As a result, the authentication state changes, and the onAuthStateChanged function gets called. onAuthStateChanged function is called automatically by Firebase Authentication in response to any of the following events: 1. When the user signs in. 2. When the user signs out. 3. When the user's authentication state changes for any other reason. useEffect keval mount par onAuthStateChanged function ko call kar raha hai */}
            {user && <button onClick={handleSignOut}>Sign Out</button>}

        </div>
    )
}