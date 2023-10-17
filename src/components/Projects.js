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
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <div className="w-full relative bg-gray-800 rounded bg-opacity-40 hover:bg-opacity-70 hover:text-gray-200">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
                                        {project.tech}
                                    </h2>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
                                        {project.tech2}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}