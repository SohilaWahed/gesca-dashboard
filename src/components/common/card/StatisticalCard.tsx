import { MoveDown, MoveUp } from 'lucide-react';
import type { DashboardStats } from "@/types/dashboard.type";
import { useTranslation } from 'react-i18next';
import useFormatter from '@/hooks/useFormatter';


const colors = {
    primary: {
        icon: "text-primary",
        bg: "bg-primary/10",
    },
    success: {
        icon: "text-success",
        bg: "bg-success/10",
    },
    warning: {
        icon: "text-warning",
        bg: "bg-warning/10",
    },
    destructive: {
        icon: "text-destructive",
        bg: "bg-destructive/10",
    },
    info: {
        icon: "text-info",
        bg: "bg-info/10",
    },
};

export default function StatisticalCard({ data }: { data: DashboardStats }) {

    const Icon = data.icon;
    const bg = colors[data.color].bg
    const text = colors[data.color].icon
    const { t, i18n } = useTranslation("dashboard");
    const format = useFormatter()

    return (
        <div className='bg-card cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-xl border p-4 flex justify-between items-start'>

            <div className="content flex flex-col">
                <span className='text-card-foreground font-bold text-xl'>{format.number(data.value)}</span>
                <span className='text-muted-foreground font-semibold uppercase'>{t(`summaryCards.${data.title}`)}</span>
                {data.change && <span className='text-sm font-semibold text-card-foreground'>
                    {data.trend && data.trend == 'up' ? '+' : '-'}{format.number(data.change)} {t(`summaryCards.${data.period}`)}
                </span>}
            </div>
            <div className=' flex flex-col gap-4 items-center'>
                <div className={`icon w-10 h-10 rounded-md flex justify-center items-center ${bg} ${text}`}>
                    <Icon size={20} />
                </div>
                {data.trend &&
                    <p className={`flex items-center text-xs ${data.trend === 'up' ? 'text-success' : 'text-destructive'}`}>

                        {i18n.language === 'ar' && (data.trend === 'up' ? <MoveUp size={18} /> : <MoveDown size={18} />)}
                        {format.percent(data.percentage!)}
                        {i18n.language === 'en' && (data.trend === 'up' ? <MoveUp size={18} /> : <MoveDown size={18} />)}

                    </p>}
            </div>
        </div>
    )
}
