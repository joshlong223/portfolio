import { OfficeBuildingIcon } from "@heroicons/react/solid";
import React from "react";
import { experience } from "../data";

export default function Experience() {
    return (
        <section id="experience" className="text-gray-300 body-font">
            <div className="container px-5 py-10 mx-auto rounded bg-gray-800 bg-opacity-20 text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <OfficeBuildingIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Experience
                    </h1>
                </div>
                <div className="flex flex-wrap w-full text-center">
                    {experience.map((job) => (
                        <div className="py-1 px-10 w-full">
                            <div className="w-full relative bg-gray-800 rounded bg-opacity-50 hover:bg-opacity-70">
                                <h1 className="title-font text-lg font-medium text-white ">
                                    {job.role}
                                </h1>
                                <p className="leading-relaxed text-xs mb-2">{job.dates}</p>
                                <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400">
                                    {job.company}
                                </h2>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                    {job.description}
                                </p>

                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </section >
    );
}