import type { LucideIcon } from "lucide-react";

export type LiveMonitoringStatus =
  | "atDoctor"
  | "atHospital"
  | "onTheWay"
  | "onBreak"
  | "available"
  | "offline";

export type LiveMonitoringRole = "Medical Representative" | "Manager"

export interface LiveMonitoring {
  id: number;
  employeeId: number;
  employeeName: string;
  avatar: string;

  status: LiveMonitoringStatus;
  role: LiveMonitoringRole
  location: {
    lat: number;
    lng: number;
    name: string;
    address: string;
    type:
    | "Hospital"
    | "Doctor"
    | "Office"
    | "Route"
    | "Break"
    | "Offline";
  };

  lastUpdate: string;
}


export type MonitoringStatusConfig = {
  label: string;
  icon: LucideIcon;
  span: string;
  color: string;
  bg: string;
  hex: string
}

export type LiveMonitoringConfig = Record<LiveMonitoringStatus, MonitoringStatusConfig>

export type LiveMonitoringStat =
  | "employees"
  | "active"
  | "atHospital"
  | "atDoctor"
  | "onTheWay"
  | "offline"
  | "onBreak";

export type MonitoringStatConfig = {
  label: string;
  icon: LucideIcon;
  color: string;
  bg: string;
};

export type LiveMonitoringStatsConfig = Record<
  LiveMonitoringStat,
  MonitoringStatConfig
>;

export type MonitoringStats = { title: string, value: number }

export type SortType =
  | "latest"
  | "nameAsc"
  | "nameDesc"
  | "nearest";