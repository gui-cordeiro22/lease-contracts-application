// Dependencies
import styled, { css } from "styled-components";

// Types
import { theme } from "@/styles/theme";
import { ButtonVariants } from "./button.types";

type ContainerStyleProps = {
    variant: ButtonVariants;
    isActive: boolean;
    isCommingSoon: boolean;
    hasHoverEffect?: boolean;
};

export const Container = styled.button<ContainerStyleProps>`
    background-color: inherit;
    padding: ${theme.system.space.xxxxs};
    border-radius: ${theme.system.radii.full};

    ${({ isCommingSoon }) =>
        !!isCommingSoon &&
        css`
            background-color: ${theme.palette.colors["gray200"]};
            color: ${theme.palette.colors["gray500"]};
        `};

    ${({ isCommingSoon, variant }) =>
        !isCommingSoon &&
        variant === "dark-cta" &&
        css`
            background-color: ${theme.palette.colors["warning500"]};
            color: ${theme.palette.colors["white"]};
        `};
`;

export const Label = styled.p`
    font-size: 14px;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;
