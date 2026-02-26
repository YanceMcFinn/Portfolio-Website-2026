import { Link } from "react-router-dom"

export default function Home (){
    return (
        <div>
            {/*{
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
            </div>*/}

<section className="relative w-full h-[400px] md:h-[600px] bg-black text-white overflow-hidden">
      
      <div className="grid md:grid-cols-2 h-full">

        {/* LEFT SIDE (Text Section) */}
        <div className="
          text-center md:text-left px-8 md:px-16
          my-auto
          
        ">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            GREAT DESIGN
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-lime-400 text-gray-300">
            From print to digital and web
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              to="/portfolio"
              className="bg-white hover:bg-lime-400 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              View Portfolio
            </Link>

            <Link
              to="/about"
              className="bg-white hover:bg-lime-400 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              About Me
            </Link>
          </div>
        </div>
        {/* RIGHT SIDE (Hidden on Mobile) */}
        <div className="relative w-full h-full hidden md:block">
          <img
            src="images/assets/theme-photos-CGpifH3FjOA-unsplash.jpg"
            alt="Design showcase"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black" />
        </div>

      </div>
    </section>
    <div className="justify-center">
      <div className="flex bg-black text-white justify-between items-center w-full px-95 py-10">
        <i className="fa-solid fa-paintbrush fa-2xl text-lime-400"></i>
        <div className="flex "> 
          <h1 className="text-4xl text-lime-400">GRAPHIC DESIGN</h1>
          <p className="mx-5 text-3xl">|</p>
          <p className="text-xl my-auto">From logos to apparel, and everything in between!</p>
        </div>
      </div>
    </div>
    <hr className="border-white border-1"/>
    <div className="justify-center">
      <div className="flex bg-black text-white justify-between items-center w-full px-95 py-10">
        <i className="fa-solid fa-circle-play fa-2xl text-lime-400"></i>
        <div className="flex "> 
          <h1 className="text-4xl text-lime-400">WEB DESIGN</h1>
          <p className="mx-5 text-3xl">|</p>
          <p className="text-xl my-auto">Fast and responsive frontend development for eye-catching, user-friendly website and app experiences</p>
        </div>
      </div>
    </div>
    <hr className="border-white border-1"/>




        </div>
    )
}