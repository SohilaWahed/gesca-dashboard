import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel
} from "@/components/ui/select";
import { sortOptions, statusOptions } from "@/constants/employee.constants";
import type { EmployeeSort} from '@/types/employees.types';

interface SortSelectProps {
    sort: EmployeeSort,
    onChange: (value: EmployeeSort) => void
}

export default function SortSelected({sort, onChange}:SortSelectProps) {
  return (
    <Select onValueChange={onChange} value={sort}>
            <SelectTrigger className="w-full max-w-48 rounded-md">
                <SelectValue placeholder={statusOptions[0].label} />
            </SelectTrigger>
            <SelectContent className="rounded-md" position="popper">
                <SelectGroup>
                    <SelectLabel>Select Status</SelectLabel>
                    {sortOptions.map((sort) => (
                        <SelectItem key={sort.value} value={sort.value}>
                            {sort.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
  )
}
