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
            
<div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
            <h2
                className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                Hero
                <span className="font-bold text-blue-500">Section</span>
                <span className="text-xl font-semibold rounded-full text-blueGray-500">2.0</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>
            <div className="mt-5 sm:flex md:mt-8">
                <div className="rounded-md shadow"><a href=""
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                        Getting started
                    </a></div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a href=""
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                        Contribute
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
                <img src="https://picsum.photos/400/300" />
            </div>
        </div>
    </div>
</div>


 <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
          <div className="pr-2 md:mb-14 py-14 md:py-0">
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span className="block w-full">Get a financial experience</span> for growing your business!</h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
              Empowering you to make better financial decisions, We truly are professional money planners...
            </p>
            <div className="mt-4">
              <a href="#contact" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
            </div>
          </div>
  
          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" width="500" height="488"/>
          </div>
        </div>

        </div>
    )
}