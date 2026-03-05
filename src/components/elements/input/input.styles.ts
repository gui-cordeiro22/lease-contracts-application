// Dependencies
import styled from "styled-components";

// Styles
import { theme } from "@/styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 1440px;
`;

export const InputElementWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    gap: ${theme.system.space["xxxxs"]};
    border: 1px solid ${theme.palette.colors["gray200"]};
    border-radius: ${theme.system.radii["md"]};
    padding: 12px;
    width: 100%;
`;

export const InputElement = styled.input`
    background-color: transparent;
    width: 100%;
`;

export const IconElement = styled.img`
    width: 18px;
`;
