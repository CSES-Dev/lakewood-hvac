"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

type UploadResponse = {
    url?: string;
    error?: string;
};

type ImageUploadFormProps = {
    previewImageUrl?: string;
    onUploadSuccess?: (url: string) => void;
};

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ previewImageUrl, onUploadSuccess }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(previewImageUrl ?? null);
    const [uploading, setUploading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
        const fileList = e.target.files;
        if (!fileList || fileList.length === 0) {
            setSelectedFile(null);
            setPreviewUrl(null);
            return;
        }
        const file = fileList[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        setError(null);
    }

    async function handleUpload(): Promise<void> {
        if (!selectedFile) return;
        setUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = (await response.json()) as UploadResponse;
            if (!response.ok || !data.url) {
                const msg = data.error ?? "Upload failed";
                setError(msg);
                return;
            }

            setPreviewUrl(data.url);
            if (onUploadSuccess) {
                onUploadSuccess(data.url);
            }

            alert("Upload successful!");
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError(String(e));
            }
        } finally {
            setUploading(false);
        }
    }

    return (
        <div className="p-4 border rounded max-w-md">
            <h2 className="text-md mb-2">Upload Image</h2>

            <input
                type="file"
                accept="image/jpeg,image/png"
                onChange={handleFileChange}
                className="mb-2"
            />

            {previewUrl && (
                <div className="mb-2">
                    <p className="text-sm text-gray-600">Preview:</p>
                    <Image
                        src={previewUrl}
                        alt="Preview"
                        width={192}
                        height={192}
                        className="border mt-1"
                    />
                </div>
            )}

            <button
                onClick={() => void handleUpload()}
                disabled={!selectedFile || uploading}
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
                {uploading ? "Uploading..." : "Upload"}
            </button>

            {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
        </div>
    );
};

export default ImageUploadForm;
