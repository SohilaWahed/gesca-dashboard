import { BookCopy, ClipboardList, Eye, IdCard, LayoutDashboard, LogOut, Settings, Siren, Users } from 'lucide-react'
import { NavLink} from 'react-router-dom'
import { type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { getRefreshToken } from '@/utils/tokenStorage';
import { logout } from '@/apis/auth.api';
import { getErrorMsg } from '@/utils/getErrorMsg';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import avatarName from '@/utils/avatarName';


type links = {
  title: string,
  icon: ReactNode,
  label: string
}

const links: links[] = [{ title: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
{ title: 'employees', label: 'Employees', icon: <IdCard size={20} /> },
{ title: 'customers', label: 'Customers', icon: <Users size={20} /> },
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

  const { t, i18n } = useTranslation(['sidebar', 'common'])
  const { logoutContext, user } = useAuth()


  const handleLogout = async () => {
    try {
      const refreshToken = getRefreshToken()
      if (refreshToken) {
        await logout(refreshToken);
      }
      logoutContext()
      toast.success("Logged out");
    } catch (error) {
      toast.error(getErrorMsg(error));
    }
  }

  return (
    <aside className={` ${isOpen ? 'block' : "hidden"} md:block bg-surface  border-r border-border w-20 lg:w-64 px-4 py-6 lg:px-6 flex flex-col justify-between fixed top-16 bottom-0 md:top-0 z-50 `}>
      <div className='flex-1 flex flex-col'>
        <h1 className="logo capitalize text-primary hidden md:flex items-center justify-center lg:justify-start gap-2 mb-8">
          <Siren size={28} />
          <span className='hidden lg:block text-lg lg:text-xl font-bold tracking-wide'>{t("common:logo")}</span>
        </h1>
        <TooltipProvider>
          <ul className="navigation text-muted-foreground flex flex-col gap-2 flex-1">
            {links.map((link, index) => <li key={index}>
              <Tooltip>
                <TooltipTrigger className='w-full'>
                  <NavLink to={`/${link.title}`} className={navLinkClass} aria-label={link.label}>
                    {link.icon}
                    <span className='hidden lg:block capitalize text-sm xl:text-base'>{t(`sidebar:${link.title}`)}</span>
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side={i18n.language === 'ar' ? 'left' : 'right'} className="lg:hidden">
                  <p>{t(`sidebar:${link.title}`)}</p>
                </TooltipContent>
              </Tooltip>
            </li>)}
            <li>

              <Tooltip>
                <TooltipTrigger className='w-full'>
                  <div onClick={() => handleLogout()} className='flex items-center gap-3 px-3 py-3 rounded-md text-destructive hover:bg-destructive/10 transition-all duration-200'>
                    <LogOut size={20} className="cursor-pointer" />
                    <span className='hidden lg:block capitalize text-sm xl:text-base'>{t(`sidebar:logout`)}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side={i18n.language === 'ar' ? 'left' : 'right'} className="lg:hidden bg-white text-slate-600 border border-slate-200 shadow-md">
                  <p>{t('sidebar:logout')}</p>
                </TooltipContent>
              </Tooltip>

            </li>
          </ul>
        </TooltipProvider>
      </div>
      <div className="profile flex gap-2 items-center pt-4 border-t border-border bottom-6 inset-x-4 absolute ">
        <div className="image w-11 h-11 flex items-center justify-center rounded-full bg-primary text-white">
          <span>{avatarName(user?.firstName, user?.lastName)}</span>
        </div>
        <div className="personal hidden lg:block">
          <h2 className='text-sm font-medium text-foreground'>{user?.firstName} {user?.lastName}</h2>
          <p className='text-xs text-muted-foreground'>Role</p>
        </div>
      </div>
    </aside>
  )
}
