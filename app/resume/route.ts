import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
    const filePath = join(process.cwd(), "public", "resume.pdf");

    try {
        const fileBuffer = await readFile(filePath);
        return new Response(new Uint8Array(fileBuffer), {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'inline; filename="resume.pdf"',
            },
        });
    } catch (error) {
        console.error("Error reading resume.pdf:", error);
        return new NextResponse("Resume not found", { status: 404 });
    }
}
