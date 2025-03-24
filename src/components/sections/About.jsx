import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const sysadminSkills = ["Nutanix", "PowerShell", "Citrix", "MECM", "AD", "PSADT"]
    const devSkills = ["React", "HTML", "TailwindCSS", "Python", "C#", "Java"]

    return (
    <section id="about" className="flex items-center justify-center p-3">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto">
            <h2 className="title-gradient mt-10 sm:mt-0" id="title">About Me</h2>

            <div className="rounded-4xl p-3 bg-linear-to-tl from-purple-500 via-indigo-500 to-pink-500 text-center hover:translate-y-1 hover:scale-102 transition-all hover:p-4.5 duration-500 ease-in-out">
                <div className="bg-neutral-950 p-4 max-w-180 rounded-4xl shadow-2xl shadow-pink-100/40">
                    <p className="text-gray-200 mb-6 text-center">I’m a second-year uni student who's passionate about tech, problem-solving, and continuous learning.
                                        I enjoy working with systems, automation, and scripting to make things run smoother.
                                        Right now, I’m currently learning and exploring Cloud, DevOps, and Cybersecurity to broaden my skills and take on new challenges.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 border border-white/20 hover:translate-y-1 transition-all ">
                            <h3 className="text-xl font-bold mb-4">System Administration</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {sysadminSkills.map((skills, key) => (
                                    
                                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:text-blue-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skills}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 border border-white/20 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Software Development</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {devSkills.map((skills, key) => (
                                    
                                    <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:text-blue-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {skills}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                

                <div className="grid grid-cols-1 gap-6 mt-8">
                    <div className="p-2 sm:p-6 rounded-xl border-white/30 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education 👨🏻‍🎓</h3>
                        <ul className="list-disc list-inside text-gray-200 space-y-2">
                            <li>
                                <strong> Bachelor of Information Technology </strong> - Queensland University of Technology (2024-2026)
                            </li>
                            <br></br>
                            <li>
                                <strong> Masters of Data Analytics </strong> - Queensland University of Technology (2026-2027)
                            </li>
                        </ul>
                    </div>
                    <div className="p-2 sm:p-6 rounded-xl border-white/30 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience 💼</h3>
                        <div className="space-y-4 text-gray-200">
                            <div>
                                <h4 className="text-base"><strong>System Administrator</strong> at <strong>Australian Bureau of Statistics</strong><br></br>(2024 - Present)</h4>
                                <br></br>
                                <ul className="list-disc list-inside space-y-2 mx-10 text-sm">
                                <li>Managed and supported a large-scale virtualized environment, ensuring compliance with the ACSC's Essential 8.</li>
                                <li>Resolved IT support tickets across various systems, including virtual desktop infrastructure (VDI) and enterprise applications, while troubleshooting and remediating OS, application, and security issues.</li>
                                <li>Packaged and deployed applications using software distribution tools like AppV and MECM, streamlining deployment processes and implementing automation for efficiency.</li>
                                <li>Collaborated with stakeholders and vendors to ensure the successful execution of IT projects and seamless service delivery.</li>
                                </ul>
                            </div>
                            <div>
                                <br></br>
                                <h4 className="text-base"><strong>IT Officer</strong> at <strong>St William's Primary School</strong><br></br> (2024 - 2025) </h4>
                                <br></br>
                                <ul className="list-disc list-inside space-y-2 mx-10 text-sm">
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

        </div>
    </RevealOnScroll>	
    </section>
    );
};