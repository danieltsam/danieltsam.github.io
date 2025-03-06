import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl min-h-20 font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I'm Daniel.
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-180 mx-auto justify-center">
            I love solving problems, automating the boring stuff, and making tech work smarter. Whether it’s troubleshooting, scripting, or building something new, I’m always up for a challenge.
            <br></br>
            <br></br>
            Check out my projects, resume, or just say hi!
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>
                <a href="#contact" className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200 
                hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact Me</a>
                <a href="#about" className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">About Me</a>
            </div>
        </div>
        </RevealOnScroll>
    </section>;
}