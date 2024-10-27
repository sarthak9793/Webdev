import ThemeToggle from "./ThemeToggle"
export default function Footer(){
    return(
        <div className="rounded-div mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="flex p-4 py-6 gap-x-4 justify-center md:justify-start">
                    <div>
                        <ul className="flex flex-col gap-y-2">
                            <li className="font-bold">Support</li>
                            <li>HELP CENTER</li>
                            <li>CONTACT US</li>
                            <li>API STATUS</li>
                            <li>DOCUMENTATION</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-y-2">
                            <li className="font-bold">INFO</li>
                            <li>ABOUT US</li>
                            <li>CAREERS</li>
                            <li>INVEST</li>
                            <li>LEGAL</li>
                        </ul>
                    </div>
                </div>
                <div className="justify-self-center md:justify-self-end">
                    <div className="flex flex-col gap-y-7 h-full">
                        <div className="flex justify-center md:justify-end">
                            <ThemeToggle />
                        </div>
                        <div className="flex justify-center md:justify-end">Sign Up for Crypto News</div>
                        <div className="flex justify-end gap-x-4">
                            <input type="text" placeholder="Enter your email" className="py-2 px-4 rounded-full bg-primary border border-input shadow-xl" />
                            <button className="bg-button rounded-full text-btnText px-4 py-2">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center py-4">Powered by Coin Gecko</p>
        </div>
    )
}