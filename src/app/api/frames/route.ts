import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const framesDirectory = path.join(process.cwd(), "public", "frames");
    
    if (!fs.existsSync(framesDirectory)) {
      return NextResponse.json({ frames: [] }, { status: 404 });
    }

    const files = fs.readdirSync(framesDirectory);
    
    // Filter and sort frame files numerically (ezgif-frame-001.jpg, etc.)
    const frameFiles = files
      .filter((file) => /^ezgif-frame-\d+\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
        const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
        return numA - numB;
      })
      .map((file) => `/frames/${file}`);

    return NextResponse.json({
      totalFrames: frameFiles.length,
      frames: frameFiles,
    });
  } catch (error) {
    console.error("Error reading frames directory:", error);
    return NextResponse.json({ error: "Failed to read frames" }, { status: 500 });
  }
}
