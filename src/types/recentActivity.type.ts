import type { LucideIcon } from "lucide-react";

export type ActivityType =
  | "visitStarted"
  | "visitCompleted"
  | "reportUploaded"
  | "reportApproved"
  | "taskAssigned"
  | "contractSigned";

export interface RecentActivity {
  id: number;

  type: ActivityType;

  title: string;

  time: string;
}

export type ActivityConfig = Record<ActivityType, {
  label: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}>

