import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getBreadcrumbLabel } from "@/utils/getBreadcrumbLabel";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


export default function BreadCrumb() {

    const { pathname } = useLocation()
    const segments = pathname.split('/').filter(Boolean)

    return (
        <Breadcrumb className="flex-1 min-w-0">
            <BreadcrumbList>
                {segments.map((segment, index) => {
                    const isLast = index === segment.length - 1
                    const label = getBreadcrumbLabel(segment, pathname)
                     const href = "/" + segments.slice(0, index + 1).join("/");

                    return <>
                       <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>
                                        {label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href="/">
                                        <Link to={href}>
                            {label}
                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                            {!isLast && <BreadcrumbSeparator />}
                        </>
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
