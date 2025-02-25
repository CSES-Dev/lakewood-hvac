import Image from "next/image";
import React from "react";

export default function Services() {
    return (
        <main className="bg-background px-[6.11vw] pt-[5.28vw] pb-[5vw] p-[0.69vw]">
            <div className="pb-[5vw]">
                <div className="text-[#F0F0F0] font-sans">
                    <h1 className="text-[6.25vw] max-sm:text-[12.5vw]">Services</h1>
                    <p className="text-[2.22vw] max-sm:text-[4.44vw]">
                        We offer a variety of services, from air conditioning to thermostats.
                    </p>
                </div>
            </div>
            <div>
                <div className="text-[#F0F0F0] font-sans flex max-lg:flex-col w-full max-md:items-center max-sm:items-center max-container gap-[3.4vw]">
                    <div className="max-sm:w-full md:w-[33.33] flex-none flex rounded-[1.74vw]">
                        <Image
                            src="/ac.png"
                            alt="AC Image"
                            width={424}
                            height={424}
                            className="w-[29vw] h-[29vw] max-sm:w-full max-sm:h-auto"
                        />
                    </div>
                    <div className="flex w-[66.67] flex-1 flex-col">
                        <p className=" pb-[1.67vw] text-[4.51vw] max-sm:text-[9.02vw]">
                            Air Conditioning
                        </p>
                        <p className=" pb-[2.22vw] text-[1.67vw] max-sm:text-[3.34vw]">
                            At Lakewood Heating and Air Conditioning Inc., we pride ourselves on
                            providing top-notch air conditioning services to ensure that our clients
                            enjoy a comfortable living environment. Our team of skilled technicians
                            is well-equipped to handle installations, maintenance, and repairs for a
                            variety of air conditioning systems. No matter the size or complexity of
                            your cooling needs, you can trust us to deliver efficient,
                            cost-effective, and timely solutions that keep your home cool and
                            comfortable throughout the year.
                        </p>
                        <div>
                            <button className="text-[1.74vw] bg-primary rounded-[1.39vw] py-[1.04vw] px-[1.94vw] max-sm:text-[3.48vw]">
                                Schedule Today
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-[5vw] text-[#F0F0F0] font-sans flex max-lg:flex-col w-full max-md:items-center max-sm:items-center max-container gap-[3.4vw]">
                    <div className="max-sm:w-full w-[33.33] flex-none flex rounded-[1.74vw]">
                        <Image
                            src="/heating.png"
                            alt="Heating Image"
                            width={424}
                            height={424}
                            className="w-[29vw] h-[29vw]  max-sm:w-full max-sm:h-auto"
                        />
                    </div>
                    <div className="flex w-[66.67] flex-1 flex-col">
                        <p className=" pb-[1.67vw] text-[4.51vw] max-sm:text-[9.02vw]">Heating</p>
                        <p className=" pb-[2.22vw] text-[1.67vw] max-sm:text-[3.34vw]">
                            Lakewood Heating and Air Conditioning Inc. is your reliable partner for
                            all your heating needs. Our experienced technicians are committed to
                            delivering exceptional heating services, from installations to repairs
                            and maintenance for a wide range of heating systems. Our goal is to
                            provide you with energy-efficient, safe, and comfortable heating
                            solutions to keep your home cozy during the colder months while ensuring
                            superior customer satisfaction. Give us a call today to learn more!
                        </p>
                        <div>
                            <button className="text-[1.74vw] max-sm:text-[3.48vw] bg-primary rounded-[1.39vw] py-[1.04vw] px-[1.94vw]">
                                Schedule Today
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-[5vw] text-[#F0F0F0] font-sans flex max-lg:flex-col w-full max-md:items-center max-sm:items-center max-container gap-[3.4vw]">
                    <div className="max-sm:w-full w-[33.33] flex-none flex rounded-[1.74vw]">
                        <Image
                            src="/thermostats.png"
                            alt="Thermostats Image"
                            width={424}
                            height={424}
                            className="w-[29vw] h-[29vw]  max-sm:w-full max-sm:h-auto"
                        />
                    </div>
                    <div className="flex w-[66.67] flex-1 flex-col">
                        <p className=" pb-[1.67vw] text-[4.51vw] max-sm:text-[9.02vw]">
                            Thermostats
                        </p>
                        <p className=" pb-[2.22vw] text-[1.67vw] max-sm:text-[3.34vw]">
                            Our thermostat services include professional installation, maintenance,
                            and repair of a variety of thermostat types and models. Our experts work
                            with you to identify the ideal thermostat solution for your home,
                            ensuring optimal temperature regulation and energy management,
                            ultimately enhancing your comfort and reducing energy costs. Contact us
                            to get started!
                        </p>
                        <div>
                            <button className="text-[1.74vw] max-sm:text-[3.48vw] bg-primary rounded-[1.39vw] py-[1.04vw] px-[1.94vw]">
                                Schedule Today
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-[5vw] text-[#F0F0F0] font-sans flex max-lg:flex-col w-full max-md:items-center max-sm:items-center max-container gap-[3.4vw]">
                    <div className="max-sm:w-full w-[33.33] flex-none flex rounded-[1.74vw]">
                        <Image
                            src="/heat_pumps.png"
                            alt="Heat Pumps Image"
                            width={424}
                            height={424}
                            className="w-[29vw] h-[29vw]  max-sm:w-full max-sm:h-auto"
                        />
                    </div>
                    <div className="flex w-[66.67] flex-1 flex-col">
                        <p className=" pb-[1.67vw] text-[4.51vw] max-sm:text-[9.02vw] ">
                            Heat Pumps
                        </p>
                        <p className=" pb-[2.22vw] text-[1.67vw] max-sm:text-[3.34vw]">
                            Lakewood Heating and Air Conditioning Inc. offers comprehensive heat
                            pump installation services, designed to provide you with an
                            eco-friendly, energy-efficient, and cost-effective alternative to
                            traditional heating and cooling systems. Our skilled technicians are
                            proficient in installing a wide range of heat pump models, ensuring
                            seamless integration into your existing HVAC system. Trust us to help
                            you transition to a greener, more comfortable living space while
                            reducing your energy consumption and costs.
                        </p>
                        <div>
                            <button className="text-[1.74vw] max-sm:text-[3.48vw] bg-primary rounded-[1.39vw] py-[1.04vw] px-[1.94vw]">
                                Schedule Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
