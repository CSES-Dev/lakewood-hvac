/* eslint-disable @typescript-eslint/no-explicit-any,
                    @typescript-eslint/no-unsafe-call,
                    @typescript-eslint/no-unsafe-member-access,
                    @typescript-eslint/no-unsafe-assignment,
                    @typescript-eslint/prefer-promise-reject-errors,
                    @typescript-eslint/no-confusing-void-expression */

import path from "path";
import { put } from "@vercel/blob";
import multer, { FileFilterCallback } from "multer";
import type { NextApiRequest, NextApiResponse } from "next";

// 0) Disable built-in body parsing so Multer can run
export const config = {
    api: { bodyParser: false },
};

// 1) Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (_req: any, file: Express.Multer.File, cb: FileFilterCallback) => {
        const allowed = ["image/jpeg", "image/png"];
        if (allowed.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only JPG/PNG files are allowed"));
        }
    },
});

// 2) Helper to run Multer as middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
    return new Promise<void>((resolve, reject) => {
        fn(req, res, (err: any) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

// 5) Main handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // 4) Parse the multipart form to get file.buffer
    try {
        await runMiddleware(req, res, upload.single("image"));
    } catch (err: any) {
        console.error("Upload error:", err);
        return res.status(400).json({ error: err.message });
    }

    const file = (req as any).file as Express.Multer.File;
    if (!file) {
        return res.status(400).json({ error: "No file uploaded or invalid format" });
    }

    // 5) Generate a unique blob name with same extension
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    const blobPath = `images/uploaded/${uniqueName}`;

    // 6) Upload to Vercel Blob
    let url: string;
    try {
        const result = await put(blobPath, file.buffer, {
            access: "public",
            token: process.env.BLOB_READ_WRITE_TOKEN,
        });
        url = result.url;
    } catch (err: any) {
        console.error("Blob upload error:", err);
        return res.status(500).json({ error: "Failed to upload to blob storage" });
    }

    // 7) Return the public URL
    return res.status(200).json({ url });
}
