import { Bell, Menu, MonitorCog, Moon, Sun, SunMoon } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/hooks/useTheme";
import LanguageBtn from "../common/LanguageBtn";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import SearchInput from "../common/SearchInput";

const menuItemClass = `group cursor-pointer text-muted-foreground transition-colors duration-200
   focus:bg-menu-hover focus:text-primary data-[highlighted]:bg-menu-hover data-[highlighted]:text-primary`;

export default function Navbar({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) {

  const { t } = useTranslation("common");
  const { theme, setTheme, isTheme } = useTheme()
  const [search, setSearch]= useState('')

  return (
    <nav className="sticky top-0 z-50 bg-surface text-foreground h-16 flex items-center justify-between gap-4 px-4 sm:px-8 border border-border">
      <Menu className="md:hidden cursor-pointer text-muted-foreground  hover:text-primary transition-colors" size={20} onClick={() => setIsOpen((prev: boolean) => !prev)} />
      <SearchInput text={t('search')} state={search} setState={setSearch} />
      <div className="icons flex items-center gap-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Bell size={20} className="cursor-pointer text-muted-foreground hover:text-primary transition-colors" />
            </TooltipTrigger>
            <TooltipContent side={"bottom"}>
              <p>{t("notifications")}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer text-muted-foreground hover:text-primary transition-colors">
                  <SunMoon size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="min-w-40 rounded-md cursor-pointer border-border bg-popover text-popover-foreground shadow-md">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>{t('select theme')}</DropdownMenuLabel>
                    <DropdownMenuRadioGroup
                      value={theme}
                      onValueChange={(value) => {
                        if (isTheme(value)) {
                          setTheme(value)
                        }
                      }}
                    >
                      <DropdownMenuRadioItem value="dark" className={menuItemClass}>
                        <Moon size={18} className="group-data-highlighted:text-blue-600" />
                        {t('dark')}
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="light" className={menuItemClass}>
                        <Sun size={18} className="group-data-highlighted:text-blue-600" />
                        {t('light')}
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="system" className={menuItemClass}>
                        <MonitorCog size={18} className="group-data-highlighted:text-blue-600" />
                        {t('system')}
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </TooltipTrigger>
            <TooltipContent side={"bottom"}>
              <p>{t("theme")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <LanguageBtn />
      </div>
    </nav>
  )
}
