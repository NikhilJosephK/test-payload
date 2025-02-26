import payload from "payload";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await payload.migrate();
        return NextResponse.json({ message: "Migration completed successfully" });
    } catch (error) {
        console.error("Migration Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
