import { statusColors } from '@/constants/employee.constants'
import { cn } from '@/lib/utils'
import type { EmployeeTeamMembership } from '@/types/employees.types'
import { formatDate } from '@/utils/formatNumberLang'
import { UsersRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function TeamCard({ teamMembership }: { teamMembership: EmployeeTeamMembership }) {
    const {i18n}= useTranslation()
    return (
        <div className='bg-card rounded-xl pt-8 pb-4 px-4 shadow-sm flex gap-4 items-start'>
            <div className="avatar bg-violet-200 shrink-0 h-20 w-20 text-3xl text-bold text-violet-600 rounded-full flex items-center justify-center">
                <UsersRound />
            </div>
            <div className="data flex flex-col gap-4 items-start">
                <h3 className='text-xl font-bold flex items-center gap-4'> {teamMembership.team.name} <span className={cn(teamMembership.team.isActive ? statusColors['ACTIVE']: statusColors['INACTIVE'], 'text-xs px-4 py-1 rounded-md font-semibold ')}>{ }</span></h3>
                <p><span className='font-semibold'>Team ID: </span> {teamMembership.id}</p>
                <p><span className='font-semibold'>Team Manager: </span> Manager Name</p>
                <p><span className='font-semibold'>Team Created: </span> {formatDate(teamMembership.team.createdAt , i18n.language)}</p>
                <p><span className='font-semibold'>Joined Team: </span> {formatDate(teamMembership.joinedAt , i18n.language)}</p>
            </div>
        </div>
    )
}
