import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { liveMonitoringConfig } from "@/mock/liveMonitoring";
import avatarName from "@/services/avatarName";
import type { LiveMonitoring } from "@/types/liveMonitoring.type";


export default function MonitoringEmpCard({ emp }: { emp: LiveMonitoring }) {
    const Icon = liveMonitoringConfig[emp.status].icon
    const span = liveMonitoringConfig[emp.status].span
    const color = liveMonitoringConfig[emp.status].color
    return (
        <div className="flex justify-between items-start gap-4 border-b border-border py-4">
           <div className="flex items-start gap-4"> <Avatar>
                <AvatarImage src={emp.avatar} />
                <AvatarFallback>{avatarName(emp.employeeName)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 text-xs">
                <p className='font-semibold my-0 text-sm'>{emp.employeeName}</p>
                <span className={cn('text-xs my-0 flex gap-2 items-center rounded-md', color)}>
                    <span className={cn('w-2 h-2 block rounded-full', span)}></span>
                    At {emp.location.type}
                </span>
                <p className="text-muted-foreground font-semibold">{emp.location.name}, {emp.location.address}</p>
                <span className="text-muted-foreground">{emp.lastUpdate}</span>
            </div></div>
            <Icon size={20} className={color}/>
        </div>
    )
}
