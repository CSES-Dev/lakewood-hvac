import React from "react";
import ContactInfo from "./ContactInfo";

const ContactComponent: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-center bg-[#4F6E4E] p-6">
      {/* Image container moved to the right */}
      <div className="flex justify-end grow shrink items-center self-stretch my-auto min-w-[240px] w-[213px] ml-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e80b0080a9489802657734fe69ed3ed2f065f118ff98f232e98154e334df791?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16"
          alt="Company logo"
          className="object-contain my-auto aspect-[1.79] min-w-[240px] md:w-[300px]"
        />
      </div>
      
      {/* Contact info stays on the left */}
      <ContactInfo />
    </div>
  );
};

export default ContactComponent;
