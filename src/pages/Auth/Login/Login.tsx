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
import { Eye, Lock, Mail, Siren } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import { Link } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox"
import InputWithIcon from "@/components/common/InputWithIcon"
import * as z from 'zod'
import { loginSchema } from '../../../schemas/auth.schema';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
export default function Login() {
  const email = "sohilawahed@gmail.com";

  const subject = encodeURIComponent("Support Request");

  const body = encodeURIComponent(`
          Hello Super Admin,
          I need help with: I want new account to join with your team.
          Name: 
          Email:
          Thank you.`);

  type LoginSchemaData = z.infer<typeof loginSchema>

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginSchemaData) => {
    console.log(data)
  }
  return (
    <Card className="w-full sm:max-w-md rounded-xl px-4 py-8 bg-card shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="logo capitalize text-primary flex items-center gap-3 select-none">
            <Siren size={28} />
            <span className=' text-lg lg:text-xl font-semibold tracking-wide'>vigilant pharma</span>
          </CardTitle>
          <LanguageBtn />
        </div>
        <CardDescription className="text-muted-foreground">
          <span className="block text-secondary-foreground text-xl lg:text-2xl mb-2 font-semibold">Login</span>
          Please enter your credentials to access your workspce
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field aria-invalid={!!errors.email}>
              <FieldLabel htmlFor="email" className="text-foreground font-semibold">Email Address</FieldLabel>
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
                <span className="text-foreground font-semibold">Password</span>
                <Link to={'/auth/forget-password'} className="text-primary font-medium">ForgotPassword?</Link>
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
                Remember me for 30 days
              </FieldLabel>
            </Field>
          </FieldGroup>
          <Field>
            <Button type="submit" className="mt-4 py-5 text-sm font-medium rounded-md hover:bg-hover-primary cursor-pointer">
              Login
            </Button>
          </Field>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="">Don't have an account? <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="text-primary font-medium cursor-pointer underline-offset-4 hover:underline transition-all">Contact Administrator</a></p>
      </CardFooter>
    </Card>
  )
}
