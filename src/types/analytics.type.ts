import type { ChartConfig } from "@/components/ui/chart";

export type Chart = "visits" | "sales" | "contracts" | "reports";
export type Period = "weekly" | "monthly";

export interface AnalyticsItem {
  name: string;
  first: number;
  second: number;
}

export interface AnalyticsPeriodData {
  weekly: AnalyticsItem[];
  monthly: AnalyticsItem[];
}

export type AnalyticsData = Record<Chart, AnalyticsPeriodData>;

export interface AnalyticsConfig {
  title: string;
  firstLabel: string;
  secondLabel: string;
  chart: ChartConfig;
}

export type AnalyticsConfigs = Record<Chart, AnalyticsConfig>;