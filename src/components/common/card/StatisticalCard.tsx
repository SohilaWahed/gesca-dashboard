import { MoveDown, MoveUp } from 'lucide-react';
import type { DashboardStats } from "@/types/dashboard.type";
import { useTranslation } from 'react-i18next';
import useFormatter from '@/hooks/useFormatter';
import { cn } from '@/lib/utils';


const colors = {
    primary: {
        color: "text-blue-600",
        bg: "bg-blue-600/10",
    },
    violet: {
        color: "text-violet-600",
        bg: "bg-violet-600/10",
    },
    amber: {
        color: "text-amber-600",
        bg: "bg-amber-600/10",
    },
    emerald: {
        color: "text-emerald-600",
        bg: "bg-emerald-600/10",
    },
    rose: {
        color: "text-rose-600",
        bg: "bg-rose-600/10",
    },
    lime: {
        color: "text-lime-600",
        bg: "bg-lime-600/10",
    },
    orange: {
        color: "text-orange-600",
        bg: "bg-orange-600/10",
    },
    gray: {
        color: "text-gray-600",
        bg: "bg-gray-600/10",
    }

};

export default function StatisticalCard({ data }: { data: DashboardStats }) {

    const Icon = data.icon;
    const bg = colors[data.color].bg
    const text = colors[data.color].color
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
                <div className={cn(`icon w-10 h-10 rounded-md flex justify-center items-center` , text , bg )}>
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
