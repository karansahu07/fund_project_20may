import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

     // Get referer URL
     const referer = req.headers.get("referer") || "";

     const role = referer.includes("/admin/auth/sign-in")? "Admin":"Employee";

    const db = await connectToDatabase();

    const [rows]: any = await db.execute(
      `SELECT users.id, users.email, roles.role
       FROM users
       JOIN roles ON users.role_id = roles.id
       WHERE users.email = ? AND users.password = ? AND roles.role = ?`,
      [email, password, role]
    );
    

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = rows[0];

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
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
