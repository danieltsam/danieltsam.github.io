import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-violet-800 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*Project 1*/}
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-2 hover:border-blue-500/60 hover:border-3 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Release Time</h3>
                        <p className="text-gray-400 mb-4">Web app to search for and find the release time in your local time for your favourite shows. Used to learn how to use APIs and develop front-end basics</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["node.js", "HTML", "CSS" ].map((skills, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {skills}
                                 </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://release-time.onrender.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Live Project ➡️</a>
                        </div>
                    </div>
                    {/*Project 2*/}
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-2 hover:border-blue-500/60 hover:border-3 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Release Time</h3>
                        <p className="text-gray-400 mb-4">Web app to search for and find the release time in your local time for your favourite shows. Used to learn how to use APIs and develop front-end basics.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["node.js", "HTML", "CSS" ].map((skills, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {skills}
                                 </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://release-time.onrender.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Live Project ➡️</a>
                        </div>
                    </div>
                    
                </div> 
                
            </div>
            </RevealOnScroll>
        </section>
    );
};