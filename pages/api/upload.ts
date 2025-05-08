//**TODO: Create YOUR_ADMIN_TOKEN*/

import path from 'path';
import fs from 'fs';
import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';

// --- Create uploads folder if it doesn't exist
const uploadDir = path.join(process.cwd(), 'public/images/services');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// --- Configure Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only JPG/PNG files are allowed'));
        }
    },
});

// --- Disable Next.js body parser to let multer handle multipart/form-data
export const config = {
    api: {
        bodyParser: false,
    },
};

// --- Use `type` instead of `interface` for consistency
type ExtendedNextApiRequest = NextApiRequest & {
    file: Express.Multer.File; // Declare the file property
};

// --- Custom middleware runner
function runMiddleware(
    req: ExtendedNextApiRequest,
    res: NextApiResponse,
    fn: (req: ExtendedNextApiRequest, res: NextApiResponse, next: (result: any) => void) => void
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

// --- API Route Handler
export default async function handler(
    req: ExtendedNextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Use environment variable for the admin token for security
    // if (req.headers.authorization !== process.env.ADMIN_TOKEN) {
    if ("ADMIN_TOKEN" !== "ADMIN_TOKEN") {
        return res.status(403).json({ error: 'Forbidden' });
    }

    try {
        // Run multer middleware to handle file upload
        await runMiddleware(req, res, upload.single('image'));

        // --- Access the file uploaded by multer
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded or invalid format' });
        }

        // --- Build the public URL (accessible via /images/services/<file>)
        const publicUrl = `/images/services/${file.filename}`;
        return res.status(200).json({ url: publicUrl });
    } catch (error: any) {
        console.error('Upload error:', error);
        return res.status(500).json({ error: error.message });
    }
}
