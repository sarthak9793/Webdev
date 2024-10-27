import { useState } from "react"
import axios from "axios"

export default function CreateUser(){
    const [formData, setFormData] = useState({name: "", username: "", email: "", street: "", suite: "", city: "", zipcode: "", phone: "", website: "", company: ""})
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async(evt) => {
        setIsLoading(true)
        try{
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
            evt.target.reset()
            console.log(response)
        }catch(err){
            alert("Failed to create user")
        }
        setFormData({name: "", username: "", email: "", street: "", suite: "", city: "", zipcode: "", phone: "", website: "", company: ""})
        setIsLoading(false)
    }
    return(
        <form className=" flex justify-center px-4 py-4 mt-6 mx-auto rounded-div " onSubmit={handleSubmit}>
            <div className="shadow-xl card card-compact p-10 min-w-[380px] w-[500px]">
                <h1 className="font-bold text-2xl mb-6 text-center">Create User</h1>
                <div className="flex flex-col gap-y-7">
                    <div className="flex flex-col">
                        <label htmlFor="Name" className="font-bold">Name</label>
                        <input type="text" id="name" name="name" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="username" className="font-bold">Username</label>
                        <input type="text" id="username" name="username" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-bold">Email</label>
                        <input type="text" id="email" name="email" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.email} onChange={handleChange} required  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="street" className="font-bold">Street</label>
                        <input type="text" id="street" name="street" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.street} onChange={handleChange} required  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="suite" className="font-bold">Suite</label>
                        <input type="text" id="suite" name="suite" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.suite} onChange={handleChange} required  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="city" className="font-bold">City</label>
                        <input type="text" id="city" name="city" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.city} onChange={handleChange} required  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="zipcode" className="font-bold">Zip Code</label>
                        <input type="text" id="zipcode" name="zipcode" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.zipcode} onChange={handleChange} required  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="font-bold">Phone</label>
                        <input type="text" id="phone" name="phone" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.phone} onChange={handleChange} required  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="website" className="font-bold">Website</label>
                        <input type="text" id="website" name="website" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.website} onChange={handleChange} required  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="company" className="font-bold">Company</label>
                        <input type="text" id="company" name="company" className="bg-primary shadow-xl rounded-full border border-input py-2 px-4" value={formData.company} onChange={handleChange} required  />
                    </div>
                    <button className="bg-button rounded-full text-btnText py-3 max-w-[100px] items-center self-center px-3">
                        {!isLoading && <span>Submit</span>}
                        {isLoading && <span className="loading loading-spinner loading-md"></span>}
                    </button>
            </div>

















            </div>
        </form>
    )
}