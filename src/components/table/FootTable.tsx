import type { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface FootTableProps {
    hasNextPage: boolean
    currentPage: number
    onNext: () => void
    onPrevious: () => void
    limit: number
    setLimit: Dispatch<SetStateAction<number>>
}

export default function FootTable({
    hasNextPage,
    currentPage,
    onNext,
    onPrevious,
    limit,
    setLimit,
}: FootTableProps) {

    return (
        <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-3">

            <Select
                value={String(limit)}
                onValueChange={(value) => setLimit(Number(value))}

            >
                <SelectTrigger className="w-20 rounded-md">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent className='rounded-md'>
                    
                    <SelectGroup>
                        {Array.from({ length: 5 }).map((_, index) => {
                            const value = (index + 1) * 10
                            return (
                                <SelectItem
                                    key={value}
                                    value={String(value)}
                                >
                                    {value}
                                </SelectItem>
                            )
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <div className="flex items-center gap-2">

                <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 0}
                    onClick={onPrevious}
                    className='rounded-md px-4 py-1 cursor-pointer'
                >
                    Previous
                </Button>

                <span className="min-w-8 text-center text-sm font-medium">
                    {currentPage + 1}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    disabled={!hasNextPage}
                    onClick={onNext}
                    className='rounded-md px-4 py-1 cursor-pointer'
                >
                    Next
                </Button>

            </div>

        </div>
    )
}