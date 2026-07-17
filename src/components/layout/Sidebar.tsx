import { BookCopy, Boxes, ClipboardList, Eye, Hospital, LayoutDashboard, LogOut, Settings, Siren, Users, UserStar } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"

type links = {
  title: string,
  icon: ReactNode,
  label: string
}

const links: links[] = [{ title: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
{ title: 'employees', label: 'Employees', icon: <Users size={20} /> },
{ title: 'hospitals', label: 'Hospitals', icon: <Hospital size={20} /> },
{ title: 'doctors', label: 'Doctors', icon: <UserStar size={20} /> },
{ title: 'products', label: 'Products', icon: <Boxes size={20} /> },
{ title: 'tasks', label: 'Tasks', icon: <ClipboardList size={20} /> },
{ title: 'monitoring', label: 'Monitoring', icon: <Eye size={20} /> },
{ title: 'reports', label: 'Reports', icon: <BookCopy size={20} /> },
{ title: 'settings', label: 'Settings', icon: <Settings size={20} /> }]


export default function Sidebar({ isOpen }: { isOpen: boolean }) {

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-3 rounded-md transition-all duration-200 ${isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:bg-hover hover:text-primary"
    }`;

  const { t, i18n } = useTranslation("sidebar")

  return (
    <aside className={` ${isOpen ? 'block' : "hidden"} md:block bg-surface border-r border-border w-20 lg:w-64 px-4 py-6 lg:px-6 flex flex-col justify-between fixed top-16 bottom-0 md:top-0 z-50 `}>
      <h1 className="logo capitalize text-primary hidden md:flex items-center justify-center lg:justify-start gap-2 mb-8"> <Siren size={28} /><span className='hidden lg:block text-lg lg:text-xl font-bold tracking-wide'>vigilant pharma</span></h1>
      <TooltipProvider>
        <ul className="navigation text-muted-foreground flex flex-col gap-2 flex-1 ">
          {links.map((link, index) => <li key={index}>
            <Tooltip>
              <TooltipTrigger className='w-full'>
                <NavLink to={`/${link.title}`} className={navLinkClass} aria-label={link.label}>
                  {link.icon}
                  <span className='hidden lg:block capitalize text-sm xl:text-base'>{t(`${link.title}`)}</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side={i18n.language === 'ar' ? 'left' : 'right'} className="lg:hidden">
                <p>{t(`${link.title}`)}</p>
              </TooltipContent>
            </Tooltip>
          </li>)}
          <li>

            <Tooltip>
              <TooltipTrigger className='w-full'>
                <Link to={'/auth/login'} className='flex items-center gap-3 px-3 py-3 rounded-md text-destructive hover:bg-destructive/10 transition-all duration-200'>
                  <LogOut size={20} className="cursor-pointer" />
                  <span className='hidden lg:block capitalize text-sm xl:text-base'>{t(`logout`)}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side={i18n.language === 'ar' ? 'left' : 'right'} className="lg:hidden bg-white text-slate-600 border border-slate-200 shadow-md">
                <p>{t('logout')}</p>
              </TooltipContent>
            </Tooltip>

          </li>
        </ul>
      </TooltipProvider>
      <div className="profile flex gap-2 items-center pt-4 border-t border-border">
        <div className="image w-12 h-12 rounded-full">
          <img src='/images/image.jpg' alt="profile" className='w-full rounded-full ring-2 ring-primary/20 ' />
        </div>
        <div className="personal hidden lg:block">
          <h2 className='text-sm font-medium text-foreground'>Khaled Ramy</h2>
          <p className='text-xs text-muted-foreground'>Super Admin</p>
        </div>
      </div>
    </aside>
  )
}
