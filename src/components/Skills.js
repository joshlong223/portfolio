import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto rounded bg-gray-800 bg-opacity-60">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-1">
                        Skills
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="py-1 px-10 w-full text-center">

                        {skills.map((category) => (
                            <div className="w-full relative bg-gray-800 rounded bg-opacity-30 hover:bg-opacity-70">
                                <div className="mb-2">
                                    <h1 className="title-font text-lg font-medium text-white ">
                                        {category.category}
                                    </h1>

                                    <p className="tracking-widest text-sm title-font font-medium text-yellow-400">
                                        {category.skills}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}