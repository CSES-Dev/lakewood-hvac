import React from 'react';

interface NavigationItemProps {
  text: string;
  isButton?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ text, isButton = false }) => {
  const baseClasses = "self-stretch my-auto";
  const buttonClasses = "gap-2.5 p-3 rounded-xl bg-[#4F6E4E] text-stone-50";

  return (
    <a className={`${baseClasses} ${isButton ? buttonClasses : ''} text-md`} href='#'>
      {text}
    </a>
  );
};

export default NavigationItem;