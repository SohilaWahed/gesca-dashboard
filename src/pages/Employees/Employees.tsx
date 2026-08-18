import EmployeesFilters from "@/components/employees/EmployeesFilters";
import EmployeesHeader from "@/components/employees/EmployeesHeader";
import GenericTable from "@/components/table/GenericTable";
import { initialEmployeeFilters } from "@/constants/employee.constants";
import { useEffect, useState } from "react";
import { mockEmployees, mockEmployeesStatistics } from "@/mock/employees/employees";
import { getEmployeeColumns } from "@/components/table/columns/employee.columns";
import { useTranslation } from "react-i18next";
import type { Employee, EmployeeFilters } from "@/types/employees.types";
import { getEmployeesApi } from "@/apis/employees.api";
import { getErrorMsg } from "@/utils/getErrorMsg";
import {
  Users,
  UserCheck,
  UserX,
  Clock,
} from "lucide-react";
import StatisticCard from "@/components/common/StatisticCard";
import EditEmployeeDialog from "@/components/employees/actions/EditEmployeeDialog";
import ResetPasswordDialog from "@/components/employees/actions/ResetPasswordDialog";
import DeleteEmployeeDialog from "@/components/employees/actions/DeleteEmployeeDialog";



export default function Employees() {

  const { t, i18n } = useTranslation("employees")

  const employeesStatistics = [
    {
      label: t("statistics.total"),
      value: mockEmployeesStatistics.data.totalEmployees,
      icon: Users,
      bg: "bg-violet-100",
      text: "text-violet-600",
    },
    {
      label: t("statistics.active"),
      value: mockEmployeesStatistics.data.activeEmployees,
      icon: UserCheck,
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      label: t("statistics.inactive"),
      value: mockEmployeesStatistics.data.inactiveEmployees,
      icon: UserX,
      bg: "bg-slate-100",
      text: "text-slate-600",
    },
    {
      label: t("statistics.join_this_month"),
      value: mockEmployeesStatistics.data.joinThisMonth,
      icon: Clock,
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
  ]

  const [filters, setFilters] = useState(initialEmployeeFilters)
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees.data)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [limit, setLimit] = useState<number>(10)
  const [cursorHistory, setCursorHistory] = useState<(string | null)[]>([null])
  const [hasNextPage, setHasNextPage] = useState<boolean>(false)

  const onNext = () => {
    if (hasNextPage) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const onFiltersChange = (newFilters: EmployeeFilters) => {
    setFilters({ ...newFilters })
    setCursorHistory([null])
    setCurrentPage(0)
  }

  const [isEdit, setIsEdit] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const onEdit = (employee: Employee) => {
    setIsEdit(true)
    setSelectedEmployee(employee)
  }

  const [isReset, setIsReset] = useState(false)
  const onReset = (employee: Employee) => {
    setIsReset(true)
    setSelectedEmployee(employee)
  }

  const [isDelete, setIsDelete] = useState(false)
  const onDelete = (employee: Employee) => {
    setIsDelete(true)
    setSelectedEmployee(employee)
  }

  useEffect(() => {
    const getEmployees = async () => {
      const params = {
        ...filters,
        limit,
        cursor: cursorHistory[currentPage] ?? undefined
      }
      try {
        const res = await getEmployeesApi(params)
        setEmployees(res.data.data)
        const nextCursor = res.data.pagination.nextCursor
        setHasNextPage(nextCursor !== null)
        if (nextCursor) {
          setCursorHistory((prev) => {
            const history = [...prev]
            // handled when choose prev don't add new cursor , that will ignore repeat  
            history[currentPage + 1] = nextCursor
            return history
          })
        }
      } catch (error) {
        getErrorMsg(error)
      }
    }
    getEmployees()
  }, [currentPage])


  return (
    <div className="flex flex-col gap-4">
      <EmployeesHeader />
      <StatisticCard statistics={employeesStatistics} columns={4} />
      <EmployeesFilters filters={filters} onFiltersChange={onFiltersChange} />
      <GenericTable columns={getEmployeeColumns({ t, language: i18n.language, onEdit, onReset, onDelete })} data={employees}
        hasNextPage={hasNextPage} currentPage={currentPage} onNext={onNext} onPrevious={onPrevious} limit={limit} setLimit={setLimit} />
      <EditEmployeeDialog isEdit={isEdit} setIsEdit={setIsEdit} employee={selectedEmployee} />
      <ResetPasswordDialog isReset={isReset} setIsReset={setIsReset} employee={selectedEmployee} />
      <DeleteEmployeeDialog isDelete={isDelete} setIsDelete={setIsDelete} employee={selectedEmployee} />
    </div>
  )
}
