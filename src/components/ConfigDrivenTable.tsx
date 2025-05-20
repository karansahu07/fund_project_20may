import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Pagination } from "@/components/Pagination";

type ColumnType<T> = {
  title: string;
  dataIndex: keyof T | string;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
  sort?: boolean;
};

type ConfigDrivenTableProps<T> = {
  columnStructure: ColumnType<T>[];
  currentPage: number;
  totalDocs: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange?: (limit: number) => void;
  sourceData: T[];
  pagination?: boolean;
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
};

export function ConfigDrivenTable<T extends { _id?: string | number }>({
  columnStructure,
  currentPage,
  totalDocs,
  totalPages,
  onPageChange,
  onRowsPerPageChange,
  sourceData,
  pagination = true,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 25, 50],
}: ConfigDrivenTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "asc" | "desc" | null;
  }>({ key: null, direction: null });

  const handleSort = (dataIndex: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === dataIndex && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: dataIndex, direction });

    // Optional: hook into your backend API or sort logic
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            {columnStructure.map((col, idx) => (
              <TableHead
                key={idx}
                style={{ width: col.width || "auto", cursor: col.sort ? "pointer" : "default" }}
                onClick={() =>
                  typeof col.dataIndex === "string" && col.sort && handleSort(col.dataIndex)
                }
              >
                {col.title}
                {col.sort &&
                  sortConfig.key === col.dataIndex &&
                  (sortConfig.direction === "asc" ? " ▲" : " ▼")}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sourceData.length > 0 ? (
            sourceData.map((row, rowIdx) => (
              <TableRow key={(row._id as string) ?? rowIdx}>
                {columnStructure.map((col, colIdx) => {
                  const value = typeof col.dataIndex === "string" ? (row as any)[col.dataIndex] : "";
                  return (
                    <TableCell key={colIdx}>
                      {col.render ? col.render(value, row) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columnStructure.length}
                className="text-center p-4 text-gray-500"
              >
                No data found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {pagination && (
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalDocs}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={rowsPerPageOptions}
          />
        </div>
      )}
    </div>
  );
}
