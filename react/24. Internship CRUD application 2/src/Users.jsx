import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import Avatar from '@mui/material/Avatar';

export default function Users() {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [formData, setFormData] = useState({ name: "", username: "", email: "", street: "", suite: "", city: "", zipcode: "", phone: "", website: "", company: "" })
    useEffect(() => {
        async function getUserDetails() {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                setUser(response.data)
                setFormData({ name: response.data.name, username: response.data.username, email: response.data.email, street: response.data.address.street, suite: response.data.address.suite, city: response.data.address.city, zipcode: response.data.address.zipcode, phone: response.data.phone, website: response.data.website, company: response.data.company.name })
            } catch (err) {
                alert("Failed to fetch user details")
            }
        }
        getUserDetails()
    }, [])
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    const [isEdit, setIsEdit] = useState(false)
    const handleClick = () => {
        setIsEdit(!isEdit)
    }
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (evt) => {
        try {
            setIsLoading(true)
            evt.preventDefault()
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
                id: 11,
                name: formData.name,
                username: formData.username,
                email: formData.email,
                address: {
                    street: formData.street,
                    suite: formData.suite,
                    city: formData.city,
                    zipcode: formData.zipcode
                },
                phone: formData.phone,
                website: formData.website,
                company: formData.company
            })
            console.log(response)
            setIsLoading(false)
            alert("Edit Successful")
            setIsEdit(!isEdit)
        } catch (err) {
            setIsLoading(false)
            alert("Edit Failed")
        }
    }
    return (
        <div className="flex flex-col justify-between rounded-div p-4 mt-8">
            {user && <form className="flex flex-col relative items-center text-lg" onSubmit={handleSubmit}>
                <div className="card w-[380px] bg-primary shadow-2xl min-h-[658px]">
                    <figure className="mt-10">
                        <Avatar sx={{ bgcolor: "red", width: 200, height: 200, fontSize: 100 }}>{user.name.substr(0, 1)}</Avatar>
                    </figure>
                    <div className="card-body flex ">
                        <div className="flex gap-x-3">
                            <label htmlFor="Name" className="font-bold">Name: </label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null} `} />
                        </div>
                        <div className="flex gap-x-3">
                            <label htmlFor="username" className="font-bold">Username: </label>
                            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>
                        <div className="flex gap-x-3">
                            <label htmlFor="email" className="font-bold">Email: </label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>
                        <div className="flex gap-x-3">
                            <label htmlFor="street" className="font-bold">Street: </label>
                            <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>

                        <div className="flex gap-x-3">
                            <label htmlFor="suite" className="font-bold">Suite: </label>
                            <input type="text" id="suite" name="suite" value={formData.suite} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>

                        <div className="flex gap-x-3">
                            <label htmlFor="city" className="font-bold">City: </label>
                            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>

                        <div className="flex gap-x-3">
                            <label htmlFor="zipcode" className="font-bold">Zip Code: </label>
                            <input type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>

                        <div className="flex gap-x-3">
                            <label htmlFor="phone" className="font-bold">Phone: </label>
                            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>

                        <div className="flex gap-x-3">
                            <label htmlFor="website" className="font-bold">Website: </label>
                            <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>

                        <div className="flex gap-x-3">
                            <label htmlFor="company" className="font-bold">Company: </label>
                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} disabled={!isEdit} className={`bg-transparent ${isEdit ? 'border-b outline-none' : null}`} />
                        </div>

                        {!isEdit && <button type="button" onClick={handleClick} className="bg-button text-btnText px-4 py-2 rounded-2xl max-w-[100px] self-center absolute top-4 right-2">Edit</button>}
                        <div className="self-center flex gap-x-1 mt-6">
                            {isEdit && <button type="button" onClick={handleClick} className="bg-button text-btnText px-4 py-2 rounded-2xl max-w-[100px] self-center">Go Back</button>}
                            {isEdit && <button type="submit" className="bg-button text-btnText px-4 py-2 rounded-2xl max-w-[100px] self-center">
                                {!isLoading && <span>Submit</span>}
                                {isLoading && <span className="loading loading-spinner loading-md"></span>}
                            </button>}
                        </div>
                    </div>
                </div>
            </form>}
        </div>
    )
}