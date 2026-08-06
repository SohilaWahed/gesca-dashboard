import changeLang from '@/utils/language'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip"
export default function LanguageBtn() {

    const { t, i18n } = useTranslation()

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={() => changeLang(i18n.language)}
                        className=" flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-primary transition-colors">
                        <Globe size={20} />
                        <span className="hidden md:block">
                            | {i18n.language}
                        </span>
                    </button>
                </TooltipTrigger>
                <TooltipContent side={"bottom"} className="lg:hidden">
                    <p>{t("lang")}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}
