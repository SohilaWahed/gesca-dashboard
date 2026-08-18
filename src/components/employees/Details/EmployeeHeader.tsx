import { useAuth } from "@/hooks/useAuth"
import { Button } from "../../ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronLeft, ChevronRight, Pencil, RotateCcwKey, Settings, SquareX } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface EmployeeHeaderProps {
    setIsEdit: (isEdit: boolean) => void,
    setIsReset: (isReset: boolean) => void,
    setIsDelete: (isReset: boolean) => void
}

export default function EmployeeHeader({ setIsEdit, setIsReset, setIsDelete }: EmployeeHeaderProps) {

    const { t, i18n } = useTranslation('employees')
    const { loggedUser } = useAuth()
    const isAdmin = loggedUser?.role === 'Admin'

    return (
        <header className='flex justify-between items-center gap-4'>
            <div className="flex-1">
                <h2 className='text-2xl lg:text-3xl font-bold pb-2'>{t('page.title')}</h2>
                <p className='text-sm text-muted-foreground'>{t('page.description')}</p>
            </div>
            <div className="flex items-center justify-center gap-4">
                <Button size="sm" variant="outline" className="p-5 rounded-md">
                    <Link to={'/employees'} className="flex gap-2 items-center">
                        {i18n.language === 'en' ? <ChevronLeft /> : <ChevronRight />}
                        <span className="hidden sm:block"> {t("details.back_to_employees")}</span>
                    </Link>
                </Button>
                {isAdmin && <DropdownMenu>
                    <DropdownMenuTrigger >
                        <Button
                            size="sm"
                            className="flex items-center gap-2 rounded-md bg-primary p-5 text-sm text-white"
                            aria-label={t("details.actions")}
                        >
                            <Settings size={18} />
                            <span className="hidden sm:block">
                                {t("details.actions")}
                            </span>
                            <ChevronDown
                                size={18}
                                className="hidden sm:block"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-md w-38">
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => setIsEdit(true)}><Pencil size={18} /> {t("details.edit_employee")}</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setIsReset(true)}><RotateCcwKey size={18} />  {t("details.reset_password")}</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setIsDelete(true)} className="text-red-500"><SquareX size={18} />  {t("details.delete_employee")}</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu >}
            </div>

        </header>
    )
}
