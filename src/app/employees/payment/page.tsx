// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { Button } from "@/components/ui/button"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { toast } from "@/components/ui/use-toast"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"

// const formSchema = z.object({
//   amount: z.string().min(1, {
//     message: "Amount is required.",
//   }),
//   paymentMethod: z.string().min(1, {
//     message: "Payment method is required.",
//   }),
// })

// export default function PaymentPage() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       amount: "",
//       paymentMethod: "",
//     },
//   })

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values)
//     toast({
//       title: "Payment successful",
//       description: `You have successfully contributed ₹${values.amount} to the welfare fund.`,
//     })
//     form.reset()
//   }

//   return (
//     <div className="flex-1 space-y-4">
//       <Breadcrumb pageName="Make Payment" />
//     <div className="flex-1 space-y-4 p-4 md:p-8 bg-white pt-6 dark:bg-gray-800">
//       <h2 className="text-3xl font-bold tracking-tight">Make Payment</h2>
//       {/* <div className="flex items-center justify-between">
//         <h2 className="text-3xl font-bold tracking-tight">Make Payment</h2>
//       </div> */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Contribution Details</CardTitle>
//           <CardDescription>Enter the amount you want to contribute to the welfare fund.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="amount"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Amount (₹)</FormLabel>
//                     <FormControl>
//                       <Input placeholder="1000" {...field} />
//                     </FormControl>
//                     <FormDescription>Enter the amount you want to contribute.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="paymentMethod"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Payment Method</FormLabel>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select payment method" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent className="bg-white shadow-md rounded-md">
//                         <SelectItem value="upi">UPI</SelectItem>
//                         <SelectItem value="netbanking">Net Banking</SelectItem>
//                         <SelectItem value="card">Debit/Credit Card</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormDescription>Select your preferred payment method.</FormDescription>
//                     <FormMessage />
//                   </FormItem>

//                 )}
//               />
//               <Button type="submit" className="text-white">Make Payment</Button>
//             </form>
//           </Form>
//         </CardContent>
//       </Card>
//     </div>
//     </div>
//   )
// }

// import Qrpage from "../../../components/QrPaymentSystem";
 
 
// export default function page(){
//   return(
//      <>
//      <div className="mt-1">
//       <Qrpage/>
//      </div>
//     </>
//   );
// }


'use client';

import { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';

export default function EmployeePaymentPage() {
  const [utr, setUtr] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    if (!utr) return alert('Please enter UTR/Reference ID');

    const res = await fetch('/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        utr,
        name: 'karan',
        amount: 100
      })
    });

    const data = await res.json();
    if (data.success) {
      setStatus('✅ Payment submitted successfully!');
      setUtr('');
    } else {
      setStatus('❌ Failed to submit payment');
    }
  };

  const upiLink = `upi://pay?pa=karandevsahu-1@oksbi&pn=karan&am=1&cu=INR`;

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Scan to Pay via Google Pay</h2>
      <QRCode value={upiLink} size={200} />
      <p className="mt-2 text-lg">Pay ₹1 to karan</p>

      <input
        className="mt-4 w-full border p-2 rounded"
        placeholder="Enter UPI Reference ID (UTR)"
        value={utr}
        onChange={(e) => setUtr(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Submit Payment
      </button>

      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}
