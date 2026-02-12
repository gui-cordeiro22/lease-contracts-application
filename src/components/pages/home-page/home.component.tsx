// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { HomePageProps } from "./home.types";

export const HomePage: FunctionComponent<HomePageProps> = ({
    heroSectionCompositions,
    formSectionCompositions,
}) => {
    return (
        <Fragment>
            {heroSectionCompositions}

            {formSectionCompositions}
        </Fragment>
    );
};
