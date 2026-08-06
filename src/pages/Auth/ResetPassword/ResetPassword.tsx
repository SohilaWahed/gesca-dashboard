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
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Eye, Loader2, Lock, Siren } from "lucide-react"
import LanguageBtn from "@/components/common/LanguageBtn"
import InputWithIcon from "@/components/common/InputWithIcon"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ResetPasswordSchema } from "@/schemas/auth.schema"
import * as z from 'zod'
import { useTranslation } from "react-i18next"
import { resetPassword } from "@/apis/auth.api"
import { useState } from "react"
import { toast } from "sonner"
import { getErrorMsg } from "@/utils/getErrorMsg"

export default function ResetPassword() {

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const { t } = useTranslation(['forgotPassword', 'common'])

    type ResetPasswordData = z.infer<typeof ResetPasswordSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordData>({
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
        resolver: zodResolver(ResetPasswordSchema)
    })

    const onSubmit = async (data: ResetPasswordData) => {
        if (!token) {
            toast.error("Invalid reset link");
            navigate("/auth/forgot-password");
            return;
        }
        try {
            setIsLoading(true)
            await resetPassword(token, data.password)
            toast.success("Password reset successfully");
            navigate("/auth/login");
        } catch (error) {
            toast.error(getErrorMsg(error))
        } finally {
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
                    <span className="block text-secondary-foreground text-xl lg:text-2xl mb-2 font-semibold">{t("forgotPassword:new_password_logo")}</span>
                    {t("forgotPassword:credientails_reset")}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="newPassword" className="text-foreground font-semibold">
                                {t("forgotPassword:new_password")}
                            </FieldLabel>
                            <InputWithIcon
                                startIcon={<Lock size={18} />}
                                endIcon={<Eye size={18} />}
                                id="newPassword"
                                type="password"
                                placeholder="••••••••"
                                {...register('password')}
                            />
                            {errors.password && <FieldError errors={[errors.password]} />}
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="confirmPassword" className="text-foreground font-semibold">
                                {t("forgotPassword:confirm_new_password")}
                            </FieldLabel>
                            <InputWithIcon
                                startIcon={<Lock size={18} />}
                                endIcon={<Eye size={18} />}
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                {...register('confirmPassword')}
                            />
                            {errors.confirmPassword && <FieldError errors={[errors.confirmPassword]} />}
                        </Field>
                    </FieldGroup>
                    <Field>
                        <Button type="submit" disabled={isLoading}
                            className="mt-4 py-5 text-sm font-medium rounded-md hover:bg-hover-primary cursor-pointer">
                            {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                            {t("forgotPassword:reset_password")}
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

