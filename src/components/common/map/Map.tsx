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
            {employees.map((emp , index) => {
                const bg = liveMonitoringConfig[emp.status].span
                const color = liveMonitoringConfig[emp.status].color
                return <Marker key={index}
                    position={[emp.location.lat, emp.location.lng]}
                    icon={createMarker(emp.status)}
                >
                    <Tooltip>
                        {emp.employeeName}
                        <br />
                        {emp.location.name}
                    </Tooltip>
                    <Popup>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={emp.employeeName} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className='font-semibold my-0'>{emp.employeeName}</p>
                                <span className='text-muted-foreground'>Medical Representative</span>
                                <p className={cn('text-xs my-0 flex gap-2 items-center', color)}>
                                    <span className={cn('w-3 h-3 block rounded-full', bg)}></span>
                                    At {emp.location.type}
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-start '>
                            <MapPin />
                            <div>
                                <span className='text-muted-foreground text-xs'>{emp.location.name}</span>
                                <span className='text-muted-foreground text-xs'>{emp.location.address}</span>
                            </div>
                        </div>
                        <p><Clock /> {emp.lastUpdate}</p>
                    </Popup>
                </Marker>
            })}
        </MapContainer>
    )
}
