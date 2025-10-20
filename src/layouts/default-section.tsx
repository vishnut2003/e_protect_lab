import React, { PropsWithChildren } from 'react'

const DeafaultSection = ({
    children,
    className,
    outerClassName,
}: PropsWithChildren<{
    className?: string,
    outerClassName?: string,
}>) => {
    return (
        <div
            className={`w-full px-[20px] ${outerClassName}`}
        >
            <div
                className={`mx-auto max-w-[1140px] w-full ${className}`}
            >{children}</div>
        </div>
    )
}

export default DeafaultSection