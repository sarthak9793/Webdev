import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function Coins(){
    const {coinId} = useParams()
    const [coinData, setCoinData] = useState({})
    useEffect(()=>{
        const getCoinData = async () => {
            const coinData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?sparkline=true`)
            setCoinData(coinData.data)
            console.log("API Call")
        }
        getCoinData()
    },[])
    // Perform a conditional check to ensure coinData has loaded and isnt an empty object cuz we would get an error if we tried to access properties of an empty object
    if (!coinData.image || !coinData.market_data) {
        return( 
            <div className="rounded-div mt-8 py-16 h-[404px] w-full flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
    return(
        <div className="rounded-div mt-8 py-16 pb-10">
            <div className="flex items-center gap-x-4">
                <img src={`${coinData.image.large}`} alt="" className="w-20" />
                <div className="font-bold text-4xl">{coinData.name}</div>
            </div>
            <div className="grid md:grid-cols-2 mt-8">
                <div>
                    <div className="flex justify-between">
                        <div className="font-bold text-3xl">₹{coinData.market_data.current_price.inr}</div>
                        <div>7 Day</div>
                    </div>
                    {/* Sparkline */}
                    <div>
                        <Sparklines data={coinData.market_data.sparkline_7d.price}>
                            <SparklinesLine color="green" />
                        </Sparklines>                                
                    </div>
                    <div className="flex justify-between my-6">
                        <div className="flex flex-col">
                            <div className="font-bold">Market Cap</div>
                            <div>₹{coinData.market_data.market_cap.inr}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold">Volume (24hr)</div>
                            <div>₹{coinData.market_data.market_cap.inr}</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="font-bold">24h High</div>
                            <div>₹{coinData.market_data.high_24h.inr}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold">24h Low</div>
                            <div>₹{coinData.market_data.low_24h.inr}</div>
                        </div>
                    </div>
                </div>
                <div className="md:ml-8 mt-12 md:mt-0">
                    <div className="font-bold text-xl mb-4 border-b-2 ">Market Stats</div>
                    <div className="flex flex-col md:gap-y-16 gap-y-8">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <div className="font-bold">Market Rank</div>
                                <div>{coinData.market_data.market_cap_rank}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold">Hashing Algorithm</div>
                                <div>{coinData.hashing_algorithm}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold">Trust Score</div>
                                <div>{coinData.liquidity_score}</div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <div className="font-bold">Price Change (24h)</div>
                                <div>{coinData.market_data.price_change_percentage_24h}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold">Price Change (7d)</div>
                                <div>{coinData.market_data.price_change_percentage_7d}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold">Price Change (14d)</div>
                                <div>{coinData.market_data.price_change_percentage_14d}</div>
                            </div>                            
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <div className="font-bold">Price Change (30d)</div>
                                <div>{coinData.market_data.price_change_percentage_30d}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold">Price Change (60d)</div>
                                <div>{coinData.market_data.price_change_percentage_60d}</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold">Price Change (1y)</div>
                                <div>{coinData.market_data.price_change_percentage_1y}</div>
                            </div>                            
                        </div>
                        
                    </div>
                    <div></div>
                    <div></div>

                </div>

            </div>
            <div className="mt-10">
                <div className="font-bold text-xl">About {coinData.name}</div>
                <p>
                    {coinData.description.en}
                </p>
            </div>
        </div>
    )
}