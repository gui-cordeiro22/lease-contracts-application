// Dependencies
import { Fragment, FunctionComponent, useState } from "react";
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
import { ConditionallyRender } from "@/components/utilities/conditionally-render";
import { Loader } from "@/components/elements/loader";

// Assets
import spinner from "@/assets/svg/spinner.svg";

// Stores
import { contractGenerate } from "./home.stores";

export const Home: FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, reset } = useForm<FormResponseData>({
        defaultValues: {
            tenantName: "",
            tenantCpf: "",
            rentalPrice: "",
            expirationDate: "",
        },
    });

    const handleLeaseContractGenerate = async (data: FormResponseData) => {
        try {
            setIsLoading(true);
            await contractGenerate(data);
        } catch (error) {
            console.error({ message: error });

            throw new Error();
        } finally {
            reset();
            setIsLoading(false);
        }
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
                                    placeholder="Nome do locatário"
                                />
                            }
                            tenantCpfInputElement={
                                <Input
                                    {...register("tenantCpf")}
                                    type="text"
                                    placeholder="CPF do locatário"
                                />
                            }
                            rentalPriceInputElement={
                                <Input
                                    {...register("rentalPrice")}
                                    type="text"
                                    placeholder="Valor do aluguel"
                                />
                            }
                            expirationDateInputElement={
                                <Input
                                    {...register("expirationDate")}
                                    type="text"
                                    placeholder="Data de vencimento do aluguel"
                                />
                            }
                            actionButtonElement={
                                <Button
                                    labelElement={
                                        <Fragment>
                                            <ConditionallyRender
                                                shouldRender={!!isLoading}
                                                content={
                                                    <Loader
                                                        iconSource={spinner}
                                                        labelElement={
                                                            <Typography
                                                                color="white"
                                                                variant="bodyLarge"
                                                                text="Gerando o seu contrato"
                                                            />
                                                        }
                                                    />
                                                }
                                            />

                                            <ConditionallyRender
                                                shouldRender={!isLoading}
                                                content={
                                                    <Typography
                                                        color="white"
                                                        variant="bodyLarge"
                                                        text="Gerar contrato"
                                                    />
                                                }
                                            />
                                        </Fragment>
                                    }
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
