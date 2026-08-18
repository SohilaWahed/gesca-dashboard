export const roleColors = {
    Admin: "bg-red-100 text-red-700 border-red-200",

    Manager: "bg-blue-100 text-blue-700 border-blue-200",

    SalesEmployee: "bg-emerald-100 text-emerald-700 border-emerald-200",
} as const;

export const statusColors = {
    ACTIVE: "bg-green-100 text-green-700 border-green-200",

    INACTIVE: "bg-gray-100 text-gray-700 border-gray-200",

    PENDING_VERIFICATION:
        "bg-orange-100 text-orange-700 border-orange-200",
} as const;


import type { EmployeeFilters, EmployeeRole, EmployeeSort, EmployeeStatus } from "@/types/employees.types";

export const roleOptions: { label: string; value: EmployeeRole; }[] = [
        {
            label: "all",
            value: "",
        },
        {
            label: "manager",
            value: "Manager",
        },
        {
            label: "sales_employee",
            value: "SalesEmployee",
        },
    ];

export const statusOptions: {
    label: string;
    value: EmployeeStatus;
}[] = [
        {
            label: "all",
            value: "",
        },
        {
            label: "active",
            value: "ACTIVE",
        },
        {
            label: "inactive",
            value: "INACTIVE",
        },
        {
            label: "pending_verification",
            value: "PENDING_VERIFICATION",
        },
    ];

export const sortOptions: {
    label: string;
    value: EmployeeSort;
}[] = [
        {
            label: "newest",
            value: "newest",
        },
        {
            label: "oldest",
            value: "oldest",
        },
        {
            label: "name_asc",
            value: "az",
        },
        {
            label: "name_desc",
            value: "za",
        },
    ];

export const initialEmployeeFilters: EmployeeFilters = {
    search: "",
    role: "",
    status: "",
    sort: "newest",
};

