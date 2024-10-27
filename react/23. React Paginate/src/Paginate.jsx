/* 
How to implement react-paginate?
Most of the function we can copy from npm, only slight modifications have to be made
1. Create a state called items which will store the entire data
2. Use useEffect to fetch data from an API on mount
3. Copy the paginatedItems component from npm
4. Delete <Items currentItems={currentItems} />
5. Create a variable called itemsPerPage and specify its value
6. Now display the currentItems by rendering them inside return, above the ReactPaginate component
*/
import { useEffect } from "react"
import { useState } from "react"
import ReactPaginate from 'react-paginate';
import axios from "axios"

export default function Paginate() {
    // items state will have the complete data
    const [items, setItems] = useState([])
    // Data will be fetched inside the useEffect hook
    useEffect(() => {
        const getImages = async () => {
            const images = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
            setItems(images.data)
        }
        getImages()
    }, [])
    // itemOffSet = index of the first item on the current page
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from index: ${itemOffset} to index: ${endOffset}`);

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        // evt.selected will give us the page number
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div>
                {currentItems.map((currentItem)=>(
                    <img src={currentItem.url} alt="" style={{width: "100px", height: "100px"}} />
                ))}
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
    return (
        <div>

        </div>
    )
}