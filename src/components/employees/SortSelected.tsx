import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel
} from "@/components/ui/select";
import { sortOptions } from "@/constants/employee.constants";
import type { EmployeeSort } from '@/types/employees.types';
import { useTranslation } from "react-i18next";

interface SortSelectProps {
    sort: EmployeeSort,
    onChange: (value: EmployeeSort) => void
}

export default function SortSelected({ sort, onChange }: SortSelectProps) {

    const { t } = useTranslation("employees")

    return (
        <Select
            onValueChange={onChange}
            value={sort}
        >
            <SelectTrigger className="w-full max-w-48 rounded-md">
                <SelectValue
                    placeholder={t("filters.select_sort")}
                />
            </SelectTrigger>

            <SelectContent
                className="rounded-md"
                position="popper"
            >
                <SelectGroup>

                    <SelectLabel>
                        {t("filters.sort_by")}
                    </SelectLabel>

                    {sortOptions.map((sort) => (
                        <SelectItem
                            key={sort.value}
                            value={sort.value}
                        >
                            {t(`sort.${sort.value}`)}
                        </SelectItem>
                    ))}

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}