import { cn } from "@/lib/utils";
import { formatNumber } from "@/services/formatNumberLang";
import type { MonitoringStatConfig, MonitoringStats } from "@/types/liveMonitoring.type";
import { useTranslation } from 'react-i18next';



export type Props = { data: MonitoringStats, config: MonitoringStatConfig }

export default function MonitoringCard({ data , config}: Props) {


    const {t , i18n}= useTranslation("monitoring")
    const Icon = config.icon
    
    return (
        <div className='bg-card cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-xl border p-2 flex gap-2 items-center'>
            <span className={cn("icon w-9 h-9 rounded-full flex items-center justify-center",config.bg)}>       
                <Icon className={config.color}  size={18}/>
            </span>
            <div className="content flex flex-col">
                <span className="font-semibold">{formatNumber(data.value , i18n.language)}</span>
                <span className="text-muted-foreground text-sm">{t(`stats.${data.title}`)}</span>
            </div>
        </div>
    )
}
