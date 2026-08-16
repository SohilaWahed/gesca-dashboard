import {
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import type { TableColumn } from "@/types/table.type"

interface RowsTableProps<T> {
  columns: TableColumn<T>[],
  data: T[]
}
export default function RowsTable<T>({ columns, data }: RowsTableProps<T>) {

  return <TableBody className="overflow-x-auto">
    {data.map((emp,index) =>
      <TableRow key={index}>
        {columns.map((col) => <TableCell> {col.render(emp)}</TableCell>)}
      </TableRow>
    )}
  </TableBody>
}
