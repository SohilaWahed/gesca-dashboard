type EmployeeStatus =
  | "atHospital"
  | "atDoctor"
  | "onTheWay"
  | "available"
  | "offline"
  | "onBreak"

type EmployeeRole =
  | "Medical Representative"
  | "Area Manager";

type CurrentLocation = {
  name: string,
  city: string
}
type StatusConfig = {
  label: string,
  color: string,
}

type TodaySchedule = {
  id: number,
  time: string,
  type: string,
  name: string,
  status: string,
}

export interface Employee {
  id: number;

  name: string;

  avatar: string;

  role: EmployeeRole;

  phone: string;

  status: EmployeeStatus;

  currentLocation: CurrentLocation;

  score: number;

  hasVisitsToday: boolean;

  priority: number;

  completedVisits: number;

  totalVisits: number;

  todaySchedule: TodaySchedule[];
}

export type EmployeeStatusConfig = Record<EmployeeStatus, StatusConfig>