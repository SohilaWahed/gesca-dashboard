import { breadcrumbLabels } from "@/constants/breadcrumb.constant";

const isUUID = (value: string) =>
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        value
    );

export const getBreadcrumbLabel = (segment: string, pathname: string) => {
    if (isUUID(segment)) {
        if (pathname.startsWith('/employees/')) {
            return `Employee Details`
        }
        if (pathname.startsWith('/customers/')) {
            return "Customer Details";
        }
    }
    return breadcrumbLabels[segment] ?? segment;
}