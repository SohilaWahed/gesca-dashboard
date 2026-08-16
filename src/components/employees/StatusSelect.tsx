import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel
} from "@/components/ui/select";
import { statusOptions } from "@/constants/employee.constants";
import type { EmployeeStatus } from '@/types/employees.types';

interface StatusSelectProps {
    filter: EmployeeStatus,
    onChange: (value: EmployeeStatus) => void
}

export default function StatusSelect({ filter, onChange }: StatusSelectProps) {
    return (
        <Select onValueChange={onChange} value={filter}>
            <SelectTrigger className="w-full max-w-48 rounded-md">
                <SelectValue placeholder={statusOptions[0].label} />
            </SelectTrigger>
            <SelectContent className="rounded-md" position="popper">
                <SelectGroup>
                    <SelectLabel>Select Status</SelectLabel>
                    {statusOptions.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                            {status.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
