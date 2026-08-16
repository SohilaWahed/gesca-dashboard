import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { TableColumn } from "@/types/table.type"


export default function HeadTable<T>({ columns }: { columns: TableColumn<T>[] }) {
  return <>
    <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40 text-start">

                {columns.map((column) => (
                    <TableHead
                        key={column.id}
                        className="h-12 whitespace-nowrap px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                        {column.label}
                    </TableHead>
                ))}

            </TableRow>
        </TableHeader>
  </>
}
