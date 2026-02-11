import { Link } from "react-router-dom"

export default function Home (){
    return (
        <div>
            <div className="flex mt-10 mx-20 bg-black text-white items-center justify-between
 h-[600px] spa">
                <div>
                    <div className="justify-self-center px-20">
                        <h1 className="text-6xl">GREAT DESIGN</h1>
                        <p className="text-3xl mt-4">From print to digital</p>
                        <div className="flex mt-7">
                            <Link
                                to="/gallery"
                                className="bg-black text-white hover:bg-lime-400 hover:text-black border-1 border-white hover:border-black px-6 py-3 rounded-lg">
                                    View my Portfolio
                            </Link>
                            <Link
                                to="/about"
                                className="ml-5 bg-black text-white hover:bg-lime-400 hover:text-black border-1 border-white hover:border-black px-6 py-3 rounded-lg">
                                    About Me
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-full"><img className="saturate-0 mask-l-from-50% mask-l-to-90% h-full" src="images/assets/theme-photos-CGpifH3FjOA-unsplash.jpg"></img></div>

            </div>
        </div>
    )
}