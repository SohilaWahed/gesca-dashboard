import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { ReactNode } from "react"

type Props = {
    headers: string[],
    children: ReactNode
}

export default function DataTable({ headers, children }: Props) {
    return (
        <Table className="overflow-y-hidden border-separate border-spacing-y-1">
            <TableHeader>
                <TableRow>
                    {headers.map((header) => (
                        <TableHead key={header} className="text-muted-foreground text-start">
                            {header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                    {children}
            </TableBody>
        </Table>
    )
}
