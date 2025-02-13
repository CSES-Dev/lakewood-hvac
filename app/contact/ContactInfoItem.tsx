import React from 'react';

interface ContactInfoItemProps {
  iconSrc: string;
  text: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ iconSrc, text }) => {
  return (
    <div className="flex gap-8 items-center whitespace-nowrap">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[34px]"
      />
      <div className="self-stretch my-auto">{text}</div>
    </div>
  );
};

export default ContactInfoItem;