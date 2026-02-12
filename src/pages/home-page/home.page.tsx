// Dependencies
import { FunctionComponent } from "react";

// Page
import { HomePage } from "@/components/pages/home-page";

// Components
import { Typography } from "@/components/utilities/typography";
import { HeroSection } from "@/components/sections/hero";
import { FormSection } from "@/components/sections/form-section";

export const Home: FunctionComponent = () => {
    return (
        <HomePage
            heroSectionCompositions={
                <HeroSection
                    headline={
                        <Typography
                            element="h1"
                            color="black"
                            variant="titleLarge"
                            text="Emissor de contratos de aluguel"
                        />
                    }
                    content={
                        <Typography
                            element="p"
                            color="black"
                            variant="bodyMedium"
                            text="Preencha os dados do formulário abaixo para que o contrato de locação do imóvel seja gerado automáticamente:"
                        />
                    }
                />
            }
            formSectionCompositions={
                <FormSection
                    titleSectionElement={
                        <Typography
                            element="h3"
                            text="Contrato de locação"
                            color="black"
                            variant="titleMedium"
                        />
                    }
                    formSectionCompositions={<div>Formulário</div>}
                />
            }
        />
    );
};
