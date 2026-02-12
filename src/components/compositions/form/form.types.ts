// Dependencies
import { ReactNode } from "react";

export type FormElements = {
    tenantNameInputElement: ReactNode;
    tenantCpfInputElement: ReactNode;
    rentalPriceInputElement: ReactNode;
    expirationDateInputElement: ReactNode;
    actionButtonElement: ReactNode;
};

export type FormAction = {
    handleSubmitForm: () => void;
};

export type FormProps = FormElements & FormAction;

export type FormResponseData = {
    tenantName: string;
    tenantCpf: string;
    rentalPrice: string;
    expirationDate: string;
};
