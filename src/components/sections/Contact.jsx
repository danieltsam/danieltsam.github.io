import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "@emailjs/browser"

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmitForm = (e) => {

        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_API_KEY).then((result) => {
            alert("Message Sent!")
            setFormData({name: "", email: "", message: ""})
        }).catch(() => alert("Oops! Something wentwrong. Please try sending your message again"));
    }
    return <section id="contact" className="min-h-225 flex items-center justify-center mb--5">
        <RevealOnScroll>
            <div className="px-4 w-200">
                <h2 className="text-7xl font-bold mb-8 title-gradient bg-clip-text text-transparent text-center" id="title">Get In Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmitForm}>
                    <div className="relative">
                        <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                        focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                        focus:border-blue-500 focus:bg-blue-500/5" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                    </div>
                    <div className="relative">
                        <textarea id="message" name="message" required rows={10} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
                        focus:border-blue-500 focus:bg-blue-500/5" placeholder="Write your message here!" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                    hover:-translate-y-1 hover:shadow[0_0_15px_rgba(59, 130, 246, 0.4)]">Send Message</button>
                </form>
                <p className="text-gray-300text-center mt-4 text-center">or you're welcome to send me an email at <br></br> <a href="mailto:daniel.sam@gmx.com" id="link">daniel.sam@gmx.com</a></p>
            </div>
        </RevealOnScroll>
    </section>
};