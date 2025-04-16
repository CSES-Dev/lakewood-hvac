'use client';

import React, { useState } from 'react';

const ImageUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        setError(null);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;
        setUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
        const res = await fetch('/api/upload', {
            method: 'POST',
            headers: {
            Authorization: 'YOUR_ADMIN_TOKEN', // Replace with real token or logic
            },
            body: formData,
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Upload failed');

        alert('Upload successful!');
        setPreviewUrl(data.url); // this will be like `/images/services/...`
        } catch (err: any) {
        setError(err.message);
        } finally {
        setUploading(false);
        }
    };

    return (
        <div className="p-4 border rounded max-w-md">
        <h2 className="text-xl font-semibold mb-2">Upload Service Image</h2>

        <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={handleFileChange}
            className="mb-2"
        />

        {previewUrl && (
            <div className="mb-2">
            <p className="text-sm text-gray-600">Preview:</p>
            <img
                src={previewUrl.startsWith('/') ? previewUrl : URL.createObjectURL(selectedFile!)}
                alt="Preview"
                className="w-48 border mt-1"
            />
            </div>
        )}

        <button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            {uploading ? 'Uploading...' : 'Upload'}
        </button>

        {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
        </div>
    );
};

export default ImageUploadForm;
