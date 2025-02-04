import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#4F6E4E] text-[#F0F0F0] py-8 border-t border-border w-full text-[min(2.5vw, 24px)] font-sans px-[4vw] mt-auto overflow-hidden">
            <div className="max-w-screen-lg mx-auto flex items-center justify-between w-full">
                <Image
                    src="/lakewoodlogo.png"
                    alt="Lakewood Icon"
                    layout="intrinsic"
                    width={266}
                    height={149}
                    style={{ flexShrink: 0 }}
                    className="w-[30vw] h-auto"
                />
                <div className="w-1/2 flex flex-col justify-center min-w-0">
                    <p className="mb-[1vw] flex items-center gap-[2vw]">
                        <Image
                            src="/call.png"
                            alt="Call Icon"
                            layout="intrinsic"
                            width={29}
                            height={29}
                            style={{ flexShrink: 0 }}
                            className="w-[3vw] h-auto"
                        />
                        <a href={`tel:5626336412`}>562-633-6412</a>
                    </p>
                    <p className="mb-[1vw] flex items-center gap-[2vw]">
                        <Image
                            src="/mail.png"
                            alt="Mail Icon"
                            layout="intrinsic"
                            width={29}
                            height={29}
                            style={{ flexShrink: 0 }}
                            className="w-[3vw] h-auto"
                        />
                        <a href={`mailto:lakewooodhvac90712@gmail.com`}>
                            lakewooodhvac90712@gmail.com
                        </a>
                    </p>
                    <p className="mb-[1vw] flex items-center gap-[2vw]">
                        <Image
                            src="/clock.png"
                            alt="Clock Icon"
                            layout="intrinsic"
                            width={29}
                            height={29}
                            style={{ flexShrink: 0 }}
                            className="w-[3vw] h-auto"
                        />
                        <a>Mondays-Saturdays: 8AM-8PM</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
