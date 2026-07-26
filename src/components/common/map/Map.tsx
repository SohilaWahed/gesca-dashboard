import {
    MapContainer,
    TileLayer,
    Tooltip,
    Popup,
    Marker,
} from "react-leaflet";
import type { LiveMonitoring } from '@/types/liveMonitoring.type';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { liveMonitoringConfig } from '@/mock/liveMonitoring';
import createMarker from "@/services/createMarker";
import avatarName from "@/services/avatarName";

type Props = React.ComponentProps<typeof MapContainer> & {
    employees: LiveMonitoring[]
}
export default function Map({ employees, ...config }: Props) {
    return (
        <MapContainer {...config}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
            />
            {employees.map((emp) => {
                
                const span = liveMonitoringConfig[emp.status].span
                const color = liveMonitoringConfig[emp.status].color

                return <Marker key={emp.id}
                    position={[emp.location.lat, emp.location.lng]}
                    icon={createMarker(emp.status)}
                >
                    <Tooltip className="flex flex-col">
                        <span className="font-semibold">{emp.employeeName}</span>
                        <span className="text-muted-foreground">{emp.location.name}</span>
                    </Tooltip>
                    <Popup>
                        <div className="flex items-center gap-2 mb-2">
                            <Avatar>
                                <AvatarImage src={emp.avatar} />
                                <AvatarFallback>{avatarName(emp.employeeName)}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1 text-xs">
                                <span className='font-semibold my-0'>{emp.employeeName}</span>
                                <span className='text-muted-foreground'>Medical Representative</span>
                                <span className={cn('text-xs my-0 flex gap-2 items-center rounded-md', color)}>
                                    <span className={cn('w-2 h-2 block rounded-full', span)}></span>
                                    At {emp.location.type}
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 items-start mb-2'>
                            <MapPin size={16} />
                            <div className="flex flex-col">
                                <span className='text-xs font-semibold'>{emp.location.name}</span>
                                <span className='text-xs  font-semibold'>{emp.location.address}</span>
                            </div>
                        </div>
                        <span className="flex items-center gap-2 text-muted-foreground text-xs"><Clock size={16} /> {emp.lastUpdate}</span>
                    </Popup>
                </Marker>
            })}
        </MapContainer>
    )
}
