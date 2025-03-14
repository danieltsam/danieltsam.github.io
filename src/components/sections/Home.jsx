import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="flex items-center justify-center relative container">
            <RevealOnScroll>
                <div className="text-center z-10 w-full">
                    <h1 className="mt-15 title-gradient whitespace-nowrap">
                        Hi, I'm Daniel.
                    </h1>

                    <p className="text-gray-200 text-md sm:text-xl mb-8 max-w-80 sm:max-w-180 mx-auto justify-center">
                        I love solving problems, automating the boring stuff, and making tech work smarter. Whether it’s troubleshooting, scripting, or building something new, I’m always up for a challenge.
                        <br></br>
                        <br></br>
                        Check out my projects, resume, or just say hi!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center m-15 sm:space-x-20">
                        <div className="group flex-1 rounded-4xl text-center transition-all duration-300 mb-4">
                            <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-4xl p-1 group-hover:p-2 hover:scale-110 transition-all duration-300">
                                <div className="bg-neutral-950 px-7 py-3 font-semibold text-2xl rounded-4xl shadow-2xl shadow-pink-100/40">
                                    <a href="#about">About</a>
                                </div>
                            </div>
                        </div>

                        <div className="group flex-1 rounded-4xl text-center transition-all duration-300 mb-4">
                            <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-4xl p-1 group-hover:p-2 hover:scale-110 transition-all duration-300">
                                <div className="bg-neutral-950 px-7 py-3 font-semibold text-2xl rounded-4xl shadow-2xl shadow-pink-100/40">
                                    <a href="#projects">Projects</a>
                                </div>
                            </div>
                        </div>

                        <div className="group flex-1 rounded-4xl text-center transition-all duration-300 mb-4">
                            <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-4xl p-1 group-hover:p-2 hover:scale-110 transition-all duration-300">
                                <div className="bg-neutral-950 px-7 py-3 font-semibold text-2xl rounded-4xl shadow-2xl shadow-pink-100/40">
                                    <a href="#contact">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}