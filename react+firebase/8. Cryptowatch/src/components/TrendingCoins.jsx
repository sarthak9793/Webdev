import { useEffect, useState } from "react"
import axios from "axios"

export default function TrendingCoins() {
    const [trendingCoins, setTrendingCoins] = useState([])
    useEffect(() => {
        const getTrendingCoins = async () => {
            const trendingCoins = await axios.get("https://api.coingecko.com/api/v3/search/trending")
            console.log("API call")
            setTrendingCoins(trendingCoins.data.coins)
        }
        getTrendingCoins()
    }, [])
    return (
        <div className="rounded-div mt-6">
            {trendingCoins.length===0 && <div className="rounded-div h-[384px] flex justify-center items-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>}
            <div className="font-bold text-2xl py-4">Trending Coins</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6">
                {
                    trendingCoins.map((trendingCoin) => (<div>{
                        <div className="rounded-div p-4 flex justify-between items-center">
                            <div className="flex gap-x-4">
                                <img src={trendingCoin.item.small} alt="" className="rounded-full" />
                                <div className="flex flex-col">
                                    <div className="font-bold">{trendingCoin.item.name}</div>
                                    <div>{trendingCoin.item.symbol}</div>
                                </div>
                            </div>
                            <div className="flex gap-x-3">
                                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" className="w-6" />
                                {trendingCoin.item.price_btc.toFixed(7)}
                            </div>
                        </div>
                    }</div>))
                }

            </div>

        </div>
    )
}