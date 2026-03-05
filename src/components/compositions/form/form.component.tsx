// Dependencies
import { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

// Styles
import {
    ButtonWrapper,
    Container,
    InputSectionTitle,
    InputWrapper,
} from "./form.styles";

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
            <InputWrapper>
                <ConditionallyRender
                    minimumBreakpoint="tabletAuxiliary"
                    content={
                        <InputSectionTitle>
                            Informações do locatário
                        </InputSectionTitle>
                    }
                />

                {tenantNameInputElement}

                {tenantCpfInputElement}
            </InputWrapper>

            <InputWrapper>
                <ConditionallyRender
                    minimumBreakpoint="tabletAuxiliary"
                    content={
                        <InputSectionTitle>
                            Informações da propriedade
                        </InputSectionTitle>
                    }
                />

                {rentalPriceInputElement}

                {expirationDateInputElement}
            </InputWrapper>

            <ButtonWrapper>{actionButtonElement}</ButtonWrapper>
        </Container>
    );
};
