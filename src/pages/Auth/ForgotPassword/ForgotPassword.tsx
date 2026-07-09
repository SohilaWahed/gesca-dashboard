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
import { Link } from "react-router-dom"
import { Mail, Siren } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import InputWithIcon from "@/components/common/InputWithIcon"
import * as z from 'zod'
import { ForgotPasswordSchema } from "@/schemas/auth.schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslation } from "react-i18next"


export default function ForgotPassword() {

  const { t } = useTranslation(['forgotPassword', 'common' , 'login'])

  type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordData>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(ForgotPasswordSchema)
  })

  const onSubmit = (data: ForgotPasswordData) => {
    console.log(data)
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
            <Button type="submit" className="mt-4 py-5 text-sm font-medium rounded-md hover:bg-hover-primary cursor-pointer">
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

