"use client"

import { useState } from "react"
import { Eye, MoreHorizontal, Trash } from "lucide-react"

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

// Sample employee data
const employees = [
  {
    id: "1",
    name: "Rahul Sharma",
    status: "Paid",
    date: "2023-04-15",
    time: "10:30 AM",
  },
  {
    id: "2",
    name: "Priya Patel",
    status: "Not Paid",
    date: "2023-04-10",
    time: "09:15 AM",
  },
  {
    id: "3",
    name: "Amit Kumar",
    status: "Paid",
    date: "2023-04-05",
    time: "11:45 AM",
  },
  {
    id: "4",
    name: "Neha Singh",
    status: "Paid",
    date: "2023-04-01",
    time: "02:30 PM",
  },
  {
    id: "5",
    name: "Vikram Malhotra",
    status: "Not Paid",
    date: "2023-03-28",
    time: "03:45 PM",
  },
  {
    id: "6",
    name: "Ananya Desai",
    status: "Paid",
    date: "2023-03-25",
    time: "10:00 AM",
  },
  {
    id: "7",
    name: "Rajesh Gupta",
    status: "Not Paid",
    date: "2023-03-20",
    time: "01:15 PM",
  },
]

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Manage Employees</h2>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-full max-w-sm">
          <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>
                  <Badge variant={employee.status === "Paid" ? "default" : "destructive"}>{employee.status}</Badge>
                </TableCell>
                <TableCell>{employee.date}</TableCell>
                <TableCell>{employee.time}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
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
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}