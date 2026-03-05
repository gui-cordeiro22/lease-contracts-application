// Dependencies
import styled from "styled-components";

// Styles
import { theme } from "@/styles/theme";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${theme.system.space.xxxs};
    width: 100%;

    @media (min-width: 1024px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${theme.system.space.xxl};
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    gap: ${theme.system.space.xxs};

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const InputSectionTitle = styled.p`
    position: absolute;
    top: -24px;
    font-size: 14px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
`;
