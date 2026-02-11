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

<section className="relative bg-black text-white flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* LEFT SIDE - TEXT */}
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Great design
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            from print to digital and web
          </p>

          <div className="mt-8 flex flex-row gap-4">
            <Link
              to="/portfolio"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              View Portfolio
            </Link>

            <Link
              to="/about"
              className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative pr-0 h-[400px] md:h-[600px] w-full">
          <img
            src="images/assets/theme-photos-CGpifH3FjOA-unsplash.jpg" // replace with your image path
            alt="Design showcase"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />

          {/* Fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/40 to-black" />
        </div>

      </div>
    </section>



        </div>
    )
}