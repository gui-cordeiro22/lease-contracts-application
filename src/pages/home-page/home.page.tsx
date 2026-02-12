// Dependencies
import { FunctionComponent } from "react";

// Page
import { HomePage } from "@/components/pages/home-page";

// Components
import { HeroSection } from "@/components/sections/hero";
import { Typography } from "@/components/utilities/typography";

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
        />
    );
};
