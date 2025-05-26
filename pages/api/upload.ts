/* eslint-disable @typescript-eslint/no-explicit-any,
                    @typescript-eslint/no-unsafe-call,
                    @typescript-eslint/no-unsafe-member-access,
                    @typescript-eslint/no-unsafe-assignment,
                    @typescript-eslint/prefer-promise-reject-errors,
                    @typescript-eslint/no-confusing-void-expression,
                    @typescript-eslint/restrict-template-expressions */

import fs from "fs";
import path from "path";
import multer, { FileFilterCallback } from "multer";
import type { NextApiRequest, NextApiResponse } from "next";

// 0) Disable built-in body parsing so Multer can run
export const config = {
    api: { bodyParser: false },
};

// 1) Ensure upload directory exists
const uploadDir = path.join(process.cwd(), "public/images/uploaded");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// 2) Multer storage + filename
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = `${String(Date.now())}-${String(Math.round(Math.random() * 1e9))}${ext}`;
        cb(null, uniqueName);
    },
});

// 3) Multer instance with size limit + filter
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

// 4) Helper to run Multer as middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
    return new Promise<void>((resolve, reject) => {
        fn(req, res, (err: any) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

// 5) Main handler
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // if (req.headers.authorization !== process.env.ADMIN_TOKEN) {
    if (req.headers.authorization !== "YOUR_ADMIN_TOKEN") {
        return res.status(403).json({ error: 'Forbidden' });
    }

    // 6) Run Multer
    try {
        await runMiddleware(req, res, upload.single("image"));
    } catch (err: any) {
        console.error("Upload error:", err);
        return res.status(400).json({ error: err.message });
    }

    // 7) Multer attached the file
    const file = (req as any).file as Express.Multer.File;
    if (!file) {
        return res.status(400).json({ error: "No file uploaded or invalid format" });
    }

    // 8) Return public URL
    const publicUrl = `/images/uploaded/${file.filename}`;
    return res.status(200).json({ url: publicUrl });
}
