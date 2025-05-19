// "use client";

// import { useEffect, useState } from "react";
// import { Eye, Pencil } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

// const employees = [
//   { id: "1", name: "Rahul Sharma", status: "Paid", date: "15-05-2025", time: "10:30 AM" },
//   { id: "2", name: "Priya Patel", status: "Not Paid", date: "10-05-2025", time: "09:15 AM" },
//   { id: "3", name: "Amit Kumar", status: "Paid", date: "06-05-2025", time: "11:45 AM" },
//   { id: "4", name: "Neha Singh", status: "Paid", date: "20-05-2025", time: "02:30 PM" },
//   { id: "5", name: "Vikram Malhotra", status: "Not Paid", date: "28-05-2023", time: "03:45 PM" },
//   { id: "6", name: "Ananya Desai", status: "Paid", date: "25-04-2025", time: "10:00 AM" },
//   { id: "7", name: "Rajesh Gupta", status: "Not Paid", date: "06-03-2025", time: "01:15 PM" },
// ];

// export default function EmployeesPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");

//   useEffect(() => {
//     const today = new Date();
//     setSelectedMonth(String(today.getMonth() + 1).padStart(2, "0"));
//     setSelectedYear(String(today.getFullYear()));
//   }, []);

//   const filteredEmployees = employees
//     .filter((employee) =>
//       employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((employee) => {
//       const [day, month, year] = employee.date.split("-");
//       return (
//         (!selectedMonth || month === selectedMonth) &&
//         (!selectedYear || year === selectedYear)
//       );
//     });

//   // For dynamic dropdowns (can be hardcoded if preferred)
//   const uniqueYears = [...new Set(employees.map((e) => e.date.split("-")[2]))];
//   const months = [
//     { value: "01", label: "January" },
//     { value: "02", label: "February" },
//     { value: "03", label: "March" },
//     { value: "04", label: "April" },
//     { value: "05", label: "May" },
//     { value: "06", label: "June" },
//     { value: "07", label: "July" },
//     { value: "08", label: "August" },
//     { value: "09", label: "September" },
//     { value: "10", label: "October" },
//     { value: "11", label: "November" },
//     { value: "12", label: "December" },
//   ];

//   return (
//     <div className="flex-1 space-y-4">
//       <Breadcrumb pageName="Manage Employee" />
//       <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white dark:bg-gray-800">
//         <div className="flex items-center justify-between flex-wrap gap-4">
//           <h2 className="text-3xl font-bold tracking-tight">Manage Employees & Track</h2>
//           <div className="flex gap-2 items-center">
//             <select
//               value={selectedMonth}
//               onChange={(e) => setSelectedMonth(e.target.value)}
//               className="border border-gray-300 rounded p-2"
//             >
//               <option value="">All Months</option>
//               {months.map((m) => (
//                 <option key={m.value} value={m.value}>
//                   {m.label}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//               className="border border-gray-300 rounded p-2"
//             >
//               <option value="">All Years</option>
//               {uniqueYears.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="flex items-center justify-between mt-4">
//           <div className="w-full max-w-sm">
//             <Input
//               placeholder="Search employees..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="rounded-md border">
//           <Table className="dark:bg-gray-800">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Payment Status</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Time</TableHead>
//                 <TableHead className="text-center">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredEmployees.length > 0 ? (
//                 filteredEmployees.map((employee) => (
//                   <TableRow
//                     key={employee.id}
//                     className={
//                       employee.status === "Paid"
//                         ? "bg-green-100 dark:bg-gray-800"
//                         : "bg-red-100 dark:bg-gray-800"
//                     }
//                   >
//                     <TableCell className="font-medium">{employee.name}</TableCell>
//                     <TableCell>
//                       <Badge
//                         className={
//                           employee.status === "Paid"
//                             ? "bg-green-500 text-white"
//                             : "bg-red-500 text-white"
//                         }
//                       >
//                         {employee.status}
//                       </Badge>
//                     </TableCell>
//                     <TableCell>{employee.date}</TableCell>
//                     <TableCell>{employee.time}</TableCell>
//                     <TableCell className="text-right">
//                       <div className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-4">
//                         <div className="flex items-center text-blue-600 hover:text-blue-900 text-sm">
//                           <Eye className="mr-2 h-4 w-4" /> View
//                         </div>
//                         <div className="flex items-center text-gray-600 hover:text-gray-900 text-sm">
//                           <Pencil className="mr-2 h-4 w-4" />
//                           <a href="/admin/add-employee" className="dark:text-white">Edit</a>
//                         </div>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={5} className="text-center p-4 text-gray-500">
//                     No employees found for selected month/year.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { Eye, Pencil, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { toast } from "@/components/ui/use-toast";
import { ModalForm } from "@/components/ModalForm";
import { ConfigDrivenTable } from "@/components/ConfigDrivenTable";
import { title } from "process";
import { Values } from "../dashboard/_components/overview-cards/icons";

interface Employee {
  _id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isActive : boolean;
  status: string;
  createdAt?: string;
}

const initialValues: Employee = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  status: "active",
  isActive: false
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [openForm, setopenForm] = useState(false);
  const [editKey, setEditKey] = useState(null);
  const [editValues, setEditValues] = useState<any>(null);

  useEffect(() => {
    const today = new Date();
    setSelectedMonth(String(today.getMonth() + 1).padStart(2, "0"));
    setSelectedYear(String(today.getFullYear()));
    fetchEmployees();
  }, []);

  useEffect(() => {
    if (!editKey) {
      setEditValues(null);
      setopenForm(false);
      return;
    }
    const employee = employees.find(e => e._id == editKey);
    setEditValues(() => ({ ...employee, status : employee?.isActive ? "active" : "inactive" }));
    setopenForm(true);
  }, [editKey,employees]);


  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/employees?page=1&limit=50");
      const result = await response.json();
      if (response.ok) {
        console.log(result.data)
        setEmployees(result.data);
      } else {
        toast({ title: "Failed to fetch employees", variant: "destructive" });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: null) => {
    setEditKey((p) => {
      if (p == id) {
        return null;
      } else {
        return id;
      }
    })
  }

  const updateEmployee = async (values: Record<string, any>) => {
    const body = {...values, isActive: values.status=="active" ? true : false}
  try {
    const response = await fetch('/api/employees', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      toast({ title: "Employee updated successfully" });
      fetchEmployees(); 
      setopenForm(false); 
      setEditKey(null); 
    } else {
      const error = await response.json();
      toast({ title: "Update failed", description: error.message || "Something went wrong", variant: "destructive" });
    }
  } catch (error) {
    toast({ title: "Error", description: "Failed to update employee", variant: "destructive" });
    console.error(error);
  }
};



  const addEmployee = ()=>{};

  const columns = [
    {
      title: "name",
      dataIndex: "firstName",
      render: (_: any, row: { firstName: any; lastName: any; }) => `${row.firstName} ${row.lastName}`
    },
    {
      title: "dob",
      dataIndex: "dob",
    },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (status: any) => (
        <Badge className={`text-white ${status ? 'bg-green-600' : 'bg-red-600'}`}>
          {status ? 'ACTIVE' : 'INACTIVE'}
        </Badge>
      )

    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id: any) => {
        return <>
          <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
          <Button variant="ghost" onClick={() => handleEdit(id)} size="sm"><Pencil className="h-4 w-4" /></Button>
        </>
      }
    }
  ]

  const filteredEmployees = employees
    .filter((e) =>
      `${e.firstName} ${e.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((e) => {
      const date = new Date(e?.createdAt as string);
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const y = String(date.getFullYear());
      return (
        (!selectedMonth || m === selectedMonth) &&
        (!selectedYear || y === selectedYear)
      );
    });

  const uniqueYears = [...new Set(employees.map((e) => new Date(e?.createdAt as string).getFullYear().toString()))];
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

  return (
    <div className="flex-1 space-y-4">
      <Breadcrumb pageName="Manage Employee" />
      <div className="p-4 md:p-8 pt-6 bg-white dark:bg-gray-800 space-y-4">
        <div className="flex justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-bold">Manage Employees & Track</h2>
          <div className="flex gap-2 items-center">
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="border rounded p-2">
              <option value="">All Months</option>
              {months.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="border rounded p-2">
              <option value="">All Years</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="max-w-sm">
          <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="rounded-md border">
          {/* <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((e) => {
                  const date = new Date(e.createdAt);
                  const formattedDate = date.toLocaleDateString();
                  return (
                    <TableRow key={e._id}>
                      <TableCell>{`${e.firstName} ${e.lastName}`}</TableCell>
                      <TableCell> <Badge className="bg-green-600 text-white">Paid</Badge></TableCell>
                      <TableCell>{formattedDate}</TableCell>
                      <TableCell>
                        {e.email}
                      </TableCell>
                      <TableCell className="text-center space-x-4">
                        <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                        <Button variant="ghost" onClick={() => setopenForm(true)} size="sm"><Pencil className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center p-4 text-gray-500">
                    {loading ? "Loading..." : "No employees found for selected filters."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table> */}

          <ConfigDrivenTable columnStructure={columns} currentPage={0} totalDocs={0} totalPages={0} onPageChange={function (_page: number): void {
            throw new Error("Function not implemented.");
          }} sourceData={employees} />

          <ModalForm
            open={openForm}
            onOpenChange={setopenForm}
            title={editKey ? "editemployee" : "Add Employee"}
            initialValues={editValues ? editValues : initialValues}
            columns={2}
            fields={[
              { name: 'firstName', label: 'First name', type: 'text' },
              { name: 'lastName', label: 'Last name', type: 'text' },
              { name: 'phone', label: 'Phone', type: 'number' },
              { name: 'email', label: 'Email', type: 'text' },
              { name: 'dateOfJoining', label: 'Date of Joining', type: 'date' },
              { name: 'dob', label: 'Date of Birth', type: 'date' },
              { name: 'dateOfResigning', label: 'Date of Resigning', type: 'date' },
              { name: 'status', label: 'Status', type: 'radio', options: [{ label: 'Inactive', value: 'inactive' }, { label: 'active', value: 'active' }], radioProps: { variant: 'row' } },
            ]}

            onReset={() => setopenForm(false)} onSubmit={updateEmployee}          />

        </div>
      </div>
    </div>
  );
}
