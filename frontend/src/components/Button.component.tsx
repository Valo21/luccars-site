import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
    type?: 'solid' | 'outline'
}

export default function Button({
    title,
    type = 'solid',
    ...props
}: ButtonProps) {

    let typeStyle: string = 'bg-brand-green';

    if (type === 'outline') {
        typeStyle = 'border-2 border-brand-green'
    }

    return (
    <button
        className={`rounded-xl py-2 px-4 font-semibold ${typeStyle}`}
        {...props}
    >
        {title}
    </button>
    )
}
