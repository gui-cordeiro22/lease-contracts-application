// Dependencies
import { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

// Styles
import { Container, ContentWrapper, TextWrapper } from "./hero.styles";

// Types
import { HeroProps } from "./hero.types";

export const HeroSection: FunctionComponent<HeroProps> = ({
    headline,
    content,
    buttonElementCompositions,
}) => {
    return (
        <Container>
            <ContentWrapper>
                <TextWrapper>
                    {headline}

                    <ConditionallyRender
                        shouldRender={!!content}
                        content={content}
                    />
                </TextWrapper>

                <ConditionallyRender
                    shouldRender={!!buttonElementCompositions}
                    content={buttonElementCompositions}
                />
            </ContentWrapper>
        </Container>
    );
};
