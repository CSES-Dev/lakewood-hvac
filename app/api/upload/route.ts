import { writeFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// Configure accepted file types
const acceptedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File | null;

        // Check if file exists
        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // Validate file type
        if (!acceptedTypes.includes(file.type)) {
            return NextResponse.json(
                { error: "File type not supported. Please upload JPG, PNG, GIF, or WebP." },
                { status: 400 },
            );
        }

        // Validate file size (limit to 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            return NextResponse.json({ error: "File size exceeds 5MB limit" }, { status: 400 });
        }

        // Convert the file to a Buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate a unique filename using the current timestamp
        const timestamp = Date.now();
        const fileExtension = file.name.split(".").pop() ?? "jpg";
        const fileName = `${timestamp.toString()}.${fileExtension}`;

        // Define the public directory path
        const publicDir = path.join(process.cwd(), "public", "images", "services");
        const filePath = path.join(publicDir, fileName);

        // Write the file to disk
        await writeFile(filePath, buffer);

        // Generate public URL
        const publicUrl = `/images/services/${fileName}`;

        return NextResponse.json({
            success: true,
            url: publicUrl,
            fileName,
        });
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
    }
}

// Optional: Configure request size limit for Next.js
export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
        responseLimit: "10mb",
    },
};
