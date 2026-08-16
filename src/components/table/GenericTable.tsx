import {
    Table,
} from "@/components/ui/table"
import type { TableColumn } from "@/types/table.type";
import HeadTable from "./HeadTable";
import RowsTable from "./RowsTable";
import FootTable from "./FootTable";
import type { SetStateAction } from "react";


interface GenericTableProps<T> {
    columns: TableColumn<T>[]
    data: T[]
    hasNextPage: boolean
    currentPage: number
    onNext: () => void
    onPrevious: () => void
    limit:number,
    setLimit:React.Dispatch<SetStateAction<number>>
}

export default function GenericTable<T>({ columns, data, hasNextPage, currentPage, onNext, onPrevious, limit , setLimit }: GenericTableProps<T>) {

    return (

        <div className="w-full rounded-xl border border-border bg-card overflow-x-auto">

            <div className="w-full min-w-0 overflow-x-auto">
                <Table  className="min-w-225">

                    <HeadTable columns={columns} />

                    <RowsTable
                        columns={columns}
                        data={data}
                    />

                </Table>
            </div>

            <FootTable
                hasNextPage={hasNextPage}
                currentPage={currentPage}
                onNext={onNext}
                onPrevious={onPrevious}
                limit={limit}
                setLimit={setLimit}
            />

        </div>
    )

}
