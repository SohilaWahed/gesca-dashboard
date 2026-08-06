// import { liveMonitoringConfig } from "@/mock/liveMonitoring";
// import type { LiveMonitoringStatus } from "@/types/liveMonitoring.type";


// import L from "leaflet";

// export default function createMarker(status: LiveMonitoringStatus) {
//   return L.divIcon({
//     className: "",
//     html: `
//       <div
//         style="
//           width:12px;
//           height:12px;
//           background:${liveMonitoringConfig[status].hex};
//           border:2px solid white;
//           border-radius:9999px;
//           box-shadow:0 0 0 4px ${liveMonitoringConfig[status].color}33;
//         "
//       ></div>
//     `,
//     iconSize: [12, 12],
//     iconAnchor: [6, 6],
//   });
// }