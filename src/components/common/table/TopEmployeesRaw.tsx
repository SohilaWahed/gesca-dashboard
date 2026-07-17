import { TableCell, TableRow } from '@/components/ui/table';
import type { Employee } from '@/types/employee.type';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react';
export default function TopEmployeesRaw({ employee, index }: { employee: Employee, index: number }) {
    const stars = Array.from({ length: (Math.floor(employee.score / 10) / 2) })
    return (
        <TableRow>
            <TableCell>
                <span className='bg-secondary text-secondary-foreground font-semibold w-8 h-8 rounded-full flex items-center justify-center'>{index + 1}</span>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={employee.name} />
                        <AvatarFallback className='text-sm'>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className='font-semibold'>{employee.name}</p>
                        <span className='text-muted-foreground'>{employee.role}</span>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <span className='text-muted-foreground'>{employee.completedVisits} Visits</span>
            </TableCell>
            <TableCell>
                <span className='flex items-center gap-1'>{stars.map((_, index) => <Star key={index} className=' text-yellow-300 fill-yellow-300' size={14} />)}</span>
            </TableCell>
        </TableRow>
    )
}
