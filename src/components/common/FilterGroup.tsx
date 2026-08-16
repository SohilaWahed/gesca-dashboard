interface FilterGroupProps {
    title: string;
    children: React.ReactNode;
}

export default function FilterGroup({
    title,
    children,
}: FilterGroupProps) {

    return (
        <div className="space-y-1">

            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {title}
            </p>

            <div>
                {children}
            </div>

        </div>
    );
}