import type { AnalyticsConfigs, AnalyticsData } from "@/types/analytics.type";

export const analyticsData: AnalyticsData = {
  visits: {
    weekly: [
      { name: "mon", first: 15, second: 18 },
      { name: "tue", first: 18, second: 20 },
      { name: "wed", first: 21, second: 22 },
      { name: "thu", first: 14, second: 17 },
      { name: "fri", first: 22, second: 25 },
      { name: "sat", first: 12, second: 14 },
      { name: "sun", first: 9, second: 10 },
    ],
    monthly: [
      { name: "jan", first: 295, second: 320 },
      { name: "feb", first: 318, second: 340 },
      { name: "mar", first: 341, second: 360 },
      { name: "apr", first: 310, second: 335 },
      { name: "may", first: 356, second: 370 },
      { name: "jun", first: 372, second: 390 },
    ],
  },

  sales: {
    weekly: [
      { name: "mon", first: 13800, second: 15000 },
      { name: "tue", first: 16500, second: 17000 },
      { name: "wed", first: 17050, second: 16000 },
      { name: "thu", first: 17500, second: 18000 },
      { name: "fri", first: 21400, second: 22000 },
      { name: "sat", first: 11300, second: 12000 },
      { name: "sun", first: 8200, second: 9000 },
    ],
    monthly: [
      { name: "jan", first: 590000, second: 620000 },
      { name: "feb", first: 625000, second: 640000 },
      { name: "mar", first: 701000, second: 680000 },
      { name: "apr", first: 689000, second: 700000 },
      { name: "may", first: 745000, second: 730000 },
      { name: "jun", first: 778000, second: 760000 },
    ],
  },

  contracts: {
    weekly: [
      { name: "mon", first: 3, second: 5 },
      { name: "tue", first: 5, second: 6 },
      { name: "wed", first: 4, second: 4 },
      { name: "thu", first: 5, second: 7 },
      { name: "fri", first: 7, second: 8 },
      { name: "sat", first: 2, second: 3 },
      { name: "sun", first: 2, second: 2 },
    ],
    monthly: [
      { name: "jan", first: 22, second: 28 },
      { name: "feb", first: 27, second: 30 },
      { name: "mar", first: 31, second: 32 },
      { name: "apr", first: 29, second: 35 },
      { name: "may", first: 34, second: 36 },
      { name: "jun", first: 36, second: 38 },
    ],
  },

  reports: {
    weekly: [
      { name: "mon", first: 16, second: 18 },
      { name: "tue", first: 18, second: 20 },
      { name: "wed", first: 20, second: 22 },
      { name: "thu", first: 17, second: 19 },
      { name: "fri", first: 23, second: 24 },
      { name: "sat", first: 12, second: 13 },
      { name: "sun", first: 8, second: 9 },
    ],
    monthly: [
      { name: "jan", first: 295, second: 310 },
      { name: "feb", first: 314, second: 325 },
      { name: "mar", first: 331, second: 342 },
      { name: "apr", first: 322, second: 338 },
      { name: "may", first: 347, second: 360 },
      { name: "jun", first: 369, second: 381 },
    ],
  },
};

export const analyticsConfig: AnalyticsConfigs = {
  visits: {
    title: "Visits",
    firstLabel: "Completed Visits",
    secondLabel: "Planned Visits",
    chart: {
      first: {
        label: "completedVisits",
        color: "#2563EB",
      },
      second: {
        label: "plannedVisits",
        color: "#60A5FA",
      },
    },
  },

  sales: {
    title: "Sales",
    firstLabel: "Actual Sales",
    secondLabel: "Target Sales",
    chart: {
      first: {
        label: "actualSales",
        color: "#2563EB",
      },
      second: {
        label: "targetSales",
        color: "#60A5FA",
      },
    },
  },

  contracts: {
    title: "Contracts",
    firstLabel: "Signed Contracts",
    secondLabel: "Planned Contracts",
    chart: {
      first: {
        label: "signedContracts",
        color: "#2563EB",
      },
      second: {
        label: "plannedContracts",
        color: "#60A5FA",
      },
    },
  },

  reports: {
    title: "Reports",
    firstLabel: "Approved Reports",
    secondLabel: "Submitted Reports",
    chart: {
      first: {
        label: "approvedReports",
        color: "#2563EB",
      },
      second: {
        label: "submittedReports",
        color: "#60A5FA",
      },
    },
  },
};