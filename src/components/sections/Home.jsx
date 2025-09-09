import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="flex items-center justify-center relative container">
            <RevealOnScroll>
                <div className="text-center z-10 w-full">
                    <h1 className="mt-30 sm:mt-50 title-gradient">
                        Hi, I'm Daniel.
                    </h1>

                    <p className="text-gray-200 text-md sm:text-xl mb-8 max-w-80 sm:max-w-180 mx-auto justify-center">
                        I’m passionate about automating tasks, exploring new technologies, and improving how systems work.
                        Whether it's troubleshooting, scripting, or optimizing workflows, I enjoy finding efficient solutions to everyday problems.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center m-15 sm:mt-20 sm:space-x-20">
                        {[
                            { href: "#about", label: "About" },
                            { href: "#projects", label: "Projects" },
                            { href: "#contact", label: "Contact" }
                        ].map(({ href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="group flex-1 rounded-4xl text-center transition-all duration-300 mb-4"
                            >
                                <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-4xl p-1 group-hover:p-2 hover:scale-110 transition-all delay-50 duration-400">
                                    <div className="bg-neutral-950 px-7 py-3 font-semibold text-2xl rounded-4xl shadow-2xl shadow-pink-100/40">
                                        {label}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
