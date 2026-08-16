import { getEmployeeDetailsApi } from "@/apis/employees.api"
import EmployeeCard from "@/components/employees/Details/EmployeeCard"
import EmployeeHeader from "@/components/employees/Details/EmployeeHeader"
import TeamCard from "@/components/employees/Details/TeamCard"
import { cn } from "@/lib/utils"
import { mockEmployeeDetails, mockEmployeeStatistics } from "@/mock/employees/employees"

import type { EmployeeDetails } from "@/types/employees.types"
import { getErrorMsg } from "@/utils/getErrorMsg"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import StatisticCard from "@/components/common/StatisticCard"

import {
    CheckCircle2,
    MapPin,
    FileText,
} from "lucide-react"

const employeeStatistics = [
    {
        label: "Total Tasks",
        value: mockEmployeeStatistics.data.totalTasks,
        icon: CheckCircle2,
        bg: "bg-blue-100",
        text: "text-blue-600",
    },
    {
        label: "Visits Completed",
        value: mockEmployeeStatistics.data.visitsCompleted,
        icon: MapPin,
        bg: "bg-violet-100",
        text: "text-violet-600",
    },
    {
        label: "Reports Submitted",
        value: mockEmployeeStatistics.data.reportsSubmitted,
        icon: FileText,
        bg: "bg-green-100",
        text: "text-green-600",
    },
]

export default function EmployeeDetails() {
  const { id } = useParams()
  const [employee, setEmployee] = useState<EmployeeDetails>(mockEmployeeDetails.data)

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const res = await getEmployeeDetailsApi(id)
        setEmployee(res.data)
      } catch (error) {
        getErrorMsg(error)
      }
    }
    getEmployee()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <EmployeeHeader />
      <StatisticCard statistics={employeeStatistics} columns={3} />
      <div className={cn('grid gap-4', employee.teamMembership ? 'lg:grid-cols-2' : "")}>
        <EmployeeCard employee={employee} />
        {employee.teamMembership && <TeamCard teamMembership={employee.teamMembership} />}
      </div>
    </div>

  )
}
