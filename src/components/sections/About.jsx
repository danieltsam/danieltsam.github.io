import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const sysadminSkills = ["Nutanix", "PowerShell", "Citrix", "MECM", "AD", "PSADT"]
    const devSkills = ["React", "HTML", "TailwindCSS", "Python", "C#", "Java"]

    return (
    <section id="about" className="min-h-screen flex items-center justify-center px-3">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto">
            <h2 className="text-7xl font-bold mb-8 title-gradient bg-clip-text text-transparent text-center" id="title">About Me</h2>

            <div className="rounded-xl px-8 py-5 border-white/30 border-3 border hover:border-blue-500/60 hover:border-5 transition-all text-center">
                <p className="text-gray-300 mb-6">I’m a second-year uni student who's passionate about tech, problem-solving, and continuous learning.
									I enjoy working with systems, automation, and scripting to make things run smoother.
									Right now, I’m currently learning and exploring Cloud, DevOps, and Cybersecurity to broaden my skills and take on new challenges.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 border border-white/20 hover:translate-y-1 transition-all ">
                        <h3 className="text-xl font-bold mb-4">System Administration</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {sysadminSkills.map((skills, key) => (
                                
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {skills}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 border border-white/20 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Software Development</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {devSkills.map((skills, key) => (
                                
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {skills}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education 🏫</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Bachelor of Information Technology </strong> - Queensland University of Technology (2024-2026)
                            </li>
                            <br></br>
                            <li>
                                <strong> Masters of Data Analytics </strong> - Queensland University of Technology (2026-2027)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience 🏢</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-bold text-base"> System Administrator at Australian Bureau of Statistics<br></br>(2024 - Present)</h4>
                                <br></br>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 mx-10 text-sm">
                                    <li>Managed and supported end-user computing environments, ensuring secure and efficient operation of IT systems.</li>
                                    <li>Collaborated with teams across various projects to implement IT solutions and troubleshoot technical issues.</li>
                                    <li>Developed automation processes to streamline workflows, improving system performance and reducing manual intervention.</li>
                                    <li>Contributed to maintaining system security and compliance with ACSC Essential 8 standards, including vulnerability management and patching.</li>
                                </ul>
                            </div>
                            <div>
                                <br></br>
                                <h4 className="font-bold text-base"> IT Officer at St William's Primary School<br></br> (2024 - 2025) </h4>
                                <br></br>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 mx-10 text-sm">
                                    <li>Provided IT support across the organisation, ensuring seamless operation of hardware, software, and network systems.</li>
                                    <li>Assisted in the setup, maintenance, and troubleshooting of IT infrastructure, ensuring reliable services for staff and students.</li>
                                    <li>Worked alongside the IT team to enhance system performance, implementing improvements and resolving technical issues.</li>
                                    <li>Supported ongoing maintenance efforts, ensuring systems were secure, up-to-date, and aligned with organisational requirements.</li>
                                </ul>	
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