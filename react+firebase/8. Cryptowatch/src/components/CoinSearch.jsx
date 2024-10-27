import { useEffect, useState } from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import ReactPaginate from 'react-paginate';
import { useThemeContext } from "../contexts/ThemeContext"
import { useFirebase } from "../contexts/FirebaseContext";
import { Link } from "react-router-dom";
export default function CoinSearch() {
    const [items, setItems] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const { theme } = useThemeContext()
    const [isAdded, setIsAdded] = useState([])
    const {addWatchList, getWatchList, user, removeWatchList} = useFirebase()
    useEffect(()=>{
        if(!user)
            return
        const gettingWatchList = async () => {
            const watchList = await getWatchList()
            setIsAdded(watchList)
        }
        gettingWatchList()

    }, [user])
    const handleChange = (evt) => {
        setSearchQuery(evt.target.value)
    }
    const filteredItems = items.filter((item) => (item.id.includes(searchQuery.toLowerCase())))
    useEffect(() => {
        const getCoins = async () => {
            const coins = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en")
            console.log("API Call")
            setItems(coins.data)
        }
        getCoins()
        // setIsAdded(new Array(250))
    }, [])
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    const handleClick = (id) => {
        if(!user){
            alert("Please sign in to save a coin to your watch list")
            return
        }
        addWatchList(id)
        setIsAdded([...isAdded, id])
    }
    const handleClickRemove = (id) => {
        removeWatchList(id)
        const newWatchList = isAdded.filter((item)=>(item!==id))
        setIsAdded(newWatchList)
    }

    return (
        <div className="flex flex-col gap-y-2">
            <div className="rounded-div">
                {/* Search field: What we need to do is to apply filter method on items based on the query in the search field. */}
                <div className="flex flex-col sm:flex-row justify-between p-4 pr-1 items-center">
                    <div className="font-bold text-xl">Search crypto</div>
                    <input type="text" placeholder="Search a coin" value={searchQuery} onChange={handleChange} className="bg-primary border shadow-xl rounded-2xl p-2 pl-3 sm:w-[300px] w-full mt-2 sm:mt-0" />
                </div>
                {currentItems.length===0 && <div className="rounded-div h-[901px] flex justify-center items-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>}
                <table className="w-full text-center">
                    <thead>
                        <tr className="border-b">
                            <th className=""></th>
                            <th className="px-2">#</th>
                            <th className="text-left">Coin</th>
                            <th></th>
                            <th>Price</th>
                            <th>24h</th>
                            <th className="hidden sm:table-cell">24h Volume</th>
                            <th className="hidden md:table-cell">Mkt</th>
                            <th className="hidden sm:table-cell">Last 7 Days</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentItems.map((coin) => (
                            <tr className="h-[80px] border-b">
                                {!(isAdded.includes(coin.id)) && <td onClick={()=>{handleClick(coin.id)}}><AiOutlineStar /></td>}
                                {isAdded.includes(coin.id) && <td onClick={()=>{handleClickRemove(coin.id)}}><AiFillStar /></td>}
                                <td className="px-2">{coin.market_cap_rank}</td>
                                <td className="text-left">
                                    <div className="flex gap-x-4">
                                        <img src={coin.image} className="w-6 h-6" alt="" />
                                        <Link to={`/coins/${coin.id}`} state={{}}>{coin.name}</Link>
                                    </div>
                                </td>
                                <td>{coin.symbol.toUpperCase()}</td>
                                <td>₹{coin.current_price}</td>
                                <td className={`${coin.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}`}>{coin.price_change_percentage_24h}</td>
                                <td className="hidden sm:table-cell">₹{coin.high_24h}</td>
                                <td className="hidden md:table-cell">₹{coin.market_cap}</td>
                                <td className="hidden sm:table-cell">
                                    <Sparklines data={coin.sparkline_in_7d.price}>
                                        <SparklinesLine color={`${theme === "light" ? "green" : "lime"}`} />
                                    </Sparklines>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="containerClassName"
                pageLinkClassName="pageLinkClassName"
                previousLinkClassName="previousLinkClassName"
                nextLinkClassName="nextLinkClassName"
                activeLinkClassName="activeLinkClassName"
                breakLinkClassName="breakLinkClassName"
            />
        </div>
    );


}