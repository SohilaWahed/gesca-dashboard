import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
} from "@/components/ui/field"
import { BarChartAnalysis } from "@/components/common/chart/BarChartAnalysis";
import StatisticalCard from "@/components/common/card/StatisticalCard";
import dashboardStats from "@/mock/dashboard/statistics";
import type { DashboardStats } from "@/types/dashboard.type";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { analyticsConfig, analyticsData } from "@/mock/dashboard/analytics";
import type { Chart, Period } from "@/types/analytics.type";
import TopProductsChart from "@/components/common/chart/TopProductsChart";
import { backgroundColor, topProducts } from '../../mock/dashboard/topProducts';
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import DataTable from "@/components/common/table/DataTable";
import { employees } from "@/mock/employees";
import ScheduleRaw from "@/components/common/table/ScheduleRaw";
import TopEmployeesRaw from "@/components/common/table/TopEmployeesRaw";
import { activityConfig, recentActivities } from '../../mock/dashboard/recentActivity';
import { cn } from "@/lib/utils";
import Map from "@/components/common/map/Map";
import { liveMonitoringData } from "@/mock/liveMonitoring";
import { useTranslation } from "react-i18next";
import useFormatter from "@/hooks/useFormatter";

const analysis: string[] = ["visits", "sales", "contracts", "reports"]
const periodChoices: string[] = ["weekly", "monthly", "yearly"]
const periortySchedule = employees.filter((emp) => emp.hasVisitsToday).sort((a, b) => b.priority - a.priority).slice(0, 7)
const topEmployees = employees.sort((a, b) => b.score - a.score)
  .slice(0, 3);

export default function Home() {

  const [chart, setChart] = useState<Chart>('visits')
  const [period, setPeriod] = useState<Period>("weekly");
  const { t, i18n } = useTranslation("dashboard");
  const format = useFormatter()

  return (
    <>
      <header className="mb-6">
        <h1 className="text-2xl font-bold">
          {t('title')}
        </h1>
        <p className="text-muted-foreground">
          {t('welcome')}
        </p>
      </header>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {dashboardStats.map((card: DashboardStats) => <StatisticalCard key={card.id} data={card} />)}
      </div>
      <div className="charts grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
        <div className="bars bg-card p-4 border rounded-xl ">
          <div className="header pb-4 flex items-center justify-between">
            <h2 className="text-sm xl:text-[16px] font-semibold">{t('performance.title')}</h2>
            <div className="flex items-center gap-2">
              <Field className="xl:hidden">
                <Select defaultValue={analysis[0]} onValueChange={(value) => setChart(value as Chart)}>
                  <SelectTrigger className="rounded-md bg-popover text-popover-foreground capitalize">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" className="min-w-26 rounded-md cursor-pointer border-border bg-popover text-popover-foreground shadow-md">
                    <SelectGroup>
                      {analysis.map((item, id) => <SelectItem key={id} value={item} className="capitalize cursor-pointer">{t(`performance.${item}`)}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Tabs defaultValue={analysis[0]} onValueChange={(value) => setChart(value as Chart)} className="w-auto hidden xl:block">
                <TabsList className="rounded-xl px-2">
                  {analysis.map((item, id) => <TabsTrigger key={id} value={item} className="capitalize cursor-pointer">{t(`performance.${item}`)}</TabsTrigger>)}
                </TabsList>
              </Tabs>
              <Field>
                <Select defaultValue={periodChoices[0]} onValueChange={(value) => setPeriod(value as Period)}>
                  <SelectTrigger className="rounded-md bg-popover text-popover-foreground capitalize">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" className="min-w-26 rounded-md cursor-pointer border-border bg-popover text-popover-foreground shadow-md">
                    <SelectGroup>
                      {periodChoices.map((item, id) => <SelectItem key={id} className="capitalize cursor-pointer" value={item}>{t(`performance.${item}`)}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </div>
          <BarChartAnalysis chartData={analyticsData[chart][period]} chartConfig={analyticsConfig[chart]} period={period} />
        </div>
        <div className="dounuts bg-card p-4 border rounded-xl ">
          <h2 className="text-sm xl:text-[16px] font-semibold mb-6">{t('topProducts.title', { count: format.number(topProducts.length) })}</h2>
          <div className="flex items-center justify-between gap-8">
            <div className="w-50 h-50">
              <TopProductsChart />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div>
                {topProducts.map((prod, index) => <div key={index} className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <span className='block w-2 h-2 rounded-full' style={{ backgroundColor: backgroundColor[index] }}></span>
                    <span className=" font-semibold">{prod.name}</span>
                  </div>
                  <span className="font-semibold">{prod.percentage} %</span>
                </div>)}
              </div>
              <Link to={'/products'} className="bg-hover text-primary font-semibold px-8 py-2 rounded-md mx-auto text-xs flex gap-2 items-center hover:-translate-y-0.5  duration-200 transition-all">{t('topProducts.viewAll')} {i18n.language === 'en' ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="todaySch bg-card p-4 text-card-foreground border border-border rounded-xl">
          <div className=" flex items-center justify-between mb-2">
            <h2 className="text-sm xl:text-[16px] font-semibold">{t('todaySchedule.title')}</h2>
            <Link to={'/tasks'} className="text-primary font-semibold text-xs flex gap-1 items-center ">{t('common.viewAll')} {i18n.language === 'en' ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}</Link>
          </div>
          <DataTable headers={[t('todaySchedule.representative'), t('todaySchedule.status'), t('todaySchedule.location'), t('todaySchedule.visits')]}>
            {periortySchedule.map(employee => (
              <ScheduleRaw
                key={employee.id}
                employee={employee}
              />
            ))}
          </DataTable>
        </div>
        <div className="recentAct bg-card p-4 text-card-foreground border border-border rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <h2 className="text-sm xl:text-[16px] font-semibold">{t('recentActivity.title')}</h2>
            <Link to={'/reports'} className="text-primary font-semibold text-xs flex gap-1 items-center ">{t('common.viewAll')} {i18n.language === 'en' ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}</Link>
          </div>
          <div className=" flex flex-col gap-4">
            {recentActivities.map((activity) => {
              const bgIcon = activityConfig[activity.type].bg
              const colorIcon = activityConfig[activity.type].color
              const Icon: LucideIcon = activityConfig[activity.type].icon;
              return <div
                key={activity.id}
                className="flex gap-4"
              >
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full", bgIcon
                  )}
                >
                  <Icon className={cn(colorIcon)} size={16} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{activity.title}</p>
                  <p className="text-muted-foreground text-xs">{activity.time}</p>
                </div>
              </div>
            }
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="topEmployee bg-card p-4 text-card-foreground border border-border rounded-xl">
            <div className=" flex items-center justify-between mb-2">
              <h2 className="text-sm xl:text-[16px] font-semibold">{t('topEmployees.title')}</h2>
              <Link to={'/employees'} className="text-primary font-semibold text-xs flex gap-1 items-center ">{t('common.viewAll')} {i18n.language === 'en' ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}</Link>
            </div>
            <DataTable headers={["",t('topEmployees.employee'), t('topEmployees.visits'), t('topEmployees.rate')]}>
              {topEmployees.map((employee, index) => (
                <TopEmployeesRaw
                  index={index}
                  key={employee.id}
                  employee={employee}
                />
              ))}
            </DataTable>
          </div>
          <div className="monitoring h-50 relative bg-card  overflow-hidden text-card-foreground border border-border rounded-xl">
            <div className="h-full relative z-10">
              <Map employees={liveMonitoringData.slice(0, 5)}
                zoom={11}
                center={[30.0444, 31.2357]}
                dragging={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                zoomControl={false}
                style={{ height: "100%", width: "100%" }} />
            </div>

            <div className="absolute z-50 bg-card inset-x-0 bottom-0  flex items-center justify-between px-4 py-2">
              <h2 className="text-sm xl:text-[16px] font-semibold">{t('monitoring.title')}</h2>
              <Link to={'/monitoring'} className="text-primary font-semibold text-xs flex gap-1 items-center ">{t('monitoring.map')} {i18n.language === 'en' ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
