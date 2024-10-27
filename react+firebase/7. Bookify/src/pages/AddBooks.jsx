import { useState } from "react"
import { useFirebase } from "../context/Firebase"

export default function AddBooks(){
    const [formData, setFormData] = useState({name: "", author: "", condition: "", address: "", price: ""})
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }
    const [photo, setPhoto] = useState("")
    const handlePicture = (evt) => {
        setPhoto(evt.target.files[0])
    }
    const {addBook} = useFirebase()
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setIsLoading(true);
        await addBook(formData.name, formData.author, formData.condition, photo, formData.address, parseInt(formData.price))
        setIsLoading(false)
        setFormData({name: "", author: "", condition: "", address: "", price: ""})
        setPhoto("")
        evt.target.reset()
    }
    const [isLoading, setIsLoading] = useState(false);
    return(
        <div className="h-screen w-full flex justify-center items-center" >
            <form onSubmit={handleSubmit} className="p-8 md:px-12 bg-black font-custom-font text-white bg-opacity-40 backdrop-blur-md rounded-3xl drop-shadow-lg font-bold">
                <div className="flex flex-col gap-y-5 max-w-[600px] h-[700px] md:w-[400px] w-[300px] relative text-lg">
                    <h1 className="text-center md:text-4xl text-3xl">Add Book</h1>
                    <div className="flex flex-col">
                        <label htmlFor="name">Book Name:</label>
                        <input required type="text" id="name"  className="rounded-3xl bg-slate-200 text-black font-normal" name="name" onChange={handleChange} value={formData.name}  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="author">Author:</label>
                        <input required type="text" id="author" className="rounded-3xl bg-slate-200 text-black font-normal" name="author" onChange={handleChange} value={formData.author}  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="condition">Condition:</label>
                        <input required type="text" id="condition"  className="rounded-3xl bg-slate-200 text-black font-normal" name="condition" onChange={handleChange} value={formData.condition}  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="photo">Photo:</label>
                        <input required type="file" id="photo"  className="rounded-3xl bg-slate-200 text-black font-normal" onChange={handlePicture}  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address">Address:</label>
                        <input required type="text" id="address"  className="rounded-3xl bg-slate-200 text-black font-normal" name="address" onChange={handleChange} value={formData.address}  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price">Price:</label>
                        <input required type="number" id="price"  className="rounded-3xl bg-slate-200 text-black font-normal" name="price" onChange={handleChange} value={formData.price}  />
                    </div>
                    <button className="absolute bottom-0 self-center font-bold rounded-[8px] px-3 py-2 text-lg outline hover:outline-hover-button-bg-color outline-none border border-black hover:border-0">Submit</button>
                    {isLoading && <span className="loading loading-spinner loading-md self-center"></span>                    }
                </div>
            </form>
        </div>
    )
}