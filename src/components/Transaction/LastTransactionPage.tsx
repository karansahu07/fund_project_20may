"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";

const transactions = [
  { name: "Rahul", pid: "97897874487", date: "2025-04-15", time: "10:30 AM", srnshoot: "image" },
  { name: "Aman", pid: "8974874874", date: "2025-04-10", time: "09:15 AM", srnshoot: "image" },
  { name: "Sahil", pid: "59659789877", date: "2025-04-05", time: "11:45 AM", srnshoot: "image" },
  { name: "Gaurav", pid: "8598598598", date: "2025-04-01", time: "02:30 PM", srnshoot: "image" },
  { name: "Chirag", pid: "7548878787", date: "2025-05-01", time: "03:45 PM", srnshoot: "image" },
];

export default function LastTransactionPage() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredTxns, setFilteredTxns] = useState([]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    setSelectedYear(String(year));
    setSelectedMonth(month);
  }, []);

  useEffect(() => {
    const filtered = transactions.filter((txn) => {
      const [txnYear, txnMonth] = txn.date.split("-").slice(0, 2);
      return txnYear === selectedYear && txnMonth === selectedMonth;
    });
    setFilteredTxns(filtered);
  }, [selectedMonth, selectedYear]);

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = ["2025", "2024", "2023"];

  return (
    <div className="flex-1 space-y-4">
      <div className="space-y-4 p-4 md:p-8 pt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-700 dark:text-indigo-300">
            All Transactions
          </h2>
          <div className="flex gap-2">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="rounded border border-gray-300 dark:border-gray-500 p-2 bg-white dark:bg-gray-700 text-sm"
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="rounded border border-gray-300 dark:border-gray-500 p-2 bg-white dark:bg-gray-700 text-sm"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-md border shadow-sm overflow-x-auto">
          <Table>
            <TableHeader className="bg-indigo-100 dark:bg-indigo-900">
              <TableRow>
                <TableHead className="text-indigo-900 dark:text-indigo-100 font-semibold">Name</TableHead>
                <TableHead className="text-indigo-900 dark:text-indigo-100 font-semibold">Payment ID</TableHead>
                <TableHead className="text-indigo-900 dark:text-indigo-100 font-semibold">Date & Time</TableHead>
                <TableHead className="text-indigo-900 dark:text-indigo-100 font-semibold">Screenshot</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTxns.length > 0 ? (
                filteredTxns.map((txn, index) => (
                  <TableRow
                    key={index}
                    className={index % 2 === 0 ? "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700" : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"}
                  >
                    <TableCell className="p-4 font-medium text-gray-800 dark:text-gray-100">{txn.name}</TableCell>
                    <TableCell className="p-4 text-blue-700 dark:text-blue-300">{txn.pid}</TableCell>
                    <TableCell className="p-4">
                      <span className="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200 px-2 py-1 rounded text-xs">
                        {`${txn.date} ${txn.time}`}
                      </span>
                    </TableCell>
                    <TableCell className="p-4">
                      <span className="bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-200 px-2 py-1 rounded text-xs">
                        {txn.srnshoot}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center p-4 text-gray-500">
                    No transactions found for the selected month/year.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
