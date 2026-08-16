import { forgotPassword } from "@/apis/auth.api"
import LanguageBtn from "@/components/common/LanguageBtn"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getErrorMsg } from "@/utils/getErrorMsg"
import { Loader2, Mail, Siren } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import { toast } from "sonner"

export default function CheckEmail() {

  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const { t } = useTranslation(["forgotPassword", "common"])

  const [isLoading, setIsLoading] = useState(false)

   if (!email) {
    return <Navigate to="/auth/forgot-password" replace />;
  }

  const handleSendAgain = async () => {
    try {
      setIsLoading(true);
      const res = await forgotPassword({ email });
      toast.success(res.message);
    } catch (error) {
      toast.error(getErrorMsg(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full sm:max-w-md rounded-xl px-4 py-8 bg-card shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="logo capitalize text-primary flex items-center gap-3 select-none">
            <Siren size={28} />
            <span className="text-lg lg:text-xl font-semibold tracking-wide">
              {t("common:logo")}
            </span>
          </CardTitle>

          <LanguageBtn />
        </div>

        <CardDescription className="space-y-4">
          <div className="flex justify-center">
            <Mail className="text-primary" size={28} />
          </div>

          <h2 className="text-center text-2xl font-semibold text-foreground">
            {t("forgotPassword:check_email")}
          </h2>

          <p className="text-center">
            {t("forgotPassword:check_email_desc")}
          </p>

          <p className="text-center font-medium text-primary break-all">
            {email}
          </p>

          <p className="text-center text-sm">
            {t("forgotPassword:link_expire")}
          </p>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-center text-sm text-muted-foreground">
          {t("forgotPassword:not_received")}
        </p>

        <Button
          variant="outline"
          className="w-full cursor-pointer"
          disabled={isLoading}
          onClick={handleSendAgain}
        >
          {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
          {t("forgotPassword:send_again")}
        </Button>
      </CardContent>

      <CardFooter className="justify-center">
        <Link
          to="/auth/login"
          className="text-primary text-sm font-medium hover:underline"
        >
          {t("forgotPassword:back_login")}
        </Link>
      </CardFooter>
    </Card>
  )
}
