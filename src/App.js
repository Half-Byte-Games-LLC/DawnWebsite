import logo from './logo.svg';
import './App.css';
import HeroSection from "./Pages/HeroSection";
import Roadmap from "./Components/Roadmap";
import NewsletterSignUp from "./Components/NewsletterSignup";
import ZombieShowcase from "./Components/ZombieShowcase";
import Footer from "./Pages/Footer";
import './index.css'; // Make sure to include Tailwind CSS
import React from "react";
import config from './Config';

console.log('Current Environment:', config.environment);
console.log('API URL:', config.apiUrl);

function App() {
  return (
      <div className="App">
        <HeroSection />
        <Roadmap />
        <NewsletterSignUp/>
        <ZombieShowcase/>
        <Footer />
      </div>
  );
}


export default App;
