import axios from "axios";
import Form from "./Form";
import { useEffect, useState } from "react";
export default function ProfileViewer(){
    const [userName, setUserName] = useState("")
    const [imageURL, setImageURL] = useState("")
    
    const updaterFunction = (formData) => {
        setUserName(formData)        
    }
    useEffect(()=>{
        async function getImageURL(){
            const userImage = (await axios.get(`https://api.github.com/users/${userName}`)).data.avatar_url
            setImageURL(userImage)
        }
        getImageURL()
    }, [userName])
    

    return(
        <div>
            <img src={imageURL} />
            <Form updaterFunction={updaterFunction}/>
        </div>
    )

}