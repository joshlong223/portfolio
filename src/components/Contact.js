import { ChatIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container mx-auto bg-gray-800 bg-opacity-60 rounded">
                <form
                    netlify
                    name="contact"
                    className="text-center items-center flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <ChatIcon className="mx-auto inline-block w-10 mb-4" />
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact
                    </h2>
                    <p className="leading-relaxed mb-5">
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
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}