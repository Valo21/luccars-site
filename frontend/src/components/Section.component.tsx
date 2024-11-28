import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren{
    responsive?: boolean
}

export default function Section({responsive = true, children}: SectionProps) {
    let className = '';

    if (responsive) {
        className = 'm-auto w-full xl:max-w-6xl md:max-w-4xl sm:max-w-xl'
    }

    return (
        <section
            className={className}
        >
            {children}
        </section>
    )
}
