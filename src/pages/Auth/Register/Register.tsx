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
import { Link } from "react-router-dom"
import { Eye, Lock, Mail, Siren, User } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import InputWithIcon from "@/components/common/InputWithIcon"
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth.schema"

export default function Register() {

  type RegisterFormData = z.infer<typeof registerSchema>

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = (data: RegisterFormData) => {

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
          <span className="block text-secondary-foreground text-xl lg:text-2xl mb-2 font-semibold">Register</span>
          Please enter your credentials to access your workspce
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field aria-invalid={!!errors.username}>
              <FieldLabel htmlFor="username" className="text-foreground font-semibold ">
                Username
              </FieldLabel>
              <InputWithIcon
                startIcon={<User size={18} />}
                id="username"
                type="text"
                placeholder="Your username"
                {...register('username')}
              />
              {errors.username &&
                <FieldError errors={[errors.username]} />
              }

            </Field>

            <Field aria-invalid={!!errors.email}>
              <FieldLabel htmlFor="email" className="text-foreground font-semibold">
                Email Address
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

            <div className="grid grid-cols-2 gap-4">
              <Field aria-invalid={!!errors.password}>
                <FieldLabel htmlFor="password" className="text-foreground font-semibold">
                  Password
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
              <Field aria-invalid={!!errors.confirmPassword}>
                <FieldLabel htmlFor="confirmPassword" className="text-foreground font-semibold">
                  Confirm Password
                </FieldLabel>
                <InputWithIcon
                  startIcon={<Lock size={18} />}
                  endIcon={<Eye size={18} />}
                  id="confirmPassword" type="password" placeholder="••••••••"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword &&
                  <FieldError errors={[errors.confirmPassword]} />
                }
              </Field>
            </div>
          </FieldGroup>
          <Field>
            <Button type="submit" className="mt-4 py-5 text-sm font-medium rounded-md hover:bg-hover-primary cursor-pointer">
              Register
            </Button>
          </Field>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="">Already have an account? <Link to={'/auth/login'} className="text-primary font-medium cursor-pointer underline-offset-4 hover:underline transition-all ">Login</Link></p>
      </CardFooter>
    </Card>
  )
}

