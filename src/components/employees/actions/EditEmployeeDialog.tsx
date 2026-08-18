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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import type { Employee, EmployeeDetails, UpdateEmployeePayload } from "@/types/employees.types";
import InputWithIcon from "@/components/common/InputWithIcon";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Phone, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { updateEmployeeSchema } from "@/schemas/employees.schema";
import { useEffect, useState } from "react";
import { getErrorMsg } from "@/utils/getErrorMsg";
import { updateEmployeeApi } from "@/apis/employees.api";
import { toast } from "sonner";


interface EditEmployeeDialogProps {
    isEdit: boolean
    employee: EmployeeDetails | Employee | null;
    setIsEdit: (isEdit: boolean) => void;
}
type Role = {
    label: string,
    value: string
}

const roles: Role[] = [
    { label: 'Manager', value: 'Manager' },
    { label: 'Sales Employee', value: 'SalesEmployee' }]


export default function EditEmployeeDialog({ isEdit, employee, setIsEdit }: EditEmployeeDialogProps) {

    const { t } = useTranslation(["employees", "register"])
    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstName: employee?.firstName,
            lastName: employee?.lastName,
            phone: employee?.phone ?? '',
            status: employee?.status,
            roleName: employee?.role?.name
        },
        resolver: zodResolver(updateEmployeeSchema)
    })

    const onSubmit = async (data: UpdateEmployeePayload) => {
        if (!employee) return
        try {
            setIsLoading(true)
            await updateEmployeeApi(employee.id, data)
            toast.success(t("employees:edit_employee.success"));
            setIsEdit(false)
        } catch (error) {
            getErrorMsg(error)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {

        if (!employee) return

        reset({
            firstName: employee.firstName,
            lastName: employee.lastName,
            phone: employee.phone ?? "",
            status: employee.status,
            roleName: employee.role?.name,
        })

    }, [employee, reset])

    return (
        <Dialog open={isEdit} onOpenChange={setIsEdit}>
            <DialogContent className="rounded-md">
                <DialogHeader>
                    <DialogTitle>
                        {t("employees:edit_employee.title")}
                    </DialogTitle>

                    <DialogDescription>
                        {t("employees:edit_employee.description")}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldGroup>

                        <Field aria-invalid={!!errors.firstName}>
                            <FieldLabel htmlFor="username" className="text-foreground font-semibold ">
                                {t("register:first_name")}
                            </FieldLabel>
                            <InputWithIcon
                                startIcon={<User size={18} />}
                                id="firstName"
                                type="text"
                                placeholder={t("register:first_placholder")}
                                {...register('firstName')}
                            />
                            {errors.firstName &&
                                <FieldError errors={[errors.firstName]} />
                            }

                        </Field>

                        <Field aria-invalid={!!errors.lastName}>
                            <FieldLabel htmlFor="lastName" className="text-foreground font-semibold ">
                                {t("register:last_name")}
                            </FieldLabel>
                            <InputWithIcon
                                startIcon={<User size={18} />}
                                id="lastName"
                                type="text"
                                placeholder={t("register:last_placholder")}
                                {...register('lastName')}
                            />
                            {errors.lastName &&
                                <FieldError errors={[errors.lastName]} />
                            }

                        </Field>

                        <div className="grid grid-cols-2 gap-4">
                            <Field aria-invalid={!!errors.phone}>
                                <FieldLabel htmlFor="phone" className="text-foreground font-semibold">
                                    {t("register:phone")}
                                </FieldLabel>
                                <InputWithIcon
                                    startIcon={<Phone size={18} />}
                                    id="phone" type="phone" placeholder="••••••••"
                                    {...register('phone')}
                                />
                                {errors.phone &&
                                    <FieldError errors={[errors.phone]} />
                                }
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="roleName" className="text-foreground font-semibold">
                                    {t("register:role")}
                                </FieldLabel>
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
                            </Field>
                        </div>
                    </FieldGroup>
                    <DialogFooter className="pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsEdit(false)}
                            className="rounded-md"
                        >
                            {t("employees:edit_employee.cancel")}
                        </Button>
                        <Button type="submit" disabled={isLoading} className="rounded-md">
                            {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                            {t("employees:edit_employee.save_changes")}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
