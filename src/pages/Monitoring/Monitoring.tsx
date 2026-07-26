import MonitoringCard from '@/components/common/card/MonitoringCard';
import { liveMonitoringStats, liveMonitoringStatsConfig } from '@/mock/liveMonitoring';
import type { LiveMonitoring, LiveMonitoringRole, LiveMonitoringStat, LiveMonitoringStatus, SortType } from '@/types/liveMonitoring.type';
import { ArrowDownUp, ListFilter, RefreshCw } from 'lucide-react';
import SearchInput from '../../components/common/SearchInput';
import Map from '@/components/common/map/Map';
import { liveMonitoringData } from '../../mock/liveMonitoring';
import MonitoringEmpCard from '@/components/common/card/MonitoringEmpCard';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
} from "@/components/ui/field"
import { useState } from 'react';


const allStatus = [{ label: "All Status", value: "allStatus" }, { label: "At Doctor", value: "atDoctor" },
{ label: "At Hospital", value: "atHospital" },
{ label: "On The Way", value: "onTheWay" },
{ label: "On Break", value: "onBreak" },
{ label: "available", value: "available" },
{ label: "Offline", value: "offline" }]

const allRoles = [{ label: "All Roles", value: "allroles" },
{ label: "Medical Representative", value: "Medical Representative" },
{ label: "Manager", value: "Manager" }]

const sortList = [{ label: 'Recently Updated', value: 'latest' },
{ label: 'A → Z', value: 'nameAsc' },
{ label: 'Z → A', value: 'nameDesc' },
{ label: 'Nearest', value: 'nearest' }
]


export default function Monitoring() {

  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<LiveMonitoringStatus | "allStatus">("allStatus")
  const [role, setRole] = useState<LiveMonitoringRole | "allroles">("allroles")
  const [statusList, setStatusList] = useState<LiveMonitoringStatus | "allStatus">("allStatus")
  const [sort, setSort] = useState<SortType>("latest");

  const filteredEmployees = (): LiveMonitoring[] => {
    if (search.trim() !== '') {
      return liveMonitoringData.filter(
        (emp) => emp.employeeName.toLowerCase().includes(search.toLowerCase())
      );
    }

    return liveMonitoringData.filter((emp) => {
      const matchesStatus =
        status === "allStatus" || emp.status === status;

      const matchesRole =
        role === "allroles" || emp.role === role;

      return matchesStatus && matchesRole;
    });
  }

  const minutes = (text: string) => parseInt(text);
  const distance = (lat: number, lng: number) => {
    return Math.sqrt(
      Math.pow(lat - 29.9562, 2) +
      Math.pow(lng - 31.2616, 2)
    )
  }

  const filterAndSortList = (): LiveMonitoring[] => {

    let filtertList = liveMonitoringData.filter((emp) =>
      statusList === "allStatus" || emp.status === statusList
    )

    switch (sort) {
      case 'latest': {
        filtertList.sort((a, b) => minutes(a.lastUpdate) - minutes(b.lastUpdate))
        break;
      }
      case 'nameAsc': {
        filtertList.sort((a, b) => a.employeeName.localeCompare(b.employeeName))
        break
      }
      case 'nameDesc': {
        filtertList.sort((a, b) => b.employeeName.localeCompare(a.employeeName))
        break
      }
      case 'nearest': {
        filtertList.sort((a,b)=> distance(a.location.lat , a.location.lng) - distance(b.location.lat ,b.location.lng))
      }
    }

    return filtertList

  }


  return (
    <>
      <header className='mb-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <h2 className="text-2xl font-bold">Mointoring</h2>
          <div className='rounded-xl p-1'><span className='h-2 w-2 rounded-full block'></span><span className='upercase'>live</span></div>

        </div>
        <div className='bg-card text-muted-foreground rounded-xl flex items-center gap-2 px-4 py-2'>
          <RefreshCw size={18} />
          <p className='text-sm'>Last Sync: 11:42:30 Am </p>
        </div>
      </header>

      <div className='grid grid-cols-12 gap-4 xl:h-[80vh]'>
        <div className='col-span-12 xl:col-span-9'>
          <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-6'>
            {liveMonitoringStats.map((state, index) => <MonitoringCard key={index} data={state} config={liveMonitoringStatsConfig[state.title as LiveMonitoringStat]} />)}
          </div>

          <div className="actions mb-6 flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center">
            <SearchInput text='Search employee name...' state={search} setState={setSearch} />
            <div className='flex items-center gap-4 grow'>
              <Field>
                <Select defaultValue={allStatus[0].value} onValueChange={(value) => setStatus(value as LiveMonitoringStatus)}>
                  <SelectTrigger className="rounded-md bg-popover text-popover-foreground capitalize">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" className="min-w-26 rounded-md cursor-pointer border-border bg-popover text-popover-foreground shadow-md">
                    <SelectGroup>
                      {allStatus.map((status, id) => <SelectItem key={id} className="capitalize cursor-pointer" value={status.value}>{status.label}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <Select defaultValue={allRoles[0].value} onValueChange={(value) => setRole(value as LiveMonitoringRole)}>
                  <SelectTrigger className="rounded-md bg-popover text-popover-foreground capitalize">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper" className="min-w-26 rounded-md cursor-pointer border-border bg-popover text-popover-foreground shadow-md">
                    <SelectGroup>
                      {allRoles.map((role, id) => <SelectItem key={id} className="capitalize cursor-pointer" value={role.value}>{role.label}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className='w-9 px-1 h-10 rounded-xl cursor-pointer flex items-center justify-center bg-card border border-border hover:text-primary'>
              <RefreshCw size={18} />
            </div>
          </div>

          <div className='rounded-xl overflow-hidden h-115 relative z-20'>
            <Map employees={filteredEmployees()}
              center={[30.0444, 31.2357]}
              zoom={11}
              scrollWheelZoom={true}
              dragging={true}
              doubleClickZoom={true}
              zoomControl={true}
              style={{ height: "100%", width: "100%" }} />
          </div>
        </div>

        <div className='col-span-12 xl:col-span-3 px-4 pb-2 rounded-xl bg-card border border-border overflow-y-auto relative h-[80vh]'>
          <div className="header flex items-center justify-between sticky top-0 inset-x-0 bg-card py-3 z-30">
            <h3 className='font-semibold'>Employees ({liveMonitoringData.length})</h3>
            <div className='flex items-center gap-2'>

              <Field>
                <Select defaultValue={sortList[0].value} onValueChange={(value) => setSort(value as SortType)}>
                  <SelectTrigger className="rounded-md bg-popover text-popover-foreground capitalize">
                    <ArrowDownUp size={18} className='hover:text-primary duration-200 cursor-pointer' />
                  </SelectTrigger>
                  <SelectContent position="popper" className="min-w-26 rounded-md cursor-pointer border-border bg-popover text-popover-foreground shadow-md">
                    <SelectGroup>
                      {sortList.map((sort, id) => <SelectItem key={id} className="capitalize cursor-pointer" value={sort.value}>{sort.label}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>


              <Field>
                <Select defaultValue={allStatus[0].value} onValueChange={(value) => setStatusList(value as LiveMonitoringStatus)}>
                  <SelectTrigger className="rounded-md bg-popover text-popover-foreground capitalize">
                    <ListFilter size={18} className='hover:text-primary duration-200 cursor-pointer' />
                  </SelectTrigger>
                  <SelectContent position="popper" className="min-w-26 rounded-md cursor-pointer border-border bg-popover text-popover-foreground shadow-md">
                    <SelectGroup>
                      {allStatus.map((status, id) => <SelectItem key={id} className="capitalize cursor-pointer" value={status.value}>{status.label}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>


            </div>
          </div>
          <div className='liveEmployees'>
            {filterAndSortList().map((emp) => <MonitoringEmpCard key={emp.id} emp={emp} />)}
          </div>
        </div>
      </div>


    </>
  )
}
