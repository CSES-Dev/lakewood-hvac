import React from 'react';
import { FormInputProps } from './types';

export default function FormInput({ label, value, onChange, type = 'text', isTextArea = false }: FormInputProps) {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input`;

  return (
    <div className="flex flex-col mt-5 w-full max-md:max-w-full">
      <label htmlFor={inputId} className="text-stone-50 max-md:max-w-full text-[18px]">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={inputId}
          value={value}
          onChange={(e) => {
            onChange(e.target.value); // Added braces to make it an explicit block
          }}
          className="gap-2.5 px-7 text-[14px] pt-4 pb-60 mt-5 w-full font-light rounded-3xl bg-stone-50 min-h-[280px] text-zinc-800 text-opacity-80 max-md:px-5 max-md:pb-24 max-md:max-w-full"
          placeholder={label}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={(e) => {
            onChange(e.target.value); // Added braces to make it an explicit block
          }}
          className="gap-2.5 self-stretch text-[14px] px-7 py-4 mt-5 w-full font-light rounded-3xl bg-stone-50 text-zinc-800 text-opacity-80 max-md:px-5 max-md:max-w-full"
          placeholder={label}
        />
      )}
    </div>
  );
}
