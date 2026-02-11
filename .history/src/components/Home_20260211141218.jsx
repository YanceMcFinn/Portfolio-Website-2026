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
 <div class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
          <div class="pr-2 md:mb-14 py-14 md:py-0">
            <h1 class="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span class="block w-full">Get a financial experience</span> for growing your business!</h1>
            <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
              Empowering you to make better financial decisions, We truly are professional money planners...
            </p>
            <div class="mt-4">
              <a href="#contact" class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
            </div>
          </div>
  
          <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img id="heroImg1" class="hidden md:visible transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" width="500" height="488"/>
          </div>
        </div>

<section className="relative bg-black text-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        
        {/* LEFT SIDE - TEXT */}
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Great design
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300">
            from print to digital and web
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
        <div className="relative h-[400px] md:h-[600px] w-full">
          <img
            src="/hero-image.jpg" // replace with your image path
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