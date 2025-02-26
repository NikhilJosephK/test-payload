import payload from "payload";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
    try {
        // ✅ Make sure to include 'src/' in the path
        const configPath = path.resolve(process.cwd(), "src/payload.config.ts"); // Change to .js if needed

        await payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: {
                postgresUrl: process.env.DATABASE_URI, // 👈 Use DATABASE_URL instead of DATABASE_URI
            },
            configPath, // 👈 Pass the correct path
        });


        await payload.migrate();

        return NextResponse.json({ configPath });
    } catch (error) {
        console.error("Migration Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
