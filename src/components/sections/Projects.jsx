import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        
        <section id="projects" className="min-h-screen flex items-center justify-center">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-1">
            <h2 className="title-gradient mt-10" id="title">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 sm:mx-0">
                    {/*Project 1*/}
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-2 hover:border-indigo-500/60 hover:border-3 transition">
                        <h3 className="text-xl font-bold mb-2">Release Time</h3>
                        <p className="text-gray-400 mb-4">Release Time was created because I was frustrated I could never find what time an international TV show released in my local time.
                             It was a fun challenge in learning to work with APIs, data formatting,
                            and learning about back-ends.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "HTML", "TailwindCSS" ].map((skills, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:text-blue-300 hover:bg-blue-500/20 transition">
                                {skills}
                                 </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            <div className="flex justify-center p-4 bg-violet-800 rounded-2xl shadow-lg shadow-purple-500/30 hover:scale-105 transition-all">
                                <a target="_blank" href="https://release-time.onrender.com" className="text-purple-100 font-semibold hover:text-purple-200 transition-colors">View Live Project</a>
                            </div>
                            <div className="flex justify-center p-3.5 bg-gray-50 rounded-2xl shadow-lg shadow-purple-100/30 hover:bg-gray-100 hover:scale-105 transition-all">
                                <a target="_blank" href="https://github.com/danieltsam/release-time" className="text-black font-semibold hover:text-gray-800 transition-colors flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2 fill-current" viewBox="0 0 1792 1792">
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                </svg>
                                View on Github
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Project 2*/}
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-2 hover:border-indigo-500/60 hover:border-3 transition">
                        <h3 className="text-xl font-bold mb-2">BibleCast</h3>
                        <p className="text-gray-400 mb-4">BibleCast is a mobile app built in React Native with Expo that casts Bible verses onto a Chromecast for easy viewing. 
                            Focusing on making a smooth search experience playing around with Cast integration and exploring mobile development and UI. Not live yet :(</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React Native", "Expo", "Google Cast" ].map((skills, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:text-blue-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {skills}
                                 </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            <div className="flex flex-col items-center justify-center p-4 bg-neutral-700 rounded-2xl shadow-lg shadow-purple-200/20 hover:bg-neutral-800 hover:scale-105 transition-all">
                                <a target="_blank" className="text-gray-400 font-semibold transition-colors">View Live Project</a>
                                <p className="text-gray-400 text-xs">(not live yet)</p>
                            </div>
                            <div className="flex justify-center p-3.5 bg-gray-50 rounded-2xl shadow-lg shadow-purple-100/30 hover:bg-gray-100 hover:scale-105 transition-all">
                                <a target="_blank" href="https://github.com/danieltsam/biblecast" className="text-black font-semibold hover:text-gray-800 transition-colors flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2 fill-current" viewBox="0 0 1792 1792">
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                </svg>
                                View on Github
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Project 3*/}
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-2 hover:border-indigo-500/60 hover:border-3 transition">
                        <h3 className="text-xl font-bold mb-2">QUT Classmate</h3>
                        <p className="text-gray-400 mb-4">QUT Classmate is a tool for students of QUT to organise their classes and timetables.
                            I really disliked the QUT internal timetabling tool and wanted to make a better one using an AI coding agent. It blew my mind on how fast I could develop and deploy an MVP with the help of AI.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Vibe Coding" ].map((skills, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:text-blue-300 hover:bg-blue-500/20 transition">
                                {skills}
                                 </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            <div className="flex justify-center p-4 bg-violet-800 rounded-2xl shadow-lg shadow-purple-500/30 hover:scale-105 transition-all">
                                <a target="_blank" href="https://qut.vercel.app" className="text-purple-100 font-semibold hover:text-purple-200 transition-colors">View Live Project</a>
                            </div>
                            <div className="flex justify-center p-3.5 bg-gray-50 rounded-2xl shadow-lg shadow-purple-100/30 hover:bg-gray-100 hover:scale-105 transition-all">
                                <a target="_blank" href="https://github.com/danieltsam/qut-classmate" className="text-black font-semibold hover:text-gray-800 transition-colors flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2 fill-current" viewBox="0 0 1792 1792">
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                </svg>
                                View on Github
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Project 4*/}
                    <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-2 hover:border-indigo-500/60 hover:border-3 transition">
                        <h3 className="text-xl font-bold mb-2">Gradescope Autosubmit Script</h3>
                        <p className="text-gray-400 mb-4">A script to automate the manual process of making gradescope submissions for uni assignments so I don't have to leave my IDE and minimise ClickOps.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Playwright"].map((skills, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:text-blue-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {skills}
                                 </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            <div className="flex justify-center p-3.5 bg-gray-50 rounded-2xl shadow-lg shadow-purple-100/30 hover:bg-gray-100 hover:scale-105 transition-all">
                                <a target="_blank" href="https://github.com/danieltsam/qut-gradescope-autosubmit" className="text-black font-semibold hover:text-gray-800 transition-colors flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2 fill-current" viewBox="0 0 1792 1792">
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                </svg>
                                View on Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div> 
                
            </div>
            </RevealOnScroll>
        </section>
    );
};
