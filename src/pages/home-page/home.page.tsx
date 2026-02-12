// Dependencies
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

// Page
import { HomePage } from "@/components/pages/home-page";

// Components
import { Typography } from "@/components/utilities/typography";
import { HeroSection } from "@/components/sections/hero";
import { FormSection } from "@/components/sections/form-section";
import { Form, FormResponseData } from "@/components/compositions/form";
import { Button } from "@/components/elements/button";
import { Input } from "@/components/elements/input";

export const Home: FunctionComponent = () => {
    const { register, handleSubmit } = useForm<FormResponseData>({
        defaultValues: {
            tenantName: "",
            tenantCpf: "",
            rentalPrice: "",
            expirationDate: "",
        },
    });

    const handleLeaseContractGenerate = (data: FormResponseData) => {
        console.log(data);
    };
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
                    formSectionCompositions={
                        <Form
                            handleSubmitForm={handleSubmit(
                                handleLeaseContractGenerate,
                            )}
                            tenantNameInputElement={
                                <Input
                                    {...register("tenantName")}
                                    type="text"
                                    placeholder="teste"
                                />
                            }
                            tenantCpfInputElement={
                                <Input
                                    {...register("tenantCpf")}
                                    type="text"
                                    placeholder="teste"
                                />
                            }
                            rentalPriceInputElement={
                                <Input
                                    {...register("rentalPrice")}
                                    type="text"
                                    placeholder="teste"
                                />
                            }
                            expirationDateInputElement={
                                <Input
                                    {...register("expirationDate")}
                                    type="text"
                                    placeholder="teste"
                                />
                            }
                            actionButtonElement={
                                <Button
                                    label="Gerar contrato"
                                    type="submit"
                                    variant="dark-cta"
                                />
                            }
                        />
                    }
                />
            }
        />
    );
};
