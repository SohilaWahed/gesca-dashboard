import type { ActivityConfig, RecentActivity } from "@/types/recentActivity.type";
import {
  FileText,
  CircleCheckBig,
  MapPinned,
  FileSignature,
  BanknoteCheck,
  ClipboardList,
} from "lucide-react";
export const recentActivities: RecentActivity[] = [
  {
    id: 1,
    type: "reportUploaded",
    title: "Ahmed Khaled uploaded a new report",
    time: "10 minutes ago",
  },
  {
    id: 2,
    type: "visitCompleted",
    title: "Mohamed Hassan completed a hospital visit",
    time: "35 minutes ago",
  },
  {
    id: 3,
    type: "contractSigned",
    title: "El Salam Hospital signed a new contract",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "visitStarted",
    title: "Yasser Ali added to El Salam Hospital",
    time: "2 hours ago",
  },
  {
    id: 5,
    type: "taskAssigned",
    title: "Shaima Ahmed assigned task to Ramy Gabr",
    time: "3 hours ago",
  },
  {
    id: 6,
    type: "visitStarted",
    title: "Ali Ebrahim added to Dr.Rasha Rashed",
    time: "3 hours ago",
  },
   {
    id: 7,
    type: "visitCompleted",
    title: "Mohamed Hassan completed a hospital visit",
    time: "35 minutes ago",
  },
  {
    id: 8,
    type: "contractSigned",
    title: "El Salam Hospital signed a new contract",
    time: "1 hour ago",
  },
];
export const activityConfig:ActivityConfig = {
  reportUploaded: {
    label: "Report Uploaded",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },

  visitStarted: {
    label: "Visit Started",
    icon: MapPinned,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },

  visitCompleted: {
    label: "Visit Completed",
    icon: CircleCheckBig,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },

  contractSigned: {
    label: "Contract Signed",
    icon: FileSignature,
    color: "text-violet-600",
    bg: "bg-violet-100",
  },

  reportApproved: {
    label: "Report Approved",
    icon: BanknoteCheck,
    color: "text-sky-600",
    bg: "bg-sky-100",
  },

  taskAssigned: {
    label: "Task Assigned",
    icon: ClipboardList,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
} 