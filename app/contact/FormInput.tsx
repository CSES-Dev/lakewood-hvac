import React from "react";

type FormInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    isTextArea?: boolean;
    errorMessage?: string;
};

export default function FormInput({
    label,
    value,
    onChange,
    type = "text",
    isTextArea = false,
    errorMessage,
}: FormInputProps) {
    const inputId = `${label.toLowerCase().replace(/\s+/g, "-")}-input`;

    return (
        <div className="flex flex-col mt-5 w-full">
            <label
                htmlFor={inputId}
                className="text-input-background max-md:max-w-full text-md font-medium"
            >
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    id={inputId}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                    className="gap-2.5 px-7 text-md pt-4 pb-60 mt-5 w-full font-light rounded-2xl bg-input-background min-h-[280px] text-input placeholder-input max-md:px-5 max-md:pb-24 max-md:max-w-full"
                    placeholder={label}
                />
            ) : (
                <input
                    id={inputId}
                    type={type}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                    className="gap-2.5 self-stretch text-md px-7 py-4 mt-5 w-full font-light rounded-2xl bg-input-background text-input placeholder-input max-md:px-5 max-md:max-w-full"
                    placeholder={label}
                />
            )}
            {errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
        </div>
    );
}
