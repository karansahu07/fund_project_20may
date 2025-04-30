"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
 
import { useEffect, useState } from "react";
// Sample employee data
const transactions = [
      { name: "Rahul", pid: "97897874487", date: "2025-04-15", time: "10:30 AM", srnshoot:"image"},
      { name: "Aman", pid: "8974874874", date: "2025-04-10", time: "09:15 AM" ,srnshoot:"image" },
      { name: "Sahil", pid: "59659789877", date: "2025-04-05", time: "11:45 AM" ,srnshoot:"image"},
      { name: "Gaurav", pid: "8598598598", date: "2025-04-01", time: "02:30 PM",srnshoot:"image" },
      { name: "Chirag", pid: "7548878787", date: "2025-03-28", time: "03:45 PM",srnshoot:"image" },
    ];
 
 
export default function LastTransactionPage() {
 
  const [monthValue, setMonthValue] = useState("");
 
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // pad with 0
    setMonthValue(`${year}-${month}`); // format: "YYYY-MM"
  }, []);
  return (
    <div className="flex-1 space-y-4">
   
  <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white dark:bg-gray-800">
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">All Transactions</h2>
      {/* <input type="month" className="rounded border-2 border-grey dark:border-light-500"/> */}
      <input
      type="month"
      value={monthValue}
      onChange={(e) => setMonthValue(e.target.value)}
      className="rounded border-2 border-gray-300 dark:border-gray-500 p-2"
    />
    </div>
    <div className="flex items-center justify-between">
      <div className="w-full max-w-sm">
     
      </div>
    </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Payment ID</TableHead>
              <TableHead className="pl-8">Date & Time</TableHead>
              <TableHead>Payment Screenshot</TableHead>
             
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((txn, index) => (
              <TableRow key={index}>
                <TableCell  className="p-5">{txn.name}</TableCell>
                <TableCell className="p-5">{txn.pid}</TableCell>
                <TableCell className="p-5">{txn.date+"      "+txn.time}</TableCell>
                <TableCell className="p-6">{txn.srnshoot}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    </div>
  )
}