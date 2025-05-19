import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Payment from '@/models/paymentModel';

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const newPayment = new Payment({
    utr: body.utr,
    name: body.name,
    amount: body.amount,
    status: 'pending'
  });

  await newPayment.save();
  return NextResponse.json({ success: true });
}

export async function GET() {
  await connectDB();
  const payments = await Payment.find().sort({ createdAt: -1 });
  return NextResponse.json(payments);
}
