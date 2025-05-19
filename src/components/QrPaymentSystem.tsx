'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import qrimg from "../assets/istockphoto-2181757105-612x612.jpg";
import Image from "next/image";
export default function QrPaymentSystem() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
  const  handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      // document.getElementById(`otp-${index + 1}`).focus();
      const nextInput = document.getElementById(`otp-${index + 1}`);
    nextInput?.focus(); 
    }
  };

  const handleSendOtp = () => {
    // Logic to send OTP via WhatsApp
    alert(`OTP sent to ${phone}`);
  };
 
  const handleVerifyPayment = () => {
    // Logic to verify the payment
    alert(`Verifying OTP: ${otp.join('')}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100  dark:bg-[#020d1a] p-4 ">
      <Card className="w-full max-w-md p-6 dark:bg-[#020d1a] rounded-2xl  shadow-md ">
        <CardContent className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4 text-black dark:text-white flex items-center gap-2">
            <span>🧾</span> Verification 
          </h2>
          <div className="bg-gray-200 rounded-xl p-6 mb-4 w-full flex justify-center">
            {/* Replace this div with actual QR Code */}
            <div className="bg-black w-64 h-64">
              <Image src={qrimg} alt="" />
          </div></div>
          <p className="text-center dark:text-white text-gray-600 mb-1">
          Scan this QR for verification
          </p>
          <p className="text-center text-xs dark:text-white text-gray-500 mb-6">
          Verify yourself before payment
          </p>

          <div className="w-full">
            <p className="text-sm font-medium mb-2">Registered Number</p>
            <Input
              type="tel"
              placeholder="+91 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-3"
            />
            <Button
              onClick={handleSendOtp}
              className="w-full bg-green-500 hover:bg-green-600 text-white mb-4"
            >
              📩 Send OTP via WhatsApp
            </Button>

            <div className="flex justify-center gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-10 h-10 border rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <Button
              onClick={handleVerifyPayment}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white"
            >
             Proceed for Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
