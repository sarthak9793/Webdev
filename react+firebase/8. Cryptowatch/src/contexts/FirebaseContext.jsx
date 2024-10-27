import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyAcEcf0uGKbW38WCAr9luEox4xcVg7EHgs",
    authDomain: "cryptowatch-8756.firebaseapp.com",
    projectId: "cryptowatch-8756",
    storageBucket: "cryptowatch-8756.appspot.com",
    messagingSenderId: "54991272962",
    appId: "1:54991272962:web:44aeff1546b0b311dafb1b"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const FirebaseContext = createContext(null)
const db = getFirestore(app);
  
export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseContextProvider = (props) => {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user)
                setUser(user)
            else
                setUser(null)
        })
    },[])
    const createUser = async (email,password) => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            const docRef = doc(db, `users`, email)
            await setDoc(docRef, {
                watchList: []
            })
            console.log("Sign Up successful")
        }catch(err){
            console.log("Sign Up failed")
            throw(err)
        }
    }
    const signIn = async (email,password) => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Sign In successful")
        }catch(err){
            console.log("Sign In failed")
            throw(err)
        }
    }
    const handleSignOut = async () => {
        try{
            await signOut(auth)
            console.log("Sign Out successful")
        }catch(err){
            console.log("Sign out failed")
        }
    }
    const addWatchList = async (id) => {
        try{
            const docRef = doc(db, "users", user.email)
            const snap = await getDoc(docRef)
            const currentWatchList = snap.data().watchList
            if(currentWatchList.includes(id)){
                await setDoc(docRef, {
                    watchList: [...currentWatchList]
                })
            }
            else{
                await setDoc(docRef, {
                    watchList: [...currentWatchList,id]
                })
            }            
            console.log("Coin added to watchlist")
        }catch(err){
            console.log("Failed to add coin to watchlist")
        }
    }
    const getWatchList = async () => {
        try {
          const docRef = doc(db, "users", user.email);
          const snap = await getDoc(docRef);
          return snap.data().watchList;
        } catch (err) {
          console.log("Failed to get user's watchlist");
          return [];
        }
      };
    const removeWatchList = async (id) => {
        try{
            const docRef = doc(db, "users", user.email)
            const snap = await getDoc(docRef)
            const currentWatchList = snap.data().watchList
            const newWatchList = currentWatchList.filter((item)=>(item!==id))
            await setDoc(docRef, {
                watchList: [...newWatchList]
            })
            console.log("Coin removed successfully")            
        }catch(err){
            console.log("Failed to remove coin")
        }
    }
    return(
            <FirebaseContext.Provider value={{createUser, signIn, user, handleSignOut, addWatchList, getWatchList, removeWatchList}}>
                {props.children}
            </FirebaseContext.Provider>
        )
}
