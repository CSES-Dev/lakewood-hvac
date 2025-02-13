import React from "react";
import ContactInfoItem from "./ContactInfoItem";

const contactData = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b7ebf1e068ba6cc720346207dee9db8365ccf9256af4926d3dbf4de34688076?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16", text: "562-633-6412" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/563820429a8d90c5a393616575356f2998d717f9c6309868410ed2e6ffeb4fcd?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16", text: "lakewooodhvac90712@gmail.com" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/998a8a1721fbfc327007a711cd44339134074a6535abc81ef4d176901bb52f8f?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16", text: "Monday-Saturdays: 8AM-8PM" }
];

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col grow shrink items-start self-stretch my-auto text-xl leading-none min-w-[240px] text-stone-50 w-[413px] max-md:max-w-full lg:ml-[150px] max-sm:mt-[55px] max-sm:text-sm">
      {contactData.map((item, index) => (
        <div key={index} className={index > 0 ? "mt-5" : ""}>
          <ContactInfoItem iconSrc={item.iconSrc} text={item.text} />
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
