export default function Hero(){
    
    return(
        <div className="max-w-[1640px] mx-auto   ">
            <div className="relative">
                <div className="bg-black/40 absolute h-full w-full text-gray-200 flex flex-col items-center justify-end  pl-4 rounded-[40px]">
                    {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"><span className="text-orange-500">Buy</span> and</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Sell<span className="text-orange-500"> Books</span></h1> */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-white mb-10 font-custom-font2">Buy and Sell Your Books for the Best Price</h1>

                </div>
                <img src="https://cdn.pixabay.com/photo/2020/10/04/19/07/reading-5627328_1280.jpg" alt="" className="max-h-[550px] w-full object-cover rounded-[40px]" />
            </div>
            
        </div>
    )
}