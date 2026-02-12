// Dependencies
import styled, { css } from "styled-components";

// Types
import type { ButtonVariants } from "./button.types";

type ContainerStyleProps = {
    variant: ButtonVariants;
    isActive: boolean;
    isCommingSoon: boolean;
    hasHoverEffect?: boolean;
};

export const Container = styled.button<ContainerStyleProps>`
    background-color: inherit;
    padding: 8px;
`;

export const Label = styled.p`
    font-size: 14px;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;
