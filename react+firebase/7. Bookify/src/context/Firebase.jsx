import {createContext, useEffect, useState} from "react"
import { initializeApp } from "firebase/app";
import { useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, updatePhoneNumber } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, query, where, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4 as uuid} from "uuid"


const FirebaseContext = createContext(null)
const firebaseConfig = {
    apiKey: "AIzaSyBy3SPdB4ax_Nmi3_xhg17mewyZjPAm0H4",
    authDomain: "bookify-cea64.firebaseapp.com",
    projectId: "bookify-cea64",
    storageBucket: "bookify-cea64.appspot.com",
    messagingSenderId: "518033724511",
    appId: "1:518033724511:web:476d0fd495043eb6a737ea",
    storageBucket: "gs://bookify-cea64.appspot.com"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app)
const storage = getStorage(app);

export const useFirebase = () => (useContext(FirebaseContext))

export const FirebaseContextProvider = (props) => {
    const signUp = async (email, password, name, phone) => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {
                displayName: name
            })
            console.log("Sign Up successfull")
        }catch(err){
            console.log("Sign Up failed")
        }
    }
    const googleSignUp = async () => {
        try{
            await signInWithPopup(auth, provider)
            console.log("Google Sign Up successfull")
        }catch(err){
            console.log("Google Sign Up unsuccessfull")
        }
    }
    const signIn = async (email, password) => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Sign In successful")
        }catch(err){
            console.log("Sign in failed")
        }
    }
    const [user, setUser] = useState(null)
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
            else{
                setUser(null)
            }       
        })
    }, [])
    const handleSignOut = async () => {
        try{
            await signOut(auth)
            console.log("Sign Out successful")
        }catch(err){
            console.log("Sign out failed")
        }
    }
    const addBook = async (name, author, condition, photo, address, price) => {
        try{
            // Creating a reference to the image, in ref function we will pass the instance of our firebase storage, and the in the second paraeter we will specify the the path where the image will be stored in the storage. We are using date object to set a unique name to each photo. We did this because ho sakta hai future mein ye user same naam ki photo fir se upload kar de to hamrai ye photo replace ho jati, isliye hamne unique name de diya
            // In order to upload or download files, delete files, or get or update metadata, you must create a reference to the file you want to operate on. A reference can be thought of as a pointer to a file in the cloud. To create a reference, get an instance of the Storage service using getStorage() then call ref() with the service as an argument. 
            const imageRef = ref(storage, `uploads/images/${Date.now()}-${photo.name}`)
            // upload bytes mein ham apni image ka reference de denge and hamari jo file hai use de denge.
            const uploadResult = await uploadBytes(imageRef, photo)
            const URL = await getDownloadURL(ref(storage, uploadResult.ref.fullPath))            

            // const collectionRef = collection(db, `Books`)
            const documentID = uuid()
            const documentRef = doc(db, "Books", documentID)
            await setDoc(documentRef, {
                name: name,
                author: author,
                condition: condition,
                photoURL: URL,
                address: address,
                price: price,
                userID: user.uid,
                email: user.email,
                displayName: user.displayName,
                documentID: documentID
            })
            console.log("Book Added successfully")
        }catch(err){
            console.log("Book Added unsuccessfully")
        }
    }
    const getMyBooks = async () => {
        const collectionRef = collection(db, "Books")
        const q = query(collectionRef, where("email", "==", user.email))
        try{
            const snaps = await getDocs(q)
            console.log("Collection retrival successful")
            return snaps
        }catch(err){
            console.log("Collection retrival unsuccessful")
        }
    }
    const getBooks = async () => {
        const collectionRef = collection(db, "Books")
        const q = query(collectionRef, where("email", "!=", user.email))
        try{
            const snaps = await getDocs(q)
            console.log("Collection retrival successful")
            return snaps
        }catch(err){
            console.log("Collection retrival unsuccessful")
        }
    }
    const sendQuery = async (documentID, message) => {
        try{
            const collectionRef = collection(db, `Books/${documentID}/queries`)
            await addDoc(collectionRef, {
                Name: user.displayName,
                email: user.email,
                message: message
            })            
            console.log("Query Added")
        }catch(err){
            console.log("Query failed")
        }        
    }
    const getQueries = async (documentID) => {
        const collectionRef = collection(db, `Books/${documentID}/queries`)
        try{
            const snaps = await getDocs(collectionRef)
            console.log("Queries retrival successful")
            return snaps
        }catch(err){
            console.log("Queries retrival unsuccessful")
        }
    }
    
    return(
        <FirebaseContext.Provider value={{signUp, googleSignUp, signIn, user, handleSignOut, addBook, getMyBooks, getBooks, sendQuery, getQueries}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}