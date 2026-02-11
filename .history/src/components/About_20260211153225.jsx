export default function About() {
    return (
         <div className = "flex flex-col lg:flex-row w-full ml-0 justify-between px-0 dark:text-white">
            <img
          src="images/assets/Me2.png" className="
         h-full w-auto "></img>
            <div className = "my-auto mx-5 md:mx-20">
                <h1 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">ABOUT</h1>
                <p className="max-w-2xl text-md">
                I'm a graphic designer and frontend developer from South Florida. My passions are at the intersection of design and technology, and I love learning new tech that allows me to better express my ideas in ways that not only look nice, but function smoothly for users as well. I truly enjoy the problem-solving aspect of coding, and when there is something that needs to be learned to solve a problem, I am great at finding out how to resolve it, even finding the process rewarding. My keen eye for detail ensures that any work I produce is clean and visually appealing down to the pixel-level. I take great pride in designs, whether on web or in print in various media, that draw attention and make any experience more user-friendly.<br/>
                <br/>
                In my spare time, I enjoy rock climbing, voice acting, and (attempting to) skate and surf.
                </p>
            </div>
          </div>
    )
}