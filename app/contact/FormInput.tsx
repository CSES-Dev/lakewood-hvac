import React from "react";

type FormInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    isTextArea?: boolean;
};

export default function FormInput({
    label,
    value,
    onChange,
    type = "text",
    isTextArea = false,
}: FormInputProps) {
    const inputId = `${label.toLowerCase().replace(/\s+/g, "-")}-input`;

    return (
        <div className="flex flex-col mt-5 w-full max-md:max-w-full">
            <label
                htmlFor={inputId}
                className="text-input-background max-md:max-w-full text-2xl font-medium"
            >
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    id={inputId}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value); // Added braces to make it an explicit block
                    }}
                    className="gap-2.5 px-7 text-2xl pt-4 pb-60 mt-5 w-full font-light rounded-2xl bg-input-background min-h-[280px] text-input placeholder-input max-md:px-5 max-md:pb-24 max-md:max-w-full"
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
                    className="gap-2.5 self-stretch text-2xl px-7 py-4 mt-5 w-full font-light rounded-2xl bg-input-background text-input placeholder-input max-md:px-5 max-md:max-w-full"
                    placeholder={label}
                />
            )}
        </div>
    );
}
