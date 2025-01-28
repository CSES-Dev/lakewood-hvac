export type ContactFormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export type ContactInfoItem = {
  icon: string;
  text: string;
  alt: string;
};

export type FormInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  isTextArea?: boolean;
};
