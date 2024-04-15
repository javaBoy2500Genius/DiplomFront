import { cn } from "@/lib/utils";

export interface LabelProps {
    lg?: boolean;
    thin?: boolean;
    align?: "left" | "center" | "right";
    className?: string;
    htmlFor?: string;
    children?: React.ReactNode;
}

const Label = ({ lg, thin, className, align, htmlFor, children }: LabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            className={cn(className, "select-none", {
                "!text-[13px]": lg,
                "!font-medium": thin,
                [`text-${align}`]: align,
            })}
            style={{
                color: "#6C6C6C",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "-0.36px",
            }}
        >
            {children}
        </label>
    );
};

export default Label;
