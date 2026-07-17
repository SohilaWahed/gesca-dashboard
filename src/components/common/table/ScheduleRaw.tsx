import type { Employee } from '@/types/employee.type'
import { TableRow, TableCell } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from '@/lib/utils'
import { liveMonitoringConfig } from '@/mock/liveMonitoring'
import { Badge } from "@/components/ui/badge"
import useFormatter from '@/hooks/useFormatter'

export default function ScheduleRaw({ employee }: { employee: Employee }) {
    
const format = useFormatter()

    return (
        <TableRow className='shadow-sm'>

            <TableCell>
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={employee.name} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className='font-semibold'>{employee.name}</p>
                        <span className='text-muted-foreground'>{employee.role}</span>
                    </div>
                </div>
            </TableCell>

            <TableCell>
                <Badge className={cn('flex items-center gap-2 rounded-md px-2 justify-center text-xs' , liveMonitoringConfig[employee.status].color , liveMonitoringConfig[employee.status].bg)}>
                    <span className={cn('h-2 w-2 rounded-full', liveMonitoringConfig[employee.status].span)}></span>
                    {liveMonitoringConfig[employee.status].label}
                </Badge>
            </TableCell>

            <TableCell>
                <div>
                    <p className='font-semibold'>{employee.currentLocation.name}</p>
                    <span className='text-muted-foreground'>{employee.currentLocation.city}</span>
                </div>
            </TableCell>

            <TableCell>

                {format.number(employee.completedVisits)} / {format.number(employee.totalVisits)}

            </TableCell>

        </TableRow>
    )
}
