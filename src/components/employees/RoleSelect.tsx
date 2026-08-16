import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel
} from "@/components/ui/select";
import type { EmployeeRole } from '@/types/employees.types';
import { roleOptions } from '@/constants/employee.constants';


interface RoleSelectProps {
    filter: EmployeeRole,
    onChange: (value: EmployeeRole) => void;
}

export default function RoleSelect({ filter, onChange }: RoleSelectProps) {
    return (
            <Select onValueChange={onChange} value={filter} >
                <SelectTrigger className="w-full max-w-48 rounded-md">
                    <SelectValue placeholder={roleOptions[0].label}/>
                </SelectTrigger>
                <SelectContent className="rounded-md" position="popper">
                    <SelectGroup>
                        <SelectLabel>Select Role</SelectLabel>
                        {roleOptions.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                                {role.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
    )
}
