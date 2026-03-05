// Dependencies
import styled from "styled-components";

// Styles
import { theme } from "@/styles/theme";
import { pageGutter } from "@/styles/gutter";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    ${pageGutter}

    @media(min-width: 1024px) {
        align-items: center;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    background-color: ${theme.palette.colors.white};
    padding: ${theme.system.space.xs};
    border-radius: ${theme.system.radii.md};
    gap: ${theme.system.space.xxxs};

    @media (min-width: 1024px) {
        padding: ${theme.system.space.xl};
        gap: ${theme.system.space.xl};
    }
`;
