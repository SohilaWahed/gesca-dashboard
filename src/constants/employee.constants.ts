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


import type {EmployeeFilters, EmployeeRole, EmployeeSort, EmployeeStatus } from "@/types/employees.types";

export const roleOptions: {
    label: string;
    value: EmployeeRole;
}[] = [
        {
            label: "All Roles",
            value: "",
        },
        {
            label: "Manager",
            value: "Manager",
        },
        {
            label: "Sales Employee",
            value: "SalesEmployee",
        },
    ];

export const statusOptions: {
    label: string;
    value: EmployeeStatus;
}[] = [
        {
            label: "All Status",
            value: "",
        },
        {
            label: "Active",
            value: "ACTIVE",
        },
        {
            label: "Inactive",
            value: "INACTIVE",
        },
        {
            label: "Pending Verification",
            value: "PENDING_VERIFICATION",
        },
    ];

export const sortOptions: {
    label: string;
    value: EmployeeSort;
}[] = [
        {
            label: "Newest",
            value: "newest",
        },
        {
            label: "Oldest",
            value: "oldest",
        },
        {
            label: "Name A-Z",
            value: "az",
        },
        {
            label: "Name Z-A",
            value: "za",
        },
    ];

export const initialEmployeeFilters: EmployeeFilters = {
    search: "",
    role: "",
    status: "",
    sort: "newest",
};

