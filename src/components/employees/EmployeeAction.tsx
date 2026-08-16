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

export default function EmployeeAction({ employee }: { employee: Employee }) {
    const { loggedUser } = useAuth()
    const isAdmin = loggedUser?.role === 'Admin'
    return (
        <>
            {isAdmin ? <div className="flex items-center justify-center">
                <DropdownMenu>
                <DropdownMenuTrigger >
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
                        <DropdownMenuItem className="flex items-center gap-2"> <Link to={`/employees/${employee.id}`} className="flex items-center justify-center gap-2"><Eye size={18}/>View Account</Link></DropdownMenuItem>
                        <DropdownMenuItem><Pencil size={18}/>Edit Employee</DropdownMenuItem>
                        <DropdownMenuItem><RotateCcwKey size={18}/> Reset Password</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500"><SquareX size={18}/> Delete</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu >
            </div> : <Link to={`/employees/${employee.id}`} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-all duration-200"><Eye size={18} /></Link>}
        </>
    )
}
