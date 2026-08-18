import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import type { Employee, EmployeeDetails } from "@/types/employees.types"
import { useForm } from "react-hook-form"
import { getErrorMsg } from "@/utils/getErrorMsg"
import { useTranslation } from "react-i18next"
import InputWithIcon from "@/components/common/InputWithIcon"
import { Eye, EyeOff, Loader2, Lock } from "lucide-react"
import { resetEmpPasswordApi } from "@/apis/employees.api"
import type { ResetPasswordPayload } from "@/types/auth.types"
import { useEffect, useState } from "react"
import { resetPasswordSchema } from "@/schemas/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

interface ResetPasswordDialogProps {
  isReset: boolean,
  setIsReset: (isReset: boolean) => void,
  employee: Employee | EmployeeDetails | null
}
export default function ResetPasswordDialog({ isReset, setIsReset, employee }: ResetPasswordDialogProps) {

  const { t } = useTranslation("employees")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)


  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    },
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = async (data: ResetPasswordPayload) => {
    if (!employee) return
    try {
      setIsLoading(true)
      await resetEmpPasswordApi(employee.id, data.password)
      toast.success(t("reset_password.success"));
      setIsReset(false)
    } catch (error) {
      getErrorMsg(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isReset) {
      reset({
        password: '',
        confirmPassword: '',
      })
    }
  }, [isReset, reset])

  return (
    <Dialog open={isReset} onOpenChange={setIsReset}>
      <DialogContent className="rounded-md">
        <DialogHeader>
          <DialogTitle>
            {t("reset_password.title")}
          </DialogTitle>

          <DialogDescription>
            {t("reset_password.description", {
              name: `${employee?.firstName} ${employee?.lastName}`
            })}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Password */}
            <Field aria-invalid={!!errors.password}>
              <FieldLabel htmlFor="password" className="text-foreground font-semibold">
                {t("register:password")}
              </FieldLabel>
              <div className="relative">
                <InputWithIcon
                  startIcon={<Lock size={18} />}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="absolute inset-e-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={
                    showPassword
                      ? t("create_employee.hide_password")
                      : t("create_employee.show_password")
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
              {errors.password &&
                <FieldError errors={[errors.password]} />
              }
            </Field>
            {/* Confirm Password */}
            <Field>
              <FieldLabel htmlFor="confirmPassword" className="text-foreground font-semibold">
                {t("reset_password.confirm_password")}
              </FieldLabel>
              <div className="relative">
                <InputWithIcon
                  startIcon={<Lock size={18} />}
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register('confirmPassword')}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="absolute inset-e-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={
                    showPassword
                      ? t("create_employee.hide_password")
                      : t("create_employee.show_password")
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
             
              {errors.confirmPassword && <FieldError errors={[errors.confirmPassword]} />}
            </Field>
          </FieldGroup>

          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsReset(false)}
              className="rounded-md"
            >
              {t("reset_password.cancel")}
            </Button>
            <Button type="submit" disabled={isLoading}
              className="rounded-md">
              {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
              {t("reset_password.reset")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
