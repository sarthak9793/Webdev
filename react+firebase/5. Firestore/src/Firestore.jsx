/* 
In Firestore data is stored in documents.
Data storing structure: Collection -> Documents -> Data. -> Collection -> Documents -> Data .........

*/
import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from "firebase/firestore";
import { app } from "./Firebase"
import { useState } from "react";

const db = getFirestore(app);

const writeData = async (name, email, age) => {
    // The first parameter of addDoc will be a reference to our collection. First parameter of collection is the instance of our database, second parameter is the name of the collection where we want to put our document in. If the collection doesnt already exist, then it will create a new collection. Second parameter of addDoc is the actual data we want to put in the document. The addDoc function returns a promise with the ID of the created document and other information
    try {
        const data = await addDoc(collection(db, "users"), {
            name: name,
            email: email,
            age: age
        })
        console.log(data)
        console.log("Write operation successful")
    } catch (err) {
        console.log("Write operation failed")
    }
}
// how to make a collection inside a document
const makeSubCollection = async () => {
    try {
        // collection(db, "collectionName/documentId/subCollectionName")
        const data = await addDoc(collection(db, "users/DJyuQN1ilNvhCt4fvTCt/favoriteFood"), {
            favorite1: "pizza",
            favorite2: "burger",
            favorite3: "pineapple"
        })
        console.log(data)
        console.log("Write operation successful")
    } catch (err) {
        console.log("Write operation successful")
    }
}

// Getting a document if we know its ID
const getDocument = async () => {
    try {
        // The first parameter of getDoc will be a reference to our document. getDoc function will return a promise with the snapshot of the document. To get the data from the snapshot we will use the .data() method on the snapshot
        const snap = await getDoc(doc(db, "users", "h4aV3NHGK7Le4I3mqUGF"))
        console.log(snap)
        console.log(snap.data())
        console.log("Get document operation successful")
    } catch (err) {
        console.log("Get document operation failed")
    }
}

// Getting document by query
// We will need to import getDocs, query and where
const getDocumentsByQuery = async () => {
    // Create a query against a collection using query function. The first parameter of query function will be a reference to our collection, and the second parameter will be the actual query
    const q = query(collection(db, "users"), where("age", "<", 30))
    try{
        // Executing query
        // We are using getDocs instead of getDoc because query will return multiple documents
        const snaps = await getDocs(q)
        snaps.forEach((snap)=>{console.log(snap.data())})
        console.log("Query executed successfully")
    }catch(err){
        console.log("Query executed unsuccessfully")
    }
}

// Updating document
// We will need to import updateDoc. The first parameter will the reference to our document. The second parameter will be the updated data. 
const updateDocument = async () => {
    try{
        await updateDoc(doc(db, "users", "2yHcpE6mAPr1U08s1Wds"), {
            email: "sar.sri69@gmail.com"
        })
        console.log("Document updated successfully")
    }catch(err){
        console.log("Document updated unsuccessfully")
    }
}

export default function Firestore() {
    const [formData, setFormData] = useState({ name: "", email: "", age: "" })
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        writeData(formData.name, formData.email, formData.age)
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name </label>
            <input type="text" value={formData.name} name="name" onChange={handleChange} />
            <label htmlFor="email">Email </label>
            <input type="email" value={formData.email} name="email" onChange={handleChange} />
            <label htmlFor="age">Age </label>
            <input type="number" value={formData.age} name="age" onChange={handleChange} />

            <button>Write Data</button>

            {/* Make Subcollection */}
            <button type="button" onClick={makeSubCollection}>Make SubCollection</button>

            {/* Get Document by ID */}
            <button type="button" onClick={getDocument}>Get Document by ID</button>

            {/* Get Documents by query */}
            <button type="button" onClick={getDocumentsByQuery}>Get Documents by query</button>

            {/* Update document */}
            <button type="button" onClick={updateDocument}>Update Document</button>

        </form>
    )
}