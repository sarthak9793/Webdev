import { useEffect, useState } from "react"
import { useFirebase } from "../context/Firebase"
import Orders from "../components/Queries"
export default function MyBooks(){
    const [myBooks, setMyBooks] = useState([])
    const [isOrders, setIsOrders] = useState([])
    const {getMyBooks} = useFirebase()
    const [isEmpty, setIsEmpty] = useState(false)
    useEffect(()=>{
        const gettingBooks = async () => {
            const myBooks = await getMyBooks()
            const bookList = []
            myBooks.forEach((doc)=>{
                bookList.push(doc.data())
            })
            setMyBooks(bookList)
            setIsOrders(new Array(bookList.length).fill(false))
            setIsEmpty(bookList.length ? false : true)
        }
        gettingBooks()
    }, [])
    const handleSeeOrders = (index) => {
        const newIsOrders = [...isOrders]
        newIsOrders[index] = true
        setIsOrders(newIsOrders)
    }
    const handleSeeBook = (index) => {
        const newIsOrders = [...isOrders]
        newIsOrders[index] = false
        setIsOrders(newIsOrders)
    }

    return(
        <div className={`min-h-screen w-full p-4 ${isEmpty ? "flex justify-center items-center" : "block"}`}>
            {isEmpty && <img src="https://i.imgur.com/7oppJn0.jpg" alt="" className="h-[350px] w-[350px] rounded-full" />}
            <div className="flex gap-10 flex-wrap ">    
                {myBooks && myBooks.map((book, index)=>(
                    <div className="card w-60 sm:w-72 md:w-80 lg:w-96 h-[400px] sm:h-[450px] md:h-[480px] lg:h-[504px] bg-base-100 shadow-xl">
                        {!isOrders[index] && <figure className="relative ">
                            <img src={book.photoURL} alt="Shoes" className="h-[300px] w-full max-h-[300px] object-cover" />
                        </figure>}
                        <div className="card-body">
                            {!isOrders[index] && <h2 className="card-title">{book.name}</h2>}
                            {!isOrders[index] && <p>- {book.author}</p>}
                            {!isOrders[index] && <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={()=>{handleSeeOrders(index)}}>See queries</button>
                            </div>}
                            {isOrders[index] && <Orders documentID={book.documentID}/>}
                            {isOrders[index] && <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={()=>{handleSeeBook(index)}}>See Book</button>
                            </div>}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}