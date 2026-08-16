import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import { Loader2, Mail, Siren } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import InputWithIcon from "@/components/common/InputWithIcon"
import { ForgotPasswordSchema } from "@/schemas/auth.schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslation } from "react-i18next"
import { getErrorMsg } from "@/utils/getErrorMsg"
import { forgotPassword } from "@/apis/auth.api"
import { toast } from "sonner"
import { useState } from "react"
import type { ForgotPasswordPayload } from "@/types/auth.types"


export default function ForgotPassword() {

  const navigate = useNavigate()
  const { t } = useTranslation(['forgotPassword', 'common', 'login'])
    const [isLoading, setIsLoading] = useState(false)
  

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordPayload>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(ForgotPasswordSchema)
  })

  const onSubmit = async (data: ForgotPasswordPayload) => {

    try {
      setIsLoading(true)
      await forgotPassword(data)
      toast.success("Password reset link sent");
      navigate(`/auth/check-email?email=${encodeURIComponent(data.email)}`)
    } catch (error) {
      toast.error(getErrorMsg(error));
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
          <span className="block text-secondary-foreground text-xl lg:text-2xl mb-2 font-semibold">{t("forgotPassword:forgot_your_password")}</span>
          {t("forgotPassword:credientails")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email" className="text-foreground font-semibold">{t("login:email")}</FieldLabel>
              <InputWithIcon
                startIcon={<Mail size={18} />}
                id="email"
                type="email"
                placeholder={t("forgotPassword:enter_email")}
                {...register('email')}
              />
              {errors.email && <FieldError errors={[errors.email]} />}
            </Field>
          </FieldGroup>
          <Field>
            <Button type="submit" disabled={isLoading} className="mt-4 py-5 text-sm font-medium rounded-md hover:bg-hover-primary cursor-pointer">
             {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
              {t("forgotPassword:send_link")}
            </Button>
          </Field>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center border-none pt-0">
        <Link to={'/auth/login'} className="text-primary text-sm font-medium cursor-pointer">{t("forgotPassword:back_login")}</Link>
      </CardFooter>
    </Card>
  )
}

