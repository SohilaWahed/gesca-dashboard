import MonitoringCard from '@/components/common/card/MonitoringCard';
import { liveMonitoringStats, liveMonitoringStatsConfig } from '@/mock/liveMonitoring';
import type { LiveMonitoringStat } from '@/types/liveMonitoring.type';
import { ListFilter, RefreshCw } from 'lucide-react';
import SearchInput from '../../components/common/SearchInput';
import { employees } from '@/mock/employees';
import Map from '@/components/common/map/Map';
import { liveMonitoringData } from '../../mock/liveMonitoring';


export default function Monitoring() {
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

      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 lg:col-span-9'>
          <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-6'>
            {liveMonitoringStats.map((state, index) => <MonitoringCard key={index} data={state} config={liveMonitoringStatsConfig[state.title as LiveMonitoringStat]} />)}
          </div>

          <div className="actions mb-6">
            <SearchInput text='Search employee...' />
          </div>

          <div className='rounded-xl overflow-hidden h-115'>
            <Map employees={liveMonitoringData}
              center={[30.0444, 31.2357]}
              zoom={11}
              scrollWheelZoom={true}
              dragging={true}
              doubleClickZoom={true}
              zoomControl={true}
              style={{ height: "100%", width: "100%" }} />
          </div>
        </div>

        <div className='col-span-12 lg:col-span-3 px-4 py-2 rounded-xl bg-card border border-border'>
          <div className="header flex items-center justify-between">
            <h3 className='font-semibold'>Employees ({employees.length})</h3>
            <ListFilter size={18} className='hover:text-primary duration-200 cursor-pointer' />
          </div>

        </div>
      </div>


    </>
  )
}
