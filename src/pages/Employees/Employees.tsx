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

const employeesStatistics = [
  {
    label: "Total Employees",
    value: mockEmployeesStatistics.data.totalEmployees,
    icon: Users,
    bg: "bg-violet-100",
    text: "text-violet-600",
  },
  {
    label: "Active Employees",
    value: mockEmployeesStatistics.data.activeEmployees,
    icon: UserCheck,
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    label: "Inactive Employees",
    value: mockEmployeesStatistics.data.inactiveEmployees,
    icon: UserX,
    bg: "bg-slate-100",
    text: "text-slate-600",
  },
  {
    label: "Join This Month",
    value: mockEmployeesStatistics.data.joinThisMonth,
    icon: Clock,
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
];

export default function Employees() {

  const { i18n } = useTranslation()
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
      <GenericTable columns={getEmployeeColumns(i18n.language)} data={employees}
        hasNextPage={hasNextPage} currentPage={currentPage} onNext={onNext} onPrevious={onPrevious} limit={limit} setLimit={setLimit} />
    </div>
  )
}
