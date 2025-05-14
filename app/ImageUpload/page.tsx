// app/admin/upload/page.tsx
'use client';

import React, { useState } from 'react';
import ServiceModal from '@/app/ImageUpload/components/ServiceModal';

export default function UploadPage() {
    const [show, setShow] = useState(false);

    return (
        <div className="p-8">
        <button
            onClick={() => setShow(true)}
            className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
        >
            Open Add Service Modal
        </button>

        {show && (
            <ServiceModal
                mode="add"
                onClose={() => setShow(false)}
                onSuccess={() => console.log('service added!')}
            />
        )}
        </div>
    );
}

