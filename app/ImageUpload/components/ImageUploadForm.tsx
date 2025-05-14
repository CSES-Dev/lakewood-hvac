// app/ImageUpload/components/ImageUploadForm.tsx
'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  /** Initial image URL (e.g. when editing) */
  initialUrl?: string;
  /** The URL to preview (controlled by parent) */
  previewUrl: string | null;
  /** Fires when user picks a new file (or clears selection) */
  onFileSelect: (file: File | null) => void;
}

const ImageUploadForm: React.FC<Props> = ({
  initialUrl,
  previewUrl,
  onFileSelect,
}) => {
  const [internalPreview, setInternalPreview] = useState<string | null>(
    initialUrl || null
  );

  // if parent changes the initialUrl, update preview
  useEffect(() => {
    if (initialUrl) {
      setInternalPreview(initialUrl);
    }
  }, [initialUrl]);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    onFileSelect(file);
    setInternalPreview(
      file ? URL.createObjectURL(file) : initialUrl || null
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Service Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block"
      />

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
