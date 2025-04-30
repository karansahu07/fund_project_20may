"use client"

import { useEffect, useState } from "react"
import { Eye, MoreHorizontal, Pencil, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
// import { Eye, MoreHorizontal, Pencil } from "lucide-react"

// Sample employee data
const employees = [
  {
    id: "1",
    name: "Rahul Sharma",
    status: "Paid", 
    date: "15-04-2025",
    time: "10:30 AM",
  },
  {
    id: "2",
    name: "Priya Patel",
    status: "Not Paid",
    date: "10-04-2025",
    time: "09:15 AM",
  },
  {
    id: "3",
    name: "Amit Kumar",
    status: "Paid",
    date: "06-04-2025",
    time: "11:45 AM",
  },
  {
    id: "4",
    name: "Neha Singh",
    status: "Paid",
    date: "20-04-2025",
    time: "02:30 PM",
  },
  {
    id: "5",
    name: "Vikram Malhotra",
    status: "Not Paid",
    date: "28-03-2023",
    time: "03:45 PM",
  },
  {
    id: "6",
    name: "Ananya Desai",
    status: "Paid",
    date: "25-04-2025",
    time: "10:00 AM",
  },
  {
    id: "7",
    name: "Rajesh Gupta",
    status: "Not Paid",
    date: "06-03-2025",
    time: "01:15 PM",
  },
]

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [monthValue, setMonthValue] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // pad with 0
    setMonthValue(`${year}-${month}`); // format: "YYYY-MM"
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4">
      <Breadcrumb pageName="Manage Employee" />
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Manage Employees & Track</h2>
        <input
      type="month"
      value={monthValue}
      onChange={(e) => setMonthValue(e.target.value)}
      className="rounded border-2 border-gray-300 dark:border-gray-500 p-2"
    />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-full max-w-sm">
          <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
      <div className="rounded-md border">
        <Table className="dark:bg-gray-800">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id} className={employee.status === "Paid" ? "bg-green-100 dark:bg-gray-800" : "bg-red-100 dark:bg-gray-800"}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>
                  {/* <Badge variant={employee.status === "Paid" ? "default" : "destructive"}>{employee.status}</Badge> */}
                  <Badge className={employee.status === "Paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"}>
                    {employee.status}
                  </Badge>

                </TableCell>
                <TableCell>{employee.date}</TableCell>
                <TableCell>{employee.time}</TableCell>
                <TableCell className="text-right">
                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete Employee
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete Employee
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}

<div className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-4">
                    <div className="flex items-center text-blue-600 hover:text-blue-900 text-sm"><Eye className="mr-2 h-4 w-4" /> View</div>
                    <div className="flex items-center text-gray-600 hover:text-gray-900 text-sm"> <Pencil className="mr-2 h-4 w-4" /><a href="/admin/add-employee" className="dark:text-white">Edit</a></div>
                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    </div>
  )
}