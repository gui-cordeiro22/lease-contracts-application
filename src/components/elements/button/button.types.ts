// Dependencies
import { InsHTMLAttributes } from "react";

export type ButtonVariants = "light-cta" | "dark-cta" | "link";

export type ButtonData = InsHTMLAttributes<HTMLButtonElement> & {
    label: string;
    isActive?: boolean;
    isCommingSoon?: boolean;
    variant: ButtonVariants;
    hasHoverEffect?: boolean;
};

export type ButtonAction = {
    handleClick?: () => void;
};

export type ButtonProps = ButtonData & ButtonAction;
