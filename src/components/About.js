import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container h-100 mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="w-2/3"></div>
        <div className="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Reliable
            <br className="hidden lg:inline-block" />
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Agile
            <br className="hidden lg:inline-block" />
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Development
            <br className="hidden lg:inline-block mb-128" />
          </h1>  
        </div>
      </div>
    </section>
  );
}