import React from "react";
import me from "../resources/me copy.jpg"

//TODO: Update the text!
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Chase!&nbsp;
                        <br className="hidden lg:inline-block"/>Softare Engineer
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I have been working with software for 6 years, with nearly 2 years of professional experience.
                        Much of my experience has been through classes designed to give real-world practice at Lipscomb University, 
                        where I earned a Bachelors degree.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
                            Work With Me!
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-neutral-400 bg-neutral-800 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={me}
                    />
                </div>
            </div>
        </section>
    );
}