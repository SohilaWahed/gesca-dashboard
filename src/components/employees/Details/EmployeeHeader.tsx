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


export default function EmployeeHeader() {

    const { i18n } = useTranslation()
    const { loggedUser } = useAuth()
    const isAdmin = loggedUser?.role === 'Admin'

    return (
        <header className='flex justify-between items-center gap-4'>
            <div className="flex-1">
                <h2 className='text-2xl lg:text-3xl font-bold pb-2'>Employees</h2>
                <p className='text-sm text-muted-foreground'>View and manage employees in the system.</p>
            </div>
            <div className="flex items-center justify-center gap-4">
                <Button size="sm" variant="outline" className="p-5 rounded-md">
                    <Link to={'/employees'} className="flex gap-2 items-center">
                        {i18n.language === 'en' ? <ChevronLeft /> : <ChevronRight />}
                        <span className="hidden sm:block">Back to Employees</span>
                    </Link>
                </Button>
                {isAdmin && <DropdownMenu>
                    <DropdownMenuTrigger >
                        <Button size="sm" className='bg-primary rounded-md text-sm text-white p-5 flex items-center gap-2' aria-label="Employee actions">
                            <Settings size={18} /><span className="hidden sm:block">Actions</span> <ChevronDown size={18} className="hidden sm:block"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-md w-38">
                        <DropdownMenuGroup>
                            <DropdownMenuItem><Pencil size={18} />Edit Employee</DropdownMenuItem>
                            <DropdownMenuItem><RotateCcwKey size={18} /> Reset Password</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500"><SquareX size={18} /> Delete Employee</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu >}
            </div>

        </header>
    )
}
