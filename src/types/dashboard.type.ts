import type { LucideIcon } from "lucide-react";

export interface DashboardStats {
    id: number;
    title: string;
    value: number;
    icon: LucideIcon;

    change?: number;
    period?: string;

    subtitle?: string;

    trend?: "up" | "down";

    percentage?: number

    color:
    | "primary"
    | "violet"
    | "amber"
    | "emerald"
    | "lime"
    | "rose"
    | "orange"
    | "gray"
}