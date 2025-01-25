import React, { } from "react";

export default function Page() {
    return (
        <div className="" style={{ background: "#232323" }}>
            {/* Landing - Brandon  */}
            <div className="bg-green-500 relative h-screen px-16 ">
                <div className="absolute text-white bottom-0 max-w-[70rem] ">
                    <h1 className="text-[5.625rem] font-bold pb-4 leading-[1.16]">
                        Lakewood Heating and Air Conditioning Inc.
                    </h1>
                    <h2 className="text-[2.5rem] pb-12">
                        Your friendly neighborhood air conditioning company!
                    </h2>
                </div>
            </div>
            {/* Services */}
            <div>
                {/* Squares - Jesus*/}
                <div></div>
                {/* Circles - Brandon*/}
                <div></div>
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
    );
}
