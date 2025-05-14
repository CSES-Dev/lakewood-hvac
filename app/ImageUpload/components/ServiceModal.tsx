// app/adminpanel/components/ServiceTable/ServiceModal.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ImageUploadForm from '@/app/ImageUpload/components/ImageUploadForm';

interface ServiceModalProps {
    mode: 'add' | 'edit';
    initialData?: {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
    };
    onClose: () => void;
    onSuccess: () => void;
}

type FormValues = {
    title: string;
    description: string;
};

export default function ServiceModal({
    mode,
    initialData,
    onClose,
    onSuccess,
}: ServiceModalProps) {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } =
        useForm<FormValues>({
        defaultValues: {
            title: initialData?.title || '',
            description: initialData?.description || '',
        },
        });

    // two pieces of state now:
    const [imageUrl, setImageUrl] = useState<string>(initialData?.imageUrl || '');
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        if (mode === 'edit' && initialData) {
        setValue('title', initialData.title);
        setValue('description', initialData.description);
        setImageUrl(initialData.imageUrl);
        }
    }, [mode, initialData, setValue]);

    const onSubmit = async (data: FormValues) => {
        let finalImageUrl = imageUrl;

        // 1) if a new file was selected, upload it first
        if (file) {
        const formData = new FormData();
        formData.append('image', file);

        const uploadRes = await fetch('/api/upload', {
            method: 'POST',
            headers: {
            Authorization: 'YOUR_ADMIN_TOKEN', // your real logic
            },
            body: formData,
        });
        const json = await uploadRes.json();
        if (!uploadRes.ok || !json.url) {
            alert(json.error || 'Image upload failed');
            return;
        }

        finalImageUrl = json.url; 
        console.log(finalImageUrl)
        setImageUrl(finalImageUrl); 
        }

        if (!finalImageUrl) {
            alert('Please select an image.');
            return;
        }

        // 2) now create/update service
        const payload = { ...data, imageUrl };
        const url = mode === 'add' ? '/api/services' : `/api/services/${initialData?.id}`;
        const method = mode === 'add' ? 'POST' : 'PUT';

        const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        });

        if (!res.ok) {
        alert(`Failed to ${mode === 'add' ? 'add' : 'update'} service.`);
        return;
        }

        alert(`Service ${mode === 'add' ? 'added' : 'updated'}!`);
        onSuccess();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
            <h2 className="text-2xl mb-4">{mode === 'add' ? 'Add Service' : 'Edit Service'}</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* title/description fields */}
            <div>
                <label className="block text-sm">Title</label>
                <input {...register('title', { required: true })} className="w-full border p-2" />
                {errors.title && <p className="text-red-600 text-sm">Title required</p>}
            </div>

            <div>
                <label className="block text-sm">Description</label>
                <textarea {...register('description', { required: true })} rows={3}
                className="w-full border p-2" />
                {errors.description && <p className="text-red-600 text-sm">Description required</p>}
            </div>

            {/* file selector + preview */}
            <ImageUploadForm
                initialUrl={initialData?.imageUrl}
                previewUrl={imageUrl}
                onFileSelect={setFile}
            />

            <div className="flex justify-end space-x-2">
                <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 text-white rounded">
                {mode === 'add' ? 'Add' : 'Save'}
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}
