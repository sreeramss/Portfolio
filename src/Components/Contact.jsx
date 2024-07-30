import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });

    useEffect(() => {
        emailjs.init('nA9Bca4dSOvP_byvt'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        console.log('Form submitted:', formData);

        // Perform form submission logic here, such as sending data to a server
        emailjs.send('portfolio-contact', 'template_v7sq1ue', formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again later.');
            });

        // Reset the form data to clear the input fields
        setFormData({
            name: '',
            email: '',
            description: '',
        });
    };

    return (
        <section id='contact' className="flex flex-col items-center justify-center shadow-2xl min-h-screen p-6">
            <div className="text-center text-4xl sm:text-5xl font-bold md:mb-10 sm:mb-10">CONTACT</div>

            <form
                className="p-6 rounded-lg shadow-2xl w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 border border-gray-400 rounded-md"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 border border-gray-400 rounded-md"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full p-3 border border-gray-400 rounded-md"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                    />
                </div>

                {/* Centering the Send button */}
                <div className="flex justify-center"> {/* Flexbox to center the button */}
                    <button
                        type="submit"
                        className="w-1/4 bg-black text-white p-3 rounded-md hover:bg-yellow-500"
                    >
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
