"use client";

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center bg-[#2C2C2C] min-h-screen text-white px-4">
            <div className="w-full max-w-7xl">
                <h1 className="text-7xl font-medium mb-20">Contact Us</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-12 w-full max-w-7xl">
                {/* Contact Form */}
                <div className="bg-[#A8CCA0BF] p-10 rounded-3xl flex-1">
                    <form className="flex flex-col gap-4">
                        <label className="text-2xl text-[#FFFDF6] font-medium">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="p-3 pl-6 rounded-2xl bg-[#FFFDF6] text-input text-2xl font-light placeholder-input"
                            required
                        />

                        <label className="text-2xl text-[#FFFDF6] font-medium">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="p-3 pl-6 rounded-2xl bg-[#FFFDF6] text-input text-2xl font-light placeholder-input"
                            required
                        />

                        <label className="text-2xl text-[#FFFDF6] font-medium">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="p-3 pl-6 rounded-2xl bg-[#FFFDF6] text-input text-2xl font-light placeholder-input"
                            required
                        />

                        <label className="text-2xl text-[#FFFDF6] font-medium">
                            How can we help?
                        </label>
                        <textarea
                            name="message"
                            placeholder="How can we help?"
                            className="p-3 pl-6 rounded-2xl bg-[#FFFDF6] h-64 text-input text-2xl font-light placeholder-input"
                            required
                        />

                        <button
                            type="submit"
                            className="rounded-2xl p-4 mt-4 bg-[#4F6E4E] text-[#FFFDF6] text-2xl font-medium"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Google Map */}
                <div className="rounded-2xl flex-1 bg-white h-[75vh]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4026836440325!2d-118.13527642424282!3d33.85351167323249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd328b9d836d55%3A0xd4badfa32c2ad99b!2sLakewood%20Heating%20and%20Air%20Conditioning%20Inc.!5e0!3m2!1sen!2sus!4v1737916289075!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        className="rounded-3xl"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
