import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { EllipsisVertical, Eye, Pencil, RotateCcwKey, SquareX } from "lucide-react"
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth';
import type { Employee } from "@/types/employees.types";
import { useTranslation } from "react-i18next";


interface EmployeeActionsProps {
    employee: Employee,
    onEdit: (employee: Employee) => void,
    onReset: (employee: Employee) => void,
    onDelete: (employee: Employee) => void
}

export default function EmployeeActions({ employee, onEdit, onReset, onDelete }: EmployeeActionsProps) {

      const { t } = useTranslation("employees")
    
    const { loggedUser } = useAuth()
    const isAdmin = loggedUser?.role === 'Admin'


    return (
        <>
            {isAdmin ? <div className="flex items-center justify-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-8"
                        >
                            <EllipsisVertical size={18} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-md">
                        <DropdownMenuGroup>
                            <DropdownMenuItem><Link to={`/employees/${employee.id}`} className="flex items-center justify-center gap-2"><Eye size={18} />{t('table.view_account')}</Link></DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onEdit(employee)}><Pencil size={18} />{t('table.edit_employee')}</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onReset(employee)}><RotateCcwKey size={18} /> {t('table.reset_password')}</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onDelete(employee)} className="text-red-500"><SquareX size={18} /> {t('table.delete')}</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu >
            </div> : <Link to={`/employees/${employee.id}`} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-all duration-200"><Eye size={18} /></Link>}
        </>
    )
}
