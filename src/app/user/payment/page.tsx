"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
 
const formSchema = z.object({
  amount: z.string().min(1, {
    message: "Amount is required.",
  }),
  paymentMethod: z.string().min(1, {
    message: "Payment method is required.",
  }),
})
 
export default function PaymentPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      paymentMethod: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Payment successful",
      description: `You have successfully contributed ₹${values.amount} to the welfare fund.`,
    })
    form.reset()
  }
 
  return (
<div className="flex-1 space-y-4 p-4 md:p-8 bg-white pt-6">
<div className="flex items-center justify-between">
<h2 className="text-3xl font-bold tracking-tight">Make Payment</h2>
</div>
<Card>
<CardHeader>
<CardTitle>Contribution Details</CardTitle>
<CardDescription>Enter the amount you want to contribute to the welfare fund.</CardDescription>
</CardHeader>
<CardContent>
<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
<FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
<FormItem>
<FormLabel>Amount (₹)</FormLabel>
<FormControl>
<Input placeholder="1000" {...field} />
</FormControl>
<FormDescription>Enter the amount you want to contribute.</FormDescription>
<FormMessage />
</FormItem>
                )}
              />
<FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
<FormItem>
<FormLabel>Payment Method</FormLabel>
<Select onValueChange={field.onChange} defaultValue={field.value}>
<FormControl>
<SelectTrigger>
<SelectValue placeholder="Select payment method" />
</SelectTrigger>
</FormControl>
<SelectContent>
<SelectItem value="upi">UPI</SelectItem>
<SelectItem value="netbanking">Net Banking</SelectItem>
<SelectItem value="card">Debit/Credit Card</SelectItem>
</SelectContent>
</Select>
<FormDescription>Select your preferred payment method.</FormDescription>
<FormMessage />
</FormItem>
                )}
              />
<Button type="submit">Make Payment</Button>
</form>
</Form>
</CardContent>
</Card>
</div>
  )
}