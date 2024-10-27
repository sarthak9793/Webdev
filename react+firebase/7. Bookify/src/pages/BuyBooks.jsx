import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

export default function BuyBooks() {
    const [books, setBooks] = useState([]);
    const { getBooks, sendQuery } = useFirebase();
    const [textArea, setTextArea] = useState([]);
    const [isQuerySending, setIsQuerySending] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    // Step 1: Add a state variable to store the search query
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const gettingBooks = async () => {
            const books = await getBooks();
            const bookList = [];
            books.forEach((doc) => {
                bookList.push(doc.data());
            });
            setBooks(bookList);
            setTextArea(new Array(bookList.length).fill([""]));
            setIsQuerySending(new Array(bookList.length).fill(false));
            setIsEmpty(bookList.length ? false : true);
        };
        gettingBooks();
    }, []);

    const handleClick = async (documentID, message, index) => {
        const newIsQuerySending = [...isQuerySending];
        newIsQuerySending[index] = true;
        setIsQuerySending(newIsQuerySending);
        await sendQuery(documentID, message);
        const newIsQuerySending2 = [...newIsQuerySending];
        newIsQuerySending2[index] = false;
        setIsQuerySending(newIsQuerySending2);
    };

    const handleChange = (evt, index) => {
        const newTextArea = [...textArea];
        newTextArea[index] = evt.target.value;
        setTextArea(newTextArea);
    };

    return (
        <div className={`min-h-screen w-full p-4 ${isEmpty ? "flex justify-center items-center" : "block"}`}>
            {/* Step 2: Add the search bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by book name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 rounded py-2 px-4 w-full"
                />
            </div>

            {isEmpty && <img src="https://i.imgur.com/7oppJn0.jpg" alt="" className="h-[350px] w-[350px] rounded-full" />}
            <div className="flex justify-center gap-10 flex-wrap items-center">
                {/* Step 3: Filter books based on the search query */}
                {books &&
                    books
                        .filter((book) => book.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((book, index) => (
                            <div className="card sm:card-side bg-base-100 shadow-xl" key={index}>
                                <figure className="sm:max-w-[200px]">
                                    <img src={book.photoURL} alt="Album" className="h-full w-full max-h-[308px] object-cover" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{book.name}</h2>
                                    <p>
                                        <span className="font-bold">Owner: </span>
                                        {book.displayName}
                                    </p>
                                    <p>
                                        <span className="font-bold">Condition: </span>
                                        {book.condition}
                                    </p>
                                    <p>
                                        <span className="font-bold">Address: </span>
                                        {book.address}
                                    </p>
                                    <p>
                                        <span className="font-bold">Price: </span>
                                        {book.price} Rs
                                    </p>

                                    <div className="card-actions flex flex-wrap justify-between sm:flex-row items-center">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="1"
                                            placeholder="Ask your queries and enter contact information"
                                            className="w-[280px] sm:w-[400px]"
                                            value={textArea[index]}
                                            onChange={(evt) => {
                                                handleChange(evt, index);
                                            }}
                                        ></textarea>
                                        <button className="btn btn-primary" onClick={() => handleClick(book.documentID, textArea[index], index)}>
                                            Send query {isQuerySending[index] && <span className="loading loading-spinner loading-md"></span>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}
