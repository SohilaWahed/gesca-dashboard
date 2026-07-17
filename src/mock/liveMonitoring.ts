import type { LiveMonitoring, LiveMonitoringConfig, LiveMonitoringStatsConfig, MonitoringStats } from "@/types/liveMonitoring.type";
import { Hospital, UserRoundCheck, CarFront, UserRoundX, Coffee, Stethoscope, Users, Activity } from 'lucide-react';

export const liveMonitoringData: LiveMonitoring[] = [
  {
    id: 1,
    employeeId: 1,
    employeeName: "Ahmed Khaled",
    avatar: "/avatars/1.png",
    status: "atHospital",
    location: {
      lat: 30.04442,
      lng: 31.23571,
      name: "El Salam Hospital",
      address: "Nasr City, Cairo",
      type: "Hospital",
    },
    lastUpdate: "2 min ago",
  },

  {
    id: 2,
    employeeId: 2,
    employeeName: "Sara Mohamed",
    avatar: "/avatars/2.png",
    status: "atDoctor",
    location: {
      lat: 30.05948,
      lng: 31.26204,
      name: "Dr. Mohamed Hassan Clinic",
      address: "Heliopolis, Cairo",
      type: "Doctor",
    },
    lastUpdate: "5 min ago",
  },

  {
    id: 3,
    employeeId: 3,
    employeeName: "Omar Tarek",
    avatar: "/avatars/3.png",
    status: "onTheWay",
    location: {
      lat: 30.01306,
      lng: 31.20885,
      name: "Driving to El Galaa Hospital",
      address: "Dokki, Giza",
      type: "Route",
    },
    lastUpdate: "1 min ago",
  },

  {
    id: 4,
    employeeId: 4,
    employeeName: "Mariam Hassan",
    avatar: "/avatars/4.png",
    status: "available",
    location: {
      lat: 30.08295,
      lng: 31.33003,
      name: "Company Office",
      address: "New Cairo",
      type: "Office",
    },
    lastUpdate: "12 min ago",
  },

  {
    id: 5,
    employeeId: 5,
    employeeName: "Youssef Adel",
    avatar: "/avatars/5.png",
    status: "atDoctor",
    location: {
      lat: 29.97923,
      lng: 31.13420,
      name: "Dr. Mahmoud Fathy Clinic",
      address: "Haram, Giza",
      type: "Doctor",
    },
    lastUpdate: "4 min ago",
  },

  {
    id: 6,
    employeeId: 6,
    employeeName: "Nour Ali",
    avatar: "/avatars/6.png",
    status: "atHospital",
    location: {
      lat: 31.20009,
      lng: 29.91874,
      name: "Alexandria Main University Hospital",
      address: "Alexandria",
      type: "Hospital",
    },
    lastUpdate: "7 min ago",
  },

  {
    id: 7,
    employeeId: 7,
    employeeName: "Mohamed Samy",
    avatar: "/avatars/7.png",
    status: "onBreak",
    location: {
      lat: 30.58856,
      lng: 31.50204,
      name: "Coffee Break",
      address: "Zagazig",
      type: "Break",
    },
    lastUpdate: "18 min ago",
  },

  {
    id: 8,
    employeeId: 8,
    employeeName: "Fatma Ibrahim",
    avatar: "/avatars/8.png",
    status: "offline",
    location: {
      lat: 31.04095,
      lng: 31.37847,
      name: "Last Known Location",
      address: "Mansoura",
      type: "Offline",
    },
    lastUpdate: "45 min ago",
  },

  {
    id: 9,
    employeeId: 9,
    employeeName: "Ali Hassan",
    avatar: "/avatars/9.png",
    status: "atHospital",
    location: {
      lat: 30.59649,
      lng: 32.27146,
      name: "Ismailia General Hospital",
      address: "Ismailia",
      type: "Hospital",
    },
    lastUpdate: "3 min ago",
  },

  {
    id: 10,
    employeeId: 10,
    employeeName: "Heba Mahmoud",
    avatar: "/avatars/10.png",
    status: "atDoctor",
    location: {
      lat: 30.78651,
      lng: 30.99949,
      name: "Dr. Ayman Salah Clinic",
      address: "Tanta",
      type: "Doctor",
    },
    lastUpdate: "6 min ago",
  },

  {
    id: 11,
    employeeId: 11,
    employeeName: "Khaled Ashraf",
    avatar: "/avatars/11.png",
    status: "available",
    location: {
      lat: 30.59649,
      lng: 30.98763,
      name: "Regional Office",
      address: "Shebin El-Kom",
      type: "Office",
    },
    lastUpdate: "11 min ago",
  },

  {
    id: 12,
    employeeId: 12,
    employeeName: "Eman Salah",
    avatar: "/avatars/12.png",
    status: "onTheWay",
    location: {
      lat: 30.92752,
      lng: 31.47790,
      name: "Heading to Specialist Hospital",
      address: "Mansoura",
      type: "Route",
    },
    lastUpdate: "2 min ago",
  },

  {
    id: 13,
    employeeId: 13,
    employeeName: "Mahmoud Adel",
    avatar: "/avatars/13.png",
    status: "atDoctor",
    location: {
      lat: 27.18096,
      lng: 31.18368,
      name: "Dr. Hossam Clinic",
      address: "Assiut",
      type: "Doctor",
    },
    lastUpdate: "8 min ago",
  },

  {
    id: 14,
    employeeId: 14,
    employeeName: "Asmaa Mostafa",
    avatar: "/avatars/14.png",
    status: "atHospital",
    location: {
      lat: 26.55695,
      lng: 31.69478,
      name: "Sohag University Hospital",
      address: "Sohag",
      type: "Hospital",
    },
    lastUpdate: "10 min ago",
  },

  {
    id: 15,
    employeeId: 15,
    employeeName: "Mostafa Ali",
    avatar: "/avatars/15.png",
    status: "available",
    location: {
      lat: 24.08894,
      lng: 32.89983,
      name: "Aswan Branch",
      address: "Aswan",
      type: "Office",
    },
    lastUpdate: "15 min ago",
  },

  {
    id: 16,
    employeeId: 16,
    employeeName: "Reem Hassan",
    avatar: "/avatars/16.png",
    status: "offline",
    location: {
      lat: 25.68724,
      lng: 32.63964,
      name: "Last Seen",
      address: "Luxor",
      type: "Offline",
    },
    lastUpdate: "1 h ago",
  },

  {
    id: 17,
    employeeId: 17,
    employeeName: "Tamer Nabil",
    avatar: "/avatars/17.png",
    status: "atDoctor",
    location: {
      lat: 30.91770,
      lng: 29.96128,
      name: "Dr. Sameh Clinic",
      address: "Borg El Arab",
      type: "Doctor",
    },
    lastUpdate: "9 min ago",
  },

  {
    id: 18,
    employeeId: 18,
    employeeName: "Aya Fathy",
    avatar: "/avatars/18.png",
    status: "onTheWay",
    location: {
      lat: 31.26529,
      lng: 32.30187,
      name: "Driving to Port Said General Hospital",
      address: "Port Said",
      type: "Route",
    },
    lastUpdate: "4 min ago",
  },

  {
    id: 19,
    employeeId: 19,
    employeeName: "Islam Hamdy",
    avatar: "/avatars/19.png",
    status: "available",
    location: {
      lat: 30.11395,
      lng: 31.40654,
      name: "Regional Manager Office",
      address: "New Cairo",
      type: "Office",
    },
    lastUpdate: "13 min ago",
  },

  {
    id: 20,
    employeeId: 20,
    employeeName: "Mohamed Wael",
    avatar: "/avatars/20.png",
    status: "atHospital",
    location: {
      lat: 30.03591,
      lng: 31.42954,
      name: "Air Force Specialized Hospital",
      address: "New Cairo",
      type: "Hospital",
    },
    lastUpdate: "5 min ago",
  },
];

export const liveMonitoringConfig: LiveMonitoringConfig = {
  atHospital: {
    label: "At Hospital",
    icon: Hospital,
    color: "text-blue-600",
    span: "bg-blue-600",
    bg: "bg-blue-100",
  },

  available: {
    label: "Available",
    icon: UserRoundCheck,
    color: "text-amber-600",
    span: "bg-amber-600",
    bg: "bg-amber-100",
  },

  onTheWay: {
    label: "On The Way",
    icon: CarFront,
    color: "text-emerald-600",
    span: "bg-emerald-600",
    bg: "bg-emerald-100",
  },

  offline: {
    label: "Offline",
    icon: UserRoundX,
    color: "text-violet-600",
    span: "bg-violet-600",
    bg: "bg-violet-100",
  },

  atDoctor: {
    label: "At Doctor",
    icon: Stethoscope,
    color: "text-sky-600",
    span: "bg-sky-600",
    bg: "bg-sky-100",
  },

  onBreak: {
    label: "On Break",
    icon: Coffee,
    color: "text-orange-600",
    span: "bg-orange-600",
    bg: "bg-orange-100",
  }
}

export const liveMonitoringStats: MonitoringStats[] = [
  {
    title: "employees",
    value: liveMonitoringData.length,
  },
  {
    title: "active",
    value: liveMonitoringData.filter(
      (e) => e.status !== "offline"
    ).length,
  },
  {
    title: "atHospital",
    value: liveMonitoringData.filter(
      (e) => e.status === "atHospital"
    ).length,
  },
  {
    title: "atDoctor",
    value: liveMonitoringData.filter(
      (e) => e.status === "atDoctor"
    ).length,
  },
  {
    title: "onTheWay",
    value: liveMonitoringData.filter(
      (e) => e.status === "onTheWay"
    ).length,
  },
  {
    title: "offline",
    value: liveMonitoringData.filter(
      (e) => e.status === "offline"
    ).length,
  },
];

export const liveMonitoringStatsConfig: LiveMonitoringStatsConfig = {
  employees: {
    label: "Employees",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },

  active: {
    label: "Active",
    icon: Activity,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },

  atHospital: {
    label: "At Hospital",
    icon: Hospital,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },

  atDoctor: {
    label: "At Doctor",
    icon: Stethoscope,
    color: "text-sky-600",
    bg: "bg-sky-100",
  },

  onTheWay: {
    label: "On The Way",
    icon: CarFront,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },

  offline: {
    label: "Offline",
    icon: UserRoundX,
    color: "text-slate-600",
    bg: "bg-slate-100",
  },
};

export const markerConfig = {
  atHospital: {
    color: "#10B981",
  },

  atDoctor: {
    color: "#2563EB",
  },

  onTheWay: {
    color: "#F59E0B",
  },

  available: {
    color: "#8B5CF6",
  },

  offline: {
    color: "#EF4444",
  },

  onBreak: {
    color: "#64748B",
  },
};