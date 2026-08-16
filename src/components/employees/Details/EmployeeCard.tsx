import type { EmployeeDetails } from '@/types/employees.types'
import { avatarName, getEmployeeFullName } from '@/utils/userName'
import { cn } from '../../../lib/utils';
import { statusColors } from '@/constants/employee.constants';
import { CalendarDays, Mail, Phone, UserShield } from 'lucide-react';
import { formatDate } from '@/utils/formatNumberLang';
import { useTranslation } from 'react-i18next';

export default function EmployeeCard({ employee }: { employee: EmployeeDetails }) {

    const { i18n } = useTranslation()
    const avatar = avatarName(employee.firstName, employee.lastName)
    const name = getEmployeeFullName(employee.firstName, employee.lastName)
    const joined = formatDate(employee.createdAt, i18n.language)

    return (
        <div className='bg-card rounded-xl p-4 shadow-sm'>
            <div className="info flex items-start gap-4 border-b border-border py-4">
                <div className="avatar bg-violet-200 shrink-0 h-20 w-20 text-3xl text-bold text-violet-600 rounded-full flex items-center justify-center">
                    {avatar}
                </div>
                <div className="data flex flex-col gap-4 items-start flex-1">
                    <div className='flex items-center gap-4'>
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <span className={cn(statusColors[employee.status], 'text-xs px-4 py-1 rounded-md font-semibold ')}>{employee.status}</span>

                    </div>
                    <p className='flex items-center gap-2'><Mail size={16} />{employee.email}</p>
                    <p className='flex items-center gap-2'><Phone size={16} />{employee.phone ?? "_"}</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 pt-4'>

                <div className='flex items-center gap-2 border-e border-border'>
                    <CalendarDays size={18} />
                    <div className='flex flex-col'>
                        <span className='text-muted-foreground font-semibold'>Joined</span>
                        <span className='text-sm'>{joined}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <UserShield size={18} />
                    <div className='flex flex-col'>
                        <span className='text-muted-foreground font-semibold'>Role</span>
                        <span className='text-sm'>{employee.role?.name ?? "_"}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
