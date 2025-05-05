import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { generateRandomPassword } from "@/lib/utils";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const db = await connectToDatabase();

  const {
    firstName,
    lastName,
    phone,
    email,
    dateOfJoining,
    dateOfBirth
  } = data;

  const password = generateRandomPassword(6);
  const roleId = 2;

  try {
    await db.execute(
      `INSERT INTO users (email, password, role_id, first_name, last_name, phone, join_fund, dob, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', NOW())`,
      [
        email,
        password,
        roleId,
        firstName,
        lastName,
        phone,
        dateOfJoining,
        dateOfBirth
      ]
    );

    return NextResponse.json({ message: "Employee added", password });
  } catch (error) {
    console.error("Insert error:", error);
    return NextResponse.json({ message: "Insert failed" }, { status: 500 });
  }
}
