// Dependencies
import type { InputHTMLAttributes } from "react";

export type InputData = Partial<InputHTMLAttributes<HTMLInputElement>> & {
    placeholder: string;
    icon?: string;
    errorMessage?: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export type InputAction = {
    handleChange?: (event: any) => void;
};

export type InputProps = InputData & InputAction;
