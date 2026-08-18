import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  UserRound,
  ShieldCheck,
  Mail,
  Phone,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup
} from "@/components/ui/select"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  createEmployeeSchema,
} from "@/schemas/employees.schema"
import type { CreateEmployeePayload } from "@/types/employees.types"
import { getErrorMsg } from "@/utils/getErrorMsg"
import { toast } from "sonner"
import { createEmployeeApi } from "@/apis/employees.api"
import InputWithIcon from "@/components/common/InputWithIcon"


type Role = {
  label: string,
  value: string
}
const roles: Role[] = [{ label: 'Manager', value: 'Manager' },
{ label: 'Sales Employee', value: 'SalesEmployee' }]

export default function CreateEmployee() {
  const { t, i18n } = useTranslation("employees")
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateEmployeePayload>({
    resolver: zodResolver(createEmployeeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      roleName: "SalesEmployee",
    },
  })


  const onSubmit = async (data: CreateEmployeePayload) => {
    try {
      setIsLoading(true)

      await createEmployeeApi(data)

      toast.success(t("create_employee.success"))

      navigate("/employees")
    } catch (error) {
      getErrorMsg(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">

      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
              {t("create_employee.title")}
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              {t("create_employee.description")}
            </p>
          </div>
        </div>
        <Button size="sm" variant="outline" className="p-5 rounded-md bg-primary text-white">
          <Link to={'/employees'} className="flex gap-2 items-center">
            {i18n.language === 'en' ? <ChevronLeft /> : <ChevronRight />}
            <span className="hidden sm:block"> {t("create_employee.back_to_employees")}</span>
          </Link>
        </Button>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        {/* Personal Information */}
        <Card className="rounded-xl border-border shadow-sm">
          <CardHeader className="border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <UserRound size={20} />
              </div>

              <div>
                <CardTitle className="text-lg">
                  {t("create_employee.personal.title")}
                </CardTitle>

                <CardDescription className="mt-1">
                  {t("create_employee.personal.description")}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="grid gap-5 md:grid-cols-2">
            {/* First Name */}
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium"
              >
                {t("create_employee.fields.first_name")}
                <span className="ms-1 text-destructive">*</span>
              </label>

              <InputWithIcon
                startIcon={<UserRound size={18} />}
                id="firstName"
                placeholder={t(
                  "create_employee.placeholders.first_name"
                )}
                {...register("firstName")}
              />

              {errors.firstName && (
                <p className="text-xs text-destructive">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium"
              >
                {t("create_employee.fields.last_name")}
                <span className="ms-1 text-destructive">*</span>
              </label>

              <InputWithIcon
                startIcon={<UserRound size={18} />}
                id="lastName"
                placeholder={t(
                  "create_employee.placeholders.last_name"
                )}
                {...register("lastName")}
              />

              {errors.lastName && (
                <p className="text-xs text-destructive">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                {t("create_employee.fields.email")}
                <span className="ms-1 text-destructive">*</span>
              </label>

              <InputWithIcon
                startIcon={<Mail size={18} />}
                id="email"
                type="email"
                placeholder={t(
                  "create_employee.placeholders.email"
                )}
                {...register("email")}
              />

              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium"
              >
                {t("create_employee.fields.phone")}
                <span className="ms-1 text-xs font-normal text-muted-foreground">
                  ({t("common.optional")})
                </span>
              </label>


              <InputWithIcon
                startIcon={<Phone size={18} />}
                id="phone"
                type="tel"
                placeholder={t(
                  "create_employee.placeholders.phone"
                )}

                {...register("phone")}
              />

              {errors.phone && (
                <p className="text-xs text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Account & Access */}
        <Card className="rounded-xl border-border shadow-sm">
          <CardHeader className="border-b border-border">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck size={20} />
              </div>

              <div>
                <CardTitle className="text-lg">
                  {t("create_employee.account.title")}
                </CardTitle>

                <CardDescription className="mt-1">
                  {t("create_employee.account.description")}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="grid gap-5 md:grid-cols-2">
            {/* Password */}
            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                {t("create_employee.fields.password")}
                <span className="ms-1 text-destructive">*</span>
              </label>

              <div className="relative">


                <InputWithIcon
                  startIcon={<Lock size={18} />}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t(
                    "create_employee.placeholders.password"
                  )}
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

              {errors.password && (
                <p className="text-xs text-destructive">
                  {errors.password.message}
                </p>
              )}

              <p className="text-xs text-muted-foreground">
                {t("create_employee.password_hint")}
              </p>
            </div>

            {/* Role */}
            <div className="space-y-2 md:max-w-md">
              <label
                htmlFor="role"
                className="text-sm font-medium"
              >
                {t("create_employee.fields.role")}
                <span className="ms-1 text-destructive">*</span>
              </label>

              <Controller
                control={control}
                name="roleName"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="bg-surface text-foreground  py-5 outline-0 placeholder:text-muted-foreground text-sm rounded-md">
                      <SelectValue placeholder={t("register:role_placeholder")} />
                    </SelectTrigger>

                    <SelectContent className="py-2 rounded-md">
                      <SelectGroup>
                        {roles.map((role) => (
                          <SelectItem
                            key={role.value}
                            value={role.value}
                          >
                            {role.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.roleName && (
                <p className="text-xs text-destructive">
                  {errors.roleName.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            disabled={isLoading}
            onClick={() => navigate("/employees")}
            className="h-11 rounded-md px-6"
          >
            {t("create_employee.cancel")}
          </Button>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 rounded-md bg-primary px-6 text-white hover:bg-primary-hover"
          >
            {isLoading
              ? t("create_employee.creating")
              : t("create_employee.submit")}
          </Button>
        </div>
      </form>
    </div>
  )
}