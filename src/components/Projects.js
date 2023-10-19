import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto rounded bg-gray-800 bg-opacity-60 text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Projects
                    </h1>
                </div>
                <div className="flex flex-wrap w-full text-center">
                    {projects.map((project) => (
                        <div className="py-1 px-10 w-full">
                            <div className="w-full relative bg-gray-800 rounded bg-opacity-30 hover:bg-opacity-70">
                                <h1 className="title-font text-lg font-medium text-white ">
                                    {project.title}
                                </h1>
                                <h2 className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                    {project.description}
                                </h2>
                                <p className="tracking-widest text-sm title-font font-medium text-yellow-400">
                                    {project.tech}
                                </p>
                                <p className="tracking-widest text-sm title-font font-medium text-yellow-400">
                                    {project.tech2}
                                </p>

                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </section>
    );
}