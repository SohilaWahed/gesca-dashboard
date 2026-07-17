import type { LucideIcon } from "lucide-react";

export interface LiveMonitoring {
  id: number;
  employeeId: number;
  employeeName: string;
  avatar: string;

  status:
    | "atHospital"
    | "atDoctor"
    | "onTheWay"
    | "available"
    | "offline"
    | "onBreak";

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

export type LiveMonitoringStatus =
  | "atDoctor"
  | "atHospital"
  | "onTheWay"
  | "onBreak"
  | "available"
  | "offline";


  export type MonitoringStatusConfig = {
  label: string;
  icon: LucideIcon;
  span:string;
  color: string;
  bg: string;
}

export type LiveMonitoringConfig = Record<LiveMonitoringStatus, MonitoringStatusConfig>



export type LiveMonitoringStat =
  | "employees"
  | "active"
  | "atHospital"
  | "atDoctor"
  | "onTheWay"
  | "offline";

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

export type MonitoringStats = {title:string, value:number}