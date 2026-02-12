// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, LoaderElement } from "./loader.styles";

// Types
import { LoaderProps } from "./loader.types";

export const Loader: FunctionComponent<LoaderProps> = ({
    iconSource,
    labelElement,
}) => {
    return (
        <Container>
            <LoaderElement src={iconSource} />

            {labelElement}
        </Container>
    );
};
