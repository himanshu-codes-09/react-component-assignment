import React from "react";

export interface Column {
  key: string;
  label: string;
}

export interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-4 py-2 border-b text-left">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col.key} className="px-4 py-2 border-b">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
