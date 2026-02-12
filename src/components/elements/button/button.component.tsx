// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container } from "./button.styles";

// Types
import { ButtonProps } from "./button.types";

export const Button: FunctionComponent<ButtonProps> = ({
    labelElement,
    handleClick,
    variant,
    isActive,
    isCommingSoon,
    hasHoverEffect,
    ...defaultProps
}) => {
    return (
        <Container
            {...(!isCommingSoon && { onClick: handleClick })}
            {...defaultProps}
            variant={variant}
            isActive={!!isActive}
            isCommingSoon={!!isCommingSoon}
            hasHoverEffect={!!hasHoverEffect}
        >
            {labelElement}
        </Container>
    );
};
