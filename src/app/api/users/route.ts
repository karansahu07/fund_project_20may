import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const db = await connectToDatabase();

    const [rows]: any = await db.execute(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = rows[0];

    // Convert role_id to role string
    const role = user.role_id === 1 ? "admin" : "employee";

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
