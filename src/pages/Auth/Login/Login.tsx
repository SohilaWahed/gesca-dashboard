import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Eye, Loader2, Lock, Mail, Siren } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import { Link, useNavigate } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox"
import InputWithIcon from "@/components/common/InputWithIcon"
import { loginSchema } from '../../../schemas/auth.schema';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslation } from "react-i18next"
import { login } from "@/apis/auth.api"
import type { LoginPayload, LoginResponse } from "@/types/auth.types"
import { getErrorMsg } from "@/utils/getErrorMsg"
import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { toast } from "sonner"

export default function Login() {

  const navigate = useNavigate()
  const { t } = useTranslation(["login", "common"])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const { loginContext } = useAuth()


  const email = "sohilawahed@gmail.com";

  const subject = encodeURIComponent("Support Request");

  const body = encodeURIComponent(`
          Hello Super Admin,
          I need help with: I want new account to join with your team.
          Name: 
          Email:
          Thank you.`);


  const { register, handleSubmit, formState: { errors } } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (payload: LoginPayload) => {
    try {
      setIsLoading(true)
      const res: LoginResponse = await login(payload)
      loginContext(res)
      toast.success("Login successfully");
      navigate('/')
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
          <span className="block text-secondary-foreground text-xl lg:text-2xl mb-2 font-semibold">{t("login:login_logo")}</span>
          <p> {t("login:credientails")}</p>
          {errorMsg && <p className="text-red-500 mt-2 text-sm">{errorMsg}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field aria-invalid={!!errors.email}>
              <FieldLabel htmlFor="email" className="text-foreground font-semibold">{t("login:email")}</FieldLabel>
              <InputWithIcon
                startIcon={<Mail size={18} />}
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
              />
              {errors.email && <FieldError errors={[errors.email]} />}
            </Field>
            <Field>
              <FieldLabel htmlFor="password" className="flex items-center justify-between">
                <span className="text-foreground font-semibold">{t("login:password")}</span>
                <Link to={'/auth/forgot-password'} className="text-primary font-medium">{t("login:forgot_password")}</Link>
              </FieldLabel>

              <InputWithIcon
                startIcon={<Lock size={18} />}
                endIcon={<Eye size={18} />}
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && <FieldError errors={[errors.password]} />}
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="keep-login" />
              <FieldLabel
                htmlFor="keep-login"
                className="font-normal"
              >
                {t("login:remember_me")}
              </FieldLabel>
            </Field>
          </FieldGroup>
          <Field>
            <Button type="submit" disabled={isLoading}
             className="mt-4 py-5 text-sm font-medium rounded-md hover:bg-hover-primary cursor-pointer">
               {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
              {t("login:login")}
            </Button>
          </Field>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p>{t("login:donot_have_account")} <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="text-primary font-medium cursor-pointer underline-offset-4 hover:underline transition-all">{t("login:contact_adiminstrator")}</a></p>
      </CardFooter>
    </Card>
  )
}
