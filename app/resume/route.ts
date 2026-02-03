import { readFile } from "fs/promises";
import { resolve } from "path";
import { NextResponse } from "next/server";

export async function GET() {
    const filePath = resolve("./public/resume.pdf");

    try {
        const fileBuffer = await readFile(filePath);
        return new NextResponse(new Blob([fileBuffer as any]), {
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
