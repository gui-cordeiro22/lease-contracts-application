// Dependencies
import styled from "styled-components";

// Styles
import { theme } from "@/styles/theme";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${theme.system.space.xxs};
    width: 100%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
`;
