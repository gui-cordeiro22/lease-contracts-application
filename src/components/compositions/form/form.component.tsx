// Dependencies
import { FunctionComponent } from "react";

// Styles
import { ButtonWrapper, Container } from "./form.styles";

// Types
import { FormProps } from "./form.types";

export const Form: FunctionComponent<FormProps> = ({
    tenantNameInputElement,
    tenantCpfInputElement,
    rentalPriceInputElement,
    expirationDateInputElement,
    actionButtonElement,
    handleSubmitForm,
}) => {
    return (
        <Container onSubmit={handleSubmitForm}>
            {tenantNameInputElement}

            {tenantCpfInputElement}

            {rentalPriceInputElement}

            {expirationDateInputElement}

            <ButtonWrapper>{actionButtonElement}</ButtonWrapper>
        </Container>
    );
};
