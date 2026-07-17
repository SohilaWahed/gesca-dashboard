import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,

} from "@/components/ui/chart"

import type { AnalyticsItem, AnalyticsConfig } from "@/types/analytics.type"
import { useTranslation } from "react-i18next"

type Props = {
  chartData: AnalyticsItem[],
  chartConfig: AnalyticsConfig,
  period: string
}

export function BarChartAnalysis({ chartData, chartConfig, period }: Props) {

  const { t } = useTranslation("dashboard")
  const config = {
    first: {
      label: t(`performance.${chartConfig.chart.first.label}`),
      color: chartConfig.chart.first.color,
    },
    second: {
      label: t(`performance.${chartConfig.chart.second.label}`),
      color: chartConfig.chart.second.color,
    },
  };

  return (

    <ChartContainer config={config} className="h-50 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => period === 'weekly' ? t(`performance.days.${value}`) : t(`performance.months.${value}`)}
        />
        <ChartTooltip content={<ChartTooltipContent className="rounded-md" />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey='first' fill="var(--color-first)" radius={4} />
        <Bar dataKey='second' fill="var(--color-second)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
