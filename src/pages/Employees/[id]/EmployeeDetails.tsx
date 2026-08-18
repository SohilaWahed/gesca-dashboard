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
import EditEmployeeDialog from "@/components/employees/actions/EditEmployeeDialog"
import ResetPasswordDialog from "@/components/employees/actions/ResetPasswordDialog"
import DeleteEmployeeDialog from "@/components/employees/actions/DeleteEmployeeDialog"
import { useTranslation } from "react-i18next"



export default function EmployeeDetails() {

  const {t} = useTranslation("employees")
  const employeeStatistics = [
  {
     label: t("statistics.tasks"),
    value: mockEmployeeStatistics.data.totalTasks,
    icon: CheckCircle2,
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    label: t("statistics.visits"),
    value: mockEmployeeStatistics.data.visitsCompleted,
    icon: MapPin,
    bg: "bg-violet-100",
    text: "text-violet-600",
  },
  {
   label: t("statistics.reports"),
    value: mockEmployeeStatistics.data.reportsSubmitted,
    icon: FileText,
    bg: "bg-green-100",
    text: "text-green-600",
  },
]
  const { id } = useParams()
  const [employee, setEmployee] = useState<EmployeeDetails>(mockEmployeeDetails.data)
  const [isEdit, setIsEdit] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [isDelete, setIsDelete] = useState(false)

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
  }, [id])

  return (
    <div className="flex flex-col gap-4">
      <EmployeeHeader setIsEdit={setIsEdit} setIsReset={setIsReset} setIsDelete={setIsDelete} />
      <StatisticCard statistics={employeeStatistics} columns={3} />
      <div className={cn('grid gap-4', employee.teamMembership ? 'lg:grid-cols-2' : "")}>
        <EmployeeCard employee={employee} />
        {employee.teamMembership && <TeamCard teamMembership={employee.teamMembership} />}
      </div>
      <EditEmployeeDialog isEdit={isEdit} employee={employee} setIsEdit={setIsEdit} />
      <ResetPasswordDialog isReset={isReset} setIsReset={setIsReset} employee={employee} />
      <DeleteEmployeeDialog isDelete={isDelete} setIsDelete={setIsDelete} employee={employee} />
    </div>
  )
}
