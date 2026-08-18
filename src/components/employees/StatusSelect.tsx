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
import { useTranslation } from "react-i18next";

interface StatusSelectProps {
    filter: EmployeeStatus,
    onChange: (value: EmployeeStatus) => void
}

export default function StatusSelect({ filter, onChange }: StatusSelectProps) {
    
    const { t } = useTranslation("employees")
  
    return (
       <Select
            onValueChange={onChange}
            value={filter}
        >
            <SelectTrigger className="w-full max-w-48 rounded-md">
                <SelectValue placeholder={t("filters.select_status")} />
            </SelectTrigger>

            <SelectContent className="rounded-md" position="popper">
                <SelectGroup>
                    <SelectLabel>
                        {t("filters.status")}
                    </SelectLabel>

                    {statusOptions.map((status) => (
                        <SelectItem
                            key={status.value}
                            value={status.value}
                        >
                            {status.value === ""
                                ? t("statuses.all")
                                : t(
                                    `statuses.${status.value}`
                                )}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
