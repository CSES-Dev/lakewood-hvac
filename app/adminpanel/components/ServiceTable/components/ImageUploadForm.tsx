// app/ImageUpload/components/ImageUploadForm.tsx
"use client";

import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {
    initialUrl?: string;
    previewUrl: string | null;
    onFileSelect: (file: File | null) => void;
};

const ImageUploadForm: React.FC<Props> = ({ initialUrl, onFileSelect }) => {
    const [internalPreview, setInternalPreview] = useState<string | null>(initialUrl ?? null);

    useEffect(() => {
        if (initialUrl) {
            setInternalPreview(initialUrl);
        }
    }, [initialUrl]);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        onFileSelect(file);
        setInternalPreview(file ? URL.createObjectURL(file) : (initialUrl ?? null));
    }

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Service Image</label>
            <input type="file" accept="image/*" onChange={handleFileChange} className="block" />

            {internalPreview && (
                <div className="mt-2">
                    <Image
                        src={internalPreview}
                        alt="Preview"
                        width={150}
                        height={150}
                        className="rounded border"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUploadForm;
