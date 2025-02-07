import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#4F6E4E] text-[#F0F0F0] py-8 border-t border-[#4F6E4E] w-full h-auto min-h-[30vh] font-sans px-[4vw] mt-auto overflow-hidden flex flex-col sm:flex-row items-center sm:h-[30vh]">
            <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-center w-full h-full">
                <Image
                    src="/lakewoodlogo.png"
                    alt="Lakewood Icon"
                    layout="intrinsic"
                    width={266}
                    height={149}
                    style={{ flexShrink: 0 }}
                    className="w-[500vw] md:w-[200vw] xs:w-[300px] lg:w-[300px] max-h-[20vh] h-auto object-contain"
                />
                <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left mt-4 sm:mt-0">
                    <p className="mb-[0.8vw] flex items-center gap-[1.2vw] text-xs sm:text-xs md:text-base lg:text-lg">
                        <Image
                            src="/call.png"
                            alt="Call Icon"
                            layout="intrinsic"
                            width={29}
                            height={29}
                            style={{ flexShrink: 0 }}
                            className="w-[2vw] h-auto"
                        />
                        <a href={`tel:5626336412`}>562-633-6412</a>
                    </p>
                    <p className="mb-[0.8vw] flex items-center gap-[1.2vw] text-xs sm:text-xs md:text-base lg:text-lg justify-center">
                        <Image
                            src="/mail.png"
                            alt="Mail Icon"
                            layout="intrinsic"
                            width={29}
                            height={29}
                            style={{ flexShrink: 0 }}
                            className="w-[2vw] h-auto"
                        />
                        <a href={`mailto:lakewooodhvac90712@gmail.com`}>
                            lakewooodhvac90712@gmail.com
                        </a>
                    </p>
                    <p className="mb-[0.8vw] flex items-center gap-[1.2vw] text-xs sm:text-xs md:text-base lg:text-lg justify-center">
                        <Image
                            src="/clock.png"
                            alt="Clock Icon"
                            layout="intrinsic"
                            width={29}
                            height={29}
                            style={{ flexShrink: 0 }}
                            className="w-[2vw] h-auto"
                        />
                        <a>Mondays-Saturdays: 8AM-8PM</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
