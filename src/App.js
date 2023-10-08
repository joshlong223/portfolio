import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Parallax } from 'react-parallax';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-500 body-font">
      <Navbar />
      <Parallax
        blur={{ min: -25, max: 25 }}
        bgImage="./lionhd.png"
        strength={200}
      >
        <About />
        <Skills />
        <Contact />
      </Parallax>
      
    </main>
  );
}