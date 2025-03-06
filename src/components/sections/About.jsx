import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const sysadminSkills = ["Nutanix", "Powershell", "Citrix", "MECM"]
    const devSkills = ["node.js", "AWS", "Python", "Not sure tbh, need to learn more"]

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
				<RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:border-blue-500/30 transition-all">
                <p className="text-gray-300 mb-6">What do you mean, am I getting into fashion? DO YOU SEE THIS COAT?!</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">System Administration</h3>
                        <div className="flex flex-wrap gap-2">
                            {sysadminSkills.map((skills, key) => (
                                
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {skills}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Development</h3>
                        <div className="flex flex-wrap gap-2">
                            {devSkills.map((skills, key) => (
                                
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {skills}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education 🏫</h3>
                        <ul className="list-disc list0inside text-gray-300 space-y-2">
                            <li>
                                <strong> Bachelor of Information Technology </strong> - Queensland University of Technology (2024-2026)
                            </li>
                            <li>
                                <strong> Masters of Data Analytics </strong> - Queensland University of Technology (2026-2027)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience 🏢</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> System Administrator at Australian Bureau of Statistics (2024 - Present)</h4>
                                <p> Managed VDI... </p>	
                            </div>
														<div>
                                <h4 className="font-semibold"> IT Officer at St William's Primary School (2024 - 2025) </h4>
                                <p> Managed Airwatch MDM... </p>	
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
				</RevealOnScroll>
    </section>
    );
};