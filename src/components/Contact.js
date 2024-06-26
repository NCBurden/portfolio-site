import React from "react";
import LoadingOverlay from 'react-loading-overlay-ts';

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [isLoading, setLoading] = React.useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    function resetForm() {
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        let formData = {
            name: name,
            email: email,
            message: message
        }

        fetch("/api/submitForm", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.text())
        .then((response) => {
            alert(`${response}`);
            resetForm();
        })
        .catch((error) => {
            console.log(error);
            alert("There was an error"); 
            resetForm();
        });
    }

    return (
        <LoadingOverlay active = {isLoading} >
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-neutral-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{filter: "opacity(0.8)"}}
                        src="https://www.google.com/maps/embed/v1/place?q=Nashville,+TN,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-neutral-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                Located Near
                            </h2>
                            <p className="mt-1">
                                Nashville, TN
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-green-400 leading-relaxed">
                                email@email.com
                            </a>
                            {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">123-456-7890</p> */}
                        </div>
                    </div>
                </div>
                <form
                name="contact"
                onSubmit={handleSubmit}
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Fill out this form to send me a message.<br/>
                        I'll try to reply as soon as possible!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-neutral-400">
                            Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required="true"
                        value={name}
                        className="w-full bg-neutral-800 rounded border border-neutral-700 focus:border-green-600 focus:ring-2 focus:ring-green-900 text-base outline-none text-neutral-100 py-1 px-3 leding-8 transition-colors duration-200 ease-in-out"
                        onChange={handleNameChange}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-neutral-400">
                            Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required="true"
                        value={email}
                        className="w-full bg-neutral-800 rounded border border-neutral-700 focus:border-green-600 focus:ring-2 focus:ring-green-900 text-base outline-none text-neutral-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={handleEmailChange}
                        />
                    </div>
                    <div className="raltive mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-neutral-400">
                            Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        required="true"
                        value={message}
                        className="w-full bg-neutral-800 rounded border border-neutral-700 focus:border-green-600 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-neutral-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        onChange={handleMessageChange}
                        />
                    </div>
                    <button type="submit"
                    className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
        </LoadingOverlay>
    );
}