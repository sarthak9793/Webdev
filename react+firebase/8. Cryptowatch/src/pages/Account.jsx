import { useEffect, useState } from "react";
import { useFirebase } from "../contexts/FirebaseContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Account() {
  const { user, getWatchList, handleSignOut } = useFirebase();
  const [watchList, setWatchList] = useState([]);
  const [coins, setCoins] = useState([]);
  const [markedCoins, setMarkedCoins] = useState([]);

  useEffect(() => {
    const gettingWatchList = async () => {
      setWatchList(await getWatchList());
    };
    gettingWatchList();
    
    const getCoins = async () => {
      const coins = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
      );
      console.log("API Call")
      setCoins(coins.data);
    };
    getCoins();
  
  }, []);

  useEffect(() => {
    // Check if both watchList and coins are ready before populating markedCoins
    if (watchList.length > 0 && coins.length > 0) {
      const updatedMarkedCoins = watchList.map((item) => coins.find((coin) => coin.id === item));
      setMarkedCoins(updatedMarkedCoins);
    }
  }, [watchList, coins]);

  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/coins/${id}`)    
  }
  const handleLogOff = () => {
        handleSignOut()
        navigate("/")
    }
  
  

  return (
    <div>
      <div className="rounded-div my-12 py-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="font-bold text-2xl">Account</div>
            {user && <div>Welcome, {user.email}</div>}
          </div>
          <button className="bg-primary border shadow-2xl px-4 py-2 rounded-2xl" onClick={handleLogOff}>Sign Out</button>
        </div>
      </div>

      <div className="rounded-div mt-6">
        <div className="font-bold text-2xl py-4">Your Watch List</div>
        {!watchList && (
          <div className="rounded-div min-h-[384px] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {watchList.length === 0 && (
          <div className="rounded-div min-h-[384px] flex justify-center items-center">
            You don't have any coins saved. Please save a coin to add it to your watch list.
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
          {markedCoins.map((coin) => (
            <div key={coin.id} className="rounded-div p-4 flex justify-between items-center" onClick={()=>{handleClick(coin.id)}}>
              <div className="flex gap-x-4">
                <img src={coin.image} alt="" className="rounded-full w-12 h-12" />
                <div className="flex flex-col">
                  <div className="font-bold">
                    {coin.name}
                    {/* <Link to={`/coins/${coin.id}`} state={{}}>{coin.name}</Link> */}
                  </div>
                  <div>{coin.symbol}</div>
                </div>
              </div>
              <div className="flex gap-x-3">
                ₹{coin.current_price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
