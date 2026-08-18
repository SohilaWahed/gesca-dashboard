import { cn } from "@/lib/utils";
import type { StatisticItem } from "@/types/Statistics.type";

interface StatisticsProps {
    statistics: StatisticItem[],
    columns:number
}
export default function StatisticCard({statistics , columns}:StatisticsProps) {
   
    return (
        <div   className={cn(
                "grid grid-cols-1 gap-4 ",
                columns === 3
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : "sm:grid-cols-2 xl:grid-cols-4"
            )} >
            {statistics.map((item) => {
                const Icon = item.icon;
                return (
                    <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm"
                    >
                        <span
                            className={cn(
                                "flex size-12 shrink-0 items-center justify-center rounded-lg",
                                item.bg,
                                item.text
                            )}
                        >
                            <Icon size={20} />
                        </span>
                        <div className="min-w-0">
                            <p className="truncate text-sm text-muted-foreground">
                              {item.label}
                            </p>

                            <h3 className="mt-1 text-2xl font-bold">
                                {item.value}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}