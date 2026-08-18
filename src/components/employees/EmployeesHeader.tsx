import { useAuth } from '@/hooks/useAuth'

import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function EmployeesHeader() {
  const {t} = useTranslation('employees')
  const { loggedUser } = useAuth()
  const isAdmin = loggedUser?.role === 'Admin'
  return (
    <header className='flex flex-col md:flex-row items-start lg:items-center justify-between gap-4'>
      <div>
        <h2 className='text-2xl lg:text-3xl font-bold pb-2'>{t('page.title')}</h2>
        <p className='text-sm text-muted-foreground'>{t('page.description')}</p>
      </div>
      {isAdmin && <Button size="lg" className='bg-primary rounded-md text-sm text-white p-5' aria-label="Add employee">
        <Plus size={18} /> <span>{t('page.add_employee')}</span>
      </Button>}
    </header>
  )
}
