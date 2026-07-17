import type { TopProduct } from "@/types/topProducts.type";

export const topProducts: TopProduct[] = [
  {
    id: 1,
    name: "Cardio Monitor",
    sales: 820000,
    units: 420,
    percentage: 30,
    trend: "up",
    growth: 12,
    color: "#2563eb",
  },
  {
    id: 2,
    name: "Insulin Pen",
    sales: 610000,
    units: 580,
    percentage: 22,
    trend: "up",
    growth: 8,
    color: "#3b82f6",
  },
  {
    id: 3,
    name: "ECG Device",
    sales: 450000,
    units: 130,
    percentage: 16,
    trend: "down",
    growth: 3,
    color: "#60a5fa",
  },
  {
    id: 4,
    name: "Glucose Meter",
    sales: 370000,
    units: 300,
    percentage: 13,
    trend: "up",
    growth: 4,
    color: "#93c5fd",
  },
  {
    id: 5,
    name: "Pulse Oximeter",
    sales: 280000,
    units: 470,
    percentage: 9,
    trend: "up",
    growth: 2,
    color: "#bfdbfe",
  },
]

export const backgroundColor: string[] = [
  "#2563EB",
  "#0EA5E9",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#CBD5E1"
]