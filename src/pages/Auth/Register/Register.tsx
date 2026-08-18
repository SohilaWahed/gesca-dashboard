import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Link, useNavigate } from "react-router-dom"
import { Eye, Loader2, Lock, Mail, Phone, Siren, User } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import InputWithIcon from "@/components/common/InputWithIcon"
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth.schema"
import { useTranslation } from "react-i18next"
import type { RegisterPayload} from "@/types/auth.types"
import { signup } from "@/apis/auth.api"
import { getErrorMsg } from "@/utils/getErrorMsg"
import { useState } from "react"
import { toast } from "sonner"

type Role = {
  label: string,
  value: string
}
const roles: Role[] = [{ label: 'Admin', value: 'Admin' },
{ label: 'Manager', value: 'Manager' },
{ label: 'Sales Employee', value: 'SalesEmployee' }]

export default function Register() {

  const navigate = useNavigate()

  const { t } = useTranslation(["register", "common"])
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const { register, handleSubmit, control, formState: { errors } } = useForm<RegisterPayload>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      role: 'SalesEmployee'
    },
    resolver: zodResolver(registerSchema)
  })


  const onSubmit = async (data: RegisterPayload) => {

    const payload: RegisterPayload = {
      ...data,
      phone: `+2${data.phone}`,
    };

    try {
      setIsLoading(true)
      await signup(payload)
      toast.success("Account created successfully");
      navigate('/auth/login')
    } catch (error) {
      const msg = getErrorMsg(error)
      setErrorMsg(msg)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full sm:max-w-md rounded-xl px-4 py-8 bg-card shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="logo capitalize text-primary flex items-center gap-3 select-none">
            <Siren size={28} />
            <span className=' text-lg lg:text-xl font-semibold tracking-wide'>{t("common:logo")}</span>
          </CardTitle>
          <LanguageBtn />
        </div>
        <CardDescription className="text-muted-foreground">

          <span className="block text-secondary-foreground text-xl lg:text-2xl mb-2 font-semibold">{t("register:create_account")}</span>
          <p> {t("register:credientails")}</p>
          {errorMsg && <p className="text-red-500 mt-2 text-sm">{errorMsg}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field aria-invalid={!!errors.firstName}>
              <FieldLabel htmlFor="firstName" className="text-foreground font-semibold ">
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

            <Field aria-invalid={!!errors.email}>
              <FieldLabel htmlFor="email" className="text-foreground font-semibold">
                {t("register:email")}
              </FieldLabel>
              <InputWithIcon
                startIcon={<Mail size={18} />}
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register('email')}
              />
              {errors.email &&
                <FieldError errors={[errors.email]} />
              }
            </Field>
            <Field aria-invalid={!!errors.password}>
              <FieldLabel htmlFor="password" className="text-foreground font-semibold">
                {t("register:password")}
              </FieldLabel>
              <InputWithIcon
                startIcon={<Lock size={18} />}
                endIcon={<Eye size={18} />}
                id="password" type="password" placeholder="••••••••"
                {...register('password')}
              />
              {errors.password &&
                <FieldError errors={[errors.password]} />
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
                <FieldLabel htmlFor="role" className="text-foreground font-semibold">
                  {t("register:role")}
                </FieldLabel>
                <Controller
                  control={control}
                  name="role"
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

          <Button type="submit" disabled={isLoading} className="w-full mt-4 py-5 text-sm font-medium rounded-md hover:bg-hover-primary cursor-pointer">
             {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
            {t("register:register")}
          </Button>

        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p>{t("register:already_have_account")} <Link to={'/auth/login'} className="text-primary font-medium cursor-pointer underline-offset-4 hover:underline transition-all ">{t("register:login")}</Link></p>
      </CardFooter>
    </Card>
  )
}

