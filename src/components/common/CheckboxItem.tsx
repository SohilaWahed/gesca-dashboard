import { Checkbox } from "../ui/checkbox";

interface CheckboxItemProps {
    label: string;
    checked: boolean;
    onCheckedChange: () => void;
}

export default function CheckboxItem({
    label,
    checked,
    onCheckedChange,
}: CheckboxItemProps) {

    return (
        <label
            className="
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-md
                px-2
                py-1
                transition-colors
                hover:bg-muted
            "
        >

            <Checkbox
                checked={checked}
                onCheckedChange={onCheckedChange}
            />

            <span className="text-sm">
                {label}
            </span>

        </label>
    );
}