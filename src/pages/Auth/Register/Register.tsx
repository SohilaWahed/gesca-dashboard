import { Button } from "@/components/ui/button"
import {
  Field,
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
import { Eye, Lock, Mail, Siren, User } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import InputWithIcon from "@/components/common/InputWithIcon"
import { Checkbox } from "@/components/ui/checkbox"

export default function Register() {

  const anchorCss = `text-primary font-medium cursor-pointer underline-offset-4 hover:underline transition-all`

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
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="userName" className="text-foreground">User Name</FieldLabel>
              <InputWithIcon
                startIcon={<User size={18} />}
                id="userName" type="text" placeholder="Your Name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email" className="text-foreground">Email Address</FieldLabel>
              <InputWithIcon
                startIcon={<Mail size={18} />}
                id="email" type="email" placeholder="john@example.com"
              />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="password">
                  Password
                </FieldLabel>
                <InputWithIcon
                  startIcon={<Lock size={18} />}
                  endIcon={<Eye size={18} />}
                  id="password" type="password" placeholder="••••••••"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>
                <InputWithIcon
                  startIcon={<Lock size={18} />}
                  endIcon={<Eye size={18} />}
                  id="confirmPassword" type="password" placeholder="••••••••"
                />
              </Field>
            </div>
            <Field orientation="horizontal">
              <Checkbox id="policyAndServices" />
              <FieldLabel
                htmlFor="policyAndServices"
                className="font-normal"
              >
                I agree to the <a className={anchorCss}>Terms of Services</a> and <a className={anchorCss}>Privacy Policy</a>
              </FieldLabel>
            </Field>
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

