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
import { Eye, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { toast } from "@/components/ui/use-toast";
import { ModalForm } from "@/components/ModalForm";
import { ConfigDrivenTable } from "@/components/ConfigDrivenTable";

interface Employee {
  _id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isActive: boolean;
  status: string;
  createdAt?: string;
}

const initialValues: Employee = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  status: "active",
  isActive: false,
};

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [openForm, setopenForm] = useState(false);
  const [editKey, setEditKey] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<any>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [viewValues, setViewValues] = useState<Employee | null>(null);

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
    const employee = employees.find((e) => e._id === editKey);
    setEditValues(() => ({
      ...employee,
      status: employee?.isActive ? "active" : "inactive",
    }));
    setopenForm(true);
  }, [editKey, employees]);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/employees?page=1&limit=50");
      const result = await response.json();
      if (response.ok) {
        setEmployees(result.data);
      } else {
        toast({ title: "Failed to fetch employees", variant: "destructive" });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string | null) => {
    setEditKey((p) => (p === id ? null : id));
  };

  const handleView = (id: string) => {
    const employee = employees.find((e) => e._id === id);
    if (employee) {
      setViewValues({
        ...employee,
        status: employee.isActive ? "active" : "inactive",
      });
      setViewOpen(true);
    }
  };


  const updateEmployee = async (values: Record<string, any>) => {
    const body = { ...values, isActive: values.status === "active" };
    try {
      const response = await fetch("/api/employees", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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
        toast({
          title: "Update failed",
          description: error.message || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update employee",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      render: (_: any, row: { firstName: any; lastName: any }) =>
        `${row.firstName} ${row.lastName}`,
    },
    {
      title: "DOB",
      dataIndex: "dob",
      render: (dob: string | undefined) =>
        dob ? new Date(dob).toLocaleDateString() : "-",
    },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (status: boolean) => (
        <Badge className={`text-white ${status ? "bg-green-600" : "bg-red-600"}`}>
          {status ? "ACTIVE" : "INACTIVE"}
        </Badge>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (id: any) => (
        <>
          <Button variant="ghost" size="sm" onClick={() => handleView(id)}>
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" onClick={() => handleEdit(id)} size="sm">
            <Pencil className="h-4 w-4" />
          </Button>
        </>
      ),
    }

  ];

  const filteredEmployees = employees
    .filter((e) =>
      `${e.firstName} ${e.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((e) => {
      if (!e.createdAt) return false;
      const date = new Date(e.createdAt);
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const y = String(date.getFullYear());
      return (
        (!selectedMonth || m === selectedMonth) &&
        (!selectedYear || y === selectedYear)
      );
    });

  const uniqueYears = [
    ...new Set(
      employees
        .map((e) => (e.createdAt ? new Date(e.createdAt).getFullYear().toString() : ""))
        .filter((y) => y !== "")
    ),
  ];
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
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border rounded p-2"
            >
              <option value="">All Months</option>
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border rounded p-2"
            >
              <option value="">All Years</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="max-w-sm">
          <Input
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="rounded-md border">
          <ConfigDrivenTable
            columnStructure={columns}
            currentPage={0}
            totalDocs={0}
            totalPages={0}
            onPageChange={function (_page: number): void {
              throw new Error("Function not implemented.");
            }}
            sourceData={filteredEmployees}
          />

          <ModalForm
            open={openForm}
            onOpenChange={setopenForm}
            title={editKey ? "Edit Employee" : "Add Employee"}
            initialValues={editValues ? editValues : initialValues}
            columns={2}
            fields={[
              { name: "firstName", label: "First name", type: "text" },
              { name: "lastName", label: "Last name", type: "text" },
              { name: "phone", label: "Phone", type: "number" },
              { name: "email", label: "Email", type: "text" },
              { name: "dateOfJoining", label: "Date of Joining", type: "date" },
              { name: "dob", label: "Date of Birth", type: "date" },
              { name: "dateOfResigning", label: "Date of Resigning", type: "date" },
              {
                name: "status",
                label: "Status",
                type: "radio",
                options: [
                  { label: "Inactive", value: "inactive" },
                  { label: "active", value: "active" },
                ],
                radioProps: { variant: "row" },
              },
            ]}
            onReset={() => setopenForm(false)}
            onSubmit={updateEmployee}
          />
          <ModalForm
            open={viewOpen}
            onOpenChange={setViewOpen}
            title="View Employee"
            initialValues={viewValues || initialValues}
            columns={2}
            fields={[
              { name: "firstName", label: "First name", type: "text", disabled: true },
              { name: "lastName", label: "Last name", type: "text", disabled: true },
              { name: "phone", label: "Phone", type: "number", disabled: true },
              { name: "email", label: "Email", type: "text", disabled: true },
              { name: "dateOfJoining", label: "Date of Joining", type: "date", disabled: true },
              { name: "dob", label: "Date of Birth", type: "date", disabled: true },
              { name: "dateOfResigning", label: "Date of Resigning", type: "date", disabled: true },
              {
                name: "status",
                label: "Status",
                type: "radio",
                disabled: true, 
                options: [
                  { label: "Inactive", value: "inactive" },
                  { label: "active", value: "active" },
                ],
                radioProps: { variant: "row" },
              },
            ]}

            onReset={() => setViewOpen(false)}
            onSubmit={() => { }}
          />

        </div>
      </div>
    </div>
  );
}





// "use client";

// import { useEffect, useState } from "react";
// import { Eye, Pencil } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// import { toast } from "@/components/ui/use-toast";
// import { ModalForm } from "@/components/ModalForm";
// import { ConfigDrivenTable } from "@/components/ConfigDrivenTable";

// interface Employee {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
//   isActive: boolean;
//   status: string;
//   dob?: string;
//   createdAt?: string;
// }

// const initialValues: Partial<Employee> = {
//   firstName: "",
//   lastName: "",
//   phone: "",
//   email: "",
//   status: "active",
//   isActive: true,
// };

// export default function EmployeesPage() {
//   // Data and pagination state
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [page, setPage] = useState(1); // API page is 1-based
//   const [limit] = useState(50);
//   const [totalDocs, setTotalDocs] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);

//   // Filters and search
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");

//   // Modal & editing
//   const [editKey, setEditKey] = useState<string | null>(null);
//   const [editValues, setEditValues] = useState<Partial<Employee> | null>(null);
//   const [openForm, setOpenForm] = useState(false);

//   // Initialize default month/year to current if you want
//   useEffect(() => {
//     const now = new Date();
//     setSelectedMonth(String(now.getMonth() + 1).padStart(2, "0"));
//     setSelectedYear(String(now.getFullYear()));
//   }, []);

//   // Fetch employees whenever page, search, or filters change
//   useEffect(() => {
//     fetchEmployees();
//   }, [page, searchTerm, selectedMonth, selectedYear]);

//   // Fetch employees function
//   async function fetchEmployees() {
//     try {
//       const params = new URLSearchParams();
//       params.append("page", page.toString());
//       params.append("limit", limit.toString());
//       if (searchTerm.trim() !== "") params.append("search", searchTerm);
//       if (selectedMonth) params.append("month", selectedMonth);
//       if (selectedYear) params.append("year", selectedYear);

//       const res = await fetch(`/api/employees?${params.toString()}`);
//       const json = await res.json();

//       if (!res.ok) {
//         toast({ title: "Error fetching employees", variant: "destructive" });
//         return;
//       }

//       // Expecting { data, totalDocs, totalPages }
//       setEmployees(json.data || []);
//       setTotalDocs(json.totalDocs || 0);
//       setTotalPages(json.totalPages || 1);
//     } catch (error) {
//       toast({
//         title: "Network error",
//         description: "Failed to fetch employees",
//         variant: "destructive",
//       });
//     }
//   }

//   // When user clicks edit, open modal with employee data
//   useEffect(() => {
//     if (editKey) {
//       const emp = employees.find((e) => e._id === editKey);
//       if (emp) {
//         setEditValues({
//           ...emp,
//           status: emp.isActive ? "active" : "inactive",
//         });
//         setOpenForm(true);
//       }
//     } else {
//       setEditValues(null);
//       setOpenForm(false);
//     }
//   }, [editKey, employees]);

//   // Handle employee update submission
//   async function updateEmployee(values: Partial<Employee>) {
//     try {
//       const body = {
//         ...values,
//         isActive: values.status === "active",
//       };
//       const res = await fetch("/api/employees", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       if (!res.ok) {
//         const err = await res.json();
//         toast({
//           title: "Update failed",
//           description: err.message || "Unknown error",
//           variant: "destructive",
//         });
//         return;
//       }
//       toast({ title: "Employee updated successfully" });
//       fetchEmployees();
//       setEditKey(null);
//     } catch {
//       toast({
//         title: "Error",
//         description: "Could not update employee",
//         variant: "destructive",
//       });
//     }
//   }

//   // Table columns for ConfigDrivenTable
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "firstName",
//       render: (_: any, row: Employee) => `${row.firstName} ${row.lastName}`,
//     },
//     {
//       title: "DOB",
//       dataIndex: "dob",
//       render: (dob: string | undefined) =>
//         dob ? new Date(dob).toLocaleDateString() : "-",
//     },
//     {
//       title: "Status",
//       dataIndex: "isActive",
//       render: (isActive: boolean) => (
//         <Badge className={isActive ? "bg-green-600 text-white" : "bg-red-600 text-white"}>
//           {isActive ? "ACTIVE" : "INACTIVE"}
//         </Badge>
//       ),
//     },
//     {
//       title: "Actions",
//       dataIndex: "_id",
//       render: (id: string) => (
//         <>
//           <Button variant="ghost" size="sm" aria-label="View">
//             <Eye className="h-4 w-4" />
//           </Button>
//           <Button variant="ghost" size="sm" onClick={() => setEditKey(id)} aria-label="Edit">
//             <Pencil className="h-4 w-4" />
//           </Button>
//         </>
//       ),
//     },
//   ];

//   // Month and Year options for filtering
//   const months = [
//     { value: "", label: "All Months" },
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

//   // Extract unique years from employees' createdAt for year filter
//   const uniqueYears = Array.from(
//     new Set(
//       employees
//         .map((e) => (e.createdAt ? new Date(e.createdAt).getFullYear() : null))
//         .filter(Boolean)
//     )
//   ).sort();

//   return (
//     <div className="flex-1 space-y-4">
//       <Breadcrumb pageName="Manage Employee" />
//       <div className="p-4 md:p-8 pt-6 bg-white dark:bg-gray-800 space-y-4">
//         <div className="flex justify-between flex-wrap gap-4">
//           <h2 className="text-3xl font-bold">Manage Employees & Track</h2>
//           <div className="flex gap-2 items-center">
//             <select
//               value={selectedMonth}
//               onChange={(e) => {
//                 setPage(1);
//                 setSelectedMonth(e.target.value);
//               }}
//               className="border rounded p-2"
//             >
//               {months.map(({ value, label }) => (
//                 <option key={value} value={value}>
//                   {label}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={selectedYear}
//               onChange={(e) => {
//                 setPage(1);
//                 setSelectedYear(e.target.value);
//               }}
//               className="border rounded p-2"
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

//         <div className="max-w-sm">
//           <Input
//             placeholder="Search employees..."
//             value={searchTerm}
//             onChange={(e) => {
//               setPage(1);
//               setSearchTerm(e.target.value);
//             }}
//           />
//         </div>

//         <div className="rounded-md border">
//           <ConfigDrivenTable
//             columnStructure={columns}
//             sourceData={employees}
//             totalDocs={totalDocs}
//             totalPages={totalPages}
//             currentPage={page - 1} // Assuming ConfigDrivenTable is zero-based
//             onPageChange={(newPage) => setPage(newPage + 1)}
//           />
//         </div>

//         {/* Modal Form for editing */}
//         <ModalForm
//           open={openForm}
//           onOpenChange={(open) => {
//             if (!open) {
//               setEditKey(null);
//               setOpenForm(false);
//             }
//           }}
//           title="Edit Employee"
//           initialValues={editValues || initialValues}
//           columns={2}
//           fields={[
//             { name: "firstName", label: "First name", type: "text" },
//             { name: "lastName", label: "Last name", type: "text" },
//             { name: "phone", label: "Phone", type: "text" },
//             { name: "email", label: "Email", type: "email" },
//             { name: "dob", label: "Date of Birth", type: "date" },
//             {
//               name: "status",
//               label: "Status",
//               type: "radio",
//               options: [
//                 { label: "Active", value: "active" },
//                 { label: "Inactive", value: "inactive" },
//               ],
//               radioProps: { variant: "row" },
//             },
//           ]}
//           onReset={() => {
//             setEditKey(null);
//             setOpenForm(false);
//           }}
//           onSubmit={updateEmployee}
//         />
//       </div>
//     </div>
//   );
// }

