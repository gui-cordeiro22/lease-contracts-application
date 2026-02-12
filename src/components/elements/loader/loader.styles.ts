// Dependencies
import styled, { keyframes } from "styled-components";

// Styles
import { theme } from "@/styles/theme";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${theme.system.space["xxxs"]};
`;

const loaderAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const LoaderElement = styled.img`
    width: 24px;
    height: 24px;
    animation: ${loaderAnimation} 1.6s linear infinite;
`;
