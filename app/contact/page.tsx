"use client";

export default function ContactUs() {
    return (
        <div className="flex flex-col items-center bg-[#2C2C2C] min-h-screen text-white px-4">
            <div className="w-full max-w-6xl">
                <h1 className="text-7xl mb-20">Contact Us</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
                {/* Contact Form */}
                <div className="bg-[#A8CCA0BF] p-6 rounded-xl flex-1">
                    <form className="flex flex-col gap-3">
                        <label className="text-white">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="p-2 pl-4 rounded-lg bg-input text-[#2C2C2CBF]"
                            required
                        />

                        <label className="text-white">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="p-2 pl-4 rounded-lg bg-input text-[#2C2C2CBF]"
                            required
                        />

                        <label className="text-white">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="p-2 pl-4 rounded-lg bg-input text-[#2C2C2CBF]"
                            required
                        />

                        <label className="text-white">How can we help?</label>
                        <textarea
                            name="message"
                            placeholder="How can we help?"
                            className="p-2 pl-4 rounded-lg bg-input h-40 text-[#2C2C2CBF]"
                            required
                        />

                        <button type="submit" className="rounded-lg py-2 bg-[#4F6E4E] text-white">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Google Map */}
                <div className="rounded-xl flex-1 h-96 bg-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d-122.41941548468132!3d37.77492927975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f0f8c09%3A0x4d14ea4b4e3c74b!2sLakewood%20Heating%20and%20Air%20Conditioning%20Inc!5e0!3m2!1sen!2sus!4v1632938725915!5m2!1sen!2sus&zoom=12&disableZoom=1"
                        width="100%"
                        height="100%"
                        className="rounded-xl"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
