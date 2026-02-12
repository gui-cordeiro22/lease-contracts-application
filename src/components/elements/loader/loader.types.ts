// Dependencies
import { ReactNode } from "react";

export type LoaderData = {
    iconSource: string;
};

export type LoaderElement = {
    labelElement: ReactNode;
};

export type LoaderProps = LoaderData & LoaderElement;
