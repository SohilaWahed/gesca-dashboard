import SearchInput from "../common/SearchInput";
import type { EmployeeFilters } from "@/types/employees.types";
import RoleSelect from "./RoleSelect";
import StatusSelect from "./StatusSelect";
import GlobalFilter from "./GeneralFilter";
import { initialEmployeeFilters } from "@/constants/employee.constants";
import { useAuth } from "@/hooks/useAuth";
import SortSelected from "./SortSelected";
import { useTranslation } from "react-i18next";

interface EmployeesFiltersProps {
    filters: EmployeeFilters
    onFiltersChange: (newFilters: EmployeeFilters) => void
}
export default function EmployeesFilters({ filters, onFiltersChange }: EmployeesFiltersProps) {
   
    const { t } = useTranslation("employees")
    const { loggedUser } = useAuth()
    const isAdmin = loggedUser?.role === 'Admin'

    return (

        <div className="rounded-xl border bg-card p-4">
            <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center justify-between">
                <div className="lg:me-24">
                    <SearchInput
                        text={t("page.search_placeholder")}
                        search={filters.search}
                        onChange={(value) =>
                            onFiltersChange({
                                ...filters,
                                search: value
                            })
                        }
                    />
                </div>
                <div className="flex gap-3 justify-between flex-1">
                    {isAdmin && <RoleSelect
                        filter={filters.role}
                        onChange={(value) =>
                            onFiltersChange({
                                ...filters,
                                role: value,
                                status: ''
                            })} />}
                    <StatusSelect
                        filter={filters.status}
                        onChange={(value) =>
                            onFiltersChange({
                                ...filters,
                                status: value,
                                role: ''
                            })} />
                    {!isAdmin && <SortSelected
                        sort={filters.sort}
                        onChange={(value) =>
                            onFiltersChange({
                                ...filters,
                                sort: value
                            })} />}
                    {isAdmin && <GlobalFilter
                        filters={filters}
                        onApply={(globalFilter) =>
                            onFiltersChange({
                                ...filters,
                                ...globalFilter
                            })}
                        onReset={() => onFiltersChange({ ...initialEmployeeFilters })}
                    />
                    }
                </div>

            </div>

        </div>

    )
}

