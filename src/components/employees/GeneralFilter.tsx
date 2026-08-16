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
                    Filters
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
                            Filters
                        </h3>

                        <p className="text-xs text-muted-foreground">
                            Refine the employee list
                        </p>
                    </div>


                    {/* ROLE */}

                    <FilterGroup title="Role">

                        {roleOptions
                            .filter((role) => role.value !== "")
                            .map((role) => (

                                <CheckboxItem
                                    key={role.value}
                                    label={role.label}
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

                    <FilterGroup title="Status">

                        {statusOptions
                            .filter((status) => status.value !== "")
                            .map((status) => (

                                <CheckboxItem
                                    key={status.value}
                                    label={status.label}
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

                    <FilterGroup title="Sort By">

                        {sortOptions.map((sort) => (

                            <CheckboxItem
                                key={sort.value}
                                label={sort.label}
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
                            Reset
                        </Button>

                        <Button onClick={handleApply}>
                            Apply
                        </Button>

                    </div>

                </div>

            </PopoverContent>

        </Popover>
    );
}
