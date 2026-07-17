export interface TopProduct {
  id: number;
  name: string;
  sales: number;
  units: number;
  percentage: number;
  growth: number;
  trend: "up" | "down";
  color: string;
}