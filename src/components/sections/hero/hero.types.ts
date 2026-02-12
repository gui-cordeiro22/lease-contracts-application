// Dependencies
import { ReactNode } from "react";

export type HeroElements = {
    headline: ReactNode;
    content?: ReactNode;
    buttonElementCompositions?: ReactNode;
};

export type HeroProps = HeroElements;
