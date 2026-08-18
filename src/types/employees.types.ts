import type { createEmployeeSchema, updateEmployeeSchema } from "@/schemas/employees.schema";
import type z from "zod";
import type { UserRole } from "./auth.types";

export type EmployeeRole = ""
    | "Manager"
    | "SalesEmployee";

export type EmployeeStatus = "" | EmpStatus;

export type EmpStatus =
    | "ACTIVE"
    | "INACTIVE"
    | "PENDING_VERIFICATION";

export type EmployeeSort = "newest"
    | "oldest"
    | "az"
    | "za";

export interface EmployeeFilters {
    search: string;
    role: EmployeeRole;
    status: EmployeeStatus;
    sort: EmployeeSort;
}

export interface GetEmployeesParams {
    limit?: number;
    cursor?: string;
    search?: string;
    role?: EmployeeRole;
    status?: EmployeeStatus;
}


export interface EmployeesResponse {

    success: boolean;

    message: string;

    data: Employee[];

    pagination: {
        nextCursor: string | null;
        limit: number;
    }

}

export interface Employee {

    id: string;

    firstName: string;

    lastName: string;

    email: string;

    phone: string | null;

    status: EmpStatus;

    createdAt: string;

    role: {
        id: string;
        name: UserRole;
        description: string | null;
    }

}

export interface EmployeeDetailsResponse {
    success: boolean;
    message: string;
    data: EmployeeDetails;
}

export interface EmployeeDetails {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    status: EmpStatus;
    createdAt: string;
    role: EmployeeRoleDetails | null;
    teamMembership: EmployeeTeamMembership | null;
}


export interface EmployeeRoleDetails {
    id: string;
    name: UserRole;
    description: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface EmployeeTeamMembership {
    id: string;
    teamId: string;
    userId: string;
    joinedAt: string;
    team: EmployeeTeam;
}

export interface EmployeeTeam {
    id: string;
    name: string;
    managerId: string;
    description: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export interface EmployeeStatisticsResponse {
    success: boolean,
    message: string,
    data: EmployeeStatistic
}
export interface EmployeeStatistic {
    totalTasks: number,
    visitsCompleted: number,
    reportsSubmitted: number,
}

export interface EmployeesStatisticsResponse {
    success: boolean,
    message: string,
    data: EmployeesStatistic
}

export interface EmployeesStatistic {
    totalEmployees: number,
    activeEmployees: number,
    inactiveEmployees: number,
    joinThisMonth: number,
}

export type CreateEmployeePayload = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeePayload = z.infer<typeof updateEmployeeSchema>;