import React, { type ReactNode } from 'react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

type Props = React.ComponentProps<typeof Input> & {
    startIcon?: ReactNode,
    endIcon?: ReactNode
}

export default function InputWithIcon({ startIcon, endIcon, ...props }: Props) {
    const parentInput = "relative bg-surface text-foreground rounded-md text-sm group"
    const inputCss = "ps-10 py-5 outline-0 bg-transparent placeholder:text-muted-foreground text-sm rounded-md"

    return (
        <div className={parentInput}>
            {startIcon && <span className="absolute inset-s-3 top-1/2 -translate-y-1/2 block size-4 text-muted-foreground group-focus-within:text-primary">{startIcon}</span>}
            <Input
              {...props}
                className={cn(
                    startIcon&& "ps-10",
                    endIcon&&"pe-10",
                    inputCss
                )}
            />
            {endIcon && <span className="absolute inset-e-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground">{endIcon}</span>}

        </div>
    )
}
