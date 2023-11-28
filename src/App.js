import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Space from "./components/Space";
import Experience from "./components/Experience";
import Services from "./components/Services"
import { Parallax } from 'react-parallax';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-700 body-font">
      <Navbar />
        <div className="flex justify-center">
          <div className="max-w-4xl">
            
            <Parallax
              blur={{ min: -20, max: 3 }}
              bgImage="./lion6.png"
              strength={350}
            >
              <About />
            </Parallax>
            <Space />
            <Parallax
              blur={{ min: -7, max: 8 }}
              bgImage="./lion2.png"
              strength={450}
            >
              <Services />
            </Parallax>
            <Space />
            <Parallax
              blur={{ min: -5, max: 10 }}
              bgImage="./lion4.png"
              strength={150}
            >
              <Experience />
            </Parallax>
            <Space />
            <Parallax
              blur={{ min: -7, max: 9 }}
              bgImage="./lion3.png"
              strength={350}
            >
              <Projects />
            </Parallax>
            <Space />
            <Parallax
              blur={{ min: -5, max: 7 }}
              bgImage="./lion5.png"
              strength={200}
            >
              <Skills />
            </Parallax>
            <Space />
            <Parallax
              blur={{ min: -20, max: 0 }}
              bgImage="./lion7.png"
              strength={250}
            >
              <Contact />
            </Parallax>
            <Space />
          </div>
        </div>
  
    </main >
  );
}