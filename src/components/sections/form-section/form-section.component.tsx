// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Card, Container, ContentWrapper } from "./form-section.styles";

// Types
import { FormSectionProps } from "./form-section.types";

export const FormSection: FunctionComponent<FormSectionProps> = ({
    titleSectionElement,
    formSectionCompositions,
}) => {
    return (
        <Container>
            <ContentWrapper>
                <Card>
                    {titleSectionElement}

                    {formSectionCompositions}
                </Card>
            </ContentWrapper>
        </Container>
    );
};
