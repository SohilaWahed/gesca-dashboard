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
import { Mail, Siren } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import InputWithIcon from "@/components/common/InputWithIcon"


export default function ForgetPassword() {

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
          <span className="block text-secondary-foreground text-xl lg:text-2xl mb-2 font-semibold">Forgot your password?</span>
          Enter the email address associated with your vigilant pharma account and we'll send you a link to reset your password.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email" className="text-foreground">Email Address</FieldLabel>
              <InputWithIcon
                startIcon={<Mail size={18} />}
                id="email" type="email" placeholder="Enter your email"
              />
            </Field>
          </FieldGroup>
          <Field>
            <Button type="submit" className="mt-4 py-5 text-sm font-medium rounded-md hover:bg-hover-primary cursor-pointer">
             Send Reset Link
            </Button>
          </Field>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center border-none pt-0">
      <Link to={'/auth/login'} className="text-primary text-sm font-medium cursor-pointer">Back to Login</Link>
      </CardFooter>
    </Card>
  )
}

