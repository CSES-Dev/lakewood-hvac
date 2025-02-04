import Head from "next/head";
import React from "react";
import CirclesSection from "./sections/CirclesSection";

export default function Page() {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                ></meta>
            </Head>
            <div className="w-screen" style={{ background: "#232323" }}>
                {/* Landing - Brandon  */}
                {/* <div className="bg-green-500 relative h-screen">
                    <div className="absolute text-white bottom-0 left-0 max-w-[70rem]  pl-16 pb-12">
                        <h1 className="text-[5.625rem] font-bold leading-[1.16]">
                            Lakewood Heating and Air Conditioning Inc.
                        </h1>
                        <h2 className="text-[2.5rem]">
                            Your friendly neighborhood air conditioning company!
                        </h2>
                    </div>
                </div> */}
                {/* Services */}
                <div>
                    {/* Squares - Jesus*/}
                    <div></div>
                    {/* Circles - Brandon*/}
                    <CirclesSection />
                </div>
                {/* What our clients say - Jesus*/}
                <div className="p-8">
                    <div className="">
                        <h2
                            className="text-4xl text-center font-bold mb-8 "
                            style={{ color: "#F0F0F0" }}
                        >
                            See What Our Clients Say
                        </h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="w-12 h-12 rounded-full text-4xl"
                            style={{ background: "#4F6E4E", color: "#F0F0F0" }}
                        >
                            &lt;
                        </button>
                        <div className="w-full">asd</div>
                        <button
                            className="w-12 h-12 rounded-full text-4xl"
                            style={{ background: "#4F6E4E", color: "#F0F0F0" }}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
