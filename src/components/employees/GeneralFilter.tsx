import { SlidersHorizontal } from "lucide-react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { roleOptions, sortOptions, statusOptions } from "@/constants/employee.constants";
import type { EmployeeFilters, EmployeeRole, EmployeeSort, EmployeeStatus } from "@/types/employees.types";
import { useState } from "react";
import CheckboxItem from "../common/CheckboxItem";
import FilterGroup from "../common/FilterGroup";
import { useTranslation } from "react-i18next";

interface GlobalFilterProps {
    filters: EmployeeFilters;
    onApply: (value: EmployeeFilters) => void;
    onReset: () => void;
}

export default function GlobalFilter({
    filters,
    onApply,
    onReset,
}: GlobalFilterProps) {

    const { t } = useTranslation("employees")

    const [localFilters, setLocalFilters] = useState<EmployeeFilters>(filters);

    const handleApply = () => {
        onApply(localFilters);
    };

    const handleReset = () => {

        onReset();
        setLocalFilters({ role: '', sort: 'newest', status: '', search: '' })
    };

    return (
        <Popover >

            <PopoverTrigger asChild>

                <Button
                    variant="outline"
                    className="gap-2 rounded-md"
                >
                    <SlidersHorizontal className="size-4" />
                    {t("filters.global")}
                </Button>

            </PopoverTrigger>


            <PopoverContent
                align="end"
                className="w-50 rounded-md"
            >

                <div className="space-y-6">

                    {/* Header */}

                    <div>
                       <h3 className="font-semibold text-sm">
    {t("filters.global")}
</h3>

<p className="text-xs text-muted-foreground">
    {t("filters.global_description")}
</p>
                    </div>


                    {/* ROLE */}

                    <FilterGroup title={t("filters.role")}>

                        {roleOptions
                            .filter((role) => role.value !== "")
                            .map((role) => (

                                <CheckboxItem
                                    key={role.value}
                                    label={t(`roles.${role.label}`)}
                                    checked={
                                        localFilters.role === role.value
                                    }
                                    onCheckedChange={() => {

                                        setLocalFilters((prev) => ({
                                            ...prev,
                                            role:
                                                prev.role === role.value
                                                    ? ""
                                                    : role.value as EmployeeRole,
                                        }));

                                    }}
                                />

                            ))}

                    </FilterGroup>


                    {/* STATUS */}

                    <FilterGroup title={t("filters.status")}>

                        {statusOptions
                            .filter((status) => status.value !== "")
                            .map((status) => (

                                <CheckboxItem
                                    key={status.value}
                                    label={t(`statuses.${status.label}`)}
                                    checked={
                                        localFilters.status === status.value
                                    }
                                    onCheckedChange={() => {

                                        setLocalFilters((prev) => ({
                                            ...prev,
                                            status:
                                                prev.status === status.value
                                                    ? ""
                                                    : status.value as EmployeeStatus,
                                        }));

                                    }}
                                />

                            ))}

                    </FilterGroup>


                    {/* SORT */}

                    <FilterGroup title={t("filters.sort_by")}>

                        {sortOptions.map((sort) => (

                            <CheckboxItem
                                key={sort.value}
                                label={t(`sort.${sort.label}`)}
                                checked={
                                    localFilters.sort === sort.value
                                }
                                onCheckedChange={() => {

                                    setLocalFilters((prev) => ({
                                        ...prev,
                                        sort:
                                            prev.sort === sort.value
                                                ? "newest"
                                                : sort.value as EmployeeSort,
                                    }));

                                }}
                            />

                        ))}

                    </FilterGroup>


                    {/* ACTIONS */}

                    <div className="flex items-center justify-between border-t pt-4">

                        <Button
                            variant="ghost"
                            onClick={handleReset}
                        >
 {t("filters.reset")}                             
                        </Button>

                        <Button onClick={handleApply} className="rounded-md">
                            {t("filters.apply")}
                        </Button>

                    </div>

                </div>

            </PopoverContent>

        </Popover>
    );
}
