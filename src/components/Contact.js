import { ChatIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="text-center">
            <div className="container px-5 py-10 mx-auto rounded bg-gray-800 bg-opacity-60 text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <ChatIcon className="mx-auto inline-block w-10 mb-4" />
                    <h2 className="text-white sm:text-4xl text-3xl font-medium title-font">
                        Contact
                    </h2>
                </div>
                <p className="tracking-widest text-sm title-font font-medium text-white mb-4">
                    josh.long223@gmail.com
                </p>
                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/josh-long223/">
                        <img className="object-cover object-center h-16 w-16"
                            src="./In-White-128.png" />
                    </a>
                    <div className="w-3"></div>
                    <a href="https://github.com/joshlong223">
                        <img className="object-cover object-center h-16 w-16"
                            src="./github-mark-white.png" />
                    </a>
                </div>
                <div><br></br></div>
            </div>
        </section>
    );
}