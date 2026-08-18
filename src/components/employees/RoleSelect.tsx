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
import { useTranslation } from "react-i18next";


interface RoleSelectProps {
    filter: EmployeeRole,
    onChange: (value: EmployeeRole) => void;
}

export default function RoleSelect({ filter, onChange }: RoleSelectProps) {
       const { t } = useTranslation("employees")
   
    return (
            <Select onValueChange={onChange}
            value={filter}
        >
            <SelectTrigger className="w-full max-w-48 rounded-md">
                <SelectValue placeholder={t("filters.select_role")} />
            </SelectTrigger>

            <SelectContent className="rounded-md" position="popper">
                <SelectGroup>
                    <SelectLabel>
                        {t("filters.role")}
                    </SelectLabel>

                    {roleOptions.map((role) => (
                        <SelectItem
                            key={role.value}
                            value={role.value}
                        >
                            {role.value === ""
                                ? t("filters.all")
                                : t(
                                    role.value === "Manager"
                                        ? "roles.manager"
                                        : "roles.sales_employee"
                                )}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
