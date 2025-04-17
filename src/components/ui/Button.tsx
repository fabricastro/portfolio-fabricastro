import { ReactNode } from "react"
import { clsx } from "clsx"

type ButtonProps = {
    children: ReactNode
    icon?: ReactNode
    iconPosition?: "left" | "right"
    variant?: "cyan" | "violet" | "gray" | "yellow" | "green" | "green2"
    onClick?: () => void
    className?: string
}

const bgVariants: Record<string, string> = {
    cyan: "bg-cyan-500 hover:bg-cyan-400",
    violet: "bg-[#A21AE6] hover:bg-violet-500",
    gray: "bg-neutral-700 hover:bg-neutral-600",
    yellow: "bg-yellow-400 hover:bg-yellow-300 text-black",
    green: "bg-green-500 border-3 border-green-500 text-white hover:bg-green-400",
    green2: "bg-transparent border-3 border-green-500 hover:bg-green-500 hover:text-white",
}

export const Button = ({
    children,
    icon,
    iconPosition = "left",
    variant = "cyan",
    onClick,
    className = "",
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "inline-flex cursor-pointer items-center justify-center gap-2 px-5 py-2 rounded-lg font-medium text-green-500 transition transform hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2",
                bgVariants[variant],
                className
            )}
        >
            {icon && iconPosition === "left" && <span>{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span>{icon}</span>}
        </button>
    )
}
