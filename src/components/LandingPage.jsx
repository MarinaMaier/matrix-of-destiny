import React, { useState } from "react";
import translations from "./translations";

const LandingPage = () => {
  const [language, setLanguage] = useState("en"); // Default language: English

  const t = translations[language]; // Dynamically fetch translations based on selected language

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Matrix of Destiny</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-300">
                {t.aboutUs}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                {t.services}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                {t.contactUs}
              </a>
            </li>
          </ul>
          {/* Language Toggle */}
          <div>
            <button
              onClick={() => setLanguage("en")}
              className={`mr-2 px-4 py-2 rounded ${
                language === "en"
                  ? "bg-gray-200 text-blue-900"
                  : "bg-blue-900 text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ru")}
              className={`px-4 py-2 rounded ${
                language === "ru"
                  ? "bg-gray-200 text-blue-900"
                  : "bg-blue-900 text-white"
              }`}
            >
              RU
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.png)`,
        }}
      >
        <div className="absolute inset-x-0 bottom-0 text-center bg-white bg-opacity-70 p-6">
          <h1 className="text-5xl font-bold mb-4 text-blue-900">
            {t.heroTitle}
          </h1>
          <p className="text-lg mb-6 text-blue-800">{t.heroDescription}</p>
          <a
            href="#services"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800"
          >
            {t.learnMore}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-6">{t.aboutUs}</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <p className="text-gray-700">{t.aboutText}</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={`${process.env.PUBLIC_URL}/images/team.jpg`}
              alt="Our Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-200 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">{t.services}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <img
                src={`${process.env.PUBLIC_URL}/images/service1.jpg`}
                alt="Matrix Calculations"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">{t.service1Title}</h3>
              <p className="text-gray-700">{t.service1Description}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <img
                src={`${process.env.PUBLIC_URL}/images/service2.jpg`}
                alt="In-Person Guidance"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">{t.service2Title}</h3>
              <p className="text-gray-700">{t.service2Description}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <img
                src={`${process.env.PUBLIC_URL}/images/service3.jpg`}
                alt="Workshops"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">{t.service3Title}</h3>
              <p className="text-gray-700">{t.service3Description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-200 text-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">{t.contactUs}</h2>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg text-gray-700">
            <div className="mb-4">
              <label className="block font-bold mb-2">{t.name}</label>
              <input
                type="text"
                placeholder={t.name}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">{t.email}</label>
              <input
                type="email"
                placeholder={t.email}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">{t.message}</label>
              <textarea
                rows="4"
                placeholder={t.message}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-green-600">
              {t.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Matrix of Destiny. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
