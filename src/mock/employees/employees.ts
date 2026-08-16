import type { EmployeeDetailsResponse, EmployeesResponse, EmployeesStatisticsResponse, EmployeeStatisticsResponse } from "@/types/employees.types";


export const mockEmployees: EmployeesResponse = {
  success: true,
  message: "Employees retrieved successfully",

  pagination: {
    nextCursor: "emp_006",
    limit: 10,
  },

  data: [
    {
      id: "emp_001",

      firstName: "Sohila",
      lastName: "Wahed",

      email: "sohila@gesca.com",

      phone: "+201033870773",

      status: "ACTIVE",

      createdAt: "2026-08-05T10:30:00Z",

      role: {
        id: "role_admin",
        name: "Admin",
        description: "System Administrator",
      },
    },

    {
      id: "emp_002",

      firstName: "Ahmed",
      lastName: "Ali",

      email: "ahmed@gesca.com",

      phone: "+201012345678",

      status: "ACTIVE",

      createdAt: "2026-08-04T09:00:00Z",

      role: {
        id: "role_manager",
        name: "Manager",
        description: "Team Manager",
      },
    },

    {
      id: "emp_003",

      firstName: "Mona",
      lastName: "Ibrahim",

      email: "mona@gesca.com",

      phone: "+201055555555",

      status: "PENDING_VERIFICATION",

      createdAt: "2026-08-03T15:40:00Z",

      role: {
        id: "role_sales",
        name: "SalesEmployee",
        description: "Sales Employee",
      },
    },

    {
      id: "emp_004",

      firstName: "Omar",
      lastName: "Mahmoud",

      email: "omar@gesca.com",

      phone: null,

      status: "INACTIVE",

      createdAt: "2026-08-02T11:20:00Z",

      role: {
        id: "role_sales",
        name: "SalesEmployee",
        description: "Sales Employee",
      },
    },

    {
      id: "emp_005",

      firstName: "Nour",
      lastName: "Khaled",

      email: "nour@gesca.com",

      phone: "+201066666666",

      status: "ACTIVE",

      createdAt: "2026-08-01T14:15:00Z",

      role: {
        id: "role_manager",
        name: "Manager",
        description: "Team Manager",
      },
    },

    {
      id: "emp_006",

      firstName: "Youssef",
      lastName: "Hassan",

      email: "youssef@gesca.com",

      phone: "+201077777777",

      status: "ACTIVE",

      createdAt: "2026-07-30T13:45:00Z",

      role: {
        id: "role_sales",
        name: "SalesEmployee",
        description: "Sales Employee",
      },
    },
  ],
};

export const mockEmployeeDetails: EmployeeDetailsResponse = {
  success: true,
  message: "Employee retrieved successfully",

  data: {
    id: "7f8c9e21-3a42-4b7d-91f5-6c8e2a4b9d10",

    email: "ahmed.hassan@gesca.com",

    firstName: "Ahmed",
    lastName: "Hassan",

    phone: "+201012345678",

    status: "ACTIVE",

    createdAt: "2026-08-05T14:27:34.417Z",

    role: {
      id: "9a3d7c12-8e45-4f61-b2a9-1c6d8e7f3b20",
      name: "SalesEmployee",
      description: "Sales employee role",
      createdAt: "2026-08-01T10:00:00.000Z",
      updatedAt: "2026-08-01T10:00:00.000Z",
    },

    teamMembership: {
      id: "4b7e9c12-6d35-4a81-b2f7-9e3c5d8a1f20",

      teamId: "2d6f8a31-5b47-4c92-a1e8-7f3d9b6c2a10",

      userId: "7f8c9e21-3a42-4b7d-91f5-6c8e2a4b9d10",

      joinedAt: "2026-08-05T15:30:00.000Z",

      team: {
        id: "2d6f8a31-5b47-4c92-a1e8-7f3d9b6c2a10",

        name: "Cairo Sales Team",

        managerId: "292f0990-9bf3-4e41-aac3-f2c4d9fb4d08",

        description: "Sales team responsible for Cairo area",

        isActive: true,

        createdAt: "2026-08-01T09:00:00.000Z",

        updatedAt: "2026-08-05T12:00:00.000Z",

        deletedAt: null,
      },
    },
  },
};

export const mockEmployeeStatistics: EmployeeStatisticsResponse = {
  "success": true,
  "message": "Employee statistics retrieved successfully",
  "data": {
    "totalTasks": 24,
    "visitsCompleted": 18,
    "reportsSubmitted": 12,
  }
}

export const mockEmployeesStatistics: EmployeesStatisticsResponse = {
  "success": true,
  "message": "Employee statistics retrieved successfully",
  "data": {
    "totalEmployees": 24,
    "activeEmployees": 18,
    "inactiveEmployees": 12,
    "joinThisMonth": 4
  }
}
