"use client";

import React, { useState } from 'react';
import FormInput from './FormInput';
import { ContactFormData } from './types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-md:max-w-full">
      <div className="flex grow gap-2.5 items-center px-9 py-8 w-full text-2xl leading-none rounded-3xl bg-[#A8CCA0] bg-opacity-80 max-md:px-5 max-md:mt-10">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[595px] max-md:max-w-full">
          <FormInput
            label="Full Name"
            value={formData.fullName}
            onChange={(value) => {
              setFormData({ ...formData, fullName: value }); // Explicit block
            }}
          />
          <FormInput
            label="Email Address"
            value={formData.email}
            onChange={(value) => {
              setFormData({ ...formData, email: value }); // Explicit block
            }}
            type="email"
          />
          <FormInput
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={(value) => {
              setFormData({ ...formData, phoneNumber: value }); // Explicit block
            }}
            type="tel"
          />
          <FormInput
            label="How can we help?"
            value={formData.message}
            onChange={(value) => {
              setFormData({ ...formData, message: value }); // Explicit block
            }}
            isTextArea
          />
          <button type="submit" className="gap-2.5 self-stretch px-7 py-4 mt-8 w-full rounded-3xl bg-stone-600 text-zinc-100 max-md:px-5 max-md:max-w-full">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
