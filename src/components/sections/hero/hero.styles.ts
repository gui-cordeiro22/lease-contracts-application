// Dependencies
import styled from "styled-components";

// Styles
import { theme } from "@/styles/theme";
import { pageGutter } from "@/styles/gutter";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    ${pageGutter}
`;

export const TextWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: ${theme.system.space.sm};
`;
