"use client";

import { Mail, Phone, MapPin, Menu, X, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const BusinessName = "Business Name";
const Description = "Description";
const PrimaryColor = "#3b82f6";
const SecondaryColor = "#1e293b";
const Features = ["Feature 1", "Feature 2", "Feature 3"];
const Style = "Modern";
const AdditionalInstructions = "Additional Instructions";
const ContactNumber = "1234567890";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow-md" style={{ zIndex: 10 }}>
        <span style={{ color: PrimaryColor, fontSize: 24, fontWeight: 'bold' }}>{BusinessName}</span>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`lg:flex lg:items-center lg:justify-between ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li className="lg:mr-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition duration-300">Features</a>
          </li>
          <li className="lg:mr-6">
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</a>
          </li>
        </ul>
      </nav>
      <header className="h-screen bg-white" id="hero">
        <div className="container mx-auto p-12 pt-24 md:p-24">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
              <h1 className="text-3xl leading-tight font-bold" style={{ color: PrimaryColor }}>{BusinessName}</h1>
              <p className="text-lg">{Description}</p>
              <button className="bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200 py-2 px-4 rounded transition duration-300" style={{ backgroundColor: PrimaryColor, color: 'white' }}>
                Learn More
              </button>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
              <img src="https://source.unsplash.com/500x500/?business,office" alt="Business Image" />
            </div>
          </div>
        </div>
      </header>
      <section className="bg-white py-8" id="features">
        <div className="container mx-auto p-12 pt-24 md:p-24">
          <h2 className="text-3xl leading-tight font-bold" style={{ color: PrimaryColor }}>Features</h2>
          <div className="flex flex-wrap justify-center">
            {Features.map((feature, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/2 p-6">
                <div className="bg-white rounded shadow-md p-4">
                  <h3 className="text-lg font-bold">{feature}</h3>
                  <p className="text-gray-600">Description of {feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-8" id="contact">
        <div className="container mx-auto p-12 pt-24 md:p-24">
          <h2 className="text-3xl leading-tight font-bold" style={{ color: PrimaryColor }}>Get in Touch</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/2 p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-600" htmlFor="name">Name</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 border border-gray-200 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600" htmlFor="email">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 border border-gray-200 rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600" htmlFor="message">Message</label>
                  <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 border border-gray-200 rounded" />
                </div>
                <button type="submit" className="bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200 py-2 px-4 rounded transition duration-300" style={{ backgroundColor: PrimaryColor, color: 'white' }}>
                  <Send size={20} style={{ marginRight: 8 }} />
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-6">
              <div className="bg-white rounded shadow-md p-4">
                <h3 className="text-lg font-bold">Contact Info</h3>
                <p className="text-gray-600">
                  <MapPin size={20} style={{ marginRight: 8 }} />
                  Address: 123 Main St, Anytown, USA
                </p>
                <p className="text-gray-600">
                  <Phone size={20} style={{ marginRight: 8 }} />
                  Phone: {ContactNumber}
                </p>
                <p className="text-gray-600">
                  <Mail size={20} style={{ marginRight: 8 }} />
                  Email: <a href={`mailto:info@example.com`} className="text-gray-600 hover:text-gray-900 transition duration-300">info@example.com</a>
                </p>
                <a href={`https://wa.me/${ContactNumber}`} target="_blank" rel="noreferrer" className="bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200 py-2 px-4 rounded transition duration-300" style={{ backgroundColor: PrimaryColor, color: 'white' }}>
                  <MessageCircle size={20} style={{ marginRight: 8 }} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white py-8">
        <div className="container mx-auto p-12 pt-24 md:p-24">
          <p className="text-gray-600"> 2024 {BusinessName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Page;