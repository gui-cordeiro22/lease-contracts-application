// Dependencies
import { ReactNode } from "react";

export type FormElements = {
    tenantInformationsSectionTitleElement: ReactNode;
    tenantNameInputElement: ReactNode;
    tenantCpfInputElement: ReactNode;
    propertyInformationsSectionTitleElement: ReactNode;
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
