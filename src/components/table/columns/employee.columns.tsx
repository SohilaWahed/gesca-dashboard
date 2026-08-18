
import { roleColors, statusColors } from "@/constants/employee.constants"
import { cn } from "@/lib/utils"
import type { Employee } from "@/types/employees.types"
import type { TableColumn } from "@/types/table.type"
import { formatDate } from "@/utils/formatNumberLang"
import { avatarName, getEmployeeFullName } from "@/utils/userName"
import EmployeeActions from "@/components/employees/EmployeeAction"
import type { TFunction } from "i18next"

interface getEmployeeColumnsParams {
    t: TFunction
    language: string,
    onEdit: (employee: Employee) => void,
    onReset: (employee: Employee) => void,
    onDelete: (employee: Employee) => void
}

export const getEmployeeColumns = ({ t, language, onEdit, onReset, onDelete }: getEmployeeColumnsParams): TableColumn<Employee>[] =>
    [
        {
            id: 'employee',
            label: t("table.employee"),
            render: (emp) => {
                const avatar = avatarName(emp.firstName, emp.lastName)
                const name = getEmployeeFullName(
                    emp.firstName,
                    emp.lastName
                )
                return (
                    <div className="flex items-center gap-3">

                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            {avatar}
                        </span>

                        <div className="min-w-0">
                            <p className="truncate font-medium text-foreground">
                                {name}
                            </p>
                        </div>

                    </div>
                )
            },
        },
        {
            id: 'email',
            label: t("table.email"),
            render: (employee) => employee.email,
        },

        {
            id: 'phone',
            label: t("table.phone"),
            render: (employee) => employee.phone,
        },
        {
            id: 'role',
            label: t("table.role"),
            render: (employee) => <>
                <span className={cn('rounded-md px-2.5 py-1 text-xs font-medium', roleColors[employee.role.name])}>
                    {employee.role.name}
                </span>
            </>,
        },

        {
            id: 'status',
            label: t("table.status"),
            render: (employee) => <>
                <div className={cn('rounded-md px-2.5 py-1  inline-flex gap-2 items-center text-xs font-medium', statusColors[employee.status])}>
                    <span className={cn('size-1.5 rounded-full bg-current')}></span>
                    <span>{employee.status} </span>
                </div>
            </>
        },

        {
            id: 'joined',
            label: t("table.joined"),
            render: (employee) => formatDate(employee.createdAt, language),
        },
        {
            id: 'actions',
            label: t("table.actions"),
            render: (employee) => <EmployeeActions employee={employee} onEdit={onEdit} onReset={onReset} onDelete={onDelete} />

        }
    ]