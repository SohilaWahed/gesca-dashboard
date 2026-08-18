import { DeleteEmployeeApi } from "@/apis/employees.api"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import type { Employee, EmployeeDetails } from "@/types/employees.types"
import { getErrorMsg } from "@/utils/getErrorMsg"
import { Loader2, TriangleAlert } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface DeleteEmployeeDialogProps {
  isDelete: boolean,
  setIsDelete: (isDelete: boolean) => void,
  employee: Employee | EmployeeDetails | null
}
export default function DeleteEmployeeDialog({ isDelete, setIsDelete, employee }: DeleteEmployeeDialogProps) {

   const { t } = useTranslation("employees");
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    if (!employee) return
    try {
      setIsLoading(true)
      await DeleteEmployeeApi(employee.id)
      toast.success("Employee Deleted successfully");
      setIsDelete(false)
    } catch (error) {
      getErrorMsg(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isDelete} onOpenChange={setIsDelete}>
      <DialogContent className="rounded-md">

        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <TriangleAlert size={20} />
            </div>

            <div>
            <DialogTitle>
            {t("delete_employee.title")}
          </DialogTitle>

          <DialogDescription>
            {t("delete_employee.description", {
              name: `${employee?.firstName} ${employee?.lastName}`,
            })}
          </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
         {t("delete_employee.warning")}
        </p>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            disabled={isLoading}
            onClick={() => setIsDelete(false)}
            className="rounded-md"
          >
            {t("delete_employee.cancel")}
          </Button>

          <Button
            type="button"
            variant="destructive"
            disabled={isLoading}
            onClick={handleDelete}
            className="rounded-md"
          >
            {isLoading && (
              <Loader2 className="mr-2 size-4 animate-spin" />
            )}
            {t("delete_employee.delete")}
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
